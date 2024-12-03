import{d as e,f as t}from"./swiper-vue.mjs";function createElementIfNotDefined(a,r,s,f){return a.params.createElements&&Object.keys(f).forEach((n=>{if(!s[n]&&!0===s.auto){let c=e(a.el,`.${f[n]}`)[0];c||(c=t("div",f[n]),c.className=f[n],a.el.append(c)),s[n]=c,r[n]=c}})),s}export{createElementIfNotDefined as c};
//# sourceMappingURL=create-element-if-not-defined.mjs.map
