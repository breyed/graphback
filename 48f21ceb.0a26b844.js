(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1333:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(1333)),l={id:"crud-schema",title:"SchemaCRUD Plugin",sidebar_label:"SchemaCRUD"},o={unversionedId:"plugins/crud-schema",id:"version-0.14.x/plugins/crud-schema",isDocsHomePage:!1,title:"SchemaCRUD Plugin",description:"The SchemaCRUDPlugin plugin creates your GraphQL schema with all input types, Query, Mutation and Subscription fields following recommended patterns from GraphQL CRUD.",source:"@site/versioned_docs/version-0.14.x/plugins/schema-crud-plugin.md",slug:"/plugins/crud-schema",permalink:"/docs/0.14.x/plugins/crud-schema",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.14.x/plugins/schema-crud-plugin.md",version:"0.14.x",sidebar_label:"SchemaCRUD",sidebar:"version-0.14.x/docs",previous:{title:"Plugins Overview",permalink:"/docs/0.14.x/plugins/overview"},next:{title:"ClientCRUD Plugin",permalink:"/docs/0.14.x/plugins/crud-client"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," plugin creates your GraphQL schema with all input types, Query, Mutation and Subscription fields following recommended patterns from ",Object(i.b)("a",{parentName:"p",href:"https://graphqlcrud.org/"},"GraphQL CRUD"),".\nThe plugin also creates your CRUD resolvers to use with your GraphQL schema."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @graphback/codegen-schema\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"To use the plugin, add it to the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins")," array in ",Object(i.b)("a",{parentName:"p",href:"../api/build-graphback-api#plugins"},Object(i.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const { schema, resolvers } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  plugins: [\n    // highlight-start\n    new SchemaCRUDPlugin({\n      outputPath: './src/schema/schema.graphql'\n    })\n    // highlight-end\n  ]\n});\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Unless you need the schema to be output to a file you don't need to install or configure it as Graphback will automatically execute it as the default plugin."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Below is a full list of the available configuration options for this plugin."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Argument"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pluginConfig.outputPath")),Object(i.b)("td",{parentName:"tr",align:null},"Optional relative path to the schema file.",Object(i.b)("br",null)," Example: ",Object(i.b)("inlineCode",{parentName:"td"},'"/path/to/schema/schema.graphql"')),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"undefined"))))))}u.isMDXComponent=!0}}]);