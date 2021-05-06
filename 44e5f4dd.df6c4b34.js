(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{1333:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),p=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,u=s["".concat(i,".").concat(m)]||s[m]||b[m]||r;return t?o.a.createElement(u,l(l({ref:n},d),{},{components:t})):o.a.createElement(u,l({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},421:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(7),r=(t(0),t(1333)),i={id:"datamodel",title:"Data Model",sidebar_label:"Data Model"},l={unversionedId:"model/datamodel",id:"version-0.15.x/model/datamodel",isDocsHomePage:!1,title:"Data Model",description:"Graphback generates a GraphQL API and client-side documents using your data models. The data models are represented in the GraphQL Schema language as GraphQL types.",source:"@site/versioned_docs/version-0.15.x/model/datamodel.md",slug:"/model/datamodel",permalink:"/docs/0.15.x/model/datamodel",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/model/datamodel.md",version:"0.15.x",sidebar_label:"Data Model",sidebar:"version-0.15.x/docs",previous:{title:"Adding Graphback to your project",permalink:"/docs/0.15.x/getting-started/add-to-project"},next:{title:"Annotations",permalink:"/docs/0.15.x/model/annotations"}},c=[{value:"Model",id:"model",children:[]},{value:"Primary key",id:"primary-key",children:[{value:"PostgreSQL",id:"postgresql",children:[]},{value:"MongoDB",id:"mongodb",children:[]}]},{value:"Relationships",id:"relationships",children:[{value:"OneToMany",id:"onetomany",children:[]},{value:"OneToOne",id:"onetoone",children:[]},{value:"ManyToMany",id:"manytomany",children:[]}]},{value:"Type fields",id:"type-fields",children:[]}],d={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Graphback generates a GraphQL API and client-side documents using your data models. The data models are represented in the GraphQL Schema language as GraphQL types."),Object(r.b)("p",null,"In this section you will learn how to design and configure your data models for use with Graphback and how they can be used for multiple datasources."),Object(r.b)("h2",{id:"model"},"Model"),Object(r.b)("p",null,"Graphback processes GraphQL Schema types annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@model"),".\nAdding this annotation to your type will generate CRUD resolvers, services, data providers and client queries following the ",Object(r.b)("a",{parentName:"p",href:"https://graphqlcrud.org"},"GraphQLCRUD")," format. For the full annotation definition see ",Object(r.b)("a",{parentName:"p",href:"./annotations#model"},Object(r.b)("inlineCode",{parentName:"a"},"@model")),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'"""\n@model\n"""\ntype Note {\n  ...\n}\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Check out the ",Object(r.b)("a",{parentName:"p",href:"/docs/0.15.x/model/scalars"},"Graphback Scalars")," chapter to see the list of scalars supported out of the box. "))),Object(r.b)("h2",{id:"primary-key"},"Primary key"),Object(r.b)("p",null,"Graphback requires each data model to have one primary key field which is used to uniquely represent every object in the database."),Object(r.b)("h3",{id:"postgresql"},"PostgreSQL"),Object(r.b)("p",null,"For PostgreSQL, the default primary key format is ",Object(r.b)("inlineCode",{parentName:"p"},"id: ID!"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'"""\n@model\n"""\ntype Note {\n  """Default primary key format for PostgreSQL"""\n  id: ID!\n  ...\n}\n')),Object(r.b)("p",null,"You can also use the ",Object(r.b)("a",{parentName:"p",href:"./annotations#id"},Object(r.b)("inlineCode",{parentName:"a"},"@id"))," annotation to set a custom primary field."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'"""\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  This becomes the primary key\n  @id\n  """\n  title: String\n  ...\n}\n')),Object(r.b)("h3",{id:"mongodb"},"MongoDB"),Object(r.b)("p",null,"If you are using MongoDB you should use ",Object(r.b)("inlineCode",{parentName:"p"},"_id: ObjectID"),", as ",Object(r.b)("inlineCode",{parentName:"p"},"_id")," in MongoDB documents is reserved for the primary key."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'"""\n@model\n"""\ntype Note {\n  """Primary key format for MongoDB"""\n  _id: ObjectID!\n  ...\n}\n\nscalar ObjectID\n')),Object(r.b)("h2",{id:"relationships"},"Relationships"),Object(r.b)("p",null,"Graphback provides support for one-to-many, one-to-one and many-to-many relationships."),Object(r.b)("h3",{id:"onetomany"},"OneToMany"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]\n}\n')),Object(r.b)("p",null,"This creates a one-to-many relationship from ",Object(r.b)("inlineCode",{parentName:"p"},"Note.comments")," to ",Object(r.b)("inlineCode",{parentName:"p"},"Comment.note"),". If ",Object(r.b)("inlineCode",{parentName:"p"},"Comment.note")," does not exist Graphback will create it for you, otherwise you can define it yourself."),Object(r.b)("p",null,"For more on creating one-to-many relationships see the ",Object(r.b)("a",{parentName:"p",href:"./annotations#onetomany"},Object(r.b)("inlineCode",{parentName:"a"},"@oneToMany"))," annotation reference guide."),Object(r.b)("h3",{id:"onetoone"},"OneToOne"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne\n  """\n  user: User!\n}\n')),Object(r.b)("p",null,"This creates a one-sided relationship between the ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(r.b)("inlineCode",{parentName:"p"},"User")," models."),Object(r.b)("p",null,"For more on creating one-to-one relationships see the ",Object(r.b)("a",{parentName:"p",href:"./annotations#onetoone"},Object(r.b)("inlineCode",{parentName:"a"},"@oneToOne"))," annotation reference guide."),Object(r.b)("h3",{id:"manytomany"},"ManyToMany"),Object(r.b)("p",null,"To create a many-to-many relationship, add a model for your join table and use two one-to-many relationships."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'""" \n@model \n"""\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  authors: [NoteAuthor]\n}\n\n"""\n@model\n"""\ntype NoteAuthor {\n  id: ID!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n  """\n  @oneToMany(field: \'author\')\n  """\n  notes: [NoteAuthor]\n}\n')),Object(r.b)("p",null,"For more on creating many-to-many relationships see the ",Object(r.b)("a",{parentName:"p",href:"./annotations#onetomany"},Object(r.b)("inlineCode",{parentName:"a"},"@oneToMany"))," annotation reference guide."),Object(r.b)("h2",{id:"type-fields"},"Type fields"),Object(r.b)("p",null,"You can use GraphQL types to get strongly-typed fields which maps to a JSON column in PostgreSQL or an embedded/nested document in MongoDB."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'"""\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  @db(type: \'json\')\n  """\n  comments: [Comment]\n}\n\n"""\nA custom type that does \nnot have a database table\n"""\ntype Comment {\n  id: ID!\n  text: String\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NOTE: The ",Object(r.b)("inlineCode",{parentName:"p"},"@db(type: 'json')")," annotation is only required for PostgreSQL.")))}p.isMDXComponent=!0}}]);