import{_ as i,o as f,c as u,a as t,n as l,t as m}from"./index-8558fa27.js";const o={props:{rate:{type:String,default:"0.0"},rateNum:{type:Number,default:0}},computed:{calcRate(){const e=[];let c=[];if(this.rate!==void 0){const n=+this.rate.split(".")[1]!==0;for(let a=1;a<=5;a+=1)a<=+this.rate?e.push(!0):e.push(!1);n&&(e[e.indexOf(!1)]="half"),c=e.map(a=>a?a==="half"?"half":"whole":"")}return c},hasRate(){let{rate:e}=this;return this.rateNum||(e="尚無"),e}}},_={class:"ratingScore list-unstyled d-flex align-items-center mb-0"},d={class:"d-flex align-items-center me-3"};function h(e,c,r,n,a,s){return f(),u("ul",_,[t("li",d,[t("span",{class:l(["me-1",s.calcRate[0]])},null,2),t("span",{class:l(["me-1",s.calcRate[1]])},null,2),t("span",{class:l(["me-1",s.calcRate[2]])},null,2),t("span",{class:l(["me-1",s.calcRate[3]])},null,2),t("span",{class:l(s.calcRate[4])},null,2)]),t("li",{class:l(["fs-6 fs-lg-4 font-serif-tw",{"fs-6":!r.rateNum}])},m(s.hasRate),3)])}const R=i(o,[["render",h]]);export{R};