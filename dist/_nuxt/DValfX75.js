import{_ as n}from"./D7VE8-d-.js";import{_ as d,c,o as l,a as t,b as i,w as a,t as o,d as _}from"./dpUPDKye.js";const x={props:{title:{type:String,required:!0},summary:{type:String,default:""},image:{type:String,required:!0},content:{type:String,required:!0},author:{type:String,required:!0},publishedAt:{type:String,required:!0},blog_id:{type:Number,required:!0}}},u={class:"blog-card bg-white shadow-md rounded-lg overflow-hidden"},m={class:"bg-white xxxs:p-4 md:p-6"},p={class:"text-xl font-bold xxxs:mb-1 md:mb-2 text-secondary hover:text-primary transition-all duration-450"},g={class:"bg-gray-200 p-6"},b=["src"],h={class:"text-primary truncate"},y={class:"bg-white xxxs:p-4 md:p-6 flex justify-between items-center"},f={class:"text-primary text-sm"},w={class:"flex"};function v(S,s,e,q,B,N){const r=n;return l(),c("div",u,[t("div",m,[i(r,{to:`/blog/${e.blog_id}`},{default:a(()=>[t("h2",p,o(e.title),1)]),_:1},8,["to"])]),t("div",g,[t("img",{src:`https://django.etcaresacco.com${e.image}`,alt:"Blog Image",class:"w-full h-auto mb-4"},null,8,b),t("p",h,o(e.content),1)]),t("div",y,[t("div",null,[s[0]||(s[0]=t("p",{class:"text-primary text-sm"},"By EtCare",-1)),t("p",f,o(e.publishedAt),1)]),t("div",w,[i(r,{class:"etcare-button xxxs:px-1 md:px-4 xxxs:py-1 md:py-1",to:`/blog/${e.blog_id}`},{default:a(()=>s[1]||(s[1]=[_(" Read More ")])),_:1},8,["to"])])])])}const j=d(x,[["render",v]]);export{j as _};
