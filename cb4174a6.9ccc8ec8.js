/*! For license information please see cb4174a6.9ccc8ec8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{1074:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(1326),n(1325)),i={id:"overview",title:"CRUD Overview",sidebar_label:"Overview"},c={unversionedId:"crud/overview",id:"crud/overview",isDocsHomePage:!1,title:"CRUD Overview",description:"Graphback generates a CRUD API for each model in your GraphQL schema. This gives you queries, mutations and subscriptions that can be instantly be used perform queries and mutations on your data.",source:"@site/../docs/crud/introduction.md",slug:"/crud/overview",permalink:"/docs/next/crud/overview",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/crud/introduction.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Graphback Scalars",permalink:"/docs/next/model/scalars"},next:{title:"Queries",permalink:"/docs/next/crud/queries"}},l=[{value:"Configuration",id:"configuration",children:[{value:"Application wide",id:"application-wide",children:[]},{value:"Per type",id:"per-type",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback generates a CRUD API for each model in your GraphQL schema. This gives you queries, mutations and subscriptions that can be instantly be used perform queries and mutations on your data."),Object(o.b)("p",null,"Graphback provides an implementation of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org"}),"GraphQLCRUD")," for a standardised CRUD API using common data access patterns."),Object(o.b)("p",null,"Queries, mutations and subscriptions that you add to your model files will be included in the generated schema. These require manual implementation and merging with the resolvers generated by Graphback."),Object(o.b)("p",null,"Your custom operations can utilize the input types and filters created by Graphback. This lets you control the schema as you would when building it from scratch, while significantly reducing the amount of boilerplate required to set up it from your data."),Object(o.b)("p",null,"To tell Graphback to create a CRUD API for your type, add a ",Object(o.b)("inlineCode",{parentName:"p"},"@model")," annotation."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n')),Object(o.b)("p",null,"This will add queries, mutations and subscriptions to the schema for ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),". It will also create corresponding CRUD resolvers which are configured to access the data from your data source."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n\n// highlight-start\ntype Query {\n  getNote(id: ID!): Note\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n}\n\ntype Mutation {\n  createNote(input: CreateNoteInput!): Note\n  updateNote(input: MutateNoteInput!): Note\n  deleteNote(input: MutateNoteInput!): Note\n}\n\ntype Subscription {\n  newNote(filter: NoteSubscriptionFilter): Note!\n  updatedNote(filter: NoteSubscriptionFilter): Note!\n  deletedNote(filter: NoteSubscriptionFilter): Note!\n}\n// highlight-end\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Graphback will override custom queries, mutations and subscriptions from model files which have the same name as Graphback CRUD queries, mutations and subscriptions. Either change the name of your custom definitions or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#per-type"}),"disable generation")," of the CRUD operation(s) for the model(s)."))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Graphback can be configured to enable/disable CRUD generation per GraphQL type, or globally across the entire application."),Object(o.b)("p",null,"See the table below for the full list of CRUD configuration options that can be applied to the application or models."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Option"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"find"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies whether a ",Object(o.b)("inlineCode",{parentName:"td"},"find<Type>s")," findBy query should be generated."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"findOne"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies whether a ",Object(o.b)("inlineCode",{parentName:"td"},"get<Type>")," findOne query should be generated."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"create"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies whether a ",Object(o.b)("inlineCode",{parentName:"td"},"create<Type>")," query should be generated."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"update"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies whether a ",Object(o.b)("inlineCode",{parentName:"td"},"update<Type>")," update mutation should be generated."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"delete"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies whether a ",Object(o.b)("inlineCode",{parentName:"td"},"delete<Type>")," delete mutation should be generated."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"subCreate"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies whether a ",Object(o.b)("inlineCode",{parentName:"td"},"new<Type>")," subscription should be generated."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"subUpdate"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies whether a ",Object(o.b)("inlineCode",{parentName:"td"},"updated<Type>")," subscription should be generated."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"subDelete"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specifies whether a ",Object(o.b)("inlineCode",{parentName:"td"},"deleted<Type>")," subscription should be generated."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")))),Object(o.b)("h3",{id:"application-wide"},"Application wide"),Object(o.b)("p",null,"You can configure different CRUD methods to be enabled or disabled across all data models in ",Object(o.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI")," through the ",Object(o.b)("inlineCode",{parentName:"p"},"crud")," config option."),Object(o.b)("p",null,"In this example, generation of the ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," mutation for all models is disabled."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {\n  ...,\n  crud: {\n    delete: false\n  }\n});\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"CRUD configuration ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#per-type"}),"set on an individual type")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"@model")," annotation will override the application-wide CRUD configuration."))),Object(o.b)("h3",{id:"per-type"},"Per type"),Object(o.b)("p",null,"CRUD can be enabled/disabled individually for each model in your schema with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../model/annotations"}),Object(o.b)("inlineCode",{parentName:"a"},"@model"))," annotation."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model(delete: false)\n"""\ntype Note {\n  ...\n}\n')),Object(o.b)("p",null,"This disables ",Object(o.b)("inlineCode",{parentName:"p"},"deleteNote")," generation for ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  createNote(input: CreateNoteInput!): Note\n  updateNote(input: MutateNoteInput!): Note\n}\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"CRUD configuration set with ",Object(o.b)("inlineCode",{parentName:"p"},"@model")," will override the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#application-wide"}),"application-wide CRUD configuration")," value for that type only."))))}p.isMDXComponent=!0},1325:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1326:function(e,t,n){"use strict";e.exports=n(1327)},1327:function(e,t,n){"use strict";var r=n(1328),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,b=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||j}function v(){}function N(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=N.prototype=new v;w.constructor=N,r(w,g.prototype),w.isPureReactComponent=!0;var C={current:null},S=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!k.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:C.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g,D=[];function E(e,t,n,r){if(D.length){var a=D.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function I(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return n(r,e,""===t?"."+U(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+U(a=e[l],l);c+=I(a,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=h&&e[h]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=I(a=a.value,u=t+U(a,l++),n,r);else if("object"===a)throw n=""+e,Error(O(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function T(e,t,n){return null==e?0:I(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(x,"$&/")+"/"),T(e,$,t=E(t,o,r,a)),_(t)}var L={current:null};function M(){var e=L.current;if(null===e)throw Error(O(321));return e}var G={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,q,t=E(null,null,t,n)),_(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw Error(O(143));return e}},t.Component=g,t.Fragment=c,t.Profiler=u,t.PureComponent=N,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,n){if(null==e)throw Error(O(267,e));var a=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)S.call(t,p)&&!k.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){u=Array(p);for(var b=0;b<p;b++)u[b]=arguments[b+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return M().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,n){return M().useReducer(e,t,n)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="16.14.0"},1328:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))a.call(n,p)&&(l[p]=n[p]);if(r){c=r(n);for(var b=0;b<c.length;b++)o.call(n,c[b])&&(l[c[b]]=n[c[b]])}}return l}}}]);