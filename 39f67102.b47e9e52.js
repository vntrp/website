/*! For license information please see 39f67102.b47e9e52.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"Highlight",(function(){return m})),n.d(t,"default",(function(){return h}));var a=n(1),o=n(6),r=(n(0),n(142)),i=n(144),c=n(152),l=n(150),s={id:"tokenEconomyOverview",title:"Token Economy Overview",sidebar_label:"Token Economy Overview"},u={id:"tokenEconomyOverview",title:"Token Economy Overview",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/token-economy-overview.mdx",permalink:"/website/docs/tokenEconomyOverview",editUrl:"https://github.com/aracred/website/edit/master/docs/token-economy-overview.mdx",sidebar_label:"Token Economy Overview",sidebar:"someSidebar",previous:{title:"Design Goals",permalink:"/website/docs/designGoals"},next:{title:"Token Minting And Supply",permalink:"/website/docs/tokenMintingAndSupply"}},b=[],m=function(e){var t=e.children,n=e.color;return Object(r.b)("h2",null,Object(r.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t))},p={rightToc:b,Highlight:m};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"Governance",value:"governance"},{label:"Automated Market Maker",value:"amm"},{label:"Diagram",value:"diagram"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"overview",mdxType:"TabItem"},Object(r.b)("img",{alt:"Token Economy Overview",src:Object(i.a)("img/token-economy-whiteboard.png")})),Object(r.b)(l.a,{value:"governance",mdxType:"TabItem"},Object(r.b)("img",{alt:"Token Minting Governance",src:Object(i.a)("img/governance.jpg")})),Object(r.b)(l.a,{value:"amm",mdxType:"TabItem"},Object(r.b)("img",{alt:"Automated Market Maker",src:Object(i.a)("img/uniswap.jpg")})),Object(r.b)(l.a,{value:"diagram",mdxType:"TabItem"},Object(r.b)("img",{alt:"Grain Dynamics",src:Object(i.a)("img/aracred-token-market-overview.svg")}),Object(r.b)("a",{href:"https://www.lucidchart.com/invitations/accept/53bb9538-8ec1-472a-a955-8ff0b09b06b6"},"Click here to explore and/or fork the diagram"))),Object(r.b)(m,{color:"blue",mdxType:"Highlight"},"In-game Economy"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"The In-game Community Economy bubble on the top left.")),Object(r.b)("p",null,"For the purposes of this exercise the in-game economy is treated as a black box. We assume that an algorithm that gives players points based on rules of a game is configured to the satisfaction of players and that it produces scores that we can mint tokens from. This could be SourceCred, a simple nomination bot, or any other type of system."),Object(r.b)(m,{color:"pink",mdxType:"Highlight"},"Token Governance"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"The Access Rights section in the top of the diagram.")),Object(r.b)("p",null,"We then have the governance mechanism that determines how tokens are minted/burned. "),Object(r.b)("p",null,"The mechanism itself could be:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a standalone token contract"),Object(r.b)("li",{parentName:"ul"},"a DAO that can mint shares")),Object(r.b)("p",null,"The governance mechanism for minting and burning of tokens could be any of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Admin key"),Object(r.b)("li",{parentName:"ul"},"Multi-sig"),Object(r.b)("li",{parentName:"ul"},"DAO")),Object(r.b)(m,{color:"orange",mdxType:"Highlight"},"On-chain Token Market"),Object(r.b)("p",null,"The primary token market is assumed to be an automated market mechanism such as a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://discourse.sourcecred.io/t/bonding-curve-references/271"}),"bonding curve"),". This solves the bootstrapping problem allowing the market to exist in a permissionless way. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://uniswap.exchange/"}),"Uniswap")," is the most readily available of these mechanisms, but this could also be an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://fundraising.aragon.black/"}),"Aragon Fundraising DAO")," or some other type of market maker. The benefit of modeling this using Uniswap is that it is a generic mechanism that allows anyone to setup a token market regardless of the on-chain contract/system they use to mint tokens."),Object(r.b)("p",null,"Some notes on Uniswap V1:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'The "fee" is just a bit of each transaction that stays in the pool. Liquidity providers are entitled to a portion of the pool relative to how much liquidity they provided. As the pool grows, the total value that a liquidity provider has claims on increases.'),Object(r.b)("li",{parentName:"ul"},"If the pool is an ETH pair it's really just 2X the amount of ETH in the pool because the ERC-20 in the pool must always equal the ETH on the other side of that market."),Object(r.b)("li",{parentName:"ul"},'An oracle is then needed to get the price of ETH, and then you can easily calculate the "market cap" of that token based on the ETH in the pool.'),Object(r.b)("li",{parentName:"ul"},"So the value of your pool tokens = market cap of token / your percentage of the pool.")),Object(r.b)(m,{color:"green",mdxType:"Highlight"},"Global Markets"),Object(r.b)("p",null,"The larger game nests economic systems. It's economics all the way down."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The in-game economy"),Object(r.b)("li",{parentName:"ul"},"The primary token market"),Object(r.b)("li",{parentName:"ul"},"The secondary token market"),Object(r.b)("li",{parentName:"ul"},"The broader Ethereum economy"),Object(r.b)("li",{parentName:"ul"},"The global fiat economy")),Object(r.b)("p",null,"All of these markets affect the prices of each other. For example, if there is a token/ETH Uniswap pool the value of your token will fluctuate as ETH prices fluctuate. Furthermore, if your token is cheap it becomes very easy to 51% attack either the token itself of the market/liquidity-pool for the token. For this reaon it is important that the tokeneconomics of the system are robust against both intentional attacks and market fluctuations. We explore these in the next section."))}h.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,h=b["".concat(i,".").concat(p)]||b[p]||m[p]||r;return n?o.a.createElement(h,c({ref:t},s,{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";var a=n(0),o=n(35);t.a=function(){return Object(a.useContext)(o.a)}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(143);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},145:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},148:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=o},150:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},152:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(148);var i=function(){return Object(a.useContext)(r.a)},c=n(145),l=n.n(c),s=n(93),u=n.n(s);const b=37,m=39;t.a=function(e){const{block:t,children:n,defaultValue:r,values:c,groupId:s}=e,{tabGroupChoices:p,setTabGroupChoices:h}=i(),[f,d]=Object(a.useState)(r);if(null!=s){const e=p[s];null!=e&&e!==f&&d(e)}const y=e=>{d(e),null!=s&&h(s,e)},v=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:l()("tab-item",u.a.tabItem,{"tab-item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case m:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}}}]);