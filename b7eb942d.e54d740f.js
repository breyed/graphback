/*! For license information please see b7eb942d.e54d740f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[919],{1333:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1334:function(e,t,r){"use strict";e.exports=r(1335)},1335:function(e,t,r){"use strict";var n=r(1336),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,u=60112;t.Suspense=60113;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),c=s("react.provider"),i=s("react.context"),u=s("react.forward_ref"),t.Suspense=s("react.suspense"),l=s("react.memo"),p=s("react.lazy")}var b="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var h=v.prototype=new g;h.constructor=v,n(h,y.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,n)&&!_.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:O.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return c=c(u=e),e=""===n?"."+N(u,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),x(c,t,r,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+e)),t.push(c)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=n+N(i=e[l],l);u+=x(i,t,r,p,c)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),l=0;!(i=e.next()).done;)u+=x(i=i.value,t,r,p=n+N(i,l++),c);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function D(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function S(){var e=E.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:D,forEach:function(e,t,r){D(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(f(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var a=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=O.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)j.call(t,p)&&!_.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){l=Array(p);for(var s=0;s<p;s++)l[s]=arguments[s+2];a.children=l}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return S().useCallback(e,t)},t.useContext=function(e,t){return S().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return S().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return S().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return S().useLayoutEffect(e,t)},t.useMemo=function(e,t){return S().useMemo(e,t)},t.useReducer=function(e,t,r){return S().useReducer(e,t,r)},t.useRef=function(e){return S().useRef(e)},t.useState=function(e){return S().useState(e)},t.version="17.0.1"},1336:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,u=c(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))o.call(r,p)&&(u[p]=r[p]);if(n){i=n(r);for(var s=0;s<i.length;s++)a.call(r,i[s])&&(u[i[s]]=r[i[s]])}}return u}},986:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(1334),r(1333)),c={id:"_createmongodbprovider_",title:"createMongoDbProvider",sidebar_label:"createMongoDbProvider"},i={unversionedId:"api/graphback-runtime-mongodb/modules/_createmongodbprovider_",id:"api/graphback-runtime-mongodb/modules/_createmongodbprovider_",isDocsHomePage:!1,title:"createMongoDbProvider",description:"Index",source:"@site/../docs/api/graphback-runtime-mongodb/modules/_createmongodbprovider_.md",slug:"/api/graphback-runtime-mongodb/modules/_createmongodbprovider_",permalink:"/docs/next/api/graphback-runtime-mongodb/modules/_createmongodbprovider_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-runtime-mongodb/modules/_createmongodbprovider_.md",version:"current",sidebar_label:"createMongoDbProvider",sidebar:"docs",previous:{title:"SQLiteKnexDBDataProvider",permalink:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"},next:{title:"MongoDBDataProvider",permalink:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider"}},u=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"createMongoDbProvider",id:"createmongodbprovider",children:[]}]}],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"functions"},"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/next/api/graphback-runtime-mongodb/modules/_createmongodbprovider_#createmongodbprovider"},"createMongoDbProvider"))),Object(a.b)("h2",{id:"functions-1"},"Functions"),Object(a.b)("h3",{id:"createmongodbprovider"},"createMongoDbProvider"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"createMongoDbProvider"),"(",Object(a.b)("inlineCode",{parentName:"p"},"db"),": Db): ",Object(a.b)("em",{parentName:"p"},"function")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/34a932e/packages/graphback-runtime-mongodb/src/createMongoDbProvider.ts#L10"},"createMongoDbProvider.ts:10"))),Object(a.b)("p",null,"Creates a new KnexDBDataProvider"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"db")),Object(a.b)("td",{parentName:"tr",align:null},"Db"),Object(a.b)("td",{parentName:"tr",align:null},"MongoDb connection")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"function")),Object(a.b)("p",null,"\u25b8 (...",Object(a.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(a.b)("em",{parentName:"p"},"GraphbackDataProvider")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"),Object(a.b)("th",{parentName:"tr",align:null},"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"...args")),Object(a.b)("td",{parentName:"tr",align:null},"any[]")))))}p.isMDXComponent=!0}}]);