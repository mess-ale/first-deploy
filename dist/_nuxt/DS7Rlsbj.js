import{_ as j}from"./D7VE8-d-.js";import{e as w,q as B,c as a,o as i,h as b,_ as $,r as u,a as e,F as k,i as C,m as P,b as r,t as L,w as m,d as h,n as f,l as E,p as S,u as I,j as A}from"./dpUPDKye.js";import{_ as M}from"./DValfX75.js";import{_ as F}from"./DB_lvwSl.js";import{u as N}from"./BeB8NXu_.js";const O={class:"overlay-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100%",height:"100%"},T={__name:"SvgComp",setup(g){return w(()=>{B.to(".overlay-svg circle",{duration:25,scale:.8,yoyo:!0,repeat:-1,ease:"power1.inOut",stagger:.1})}),(l,c)=>(i(),a("svg",O,c[0]||(c[0]=[b('<circle cx="-30" cy="10" r="50" fill="url(#grad1)"></circle><circle cx="20" cy="0" r="20" fill="url(#grad2)"></circle><circle cx="140" cy="90" r="50" fill="url(#grad1)"></circle><circle cx="90" cy="100" r="20" fill="url(#grad2)"></circle><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#214080;stop-opacity:1;"></stop><stop offset="100%" style="stop-color:#d92a27;stop-opacity:1;"></stop></linearGradient><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#214080;stop-opacity:1;"></stop><stop offset="100%" style="stop-color:#d92a27;stop-opacity:1;"></stop></linearGradient></defs>',5)])))}},V={class:"slideshow-container carousel relative w-full"},z=["src"],q={class:"overlay-svg"},G={class:"carousel-body"},W={class:"body-padding_margin"},Y={class:"container lg:gap-20 xl:gap-32"},R={class:"carousel-content flex justify-center items-center text-center gap-6"},D={class:"flex flex-col items-center"},H={class:"homecontent space-y-6"},J={class:"text-primary xxxs:text-lg xs:text-xl sm:text-3xl md:text-4xl xxl:text-5xl text-f font-oswald xxxs:py-4 lg:py-8"},U={class:"flex justify-center item-center"},K={class:"home-links flex font-oswald"},Q={__name:"SwitchingStacks",setup(g){const l=u([{src:"/homepage1.jpeg",caption:"Image caption 1"},{src:"/homepage2.jpg",caption:"Image caption 2"},{src:"/homepage3.jpeg",caption:"Image caption 3"},{src:"/homepage4.jpeg",caption:"Image caption 4"}]),c=u(["Secure Your Financial Future with Our Trustworthy Saving Solutions – Building Wealth with Confidence.","Achieve Your Ambitions with Our Flexible Loan Options – Empowering You to Take the Next Step!","Join a Community of Collective Savings with Equb – Build Wealth Together for a Brighter Future!","Empower Your Future with Skill-Building Training Programs Designed to Elevate Your Financial Independence."]),v=u(["/service/saving","/service/loan","/service/equb","/service/training"]),t=u(0),n=()=>{setInterval(()=>{t.value++,t.value>=l.value.length&&(t.value=0)},3e4)},s=()=>{t.value=(t.value+1)%l.value.length},x=()=>{t.value=(t.value-1+l.value.length)%l.value.length};return w(()=>{n()}),(y,o)=>{const d=j;return i(),a("div",V,[(i(!0),a(k,null,C(l.value,(p,_)=>(i(),a("div",{key:_,class:"image-sliderfade fade",style:P({display:t.value===_?"block":"none"})},[e("img",{src:p.src,style:{width:"100%"}},null,8,z)],4))),128)),e("div",q,[r(T)]),e("div",G,[e("div",W,[e("div",Y,[e("div",R,[e("button",{onClick:x},o[0]||(o[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m8.165 11.63l6.63-6.43C15.21 4.799 16 5.042 16 5.57v12.86c0 .528-.79.771-1.205.37l-6.63-6.43a.5.5 0 0 1 0-.74"})],-1)])),e("div",D,[e("div",H,[e("div",null,[e("h1",J,L(c.value[t.value]),1)]),e("div",U,[r(d,{to:v.value[t.value],class:"etcare-button xxxs:text-xs xs:text-sm sm:text-base md:text-lg xxl:text-xl px-6 py-1 md:px-10 xxl:px-14 md:py-1 xxl:py-2 items-center font-oswald"},{default:m(()=>o[1]||(o[1]=[h(" Read More ")])),_:1},8,["to"])])])]),e("button",{onClick:s},o[2]||(o[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1.5em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M15.835 11.63L9.205 5.2C8.79 4.799 8 5.042 8 5.57v12.86c0 .528.79.771 1.205.37l6.63-6.43a.5.5 0 0 0 0-.74"})],-1)]))]),e("div",K,[r(d,{class:f(["link-home",{"link-home-not":t.value===0}]),to:"/service/saving"},{default:m(()=>o[3]||(o[3]=[h("Saving Service")])),_:1},8,["class"]),r(d,{class:f(["link-home",{"link-home-not":t.value===1}]),to:"/service/loan"},{default:m(()=>o[4]||(o[4]=[h("Loan Service")])),_:1},8,["class"]),r(d,{class:f(["link-home",{"link-home-not":t.value===2}]),to:"/service/equb"},{default:m(()=>o[5]||(o[5]=[h("Equb Service")])),_:1},8,["class"]),r(d,{class:f(["link-home",{"link-home-not":t.value===3}]),to:"/service/training"},{default:m(()=>o[6]||(o[6]=[h("Training Service")])),_:1},8,["class"])])])])])])}}},X=$(Q,[["__scopeId","data-v-6079ab76"]]),Z={data(){return{photos:[{url:"/photo/gallary-1.jpg"},{url:"/photo/gallary-2.jpg"},{url:"/photo/gallary-3.jpg"},{url:"/photo/gallary-4.jpg"},{url:"/photo/gallary-5.jpg"}],selectedPhoto:null}},methods:{showPhoto(g){this.selectedPhoto=g},closeModal(){this.selectedPhoto=null}}},ee={class:"body-padding_margin"},te={class:"container"},se={class:"py-8"},oe={class:"grid grid-cols-1 md:grid-cols-5 gap-8 items-center justify-center"},le=["src","onClick"],ie=["src"];function ne(g,l,c,v,t,n){return i(),a("div",ee,[e("div",te,[e("div",se,[e("div",oe,[(i(!0),a(k,null,C(t.photos,(s,x)=>(i(),a("img",{key:x,src:s.url,alt:"Photo",class:"hover-photo",onClick:y=>n.showPhoto(x)},null,8,le))),128))]),t.selectedPhoto!==null?(i(),a("div",{key:0,class:"modal",onClick:l[0]||(l[0]=(...s)=>n.closeModal&&n.closeModal(...s))},[e("img",{src:t.photos[t.selectedPhoto].url,alt:"Selected Photo",class:"modal-img"},null,8,ie)])):E("",!0)])])])}const ae=$(Z,[["render",ne]]),re=S("/vision.png"),ce=S("/Mission.png"),de=S("/object.png"),pe={class:"etcare-home"},xe={class:"bg-primary xxxs:py-4 md:py-8 xxl:py-12"},me={class:"body-padding_margin"},ue={class:"container xxxs:space-y-4 md:space-y-6"},ge={class:"justify-center flex"},ve={class:"xxxs:py-4 md:py-8 mb-32"},he={class:"body-padding_margin blog-letest"},_e={class:"container xxxs:space-y-4 md:space-y-6"},fe={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},Se={__name:"index",setup(g){const{$axios:l}=I(),c=u([]),v=u(!1);N({title:"Etcare SACCOs Ltd"});const t=async()=>{v.value=!0;try{const n=await l.get("/LatestBlogs/");c.value=n.data}catch(n){console.error("Error fetching data:",n)}finally{v.value=!1}};return w(()=>{t()}),(n,s)=>{const x=X,y=j,o=ae,d=M;return i(),a("div",pe,[r(x),e("div",xe,[e("div",me,[e("div",ue,[s[1]||(s[1]=e("h1",{class:"text-center font-oswald xxxs:text-3xl xxl:text-4xl font-bold text-background"}," Who we are",-1)),s[2]||(s[2]=e("p",{class:"text-center font-roboto xxxs:text-1xl sm:text-2xl"}," EtCare SACCO is a member-owned financial cooperative dedicated to improving the financial well-being of our members. Established in 2022, we operate under Ethiopian Cooperative Society regulations, serving employees of EtCare PLC and Et-herbal manufacturing PLC. Our vision is to empower our members to achieve middle-level income and entrepreneurial success by 2030. Through strategic planning and a commitment to operational excellence, we provide diverse financial services, including savings and loan products, tailored to meet the unique needs of our community. We are guided by cooperative principles and a dedication to growing together. ",-1)),e("div",ge,[r(y,{class:"who-we-are-button items-center xxxs:text-lg md:text-lg xxl:text-xl font-oswald xxxs:space-x-2 md:space-x-4 flex font-roboto",to:"/about"},{default:m(()=>s[0]||(s[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m7.45 17.45l-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12zM13 17v-2h9v2zm0-8V7h9v2zm3 4v-2h6v2z"})],-1),e("span",null,"Learn More",-1)])),_:1})])])])]),s[4]||(s[4]=b('<div class="xxxs:py-4 md:py-8"><div class="body-padding_margin"><div class="container"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="value-boje-section p-6 shadow-md space-y-4"><div class="flex items-bottoms"><img src="'+re+'" class="h-16 w-16" alt="vision"><div class="cercle-nub"><h1 class="cercle-nub-on font-bold text-2xl">1</h1></div></div><h3 class="text-3xl font-bold">Vision</h3><p>By 2030, we envision our members achieving middle-level incomes and thriving as entrepreneurs. We&#39;re committed to their financial growth and entrepreneurial success. </p></div><div class="value-boje-section p-6 shadow-md space-y-4"><div class="flex items-bottoms"><img src="'+ce+'" class="h-16 w-16" alt="vision"><div class="cercle-nub"><h1 class="cercle-nub-on font-bold text-2xl">2</h1></div></div><h3 class="text-3xl font-bold">Mission</h3><p>Improve socio-economic conditions of members and other stockholders through access to finance and asset building using the art of technology and highly competent and motivated staff in considerations of social governance aspects for maximizing stakeholders benefit.</p></div><div class="value-boje-section p-6 shadow-md space-y-4"><div class="flex items-bottoms"><img src="'+de+'" class="h-16 w-16" alt="vision"><div class="cercle-nub"><h1 class="cercle-nub-on font-bold text-2xl">3</h1></div></div><h3 class="text-3xl font-bold">Value</h3><p>Integrity, Reliability, Transparency, Accountability, Confidentiality, and Social Responsibility are the core values that guide our Board, management, and staff in all their actions and decisions.</p></div></div></div></div></div><div class="photo-g text-center py-8"><h1 class="font-oswald xxxs:text-3xl md:text-4xl xl:text-5xl">Our Photo Gallery</h1></div>',2)),r(o),e("div",ve,[e("div",he,[e("div",_e,[s[3]||(s[3]=b('<div class="flex justify-center pt-20"><img src="'+F+'" alt="logo"></div><h1 class="text-center text-primary font-oswald xxxs:text-sm md:text-xl">Directly Blog Posts</h1><div class="flex justify-center pb-20"><p class="p-blog text-primary text-center font-oswald xxxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold"> Latest News &amp; Articles from the Posts</p></div>',3)),e("div",fe,[(i(!0),a(k,null,C(c.value,(p,_)=>(i(),A(d,{key:_,blog_id:p.blog_id,title:p.title,image:p.blog_image,content:p.content,author:"EtCare",publishedAt:p.event_date},null,8,["blog_id","title","image","content","publishedAt"]))),128))])])])])])}}};export{Se as default};
