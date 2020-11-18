(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1325:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,f=s["".concat(i,".").concat(u)]||s[u]||d[u]||c;return a?n.a.createElement(f,l(l({ref:t},b),{},{components:a})):n.a.createElement(f,l({ref:t},b))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},471:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(1325)),i={id:"_util_.conflictresolutionstrategy",title:"ConflictResolutionStrategy",sidebar_label:"ConflictResolutionStrategy"},l={unversionedId:"api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy",id:"version-1.0/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy",isDocsHomePage:!1,title:"ConflictResolutionStrategy",description:"Interface for implementing conflict resolution strategies",source:"@site/versioned_docs/version-1.0/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy.md",slug:"/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy",permalink:"/docs/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy.md",version:"1.0",sidebar_label:"ConflictResolutionStrategy",sidebar:"version-1.0/docs",previous:{title:"ConflictError",permalink:"/docs/api/graphback-datasync/classes/_util_.conflicterror"},next:{title:"ConflictMetadata",permalink:"/docs/api/graphback-datasync/interfaces/_util_.conflictmetadata"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"resolveDelete",id:"resolvedelete",children:[]},{value:"resolveUpdate",id:"resolveupdate",children:[]}]}],b={rightToc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Interface for implementing conflict resolution strategies"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ConflictResolutionStrategy"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy#resolvedelete"}),"resolveDelete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy#resolveupdate"}),"resolveUpdate"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"resolvedelete"},"resolveDelete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/util.ts#L121"}),"packages/graphback-datasync/src/util.ts:121"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflict")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"resolveupdate"},"resolveUpdate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/util.ts#L120"}),"packages/graphback-datasync/src/util.ts:120"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflict")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")))}p.isMDXComponent=!0}}]);