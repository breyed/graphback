(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{1333:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return u}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var a=r.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},b=function(e){var a=s(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=t,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,o(o({ref:a},p),{},{components:n})):r.a.createElement(u,o({ref:a},p))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},597:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return s}));var t=n(3),r=n(7),i=(n(0),n(1333)),c={id:"graphback-cli",title:"Graphback CLI",sidebar_label:"Graphback CLI"},o={unversionedId:"cli/graphback-cli",id:"version-0.14.x/cli/graphback-cli",isDocsHomePage:!1,title:"Graphback CLI",description:"Graphback helps you to kickstart your experience with any existing GraphQL implementation by generating backend and client side CRUD layer using your GraphQL data model. The CLI exposes a single generate command.",source:"@site/versioned_docs/version-0.14.x/cli/graphback-cli.md",slug:"/cli/graphback-cli",permalink:"/docs/0.14.x/cli/graphback-cli",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.14.x/cli/graphback-cli.md",version:"0.14.x",sidebar_label:"Graphback CLI",sidebar:"version-0.14.x/docs",previous:{title:"Create Graphback",permalink:"/docs/0.14.x/cli/create-graphback"},next:{title:"Release Notes",permalink:"/docs/0.14.x/releases"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Using the command",id:"using-the-command",children:[]}]}],p={rightToc:l};function s(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback helps you to kickstart your experience with any existing GraphQL implementation by generating backend and client side CRUD layer using your ",Object(i.b)("a",{parentName:"p",href:"/docs/0.14.x/model/datamodel"},"GraphQL data model"),". The CLI exposes a single ",Object(i.b)("inlineCode",{parentName:"p"},"generate")," command.  "),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"You can add ",Object(i.b)("inlineCode",{parentName:"p"},"Graphback CLI")," on your existing GraphQL project using either of the following commands. "),Object(i.b)("p",null,"With npm:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev graphback-cli\n")),Object(i.b)("p",null,"Or with yarn: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev graphback-cli\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"prerequisite"},"Prerequisite"),Object(i.b)("p",null,"You project must contain the configuration file that follows the format described by the ",Object(i.b)("a",{parentName:"p",href:"https://graphql-config.com/introduction"},"graphql-config"),"."),Object(i.b)("p",null,"Taking a ",Object(i.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," configuration file for example, your configuration should have the following minimum required entry:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"## Please review configuration and adjust it for your own project\nschema: ./src/schema/schema.graphql\nextensions:\n  graphback:\n    model: ./model/**/*.graphql\n    ## You can add as many Graphback plugins as you wish\n    ## Here we are only adding the Schema and Client plugin\n    plugins:\n      graphback-schema:\n        format: graphql\n        outputPath: ./src/schema/schema.graphql\n      graphback-client:\n        format: 'graphql'\n        outputFile: ./src/graphql/graphback.graphql   \n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you used ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-cli"},"graphql-cli")," to initialize\nthe project, this file will be automatic setup for you. Otherwise, you can still use the ",Object(i.b)("inlineCode",{parentName:"p"},"init")," command from the CLI to initialize\nthis configuration setup."))),Object(i.b)("h3",{id:"using-the-command"},"Using the command"),Object(i.b)("p",null,"To use Graphback generate command. In your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file, edit the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts")," parts and add the following line:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"generate": "graphback generate"\n')),Object(i.b)("p",null,"And finally, use npm or yarn to run it:"),Object(i.b)("p",null,"With yarn:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn generate\n")),Object(i.b)("p",null,"With npm:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run generate\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"generate")," command will execute generation process that will generate GraphQL server based on your data model."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Graphback CLI is now part of the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-cli"},"graphql-cli")," command line tool. Please consider installing it for wider set of features"))))}s.isMDXComponent=!0}}]);