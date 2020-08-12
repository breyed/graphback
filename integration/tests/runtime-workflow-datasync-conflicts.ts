/* eslint-disable max-lines */
/* eslint-disable no-null/no-null */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import { mkdirSync, readFileSync, rmdirSync } from 'fs';
import * as path from 'path';
import { ApolloServer, gql } from "apollo-server";
import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadDocuments } from '@graphql-tools/load'
import { buildGraphbackAPI, GraphbackAPI } from "graphback";
import { DocumentNode } from 'graphql';
import { MongoClient, Db, ObjectID } from 'mongodb';
import { PubSub } from "graphql-subscriptions";
import { getDeltaTableName, DataSyncFieldNames, createDataSyncAPI } from "../../packages/graphback-datasync";
import { SchemaCRUDPlugin } from '../../packages/graphback-codegen-schema';
import { ClientCRUDPlugin } from '../../packages/graphback-codegen-client';

/** global config */
let db: Db;
let mongoClient: MongoClient;
let server: ApolloServer;
let client: ApolloServerTestClient;
let graphbackApi: GraphbackAPI;

let documents: DocumentNode;

const notesId = [];
const commentId = [];
const metadataId = [];

const modelText = readFileSync("./datasync-mongodb-model.graphql").toString();
const startTS = new Date(1596622318448);
const updatedTS2 = new Date(1596622363886);
const objectId = new ObjectID("507f191e810c19729de860ea");

beforeAll(async () => {
  try {
    mkdirSync("./output-datasync-conflict-mongo");
    mkdirSync("./output-datasync-conflict-mongo/client")

    mongoClient = new MongoClient('mongodb://mongodb:mongo@localhost:27017/users?authSource=admin', { useUnifiedTopology: true });
    await mongoClient.connect();
    db = mongoClient.db('users');
    graphbackApi = createDataSyncAPI(modelText, { db, dataSyncConflictMap: { Note: { enabled: true } }, graphbackAPIConfig: {
        plugins: [
            new SchemaCRUDPlugin({ outputPath: "./output-datasync-conflict-mongo/schema/schema.graphql" }),
            new ClientCRUDPlugin({ outputFile: './output-datasync-conflict-mongo/client/graphback.graphql' }),
        ]
    } });
    
    await seedDatabase(db);
    
    const source = await loadDocuments(path.resolve(`./output-datasync-conflict-mongo/client/graphback.graphql`), {
      loaders: [
        new GraphQLFileLoader()
      ]
    });
    documents = source[0].document;
  } catch (e) {
    throw e;
  }
})

beforeEach(() => {
  const { typeDefs, resolvers, contextCreator } = graphbackApi;
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: contextCreator
  });
  
  client = createTestClient(server);
})

afterEach(() => server.stop())

afterAll(async () => {
  rmdirSync(path.resolve('./output-datasync-conflict-mongo'), { recursive: true });
  const dropCollections = ["note", getDeltaTableName("note")].map((name: string) => db.dropCollection(name));
  await Promise.all(dropCollections);

  return mongoClient.close();
});

async function seedDatabase(db: Db) {
  const notes = [
    {
      title: 'Note A',
      description: 'Note A Description',
      [DataSyncFieldNames.lastUpdatedAt]: startTS.valueOf(),
      [DataSyncFieldNames.deleted]: false,
      [DataSyncFieldNames.version]: 1
    },
    {
      title: 'Note B',
      description: 'Note B Description',
      [DataSyncFieldNames.lastUpdatedAt]: startTS.valueOf(),
      [DataSyncFieldNames.deleted]: false,
      [DataSyncFieldNames.version]: 1
    }
  ]

  for (const note of notes) {
    const { ops } = await db.collection("note").insertOne(note);
    notesId.push(ops[0]._id);
    await db.collection(getDeltaTableName('note')).insert({
        docId: ops[0]._id,
        [DataSyncFieldNames.version]: 1,
        document: ops[0]
    })
  }
}


test('Should update successfully when no conflict', async () => {
  const updatedTitle = 'Note A v2';
  const firstUpdateResponse = await updateNote({ _id: notesId[0], title: updatedTitle, [DataSyncFieldNames.version]: 1 }, client);

  expect(firstUpdateResponse.data?.updateNote).toBeDefined();
  expect(firstUpdateResponse.data.updateNote.title).toEqual(updatedTitle);

  const updatedDescription = "Note A Description v2";
  const secondUpdateResponse = await updateNote({ _id: notesId[0], description: updatedDescription, [DataSyncFieldNames.version]: 1 }, client);

  expect(secondUpdateResponse.data?.updateNote).toBeDefined();
  expect(secondUpdateResponse.data.updateNote.description).toEqual(updatedDescription);
})

test('Client side should win when conflict occurs', async () => {
  const updatedTitle = 'Note B v2';
  const firstUpdateResponse = await updateNote({ _id: notesId[0], title: updatedTitle, [DataSyncFieldNames.version]: 1 }, client);

  expect(firstUpdateResponse.data?.updateNote).toBeDefined();
  expect(firstUpdateResponse.data.updateNote.title).toEqual(updatedTitle);

  
  const secondUpdateTitle = "Note B v3";
  const secondUpdateResponse = await updateNote({ _id: notesId[0], title: secondUpdateTitle, [DataSyncFieldNames.version]: 1 }, client);

  expect(secondUpdateResponse.data?.updateNote).toBeDefined();
  expect(secondUpdateResponse.data.updateNote.title).toEqual(secondUpdateTitle);
})



async function updateNote(input: any, client: ApolloServerTestClient) {
  const response = await client.mutate({
    operationName: "updateNote",
    mutation: documents,
    variables: { input }
  });

  return response;
}

async function createNote(client: ApolloServerTestClient, input: any) {
  const response = await client.mutate({
    operationName: "createNote",
    mutation: documents, variables: { input }
  });

  return response;
}

async function deleteNote(client: ApolloServerTestClient, _id:  string | number) {
  const response = await client.mutate({
    operationName: "deleteNote",
    mutation: documents,
    variables: { input: { _id } }
  });

  return response;
}
