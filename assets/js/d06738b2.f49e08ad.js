(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[952],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9396:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:5},s="Start Withdraw",c={unversionedId:"plasma/ERC20/startWithdraw",id:"plasma/ERC20/startWithdraw",isDocsHomePage:!1,title:"Start Withdraw",description:"`js",source:"@site/docs/plasma/ERC20/startWithdraw.md",sourceDirName:"plasma/ERC20",slug:"/plasma/ERC20/startWithdraw",permalink:"/matic.js/docs/plasma/ERC20/startWithdraw",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/docs/plasma/ERC20/startWithdraw.md",version:"current",lastUpdatedBy:"ujjwalgupta94",lastUpdatedAt:1625658563,formattedLastUpdatedAt:"7/7/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Transfer ERC20",permalink:"/matic.js/docs/plasma/ERC20/transferERC20Tokens"},next:{title:"Withdraw ERC20",permalink:"/matic.js/docs/plasma/ERC20/withdraw"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"start-withdraw"},"Start Withdraw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"matic.startWithdraw(token, amount, options);\n")),(0,i.kt)("p",null,"Start withdraw process with given ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token")," must be valid ERC20 token address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," must be token amount in wei (string, not in Number)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," see ",(0,i.kt)("a",{parentName:"li",href:"#approveERC20TokensForDeposit"},"more infomation here"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi")," must be boolean value. For Byte code of transaction, use ",(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi: true"))))),(0,i.kt)("p",null,"This returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," object, which will be fulfilled when transaction gets confirmed (when receipt is generated)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'matic.startWithdraw("0x718Ca123...", "1000000000000000000", {\n  from: "0xABc578455...",\n});\n')),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);