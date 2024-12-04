import{d as a,i as e,c as l,G as r,H as t,K as o,L as i,v as s,I as u}from"../routes/renderer.mjs";const L=["width","height","fill","transform"],n={key:0},d=[u("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"},null,-1)],g={key:1},h=[u("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"},null,-1),u("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1)],p={key:2},v=[u("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1)],m={key:3},y=[u("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"},null,-1)],c={key:4},w=[u("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1)],M={key:5},Z=[u("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"},null,-1)],f=a({name:"PhX",props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(a){const u=a,f=e("weight","regular"),A=e("size","1em"),k=e("color","currentColor"),H=e("mirrored",!1),V=l((()=>u.weight??f)),x=l((()=>u.size??A)),z=l((()=>u.color??k)),S=l((()=>void 0!==u.mirrored?u.mirrored?"scale(-1, 1)":void 0:H?"scale(-1, 1)":void 0));return(a,e)=>(r(),t("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:x.value,height:x.value,fill:z.value,transform:S.value},a.$attrs),[o(a.$slots,"default"),"bold"===V.value?(r(),t("g",n,d)):"duotone"===V.value?(r(),t("g",g,h)):"fill"===V.value?(r(),t("g",p,v)):"light"===V.value?(r(),t("g",m,y)):"regular"===V.value?(r(),t("g",c,w)):"thin"===V.value?(r(),t("g",M,Z)):i("",!0)],16,L))}});export{f as F};
//# sourceMappingURL=PhX.vue.mjs.map