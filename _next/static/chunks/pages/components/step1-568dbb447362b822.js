(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{3415:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});n(7294);var a=n(5005),r=n(4105),s=n(9521),i=n(8209),o=n(5893);function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=s.ZP.div.withConfig({displayName:"excel__Box",componentId:"sc-t5a7kr-0"})(["display:flex;align-items:center;.file{position:relative;text-decoration:none;text-indent:0;line-height:20px;width:200px;height:40px;svg{margin-right:10px;}input{position:absolute;font-size:100px;right:0;top:0;opacity:0;width:200px;height:40px;}}"]),p=s.ZP.div.withConfig({displayName:"excel__Tips",componentId:"sc-t5a7kr-1"})(["margin-left:20px;opacity:0.6;"]);function d(e){return(0,o.jsxs)(c,{children:[(0,o.jsxs)(a.Z,{variant:"flat",className:"file",children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)("span",{children:"Import Addresses"}),(0,o.jsx)("input",{type:"file",accept:".xlsx, .xls, .csv",onChange:function(t){var n=t.target.files,a=n[0].name,s=a.substr(a.lastIndexOf(".")+1,a.length),i=new FileReader;i.readAsBinaryString(n[0]),i.onload=function(t){try{var n=t.target.result,a=r.ij(n,{type:"binary"}),i=[];for(var o in a.Sheets)if(a.Sheets.hasOwnProperty(o)&&(/^xls/.test(s)&&(i=i.concat(r.P6.sheet_to_json(a.Sheets[o],{raw:!1}))),"csv"==s)){var u,c=r.P6.sheet_to_csv(a.Sheets[o]).split("\n"),p=[],d=l(c);try{for(d.s();!(u=d.n()).done;){var f=u.value.split(","),y={address:f[0],amount:f[1]};p.push(y)}}catch(m){d.e(m)}finally{d.f()}i=p}console.log("Upload file successful!"),e.getChildrenMsg(i)}catch(h){console.error("Unsupported file type!")}}}})]}),(0,o.jsx)(p,{children:"Supported file formats: .xlsx, .xls, .csv,"}),(0,o.jsx)("strong",{onClick:function(){e.getChildrenMsg([{address:"<\u5730\u5740>",amount:"<\u6570\u91cf>"},{address:"<addresss>",amount:"<amount>"},{address:"0x0000000000000000000000000000000000000000",amount:"1"}])},children:"Example"})]})}},472:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(29),r=n(7794),s=n.n(r),i=n(1608),o=n(1555),l=n(4119),u=n(1358),c=n(2824),p=n(5005),d=n(9521),f=n(7294),y=n(4463),m=n(3415),h=n(7922),v=n(6076),x=n(820),b=n(8864),g=n(5893),w=d.ZP.div.withConfig({displayName:"step1__Box",componentId:"sc-2clox2-0"})([".height50{height:200px;}.upload{svg{margin-right:10px;}}"]),T=d.ZP.div.withConfig({displayName:"step1__TipsBox",componentId:"sc-2clox2-1"})(["margin-bottom:20px;"]);function j(e){var t=(0,y.$)(),n=t.dispatch,r=t.state,d=r.account,j=r.web3Provider,E=(0,f.useState)("0x000000000000000000000000000000000000bEEF"),_=E[0],C=E[1],S=(0,f.useState)(18),Z=S[0],k=S[1],A=(0,f.useState)(""),N=A[0],O=A[1],I=(0,f.useState)(!0),M=I[0],P=I[1],B=(0,f.useState)(""),z=B[0],R=B[1],$=(0,f.useState)(null),D=$[0],F=$[1];(0,f.useEffect)((function(){P(!(d&&""!==d&&N&&_))}),[d,N,_,Z]),(0,f.useEffect)((function(){if(null!=j){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x000000000000000000000000000000000000bEEF"!==_){e.next=2;break}return e.abrupt("return");case 2:return t=new v.CH(_,x,j),e.prev=3,e.next=6,null===t||void 0===t?void 0:t.decimals();case 6:n=e.sent,k(n),R(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),R((null===(a=e.t0.data)||void 0===a?void 0:a.message)||e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_,j]),(0,f.useEffect)((function(){U()}),[]);var U=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getNetwork();case 2:t=e.sent,n=t.chainId,b.filter((function(e){return e.chainId===n})).length?F(!0):(R("Unsupported network!!!!"),F(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"token":C(a);break;case"amounts":O(a)}},J=function(){var t=(0,a.Z)(s().mark((function t(){var a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.handleNext(2),a={amounts:N,tokenAddress:_,decimals:Z},n({type:h.U.STORE_FIRST,payload:a});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,g.jsxs)(w,{children:[(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(o.Z,{md:9,children:(0,g.jsx)(l.Z,{controlId:"Token",label:"Token",className:"mb-3",children:(0,g.jsx)(u.Z.Control,{type:"text",name:"token",placeholder:"Token",value:_,onChange:function(e){return V(e)}})})}),(0,g.jsx)(o.Z,{md:3,children:(0,g.jsx)(l.Z,{controlId:"Decimals",label:"Decimals",className:"mb-3",children:(0,g.jsx)(u.Z.Control,{type:"text",name:"decimals",placeholder:"Decimals",value:Z,readOnly:!0})})})]}),(0,g.jsx)("div",{className:"mb-3",children:(0,g.jsx)(m.default,{getChildrenMsg:function(e){console.log(e);var t="";e.map((function(e){t+="".concat(e.address,",").concat(e.amount," \n")})),O(t)}})}),(0,g.jsx)(i.Z,{children:(0,g.jsx)(o.Z,{md:12,children:(0,g.jsx)(l.Z,{controlId:"Addresses",label:"Addresses with Amounts",className:"mb-3",children:(0,g.jsx)(u.Z.Control,{placeholder:"Addresses with Amounts",as:"textarea",name:"amounts",className:"height50",value:N,onChange:function(e){return V(e)}})})})}),(0,g.jsx)(T,{children:!!z.length&&(0,g.jsx)(c.Z,{variant:"danger",children:z})}),(0,g.jsx)("div",{children:(0,g.jsx)(p.Z,{variant:"flat",onClick:function(){return J()},disabled:!D||M,children:"Next"})})]})}},213:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/step1",function(){return n(472)}])},8209:function(e,t,n){"use strict";var a=n(7294),r=n(5697),s=n.n(r),i=["color","size","title"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=(0,a.forwardRef)((function(e,t){var n=e.color,r=e.size,s=e.title,u=l(e,i);return a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n},u),s?a.createElement("title",null,s):null,a.createElement("path",{fillRule:"evenodd",d:"M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"}),a.createElement("path",{fillRule:"evenodd",d:"M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"}))}));u.propTypes={color:s().string,size:s().oneOfType([s().string,s().number]),title:s().string},u.defaultProps={color:"currentColor",size:"1em",title:null},t.Z=u},1608:function(e,t,n){"use strict";var a=n(4184),r=n.n(a),s=n(7294),i=n(6792),o=n(5893);const l=s.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},s)=>{const l=(0,i.vE)(e,"row"),u=(0,i.pi)(),c=(0,i.zG)(),p=`${l}-cols`,d=[];return u.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r=e!==c?`-${e}`:"";null!=n&&d.push(`${p}${r}-${n}`)})),(0,o.jsx)(n,{ref:s,...a,className:r()(t,l,...d)})}));l.displayName="Row",t.Z=l},67:function(){},2061:function(){},820:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},8864:function(e){"use strict";e.exports=JSON.parse('[{"chainId":1,"name":"mainnet","sender":"0x71402BD4ccE356C41Bb3c5070a0E124E9989cbc0"},{"chainId":56,"name":"bsc","sender":"0x525E3137b1c19473aab0383042782b3031cfC747"},{"chainId":97,"name":"bsctest","sender":"0xc5c13B7eA0eB0D9ceC345C16349a2b114517b66b"},{"chainId":137,"name":"polygon","sender":"0xa6A8249A25287091bC3825f737EdEE9b76d262ed"}]')}},function(e){e.O(0,[251,521,959,218,774,888,179],(function(){return t=213,e(e.s=t);var t}));var t=e.O();_N_E=t}]);