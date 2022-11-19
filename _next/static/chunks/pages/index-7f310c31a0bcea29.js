(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3415:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});t(7294);var i=t(5005),s=t(4105),r=t(9521),a=t(8209),c=t(5893),o=r.ZP.div.withConfig({displayName:"excel__Box",componentId:"sc-t5a7kr-0"})(["display:flex;align-items:center;.file{position:relative;text-decoration:none;text-indent:0;line-height:20px;width:200px;height:40px;svg{margin-right:10px;}input{position:absolute;font-size:100px;right:0;top:0;opacity:0;width:200px;height:40px;}}"]),l=r.ZP.div.withConfig({displayName:"excel__Tips",componentId:"sc-t5a7kr-1"})(["margin-left:20px;opacity:0.6;a{color:#000;font-weight:bolder;}"]);function d(e){return(0,c.jsxs)(o,{children:[(0,c.jsxs)(i.Z,{variant:"flat",className:"file",children:[(0,c.jsx)(a.Z,{}),(0,c.jsx)("span",{children:"Import Addresses"}),(0,c.jsx)("input",{type:"file",accept:".xlsx, .xls, .csv",onChange:function(n){var t=n.target.files,i=new FileReader;i.onload=function(n){try{var t=n.target.result,i=s.ij(t,{type:"binary"}),r=[];for(var a in i.Sheets)i.Sheets.hasOwnProperty(a)&&(r=r.concat(s.P6.sheet_to_json(i.Sheets[a],{raw:!1})));console.log("Upload file successful!"),e.getChildrenMsg(r)}catch(c){console.error("Unsupported file type!")}},i.readAsBinaryString(t[0])}})]}),(0,c.jsxs)(l,{children:["Supported file formats: .xlsx, .xls, .csv, ",(0,c.jsx)("a",{href:"/multisender/Book1.csv",target:"_blank",children:"Example"})]})]})}},4018:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(9521),s=t(682),r=t(5893),a=i.ZP.div.withConfig({displayName:"footerBox__Footer",componentId:"sc-n6udw2-0"})(["height:80px;margin-top:100px;.midBox{display:flex;justify-content:space-between;align-items:center;}img{width:40px;height:40px;}.lft{padding-left:10px;}"]);function c(){return(0,r.jsx)(a,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"midBox",children:[(0,r.jsx)("div",{className:"lft",children:"\xa9 2022 Web3camp.us"}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"https://github.com/Web3-Camp/multisender",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:"https://web3camp.us/assets/images/GitHub-Mark.png",alt:""})})})]})})})}},3305:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t(9521),s=t(6968),r=t(4463),a=t(5893),c=i.ZP.div.withConfig({displayName:"loading__Box",componentId:"sc-7t6fot-0"})(["background:rgba(0,0,0,0.2);width:100vw;height:100vh;position:fixed;left:0;top:0;display:flex;justify-content:center;align-items:center;z-index:99999;"]),o=i.ZP.div.withConfig({displayName:"loading__LoadingInner",componentId:"sc-7t6fot-1"})(["width:400px;background:#fff;box-shadow:0 0 5px #ccc;border-radius:6px;padding:40px 0;display:flex;flex-direction:column;justify-content:center;align-items:center;.image{margin-bottom:20px;}"]);function l(){var e=(0,r.$)().state.tips;return(0,a.jsx)(c,{children:(0,a.jsxs)(o,{children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)(s.Z,{animation:"border",variant:"flat"})}),(0,a.jsx)("div",{children:e})]})})}},472:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var i=t(29),s=t(7794),r=t.n(s),a=t(1608),c=t(1555),o=t(4119),l=t(1358),d=t(4499),u=t(5005),p=t(9521),x=t(7294),h=t(4463),f=t(3415),m=t(7922),g=t(6076),v=t(820),j=t(5893),b=p.ZP.div.withConfig({displayName:"step1__Box",componentId:"sc-2clox2-0"})([".height50{height:200px;}.upload{svg{margin-right:10px;}}"]),w=p.ZP.div.withConfig({displayName:"step1__TipsBox",componentId:"sc-2clox2-1"})(["margin-bottom:20px;"]);function y(e){var n=(0,h.$)(),t=n.dispatch,s=n.state,p=s.account,y=s.web3Provider,N=(0,x.useState)("0x000000000000000000000000000000000000bEEF"),_=N[0],Z=N[1],k=(0,x.useState)(18),C=k[0],I=k[1],P=(0,x.useState)(""),S=P[0],B=P[1],E=(0,x.useState)(!0),T=E[0],A=E[1],F=(0,x.useState)(""),q=F[0],z=F[1];(0,x.useEffect)((function(){A(!(p&&""!==p&&S&&_))}),[p,S,_,C]),(0,x.useEffect)((function(){if(null!=y){var e=function(){var e=(0,i.Z)(r().mark((function e(){var n,t,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x000000000000000000000000000000000000bEEF"!==_){e.next=2;break}return e.abrupt("return");case 2:return n=new g.CH(_,v,y),e.prev=3,e.next=6,null===n||void 0===n?void 0:n.decimals();case 6:t=e.sent,I(t),z(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),z((null===(i=e.t0.data)||void 0===i?void 0:i.message)||e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_,y]),(0,x.useEffect)((function(){M()}),[]);var M=function(){var e=(0,i.Z)(r().mark((function e(){var n,t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getNetwork();case 2:n=e.sent,t=n.chainId,console.log("chainId",t),1!==t&&137!==t&&56!==t&&97!==t&&z("Unsupported network!!!!");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){var n=e.target,t=n.name,i=n.value;switch(t){case"token":Z(i);break;case"amounts":B(i)}},H=function(){var n=(0,i.Z)(r().mark((function n(){var i;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.handleNext(2),i={amounts:S,tokenAddress:_,decimals:C},t({type:m.U.STORE_FIRST,payload:i});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,j.jsxs)(b,{children:[(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(c.Z,{md:9,children:(0,j.jsx)(o.Z,{controlId:"Token",label:"Token",className:"mb-3",children:(0,j.jsx)(l.Z.Control,{type:"text",name:"token",placeholder:"Token",value:_,onChange:function(e){return O(e)}})})}),(0,j.jsx)(c.Z,{md:3,children:(0,j.jsx)(o.Z,{controlId:"Decimals",label:"Decimals",className:"mb-3",children:(0,j.jsx)(l.Z.Control,{type:"text",name:"decimals",placeholder:"Decimals",value:C,readOnly:!0})})})]}),(0,j.jsx)("div",{className:"mb-3",children:(0,j.jsx)(f.default,{getChildrenMsg:function(e){console.log(e);var n="";e.map((function(e){n+="".concat(e.address,",").concat(e.amount," \n")})),B(n)}})}),(0,j.jsx)(a.Z,{children:(0,j.jsx)(c.Z,{md:12,children:(0,j.jsx)(o.Z,{controlId:"Addresses",label:"Addresses with Amounts",className:"mb-3",children:(0,j.jsx)(l.Z.Control,{placeholder:"Addresses with Amounts",as:"textarea",name:"amounts",className:"height50",value:S,onChange:function(e){return O(e)}})})})}),(0,j.jsx)(w,{children:!!q.length&&(0,j.jsx)(d.Z,{variant:"danger",children:q})}),(0,j.jsx)("div",{children:(0,j.jsx)(u.Z,{variant:"flat",onClick:function(){return H()},disabled:T,children:"Next"})})]})}},6567:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var i=t(29),s=t(7794),r=t.n(s),a=t(9521),c=t(7294),o=t(4463),l=t(5995),d=t(5893),u=a.ZP.div.withConfig({displayName:"step3__Box",componentId:"sc-1rmeuts-0"})(["h5{padding:10px 0 5px;color:#000000;}.transaction{padding:20px 0 40px;}"]);function p(){var e=(0,o.$)().state,n=e.txHash,t=e.txHashList,s=e.web3Provider,a=(0,c.useState)(""),p=a[0],x=a[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)(r().mark((function e(){var n,t,i,a,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,s.getNetwork();case 3:i=e.sent,a=i.chainId,c=l.filter((function(e){return e.id===a})),t=null===(n=c[0])||void 0===n?void 0:n.url,x(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,d.jsx)(u,{children:(0,d.jsxs)("div",{children:[null!=n&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h5",{children:"Approval history"}),(0,d.jsx)("ul",{className:"transaction",children:(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"".concat(p,"/").concat(n),target:"_blank",rel:"noopener noreferrer",children:n})})})]}),(0,d.jsx)("h5",{children:"Transactions history"}),(0,d.jsx)("ul",{className:"transaction",children:t&&t.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"".concat(p,"/").concat(e),target:"_blank",rel:"noopener noreferrer",children:e})},e)}))})]})})}},5006:function(e,n,t){"use strict";t.r(n);var i=t(682),s=t(7525),r=t(1608),a=t(1555),c=t(9521),o=t(5497),l=t(4018),d=t(1439),u=t(9629),p=t(4324),x=t(472),h=t(1836),f=t(6567),m=t(7294),g=t(3305),v=t(4463),j=t(5893),b=c.ZP.div.withConfig({displayName:"pages__MainBox",componentId:"sc-uua8fq-0"})(["display:flex;flex-grow:1;"]),w=c.ZP.main.withConfig({displayName:"pages__MainContent",componentId:"sc-uua8fq-1"})(["display:flex;flex-direction:column;min-height:100vh;"]),y=(0,c.ZP)(i.Z).withConfig({displayName:"pages__BgBox",componentId:"sc-uua8fq-2"})(["margin-top:30px;"]),N=(0,c.ZP)(s.Z).withConfig({displayName:"pages__CardBox",componentId:"sc-uua8fq-3"})(["border:0;box-shadow:0 0 5px #ccc;border-radius:6px;"]),_=c.ZP.div.withConfig({displayName:"pages__NavBox",componentId:"sc-uua8fq-4"})(["height:120px;margin:40px;.bg{border-bottom:1px solid #eee;height:40px;}.box{width:100%;display:flex;justify-content:space-between;height:80px;}li{background:#fff;padding:0 40px;.circle{width:80px;height:80px;border-radius:80px;box-shadow:0 0 5px #eee;background:#f8f8f8;display:flex;justify-content:center;align-items:center;color:#cccccc;font-size:16px;}.title{padding:20px 0 40px;font-size:14px;opacity:0.8;span{opacity:0.6;}}&.active{.circle{background:#fff;box-shadow:0 0 10px rgba(128,0,128,0.3);color:purple;}.title{padding:20px 0 40px;font-size:14px;opacity:1;color:purple;}}}"]);n.default=function(){var e=(0,m.useState)(1),n=e[0],t=e[1],i=(0,v.$)().state.tips,s=function(e){t(e)};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(w,{children:[(0,j.jsx)(o.default,{}),null!=i&&(0,j.jsx)(g.default,{}),(0,j.jsx)(b,{children:(0,j.jsx)(y,{children:(0,j.jsx)(r.Z,{children:(0,j.jsxs)(a.Z,{md:12,xs:12,children:[(0,j.jsx)(_,{children:(0,j.jsx)("div",{className:"bg",children:(0,j.jsxs)("ul",{className:"box",children:[(0,j.jsxs)("li",{className:1===n?"active":"",onClick:function(){return s(1)},children:[(0,j.jsx)("div",{className:"circle",children:(0,j.jsx)(d.Z,{})}),(0,j.jsxs)("div",{className:"title",children:[(0,j.jsx)("span",{children:"Step1. "}),"Prepare"]})]}),(0,j.jsxs)("li",{className:2===n?"active":"",children:[(0,j.jsx)("div",{className:"circle",children:(0,j.jsx)(u.Z,{})}),(0,j.jsxs)("div",{className:"title",children:[(0,j.jsx)("span",{children:"Step2."})," Confirm"]})]}),(0,j.jsxs)("li",{className:3===n?"active":"",children:[(0,j.jsxs)("div",{className:"circle",children:[" ",(0,j.jsx)(p.Z,{})]}),(0,j.jsxs)("div",{className:"title",children:[(0,j.jsx)("span",{children:"Step3."})," Result"]})]})]})})}),(0,j.jsxs)(N,{body:!0,children:[1===n&&(0,j.jsx)(x.default,{handleNext:s}),2===n&&(0,j.jsx)(h.default,{handleNext:s}),3===n&&(0,j.jsx)(f.default,{})]})]})})})}),(0,j.jsx)(l.default,{})]})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5006)}])},67:function(){},2061:function(){}},function(e){e.O(0,[251,521,777,426,497,836,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);