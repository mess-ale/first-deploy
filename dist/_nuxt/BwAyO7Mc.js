import{_ as u,r as _,c as a,a as n,F as z,i as P,n as d,o as i,m as f,t as g}from"./dpUPDKye.js";const h={class:"spin-wheel-container"},v={__name:"spinWheel",setup(S){const t=["Prize 1","Prize 2","Prize 3","Prize 4","Prize 5","Prize 3","Prize 4","Prize 5","Prize 3","Prize 4","Prize 5"],e=_(!1),o=()=>{e.value||(e.value=!0)},l=()=>{e.value=!1,alert("Spin Complete!")},c=s=>({transform:`rotate(${360/t.length*s}deg)`});return(s,p)=>(i(),a("div",h,[n("div",{class:d(["wheel",{spinning:e.value}]),onAnimationend:l},[(i(),a(z,null,P(t,(m,r)=>n("div",{key:r,class:"segment",style:f(c(r))},[n("span",null,g(m),1)],4)),64))],34),n("button",{onClick:o},"Spin")]))}},k=u(v,[["__scopeId","data-v-3bc2f1b3"]]);export{k as default};
