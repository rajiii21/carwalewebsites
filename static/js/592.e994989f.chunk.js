"use strict";(self.webpackChunkcarwale_website=self.webpackChunkcarwale_website||[]).push([[592],{6592:(e,a,c)=>{c.r(a),c.d(a,{default:()=>p});var r=c(5043),s=c(5479),i=c(3156),o=c(5394),l=c(3216),d=c(579);const p=()=>{const{state:e,dispatch:a}=(0,r.useContext)(s.A),[c,p]=(0,r.useState)(!1),[n,t]=(0,r.useState)(null),[m,u]=(0,r.useState)([]),[y,x]=(0,r.useState)([]),[h,j]=(0,r.useState)();(0,r.useEffect)((()=>{const a=e.Branddetail.slice(0,6);x(a)}),[]);console.log(e.Comparecar);const g=e=>{p(!0),console.log("rJ"),j(e)},C=()=>{console.log("closebtn"),p(!1)};console.log(e.Comparecar);const b=(0,l.Zp)();return(0,d.jsx)("section",{className:"compare-sec",children:(0,d.jsxs)("div",{className:"compare-con",children:[(0,d.jsx)("div",{className:"compare-title",children:(0,d.jsx)("h1",{children:"Compare Cars"})}),(0,d.jsxs)("div",{className:"compare-row",children:[e.Comparecar.map(((c,r)=>{var s;return console.log(c.id),!1===c.compareboo?(0,d.jsxs)("div",{className:"compare-col",children:[(0,d.jsx)("img",{src:c.image,alt:"no picture",onClick:()=>g(c.id)}),(0,d.jsx)("button",{onClick:()=>g(c.id),children:c.btn})]},r):null===(s=c.carsdetail)||void 0===s?void 0:s.map(((r,s)=>(0,d.jsxs)("div",{className:"compare-col1",children:[(0,d.jsx)(o.$8F,{onClick:()=>(c=>{1===c?(a({type:"updatecarid2",payload:e.carid1=""}),a({type:"updatecarname2",payload:e.carname1=""}),a({type:"updatecarprice2",payload:e.carprice1=""}),a({type:"updatecarengine2",payload:e.carengine1=""})):(a({type:"updatecarid2",payload:e.carid2=""}),a({type:"updatecarname2",payload:e.carname2=""}),a({type:"updatecarprice2",payload:e.carprice2=""}),a({type:"updatecarengine2",payload:e.carengine2=""}));const r=e.Comparecar.map(((e,a)=>(console.log(e.id,c),e.id===c&&!0===e.compareboo?{...e,compareboo:e.compareboo=!1}:e)));a({type:"updateComparecar",payload:r})})(c.id)}),(0,d.jsx)("img",{src:r.image}),(0,d.jsx)("h2",{children:r.name}),(0,d.jsx)("h3",{children:r.price1}),(0,d.jsx)("p",{children:r.place})]},s)))})),!0===c?(0,d.jsx)("div",{className:"popup",children:(0,d.jsxs)("div",{className:"popupdetails",children:[(0,d.jsxs)("div",{className:"popup-cars",children:[(0,d.jsxs)("div",{className:"popup-title",children:[(0,d.jsx)("h1",{children:"Select Your Brand Model"}),(0,d.jsx)(o.$8F,{onClick:C})]}),(0,d.jsx)(i.zok,{className:"searchicon"}),(0,d.jsx)("input",{type:"text",placeholder:"Type to Select Brand or Model"})]}),(0,d.jsx)("div",{className:"showbrands",children:y.map(((c,r)=>(console.log(c.icon),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"comparebrands",children:[(0,d.jsxs)("div",{className:"compareimg",onClick:()=>((a,c)=>{const r=e.Cars.filter((e=>e.brand===c&&"upcome"!=e.type)).slice(0,3);if(u(r),n===a)return t(null);t(a)})(c.id,c.title),children:[(0,d.jsxs)("div",{style:{display:"flex"},children:[(0,d.jsx)("img",{src:c.image}),(0,d.jsx)("p",{children:c.title})]}),(0,d.jsx)("div",{children:n===c.id?(0,d.jsx)(i.Ucs,{}):(0,d.jsx)(i.Vr3,{})})]}),n===c.id&&m.map(((r,s)=>r.brand===c.title?(0,d.jsx)("div",{className:"brand-accordian",children:(0,d.jsx)("p",{onClick:()=>((c,r,s)=>{console.log(c,r,s);const i=e.Cars.filter(((c,s)=>(c.name===r&&(1===h?(a({type:"updatecarid1",payload:e.carid1=c.id}),a({type:"updatecarname1",payload:e.carname1=c.name}),a({type:"updatecarprice1",payload:e.carprice1=c.price1}),a({type:"updatecarengine1",payload:e.carengine1=c.Engine})):2===h&&(a({type:"updatecarid2",payload:e.carid2=c.id}),a({type:"updatecarname2",payload:e.carname2=c.name}),a({type:"updatecarprice2",payload:e.carprice2=c.price1}),a({type:"updatecarengine2",payload:e.carengine2=c.Engine}))),c.name===r))),o=e.Comparecar.map(((e,a)=>(console.log(e.id,h),e.id===h&&!1===e.compareboo?{...e,compareboo:e.compareboo=!0,carsdetail:i}:e)));a({type:"updateComparecar",payload:o}),C(),console.log("cardetails")})(r,r.name,r.id),children:r.name})},s):""))]})},r))))})]})}):"",(0,d.jsx)("span",{className:"Vsicon",children:"Vs"})]}),(0,d.jsx)("div",{className:"compare-btn",children:(0,d.jsx)("button",{onClick:()=>{b("./comparedetail")},children:"Compare"})})]})})}}}]);
//# sourceMappingURL=592.e994989f.chunk.js.map