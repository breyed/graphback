(window.webpackJsonp=window.webpackJsonp||[]).push([[1249],{1318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(1333)),i={id:"intro",title:"GraphQL Migrations",sidebar_label:"Introduction"},l={unversionedId:"graphql-migrations/intro",id:"version-0.15.x/graphql-migrations/intro",isDocsHomePage:!1,title:"GraphQL Migrations",description:"Graphback uses graphql-migrations to automatically create and update tables from a GraphQL schema.",source:"@site/versioned_docs/version-0.15.x/graphql-migrations/intro.md",slug:"/graphql-migrations/intro",permalink:"/docs/0.15.x/graphql-migrations/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/graphql-migrations/intro.md",version:"0.15.x",sidebar_label:"Introduction",sidebar:"version-0.15.x/docs",previous:{title:"ConflictError",permalink:"/docs/0.15.x/api/graphback-datasync/classes/_util_.conflicterror"},next:{title:"Database Design",permalink:"/docs/0.15.x/graphql-migrations/db-design"}},c=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback uses ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-migrations"},"graphql-migrations")," to automatically create and update tables from a GraphQL schema.\nThe library compares your database schema to your GraphQL schema and executes the required changes to keep the database structure synchronised with the GraphQL schema."),Object(o.b)("h2",{id:"compatibility"},"Compatibility"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"PostgreSQL (create and update database)"),Object(o.b)("li",{parentName:"ul"},"SQLite (create database only)")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"You can install ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-migrations")," on your existing project using the following commmands:"),Object(o.b)("p",null,"With npm: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm i graphql-serve\n")),Object(o.b)("p",null,"or with yarn:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add graphql-serve\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"GraphQL Migrations operates on business models defined in your schema: These are GraphQL types decorated with a ",Object(o.b)("a",{parentName:"p",href:"../model/datamodel#model"},Object(o.b)("inlineCode",{parentName:"a"},"@model"))," annotation.\nThe package expose an API which you can programmatically set up in your source code and have it perform the migrations. "),Object(o.b)("p",null,"The package exposes a ",Object(o.b)("inlineCode",{parentName:"p"},"migrateDB")," method which creates and updates your tables and columns to match your GraphQL schema.\nAll the database operations are wrapped in a single transaction, so your database will be fully rolled back to its initial state if an error occurs.\nThe method takes three arguments as described in ",Object(o.b)("a",{parentName:"p",href:"#options"},"migrations options")," section."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'import { migrateDB } from \'graphql-migrations\';\n\nconst schemaText = ```\n"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n}\n```;\n\nconst dbConfig = {\n  // Knex.js based configuration\n};\n\nmigrateDB(dbConfig, schemaText, {\n  // Additional options\n}).then((ops) => {\n    console.log(ops);\n});\n...\n')),Object(o.b)("p",null,"Assuming the above code is ran against a PostgreSQL database, the following relations will be created:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"\\d\n              List of relations\n Schema |    Name     |   Type   |   Owner    \n--------+-------------+----------+------------\n public | note        | table    | postgresql\n public | note_id_seq | sequence | postgresql\n")),Object(o.b)("p",null,"And the ",Object(o.b)("inlineCode",{parentName:"p"},"note")," table:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},' \\d note\n                                 Table "public.note"\n Column |          Type          |                     Modifiers                     \n--------+------------------------+---------------------------------------------------\n title  | character varying(255) | not null\n id     | integer                | not null default nextval(\'note_id_seq\'::regclass)\nIndexes:\n    "note_pkey" PRIMARY KEY, btree (id)\n')),Object(o.b)("h2",{id:"advanced-usage"},"Advanced usage"),Object(o.b)("p",null,"For more advanced usage, visit the below pages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"db-design"},"Database Design")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"api"},"API Reference"))))}p.isMDXComponent=!0},1333:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);