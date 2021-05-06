/*! For license information please see 78a934fd.73ecf3c0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1333:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1334:function(e,t,r){"use strict";e.exports=r(1335)},1335:function(e,t,r){"use strict";var n=r(1336),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,u=60112;t.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),i=p("react.provider"),c=p("react.context"),u=p("react.forward_ref"),t.Suspense=p("react.suspense"),s=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}function m(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var v=g.prototype=new m;v.constructor=g,n(v,h.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+E(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+E(c=e[s],s);u+=S(c,t,r,l,i)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),s=0;!(c=e.next()).done;)u+=S(c=c.value,t,r,l=n+E(c,s++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function C(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var G={current:null};function R(){var e=G.current;if(null===e)throw Error(d(321));return e}var L={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=O.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)j.call(t,l)&&!w.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){s=Array(l);for(var p=0;p<l;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},1336:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=i(e),s=1;s<arguments.length;s++){for(var l in r=Object(arguments[s]))o.call(r,l)&&(u[l]=r[l]);if(n){c=n(r);for(var p=0;p<c.length;p++)a.call(r,c[p])&&(u[c[p]]=r[c[p]])}}return u}},1386:function(e,t,r){e.exports=r.p+"assets/images/diagramsmall-e05f3259b7a8047af683d03b5b537348.png"},660:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(1334),r(1333)),i={id:"introduction",title:"Why use Graphback?",sidebar_label:"Why use Graphback?"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Why use Graphback?",description:"Graphback simplifies application development by generating a production-ready API from data models to access data from one or more data sources. Graphback uses GraphQL and GraphQLCRUD to make it easy to get the data you need, and follows the convention over configuration paradigm to to reduce the amount of setup and boilerplate costs associated with creating GraphQL applications.",source:"@site/../docs/intro-to-graphback.md",slug:"/introduction",permalink:"/docs/next/introduction",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/intro-to-graphback.md",version:"current",sidebar_label:"Why use Graphback?",sidebar:"docs",next:{title:"Creating a new application",permalink:"/docs/next/getting-started/create-new-app"}},u=[{value:"Benefits",id:"benefits",children:[{value:"Focus on your data",id:"focus-on-your-data",children:[]},{value:"Database migrations",id:"database-migrations",children:[]},{value:"Easy to extend",id:"easy-to-extend",children:[]}]},{value:"How it works",id:"how-it-works",children:[]}],s={rightToc:u};function l(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Graphback simplifies application development by generating a production-ready API from data models to access data from one or more data sources. Graphback uses ",Object(a.b)("a",{parentName:"p",href:"https://graphql.org"},"GraphQL")," and ",Object(a.b)("a",{parentName:"p",href:"https://graphqlcrud.org/"},"GraphQLCRUD")," to make it easy to get the data you need, and follows the convention over configuration paradigm to to reduce the amount of setup and boilerplate costs associated with creating GraphQL applications."),Object(a.b)("p",null,"Graphback provides a number of independent, interoperable libraries and tools to create and develop modern applications.\nWith Graphback you can build and deploy a scalable data-driven GraphQL API, complete with real-time updates and data synchronization capabilities, using either a ",Object(a.b)("a",{parentName:"p",href:"/docs/next/databases/mongodb"},"MongoDB")," or ",Object(a.b)("a",{parentName:"p",href:"/docs/next/databases/postgres"},"PostgreSQL")," database which is automatically created from your GraphQL schema.\nGraphback can also create client-side GraphQL documents for your mobile or web app, bootstrapping your entire application instantly."),Object(a.b)("h2",{id:"benefits"},"Benefits"),Object(a.b)("h3",{id:"focus-on-your-data"},"Focus on your data"),Object(a.b)("p",null,"Graphback bootstraps your entire application using the types described in your GraphQL schema to instantly create an API with data sources and a ready-to-use CRUD implementation of ",Object(a.b)("a",{parentName:"p",href:"https://graphqlcrud.org/"},"GraphQLCRUD"),"."),Object(a.b)("p",null,"This enables you to spend more time focusing on your data to deliver the core business value of your application or service."),Object(a.b)("h3",{id:"database-migrations"},"Database migrations"),Object(a.b)("p",null,"For PostgreSQL users, ",Object(a.b)("a",{parentName:"p",href:"/docs/next/graphql-migrations/intro"},"GraphQL Migrations")," can migrate your database schema to match the data described in your GraphQL schema."),Object(a.b)("h3",{id:"easy-to-extend"},"Easy to extend"),Object(a.b)("p",null,"Graphback was designed to work with your existing GraphQL API as well as for greenfield projects. Graphback also has its own plugin system, so you can create your own plugins or use some of the community plugins that are available."),Object(a.b)("h2",{id:"how-it-works"},"How it works"),Object(a.b)("p",null,Object(a.b)("img",{src:r(1386).default})),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Graphback uses your data models, written as GraphQL types, to instantly build a GraphQL CRUD API.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},'"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String!\n}\n')),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Next, choose one of the Graphback supported data sources.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start your application."))))}l.isMDXComponent=!0}}]);