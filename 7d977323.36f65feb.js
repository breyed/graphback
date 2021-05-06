/*! For license information please see 7d977323.36f65feb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1333:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=s(r),f=a,d=l["".concat(o,".").concat(f)]||l[f]||b[f]||c;return r?n.a.createElement(d,u(u({ref:t},i),{},{components:r})):n.a.createElement(d,u({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<c;i++)o[i]=r[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1334:function(e,t,r){"use strict";e.exports=r(1335)},1335:function(e,t,r){"use strict";var a=r(1336),n=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,u=60110,p=60112;t.Suspense=60113;var i=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;n=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),o=l("react.provider"),u=l("react.context"),p=l("react.forward_ref"),t.Suspense=l("react.suspense"),i=l("react.memo"),s=l("react.lazy")}var b="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function g(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=_.prototype;var y=h.prototype=new g;y.constructor=h,a(y,_.prototype),y.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var a,c={},o=null,u=null;if(null!=t)for(a in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,a)&&!v.hasOwnProperty(a)&&(c[a]=t[a]);var p=arguments.length-2;if(1===p)c.children=r;else if(1<p){for(var i=Array(p),s=0;s<p;s++)i[s]=arguments[s+2];c.children=i}if(e&&e.defaultProps)for(a in p=e.defaultProps)void 0===c[a]&&(c[a]=p[a]);return{$$typeof:n,type:e,key:o,ref:u,props:c,_owner:O.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,a,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var p=!1;if(null===e)p=!0;else switch(u){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case n:case c:p=!0}}if(p)return o=o(p=e),e=""===a?"."+C(p,0):a,Array.isArray(o)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),x(o,t,r,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(p=0,a=""===a?".":a+":",Array.isArray(e))for(var i=0;i<e.length;i++){var s=a+C(u=e[i],i);p+=x(u,t,r,s,o)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),i=0;!(u=e.next()).done;)p+=x(u=u.value,t,r,s=a+C(u,i++),o);else if("object"===u)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function E(e,t,r){if(null==e)return e;var a=[],n=0;return x(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function M(){var e=S.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(f(143));return e}},t.Component=_,t.PureComponent=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var c=a({},e.props),o=e.key,u=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,p=O.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)j.call(t,s)&&!v.hasOwnProperty(s)&&(c[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];c.children=i}return{$$typeof:n,type:e.type,key:o,ref:u,props:c,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:i,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return M().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,r){return M().useReducer(e,t,r)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="17.0.1"},1336:function(e,t,r){"use strict";var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var r,u,p=o(e),i=1;i<arguments.length;i++){for(var s in r=Object(arguments[i]))n.call(r,s)&&(p[s]=r[s]);if(a){u=a(r);for(var l=0;l<u.length;l++)c.call(r,u[l])&&(p[u[l]]=r[u[l]])}}return p}},675:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),c=(r(1334),r(1333)),o={id:"_packages_graphback_core_src_db_datamapper_",title:"packages/graphback-core/src/db/dataMapper",sidebar_label:"packages/graphback-core/src/db/dataMapper"},u={unversionedId:"api/graphback-core/modules/_packages_graphback_core_src_db_datamapper_",id:"api/graphback-core/modules/_packages_graphback_core_src_db_datamapper_",isDocsHomePage:!1,title:"packages/graphback-core/src/db/dataMapper",description:"Index",source:"@site/../docs/api/graphback-core/modules/_packages_graphback_core_src_db_datamapper_.md",slug:"/api/graphback-core/modules/_packages_graphback_core_src_db_datamapper_",permalink:"/docs/next/api/graphback-core/modules/_packages_graphback_core_src_db_datamapper_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_packages_graphback_core_src_db_datamapper_.md",version:"current",sidebar_label:"packages/graphback-core/src/db/dataMapper"},p=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> getDatabaseArguments",id:"const-getdatabasearguments",children:[]}]}],i={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_db_datamapper_.tabledatamap"},"TableDataMap")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_db_datamapper_.tableid"},"TableID"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-core/modules/_packages_graphback_core_src_db_datamapper_#const-getdatabasearguments"},"getDatabaseArguments"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"const-getdatabasearguments"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," getDatabaseArguments"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDatabaseArguments"),"(",Object(c.b)("inlineCode",{parentName:"p"},"modelMap"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_db_buildmodeltablemap_.modeltablemap"},"ModelTableMap"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data?"),": any): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",{parentName:"em",href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_db_datamapper_.tabledatamap"},"TableDataMap"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/34a932e/packages/graphback-core/src/db/dataMapper.ts#L29"},"packages/graphback-core/src/db/dataMapper.ts:29"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"modelMap")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_db_buildmodeltablemap_.modeltablemap"},"ModelTableMap"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"data?")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",{parentName:"em",href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_db_datamapper_.tabledatamap"},"TableDataMap"))))}s.isMDXComponent=!0}}]);