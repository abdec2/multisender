"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{1836:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var a=t(6687),s=t(29),r=t(7794),i=t.n(r),o=t(5147),l=t(1358),c=t(2824),u=t(5005),p=t(9521),d=t(7294),m=t(4463),y=t(2593),h=t(6076),f=t(5553),x=t(9485),b=t(6441),v=t(1046),g=t(820),T=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"ClaimedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"MultisendToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"arrayLimit","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address[]","name":"_targets","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"batchSendERC20","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable[]","name":"_targets","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"batchSendEther","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"claimBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),k=JSON.parse('{"K":"0x71402BD4ccE356C41Bb3c5070a0E124E9989cbc0"}'),S=JSON.parse('{"K":"0xa6A8249A25287091bC3825f737EdEE9b76d262ed"}'),w=JSON.parse('{"K":"0x525E3137b1c19473aab0383042782b3031cfC747"}'),j=JSON.parse('{"K":"0xc5c13B7eA0eB0D9ceC345C16349a2b114517b66b"}'),E=t(7922),N=t(5995),M=t(8864),A=t(5893),C=p.ZP.div.withConfig({displayName:"step2__Box",componentId:"sc-19bj6w4-0"})(["padding:40px 0;.numbers{font-size:20px;}.tips{font-size:12px;color:#999;}h5{padding:10px 0 5px 10px;color:#000000;}.ml2{margin-left:10px;}.flexNumber{word-break:break-all;}"]),I=p.ZP.div.withConfig({displayName:"step2__TableBox",componentId:"sc-19bj6w4-1"})(["margin-top:10px;height:470px;padding-bottom:20px;overflow-y:auto;.tableStyle{border-top:1px solid #eee;color:#666666;th{height:60px;line-height:60px;}.first{display:flex;justify-content:center;align-items:stretch;.form-check-inline{margin-right:0;display:flex;margin-top:13px;}}td{line-height:50px;word-break:break-all;&:nth-child(4){width:30%;}}tr:nth-child(2n+1) td{background:rgba(255,255,255,0.3)!important;color:#666666!important;}tr:hover td{background:rgba(0,0,0,0.01)!important;}}"]),U=p.ZP.h5.withConfig({displayName:"step2__H5Box",componentId:"sc-19bj6w4-2"})(["display:inline-block;margin-bottom:20px;"]),_=p.ZP.div.withConfig({displayName:"step2__TipsBox",componentId:"sc-19bj6w4-3"})(["margin-bottom:20px;"]);k.K,w.K,S.K,j.K;function O(e){var n=(0,m.$)(),t=n.state,r=n.dispatch,p=t.account,k=t.first,S=t.web3Provider,w=e.handleNext,j=(0,d.useState)("0"),O=j[0],H=j[1],P=(0,d.useState)("0"),Z=P[0],B=P[1],R=(0,d.useState)([]),J=(R[0],R[1],(0,d.useState)("0")),F=J[0],K=J[1],$=(0,d.useState)("0"),z=$[0],D=$[1],L=(0,d.useState)([]),W=L[0],X=L[1],G=(0,d.useState)([]),Y=G[0],Q=G[1],V=(0,d.useState)(200)[0],q=(0,d.useState)(""),ee=q[0],ne=q[1],te=(0,d.useState)(),ae=te[0],se=te[1],re=(0,d.useState)(""),ie=re[0],oe=re[1],le=(0,d.useState)(""),ce=(le[0],le[1]),ue=(0,d.useState)("unlimited"),pe=ue[0],de=ue[1],me=(0,d.useState)(!1),ye=(me[0],me[1]),he=(0,d.useState)(""),fe=(he[0],he[1]),xe=(0,d.useState)([]),be=(xe[0],xe[1],(0,d.useState)("")),ve=(be[0],be[1]),ge=(0,d.useState)(!1),Te=ge[0],ke=ge[1],Se=(0,d.useState)(),we=Se[0],je=Se[1],Ee=(0,d.useState)([]),Ne=Ee[0],Me=Ee[1],Ae=(0,d.useState)([]),Ce=Ae[0],Ie=Ae[1],Ue=(0,d.useState)(""),_e=Ue[0],Oe=Ue[1],He=(0,d.useState)([]),Pe=He[0],Ze=He[1];(0,d.useEffect)((function(){if(null!=k){var e=k.amounts,n=k.tokenAddress,t=(k.decimals,e.split("\n")),a=[];t.map((function(e){e&&a.push({address:e.split(",")[0],amount:parseFloat(e.split(",")[1])})}));X(a),Be(),"0x000000000000000000000000000000000000bEEF"===n?Fe():Ke()}}),[k]);var Be=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,a,s,r,o,l,c,u,p,d,m,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k){e.next=2;break}return e.abrupt("return");case 2:n=k.amounts,t=n.split("\n"),a=[],s=[],r=y.O$.from("0"),o="",l=0;case 9:if(!(l<t.length)){e.next=29;break}if(0!==(u=null===(c=t[l])||void 0===c?void 0:c.trim()).length){e.next=14;break}return console.log("skip empty line"),e.abrupt("continue",26);case 14:if(p=u.split(","),d=p[0].trim(),m=k.decimals,h=f.vz(p[1].trim(),m),parseFloat(p[1].trim()),x.UJ(d)){e.next=22;break}return console.log("Invalid address: ",d),e.abrupt("continue",26);case 22:a.push(d),s.push(h),r=r.add(y.O$.from(h)),o=f.bM(r,m);case 26:l++,e.next=9;break;case 29:H(o),Q(a),console.log("Total address : ".concat(a.length,", Total amount : ").concat(O));case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,a,s,r,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.next=3,S.getNetwork();case 3:if(a=e.sent,s=a.chainId,console.log("chainId",s),o=N.filter((function(e){return e.id===s})),t=null===(n=o[0])||void 0===n?void 0:n.url,!(l=M.filter((function(e){return e.chainId===s}))).length){e.next=13;break}r=l[0].sender,e.next=15;break;case 13:return console.error("Unsupported network!!!!"),e.abrupt("return");case 15:oe(r),ce(t),console.log("sender address: ",r);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){ae&&ie&&Je()}),[ae,ie]),(0,d.useEffect)((function(){Re()}),[]),(0,d.useEffect)((function(){null!=k&&(ae||"0x000000000000000000000000000000000000bEEF"===k.tokenAddress)&&ie&&ze()}),[k,ae,ie]);var Je=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,a,s,r,o,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k){e.next=2;break}return e.abrupt("return");case 2:if(ae&&null!=p){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,ae.allowance(p,ie);case 6:return n=e.sent,console.log("My allowance: ",n.toString()),t=k.decimals,B(f.bM(n,t)),e.next=12,ae.symbol();case 12:return a=e.sent,console.log("Token symbol: ",a),ne(a),e.next=17,ae.balanceOf(p);case 17:return s=e.sent,r=f.bM(s,t),console.log("My balance: ",r),K(r),o=S.getSigner(p),e.next=24,o.getBalance();case 24:l=e.sent,D(f.dF(l));case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k){e.next=2;break}return e.abrupt("return");case 2:return r({type:E.U.TIPS,payload:"Query balance in progress... "}),se(null),B("0"),ne("ETH"),n=k.decimals,t=S.getSigner(p),e.next=10,t.getBalance();case 10:a=e.sent,s=f.bM(a,n),K(s),D(s);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ke=function(){var e=(0,s.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k){e.next=2;break}return e.abrupt("return");case 2:n=k.tokenAddress,t=new h.CH(n,g,S),r({type:E.U.TIPS,payload:"Query token contract... "}),console.log("Send ERC20 token, token address: ",n,t),se(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$e=function(e){var n=e.target.value;de(n)},ze=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k){e.next=2;break}return e.abrupt("return");case 2:if("0x000000000000000000000000000000000000bEEF"!==k.tokenAddress){e.next=7;break}Ge(),e.next=9;break;case 7:return e.next=9,Ye();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),De=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,a,s,o,l,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k){e.next=2;break}return e.abrupt("return");case 2:n=new h.CH(ie,T,S),t=S.getSigner(p),console.log("signer: ",t),console.log("multiSender: ",n),console.log("multiSender estimateGas",n.estimateGas),a=0,s=[],o=0;case 10:if(!(o<Y.length)){e.next=22;break}return a++,l=Ne.slice(o,o+V),c=Ce.slice(o,o+V),u=c.reduce((function(e,n){return e.add(n)})),fe("Sending Ether in progress... (".concat(a,"/").concat(Math.ceil(Y.length/V),")")),r({type:E.U.TIPS,payload:"Sending Ether in progress... (".concat(a,"/").concat(Math.ceil(Y.length/V),")")}),e.next=19,n.connect(t).batchSendEther(l,c,{from:p,value:b.$P(u)}).then((function(e){console.log("batchSendEther",e),s.push(e.hash||(null===e||void 0===e?void 0:e.transactionHash)),a>=Math.ceil(Y.length/V)&&(ye(!1),r({type:E.U.TIPS,payload:null}),r({type:E.U.STORE_TXHASHLIST,payload:s}),w(3))})).catch((function(e){var n;console.error("batchSendEther error: ",e),Oe((null===(n=e.data)||void 0===n?void 0:n.message)||e.message),ye(!1),r({type:E.U.TIPS,payload:null})}));case 19:o+=V,e.next=10;break;case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,s,o,l,c,u,d,m,y,f,x;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k&&null!=ae){e.next=2;break}return e.abrupt("return");case 2:n=S.getSigner(p),k.amounts,t=k.tokenAddress,s=new h.CH(ie,T,S),o=0,l=[],c=(0,a.Z)(Pe),u=0;case 9:if(!(u<Ne.length)){e.next=37;break}return o++,d=Ne.slice(u,u+V),m=Ce.slice(u,u+V),fe("Sending ERC20 token in progress... (".concat(o,"/").concat(Math.ceil(Y.length/V),")")),r({type:E.U.TIPS,payload:"Sending ERC20 token in progress... (".concat(o,"/").concat(Math.ceil(Y.length/V),")")}),e.prev=15,e.next=18,s.connect(n).batchSendERC20(t,d,m);case 18:return y=e.sent,e.next=21,y.wait();case 21:f=e.sent,console.log("batchSendERC20",f),l.push(f.hash||f.transactionHash),c=c.concat(d),o>=Math.ceil(Y.length/V)&&(ye(!1),r({type:E.U.TIPS,payload:null}),r({type:E.U.STORE_TXHASHLIST,payload:l}),w(3),console.error(Pe,c)),e.next=34;break;case 28:e.prev=28,e.t0=e.catch(15),ye(!1),r({type:E.U.TIPS,payload:null}),Oe((null===(x=e.t0.data)||void 0===x?void 0:x.message)||e.t0.message),o>=Math.ceil(Y.length/V)&&console.error(Pe);case 34:u+=V,e.next=9;break;case 37:Ze(c),We(c);case 39:case"end":return e.stop()}}),e,null,[[15,28]])})));return function(){return e.apply(this,arguments)}}(),We=function(e){for(var n="Address\n",t=0;t<e.length;t++)n+="".concat(e[t]+"\t",","),n+="\n";var a="data:text/csv;charset=utf-8,\ufeff ".concat(n),s=document.createElement("a");s.href=a,s.download="success_address_".concat((new Date).valueOf(),".csv"),document.body.appendChild(s),s.click(),document.body.removeChild(s)},Xe=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,a,s,o,l,c,u,d,m,y;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k&&null!=ae){e.next=2;break}return e.abrupt("return");case 2:return n=S.getSigner(p),new h.CH(ie,T,S),k.amounts,k.tokenAddress,t=k.decimals,e.next=7,ae.allowance(p,ie);case 7:if(a=e.sent,console.log("My allowance: ",a.toString()),!a.lt(we)){e.next=67;break}if("unlimited"!==pe){e.next=39;break}return r({type:E.U.TIPS,payload:"Unlimited Approve in progress..."}),e.prev=12,e.next=15,ae.connect(n).approve(ie,v.Bz);case 15:return s=e.sent,fe("Unlimited Approve in progress..."),e.next=19,s.wait();case 19:return o=e.sent,console.log("txHash",o),ve(o.hash||o.transactionHash),r({type:E.U.STORE_TXHASH,payload:o.hash||o.transactionHash}),r({type:E.U.TIPS,payload:null}),ke(!1),e.next=27,ae.allowance(p,ie);case 27:l=e.sent,B(f.bM(l,t)),e.next=37;break;case 31:e.prev=31,e.t0=e.catch(12),console.error("approve error: ",e.t0),ye(!1),r({type:E.U.TIPS,payload:null}),Oe((null===(c=e.t0.data)||void 0===c?void 0:c.message)||e.t0.message);case 37:e.next=65;break;case 39:return r({type:E.U.TIPS,payload:"Approve in progress..."}),e.prev=40,e.next=43,ae.connect(n).approve(ie,we);case 43:return u=e.sent,fe("Approve in progress..."),e.next=47,u.wait();case 47:return d=e.sent,console.log("txHash",d),ve(d.hash||d.transactionHash),r({type:E.U.STORE_TXHASH,payload:d.hash||d.transactionHash}),r({type:E.U.TIPS,payload:null}),ke(!1),e.next=55,ae.allowance(p,ie);case 55:m=e.sent,B(f.bM(m,t)),e.next=65;break;case 59:e.prev=59,e.t1=e.catch(40),console.error("approve error: ",e.t1),Oe((null===(y=e.t1.data)||void 0===y?void 0:y.message)||e.t1.message),ye(!1),r({type:E.U.TIPS,payload:null});case 65:e.next=68;break;case 67:console.log("Already have enough allowance!");case 68:case"end":return e.stop()}}),e,null,[[12,31],[40,59]])})));return function(){return e.apply(this,arguments)}}(),Ge=function(){if(null!=k){var e=k.amounts,n=k.decimals;ye(!0),fe("Waiting..."),r({type:E.U.TIPS,payload:"Waiting..."});for(var t=e.split("\n"),a=[],s=[],i=y.O$.from("0"),o=0;o<t.length;o++){var l=t[o].trim();if(0!==l.length){var c=l.split(","),u=c[0].trim(),p=f.fi(c[1].trim());x.UJ(u)?(a.push(u),s.push(p),i=i.add(y.O$.from(p)),je(i),Me(a),Ie(s)):console.log("Invalid address: ",u)}else console.log("skip empty line")}r({type:E.U.TIPS,payload:null}),console.log("total amount: ",i),console.log("total amount string: ",f.bM(i,n))}},Ye=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,a,s,o,l,c,u,d,m,b,v,g,w;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=k&&ae){e.next=2;break}return e.abrupt("return");case 2:return ye(!0),fe("Waiting..."),r({type:E.U.TIPS,payload:"Waiting..."}),n=k.amounts,k.tokenAddress,t=new h.CH(ie,T,S),a=S.getSigner(p),console.log("signer: ",a),console.log("multiSender: ",t),console.log(pe),e.next=13,ae.decimals();case 13:s=e.sent,console.log("Decimals: ",s,n),o=n.split("\n"),l=[],c=[],u=y.O$.from("0"),d=0;case 20:if(!(d<o.length)){e.next=40;break}if(0!==(m=o[d].trim()).length){e.next=25;break}return console.log("skip empty line"),e.abrupt("continue",37);case 25:if(b=m.split(","),v=b[0].trim(),g=f.vz(b[1].trim(),s),x.UJ(v)){e.next=31;break}return console.log("Invalid address: ",v),e.abrupt("continue",37);case 31:l.push(v),c.push(g),u=u.add(y.O$.from(g)),je(u),Me(l),Ie(c);case 37:d++,e.next=20;break;case 40:return r({type:E.U.TIPS,payload:null}),e.next=43,ae.allowance(p,ie);case 43:w=e.sent,console.log("My allowance: ",w.toString()),w.lt(u)?ke(!0):ke(!1);case 46:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,A.jsxs)(C,{children:[(0,A.jsxs)("div",{className:"mb-3",children:[(0,A.jsx)("h5",{children:"List of recipients"}),(0,A.jsx)(I,{children:(0,A.jsxs)(o.Z,{striped:!0,borderless:!0,hover:!0,className:"tableStyle",children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{}),(0,A.jsx)("th",{children:"Address"}),(0,A.jsx)("th",{children:"Amount"})]})}),(0,A.jsx)("tbody",{children:W.map((function(e,n){return(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{children:n}),(0,A.jsx)("td",{children:e.address}),(0,A.jsx)("td",{children:e.amount})]},"".concat(e.address,"_").concat(n))}))})]})})]}),(0,A.jsxs)("div",{className:"mb-3",children:[(0,A.jsx)("h5",{children:"Summary"}),(0,A.jsx)(o.Z,{bordered:!0,children:(0,A.jsxs)("tbody",{children:[(0,A.jsxs)("tr",{children:[(0,A.jsxs)("td",{width:"50%",children:[(0,A.jsxs)("div",{className:"numbers",children:[O," ",ee]}),(0,A.jsx)("div",{className:"tips",children:"Request approve amount"})]}),(0,A.jsxs)("td",{children:[(0,A.jsxs)("div",{className:"numbers flexNumber",children:[Z," ",ee]}),(0,A.jsx)("div",{className:"tips",children:"Your current allowance"})]})]}),(0,A.jsxs)("tr",{children:[(0,A.jsxs)("td",{width:"50%",children:[(0,A.jsx)("div",{className:"numbers",children:Y.length}),(0,A.jsx)("div",{className:"tips",children:"Total number of addresses"})]}),(0,A.jsxs)("td",{children:[(0,A.jsxs)("div",{className:"numbers",children:[O," ",ee]}),(0,A.jsx)("div",{className:"tips",children:"Total number of tokens to be sent"})]})]}),(0,A.jsxs)("tr",{children:[(0,A.jsxs)("td",{width:"50%",children:[(0,A.jsx)("div",{className:"numbers",children:Math.ceil(Y.length/V)}),(0,A.jsx)("div",{className:"tips",children:"Total number of transaction needed"})]}),(0,A.jsxs)("td",{children:[(0,A.jsxs)("div",{className:"numbers",children:[F," ",ee]}),(0,A.jsx)("div",{className:"tips",children:"Your token balance"})]})]}),(0,A.jsxs)("tr",{children:[(0,A.jsxs)("td",{width:"50%",children:[(0,A.jsx)("div",{className:"numbers",children:"\xa0 "}),(0,A.jsx)("div",{className:"tips",children:"Approximate cost of operation"})]}),(0,A.jsxs)("td",{children:[(0,A.jsxs)("div",{className:"numbers",children:[z," ETH"]}),(0,A.jsx)("div",{className:"tips",children:"Your ETH balance"})]})]})]})})]}),Te&&(0,A.jsxs)("div",{className:"mb-4",children:[(0,A.jsx)(U,{children:"Amount to Approve"}),(0,A.jsxs)(l.Z.Group,{className:"ml2",children:[(0,A.jsx)("div",{className:"mb-2",children:(0,A.jsx)(l.Z.Check,{type:"radio",inline:!0,label:"Extra amount to sent",name:"approveAmount",onChange:$e,checked:"extra"===pe,value:"extra"})}),(0,A.jsx)("div",{children:(0,A.jsx)(l.Z.Check,{inline:!0,type:"radio",label:"Unlimited amount",name:"approveAmount",value:"unlimited",checked:"unlimited"===pe,onChange:$e})})]})]}),(0,A.jsx)(_,{children:!!_e.length&&(0,A.jsx)(c.Z,{variant:"danger",children:_e})}),Te&&(0,A.jsx)("div",{className:"ml2",children:(0,A.jsx)(u.Z,{variant:"flat",onClick:Xe,children:"Approve"})}),!Te&&(0,A.jsx)("div",{className:"ml2",children:(0,A.jsx)(u.Z,{variant:"flat",onClick:function(){null!=k&&("0x000000000000000000000000000000000000bEEF"===k.tokenAddress?De():Le())},children:"Send"})})]})}},820:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},5995:function(e){e.exports=JSON.parse('[{"id":1,"url":"https://etherscan.io/tx/"},{"id":42,"url":"https://kovan.etherscan.io/tx/"},{"id":56,"url":"https://bscscan.com/tx/"},{"id":97,"url":"https://testnet.bscscan.com/tx/"},{"id":128,"url":"https://hecoinfo.com/tx/"},{"id":137,"url":"https://polygonscan.com/tx/"},{"id":256,"url":"https://testnet.hecoinfo.com/tx/"}]')}}]);