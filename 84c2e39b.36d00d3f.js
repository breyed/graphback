(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1333:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,p=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),o=l(a),s=r,O=o["".concat(p,".").concat(s)]||o[s]||m[s]||b;return a?n.a.createElement(O,c(c({ref:t},i),{},{components:a})):n.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,p=new Array(b);p[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<b;i++)p[i]=a[i];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},705:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),b=(a(0),a(1333)),p={id:"_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",title:"SQLiteKnexDBDataProvider",sidebar_label:"SQLiteKnexDBDataProvider"},c={unversionedId:"api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",id:"version-0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",isDocsHomePage:!1,title:"SQLiteKnexDBDataProvider",description:"Knex.js database data provider exposing basic CRUD operations.",source:"@site/versioned_docs/version-0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider.md",slug:"/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",permalink:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider.md",version:"0.16.x",sidebar_label:"SQLiteKnexDBDataProvider",sidebar:"version-0.16.x/docs",previous:{title:"KnexDBDataProvider",permalink:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},next:{title:"createMongoDbProvider",permalink:"/docs/0.16.x/api/graphback-runtime-mongodb/modules/_createmongodbprovider_"}},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> tableMap",id:"protected-tablemap",children:[]},{value:"<code>Protected</code> tableName",id:"protected-tablename",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"<code>Protected</code> getSelectedFields",id:"protected-getselectedfields",children:[]},{value:"update",id:"update",children:[]}]}],i={rightToc:d};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Knex.js database data provider exposing basic CRUD operations."),Object(b.b)("p",null,"NOTE: This class implements SQLite specific implementaion"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"Type")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),"\u2039Type\u203a"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"SQLiteKnexDBDataProvider")))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GraphbackDataProvider\u2039Type\u203a")),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#constructor"},"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-db"},"db")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-tablemap"},"tableMap")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-tablename"},"tableName"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#batchread"},"batchRead")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#count"},"count")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#create"},"create")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#delete"},"delete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#findby"},"findBy")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#findone"},"findOne")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-getselectedfields"},"getSelectedFields")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#update"},"update"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new SQLiteKnexDBDataProvider"),"(",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(b.b)("inlineCode",{parentName:"p"},"db"),": Knex): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"},"SQLiteKnexDBDataProvider"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#constructor"},"constructor"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/SQLiteKnexDBDataProvider.ts#L11"},"SQLiteKnexDBDataProvider.ts:11"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",{parentName:"tr",align:null},"ModelDefinition")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"db")),Object(b.b)("td",{parentName:"tr",align:null},"Knex")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"},"SQLiteKnexDBDataProvider"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"protected-db"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"db"),": ",Object(b.b)("em",{parentName:"p"},"Knex")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-db"},"db"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L18"},"KnexDBDataProvider.ts:18"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablemap"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableMap"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableMap"),": ",Object(b.b)("em",{parentName:"p"},"ModelTableMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablemap"},"tableMap"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L20"},"KnexDBDataProvider.ts:20"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablename"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablename"},"tableName"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L19"},"KnexDBDataProvider.ts:19"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"batchread"},"batchRead"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"batchRead"),"(",Object(b.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#batchread"},"batchRead"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L100"},"KnexDBDataProvider.ts:100"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"relationField")),Object(b.b)("td",{parentName:"tr",align:null},"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"ids")),Object(b.b)("td",{parentName:"tr",align:null},"string[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",{parentName:"tr",align:null},"QueryFilter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",{parentName:"tr",align:null},"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"count"},"count"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"count"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#count"},"count"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L93"},"KnexDBDataProvider.ts:93"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",{parentName:"tr",align:null},"QueryFilter")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#create"},"create"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/SQLiteKnexDBDataProvider.ts#L17"},"SQLiteKnexDBDataProvider.ts:17"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",{parentName:"tr",align:null},"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"delete"},"delete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"delete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#delete"},"delete"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L53"},"KnexDBDataProvider.ts:53"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",{parentName:"tr",align:null},"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findby"},"findBy"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args?"),": FindByArgs, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findby"},"findBy"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L77"},"KnexDBDataProvider.ts:77"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"args?")),Object(b.b)("td",{parentName:"tr",align:null},"FindByArgs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",{parentName:"tr",align:null},"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findone"},"findOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findOne"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findone"},"findOne"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L66"},"KnexDBDataProvider.ts:66"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",{parentName:"tr",align:null},"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",{parentName:"tr",align:null},"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-getselectedfields"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," getSelectedFields"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getSelectedFields"),"(",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields"),": string[]): ",Object(b.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-getselectedfields"},"getSelectedFields"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L114"},"KnexDBDataProvider.ts:114"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"selectedFields")),Object(b.b)("td",{parentName:"tr",align:null},"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},"KnexDBDataProvider"),".",Object(b.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#update"},"update"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L38"},"KnexDBDataProvider.ts:38"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",{parentName:"tr",align:null},"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}l.isMDXComponent=!0}}]);