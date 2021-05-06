(window.webpackJsonp=window.webpackJsonp||[]).push([[783],{1333:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},851:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(1333)),o={id:"overview",title:"CRUD Overview",sidebar_label:"Overview"},l={unversionedId:"crud/overview",id:"version-1.0/crud/overview",isDocsHomePage:!1,title:"CRUD Overview",description:"Graphback generates a CRUD API for each model in your GraphQL schema. This gives you queries, mutations and subscriptions that can be instantly be used perform queries and mutations on your data.",source:"@site/versioned_docs/version-1.0/crud/introduction.md",slug:"/crud/overview",permalink:"/docs/crud/overview",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/crud/introduction.md",version:"1.0",sidebar_label:"Overview",sidebar:"version-1.0/docs",previous:{title:"Graphback Scalars",permalink:"/docs/model/scalars"},next:{title:"Queries",permalink:"/docs/crud/queries"}},c=[{value:"Configuration",id:"configuration",children:[{value:"Application wide",id:"application-wide",children:[]},{value:"Per type",id:"per-type",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback generates a CRUD API for each model in your GraphQL schema. This gives you queries, mutations and subscriptions that can be instantly be used perform queries and mutations on your data."),Object(i.b)("p",null,"Graphback provides an implementation of ",Object(i.b)("a",{parentName:"p",href:"https://graphqlcrud.org"},"GraphQLCRUD")," for a standardised CRUD API using common data access patterns."),Object(i.b)("p",null,"Queries, mutations and subscriptions that you add to your model files will be included in the generated schema. These require manual implementation and merging with the resolvers generated by Graphback."),Object(i.b)("p",null,"Your custom operations can utilize the input types and filters created by Graphback. This lets you control the schema as you would when building it from scratch, while significantly reducing the amount of boilerplate required to set up it from your data."),Object(i.b)("p",null,"To tell Graphback to create a CRUD API for your type, add a ",Object(i.b)("inlineCode",{parentName:"p"},"@model")," annotation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n')),Object(i.b)("p",null,"This will add queries, mutations and subscriptions to the schema for ",Object(i.b)("inlineCode",{parentName:"p"},"Note"),". It will also create corresponding CRUD resolvers which are configured to access the data from your data source."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n\n// highlight-start\ntype Query {\n  getNote(id: ID!): Note\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n}\n\ntype Mutation {\n  createNote(input: CreateNoteInput!): Note\n  updateNote(input: MutateNoteInput!): Note\n  deleteNote(input: MutateNoteInput!): Note\n}\n\ntype Subscription {\n  newNote(filter: NoteSubscriptionFilter): Note!\n  updatedNote(filter: NoteSubscriptionFilter): Note!\n  deletedNote(filter: NoteSubscriptionFilter): Note!\n}\n// highlight-end\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Graphback will override custom queries, mutations and subscriptions from model files which have the same name as Graphback CRUD queries, mutations and subscriptions. Either change the name of your custom definitions or ",Object(i.b)("a",{parentName:"p",href:"#per-type"},"disable generation")," of the CRUD operation(s) for the model(s)."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Graphback can be configured to enable/disable CRUD generation per GraphQL type, or globally across the entire application."),Object(i.b)("p",null,"See the table below for the full list of CRUD configuration options that can be applied to the application or models."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Option"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"find"),Object(i.b)("td",{parentName:"tr",align:null},"Specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"find<Type>s")," findBy query should be generated."),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"findOne"),Object(i.b)("td",{parentName:"tr",align:null},"Specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"get<Type>")," findOne query should be generated."),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"create"),Object(i.b)("td",{parentName:"tr",align:null},"Specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"create<Type>")," query should be generated."),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"update"),Object(i.b)("td",{parentName:"tr",align:null},"Specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"update<Type>")," update mutation should be generated."),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"delete"),Object(i.b)("td",{parentName:"tr",align:null},"Specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"delete<Type>")," delete mutation should be generated."),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"subCreate"),Object(i.b)("td",{parentName:"tr",align:null},"Specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"new<Type>")," subscription should be generated."),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"subUpdate"),Object(i.b)("td",{parentName:"tr",align:null},"Specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"updated<Type>")," subscription should be generated."),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"subDelete"),Object(i.b)("td",{parentName:"tr",align:null},"Specifies whether a ",Object(i.b)("inlineCode",{parentName:"td"},"deleted<Type>")," subscription should be generated."),Object(i.b)("td",{parentName:"tr",align:null},"true")))),Object(i.b)("h3",{id:"application-wide"},"Application wide"),Object(i.b)("p",null,"You can configure different CRUD methods to be enabled or disabled across all data models in ",Object(i.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI")," through the ",Object(i.b)("inlineCode",{parentName:"p"},"crud")," config option."),Object(i.b)("p",null,"In this example, generation of the ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," mutation for all models is disabled."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {\n  ...,\n  crud: {\n    delete: false\n  }\n});\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"CRUD configuration ",Object(i.b)("a",{parentName:"p",href:"#per-type"},"set on an individual type")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"@model")," annotation will override the application-wide CRUD configuration."))),Object(i.b)("h3",{id:"per-type"},"Per type"),Object(i.b)("p",null,"CRUD can be enabled/disabled individually for each model in your schema with the ",Object(i.b)("a",{parentName:"p",href:"../model/annotations"},Object(i.b)("inlineCode",{parentName:"a"},"@model"))," annotation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'""" \n@model(delete: false)\n"""\ntype Note {\n  ...\n}\n')),Object(i.b)("p",null,"This disables ",Object(i.b)("inlineCode",{parentName:"p"},"deleteNote")," generation for ",Object(i.b)("inlineCode",{parentName:"p"},"Note"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  createNote(input: CreateNoteInput!): Note\n  updateNote(input: MutateNoteInput!): Note\n}\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"CRUD configuration set with ",Object(i.b)("inlineCode",{parentName:"p"},"@model")," will override the ",Object(i.b)("a",{parentName:"p",href:"#application-wide"},"application-wide CRUD configuration")," value for that type only."))))}p.isMDXComponent=!0}}]);