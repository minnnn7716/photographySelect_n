import{l as h,m as o,d as v,_ as d,o as g,c as u,n as p,w as L,a as l}from"./index-75005144.js";import{t as n}from"./toastStore-24da0ea0.js";const m=n(),r=h("favoriteStore",{state:()=>({favoriteList:[],favoriteProducts:[]}),actions:{getFavoriteList(){const t=localStorage.getItem("favoriteList");this.favoriteList=t===null?[]:JSON.parse(t)},filterProducts(t){const s=[];if(this.favoriteList.length)for(let i=0;i<(t==null?void 0:t.length);i+=1)for(let e=0;e<this.favoriteList.length;e+=1)t[i].id===this.favoriteList[e]&&s.push(t[i]);this.favoriteProducts=s},deleteAllFavorite(){this.favoriteList=[],this.favoriteProducts=[],localStorage.setItem("favoriteList",JSON.stringify(this.favoriteList)),m.pushMsg({style:"success",title:"成功移除所有喜愛清單"})}}}),S="/photographySelect/assets/icon-like-default-c828e465.svg",_="/photographySelect/assets/icon-like-active-a0b98137.svg",F={data(){return{isLoading:!1,isFavorite:!1}},props:{id:{type:String,default:""}},watch:{id:"judgeStatus",favoriteList:"judgeStatus"},methods:{...o(r,["getFavoriteList"]),...o(n,["pushMsg"]),judgeStatus(){this.favoriteList.indexOf(this.id)===-1?this.isFavorite=!1:this.isFavorite=!0},changeFavorite(){if(this.getFavoriteList(),!this.isFavorite)this.favoriteList.push(this.id),this.pushMsg({style:"success",title:"加入喜愛清單"});else{const t=this.favoriteList.indexOf(this.id);this.favoriteList.splice(t,1),this.pushMsg({style:"primary",title:"移除喜愛清單"})}localStorage.setItem("favoriteList",JSON.stringify(this.favoriteList)),this.judgeStatus()}},computed:{...v(r,["favoriteList"])},created(){this.id&&this.judgeStatus()}},y=l("img",{class:"none",src:S,alt:"加入喜愛清單"},null,-1),k=l("img",{class:"add",src:_,alt:"已加入喜愛清單"},null,-1),x=[y,k];function j(t,s,i,e,c,a){return g(),u("a",{href:"#",class:p(["icon-favorite d-inline-block rounded-circle",{active:c.isFavorite}]),onClick:s[0]||(s[0]=L((...f)=>a.changeFavorite&&a.changeFavorite(...f),["stop","prevent"]))},x,2)}const B=d(F,[["render",j]]);export{B as F,S as _,_ as a,r as f};
