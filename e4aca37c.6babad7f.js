/*! For license information please see e4aca37c.6babad7f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1118],{1186:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(1326),t(1325)),c={id:"mongodb",title:"Using MongoDB in Graphback",sidebar_label:"MongoDB"},i={unversionedId:"databases/mongodb",id:"databases/mongodb",isDocsHomePage:!1,title:"Using MongoDB in Graphback",description:"MongoDB is a general purpose, document-based, distributed database built for modern application developers.",source:"@site/../docs/databases/mongodb.md",slug:"/databases/mongodb",permalink:"/docs/next/databases/mongodb",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/databases/mongodb.md",version:"current",sidebar_label:"MongoDB",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/databases/overview"},next:{title:"Using PostgreSQL with Graphback",permalink:"/docs/next/databases/postgres"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Creating Database Connection",id:"creating-database-connection",children:[]},{value:"Using MongoDB Provider",id:"using-mongodb-provider",children:[]}],l={rightToc:u};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.mongodb.com/"}),"MongoDB")," is a general purpose, document-based, distributed database built for modern application developers.\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),"Graphback MongoDB Provider")," package provides instant integration to your Mongo database, giving you a full implementation of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/crud/overview"}),"CRUD API"),". "),Object(a.b)("p",null,"The package is built on top of the official ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://mongodb.github.io/node-mongodb-native"}),"MongoDB Node.js Driver"),"."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"Install with npm:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/runtime-mongo mongodb\n")),Object(a.b)("p",null,"Install with yarn:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/runtime-mongo mongodb\n")),Object(a.b)("p",null,"Running either of the two commands will install the ",Object(a.b)("inlineCode",{parentName:"p"},"Graphback MongoDB Provider")," (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),Object(a.b)("inlineCode",{parentName:"a"},"@graphback/runtime-mongo")),") and the MongoDB Driver (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/mongodb"}),Object(a.b)("inlineCode",{parentName:"a"},"mongodb")),")."),Object(a.b)("h2",{id:"creating-database-connection"},"Creating Database Connection"),Object(a.b)("p",null,"You'll need a running MongoDB instance before initializing the connection. "),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you do not have a running instance, you can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," to quickly spin up a MongoDB container by following the instructions given in\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/mongo"}),"MongoDB Docker Image"),"."))),Object(a.b)("p",null,"The following code can be used to connect to your MongoDB."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Db, MongoClient } from \"mongodb\";\n\n// Example Mongo Connection URL\nconst url = 'mongodb://localhost:27017';\n\nconst mongoClient: MongoClient = await MongoClient.connect(url);\n// get db instance\nconst db: Db = mongoClient.db('users');\n")),Object(a.b)("p",null,"Here we are connecting to the ",Object(a.b)("inlineCode",{parentName:"p"},"users")," database, on a MongoDB instance running locally."),Object(a.b)("p",null,"You can change the configurations variables to match the one you have."),Object(a.b)("p",null,"To learn more about the accepted configuration, visit the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://mongodb.github.io/node-mongodb-native/3.5/reference/connecting/"}),"MongoDB Driver Connection Options")," documentation."),Object(a.b)("h2",{id:"using-mongodb-provider"},"Using MongoDB Provider"),Object(a.b)("p",null,"The Graphback MongoDB provider exposes a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-runtime-mongodb/modules/_createmongodbprovider_"}),Object(a.b)("inlineCode",{parentName:"a"},"createMongoDbProvider"))," method, which can be used to create data providers for each of your  data models. "),Object(a.b)("p",null,"The code below shows how you can create such a data provider creator and how it can be passed to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_"}),Object(a.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Db, MongoClient } from \"mongodb\";\nimport { buildGraphbackAPI } from 'graphback';\nimport { createMongoDbProvider } from '@graphback/runtime-mongo';\n\n// highlight-start\n// Example Mongo Connection URL\nconst url = 'mongodb://localhost:27017';\n\nconst mongoClient: MongoClient = await MongoClient.connect(url);\n\n// get db instance\nconst db: Db = mongoClient.db('users');\n\n// create the MongoDB Data provider creator function\nconst dataProviderCreator = createMongoDbProvider(db);\n\n// highlight-end\n\n// the business model\nconst userModel = `\n \"\"\"\n @model\n \"\"\"\n type User {\n     _id: GraphbackObjectID!\n     username: String!\n }\n\n scalar GraphbackObjectID\n`;\n\n// Use the dataProvider in buildGraphbackAPI\nconst { resolvers, services, contextCreator } = buildGraphbackAPI(userModel, { dataProviderCreator });\n")),Object(a.b)("p",null,"The highlighted code does the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Define connection URL to the MongoDB."),Object(a.b)("li",{parentName:"ul"},"Create a connection to our Mongo database."),Object(a.b)("li",{parentName:"ul"},"Select the ",Object(a.b)("inlineCode",{parentName:"li"},"users")," database."),Object(a.b)("li",{parentName:"ul"},"And finally, create a data provider creator by using the ",Object(a.b)("inlineCode",{parentName:"li"},"createMongoDbProvider")," API. ")),Object(a.b)("p",null,"The rest of the code uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_"}),Object(a.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," to create Graphback CRUD API based on the defined ",Object(a.b)("inlineCode",{parentName:"p"},"userModel")," model."),Object(a.b)("p",null,"Visit ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/model/datamodel"}),"Data Models")," to learn more about how to design your business models."))}s.isMDXComponent=!0},1325:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return t?o.a.createElement(f,i(i({ref:n},l),{},{components:t})):o.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1326:function(e,n,t){"use strict";e.exports=t(1327)},1327:function(e,n,t){"use strict";var r=t(1328),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,b=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,f=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,n,t){this.props=e,this.context=n,this.refs=O,this.updater=t||y}function j(){}function w(e,n,t){this.props=e,this.context=n,this.refs=O,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var k=w.prototype=new j;k.constructor=w,r(k,v.prototype),k.isPureReactComponent=!0;var C={current:null},D=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,t){var r,o={},c=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)D.call(n,r)&&!N.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:C.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g,S=[];function _(e,n,t,r){if(S.length){var o=S.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function R(e,n,t,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case c:i=!0}}if(i)return t(r,e,""===n?"."+B(e,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+B(o=e[u],u);i+=R(o,l,t,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=g&&e[g]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)i+=R(o=o.value,l=n+B(o,u++),t,r);else if("object"===o)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function I(e,n,t){return null==e?0:R(e,"",n,t)}function B(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function $(e,n){e.func.call(e.context,n,e.count++)}function T(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?A(e,r,t,(function(e){return e})):null!=e&&(M(e)&&(e=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+t)),r.push(e))}function A(e,n,t,r,o){var a="";null!=t&&(a=(""+t).replace(x,"$&/")+"/"),I(e,T,n=_(n,a,r,o)),E(n)}var U={current:null};function G(){var e=U.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return A(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;I(e,$,n=_(null,null,n,t)),E(n)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var n=[];return A(e,n,null,(function(e){return e})),n},only:function(e){if(!M(e))throw Error(h(143));return e}},n.Component=v,n.Fragment=i,n.Profiler=l,n.PureComponent=w,n.StrictMode=u,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,n.cloneElement=function(e,n,t){if(null==e)throw Error(h(267,e));var o=r({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,u=C.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)D.call(n,s)&&!N.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==l?l[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){l=Array(s);for(var b=0;b<s;b++)l[b]=arguments[b+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:b,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:p,render:e}},n.isValidElement=M,n.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return G().useCallback(e,n)},n.useContext=function(e,n){return G().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return G().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return G().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return G().useLayoutEffect(e,n)},n.useMemo=function(e,n){return G().useMemo(e,n)},n.useReducer=function(e,n,t){return G().useReducer(e,n,t)},n.useRef=function(e){return G().useRef(e)},n.useState=function(e){return G().useState(e)},n.version="16.14.0"},1328:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var t,i,u=c(e),l=1;l<arguments.length;l++){for(var s in t=Object(arguments[l]))o.call(t,s)&&(u[s]=t[s]);if(r){i=r(t);for(var b=0;b<i.length;b++)a.call(t,i[b])&&(u[i[b]]=t[i[b]])}}return u}}}]);