(window.webpackJsonp=window.webpackJsonp||[]).push([[897],{1325:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},963:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(1325)),c={id:"crud-schema",title:"SchemaCRUD Plugin",sidebar_label:"SchemaCRUD"},l={unversionedId:"plugins/crud-schema",id:"version-1.0/plugins/crud-schema",isDocsHomePage:!1,title:"SchemaCRUD Plugin",description:"The SchemaCRUDPlugin plugin creates your GraphQL schema with all input types, Query, Mutation and Subscription fields following recommended patterns from GraphQL CRUD.",source:"@site/versioned_docs/version-1.0/plugins/schema-crud-plugin.md",slug:"/plugins/crud-schema",permalink:"/docs/plugins/crud-schema",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/plugins/schema-crud-plugin.md",version:"1.0",sidebar_label:"SchemaCRUD",sidebar:"version-1.0/docs",previous:{title:"Plugins Overview",permalink:"/docs/plugins/overview"},next:{title:"ClientCRUD Plugin",permalink:"/docs/plugins/crud-client"}},o=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],p={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/graphback-codegen-schema/classes/_schemacrudplugin_.schemacrudplugin"}),Object(i.b)("inlineCode",{parentName:"a"},"SchemaCRUDPlugin"))," plugin creates your GraphQL schema with all input types, Query, Mutation and Subscription fields following recommended patterns from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQL CRUD"),".\nThe plugin also creates your CRUD resolvers to use with your GraphQL schema."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/codegen-schema\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"To use the plugin, add it to the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins")," array in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../api/build-graphback-api#plugins"}),Object(i.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const { schema, resolvers } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  plugins: [\n    // highlight-start\n    new SchemaCRUDPlugin({\n      outputPath: './src/schema/schema.graphql'\n    })\n    // highlight-end\n  ]\n});\n")),Object(i.b)("p",null,"Or if you are invoking the plugin with ",Object(i.b)("inlineCode",{parentName:"p"},"graphback generate"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".graphqlrc"',title:'".graphqlrc"'}),"schema: './src/schema.graphql'\ndocuments: './client/src/graphql/**/*.graphql'\nextensions:\n  graphback:\n    # path to data mode file(s)\n    model: './model/datamodel.graphql'\n    plugins:\n      graphback-schema:\n        outputPath: './src/schema/schema.graphql'\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Unless you need the schema to be output to a file you don't need to install or configure it as Graphback will automatically execute it as the default plugin."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Below is a full list of the available configuration options for this plugin."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"pluginConfig.outputPath")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional relative path to the schema file.",Object(i.b)("br",null)," Example: ",Object(i.b)("inlineCode",{parentName:"td"},'"/path/to/schema/schema.graphql"')),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined"))))))}s.isMDXComponent=!0}}]);