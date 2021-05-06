(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{1333:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(r),u=n,s=l["".concat(b,".").concat(u)]||l[u]||m[u]||o;return r?a.a.createElement(s,i(i({ref:t},p),{},{components:r})):a.a.createElement(s,i({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,b=new Array(o);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var p=2;p<o;p++)b[p]=r[p];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},720:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(1333)),b={id:"_createmongodbprovider_",title:"createMongoDbProvider",sidebar_label:"createMongoDbProvider"},i={unversionedId:"api/graphback-runtime-mongodb/modules/_createmongodbprovider_",id:"version-0.15.x/api/graphback-runtime-mongodb/modules/_createmongodbprovider_",isDocsHomePage:!1,title:"createMongoDbProvider",description:"Index",source:"@site/versioned_docs/version-0.15.x/api/graphback-runtime-mongodb/modules/_createmongodbprovider_.md",slug:"/api/graphback-runtime-mongodb/modules/_createmongodbprovider_",permalink:"/docs/0.15.x/api/graphback-runtime-mongodb/modules/_createmongodbprovider_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-runtime-mongodb/modules/_createmongodbprovider_.md",version:"0.15.x",sidebar_label:"createMongoDbProvider",sidebar:"version-0.15.x/docs",previous:{title:"SQLiteKnexDBDataProvider",permalink:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"},next:{title:"MongoDBDataProvider",permalink:"/docs/0.15.x/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider"}},c=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"createMongoDbProvider",id:"createmongodbprovider",children:[]}]}],p={rightToc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-runtime-mongodb/modules/_createmongodbprovider_#createmongodbprovider"},"createMongoDbProvider"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"createmongodbprovider"},"createMongoDbProvider"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"createMongoDbProvider"),"(",Object(o.b)("inlineCode",{parentName:"p"},"db"),": Db): ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-mongodb/src/createMongoDbProvider.ts#L10"},"createMongoDbProvider.ts:10"))),Object(o.b)("p",null,"Creates a new KnexDBDataProvider"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"db")),Object(o.b)("td",{parentName:"tr",align:null},"Db"),Object(o.b)("td",{parentName:"tr",align:null},"MongoDb connection")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,"\u25b8 (...",Object(o.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(o.b)("em",{parentName:"p"},"GraphbackDataProvider")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"...args")),Object(o.b)("td",{parentName:"tr",align:null},"any[]")))))}d.isMDXComponent=!0}}]);