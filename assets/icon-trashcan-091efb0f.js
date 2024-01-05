import{l as p,p as n,m as r,_ as y,o as b,c as _,a as o,t as u,b as m}from"./index-75005144.js";import{a as x}from"./adminProductStore-57dac0ad.js";import{t as g}from"./toastStore-24da0ea0.js";import{m as v}from"./modalMixin-b8f36e48.js";const h=g(),$=p("adminOrderStore",{state:()=>({orders:{},pagination:{},isLoading:!1}),actions:{getOrders(){const e="https://vue3-course-api.hexschool.io/api/hexvuemm/admin/orders?page=:page";this.isLoading=!0,n.get(e).then(t=>{this.orders=t.data.orders,this.pagination=t.data.pagination,this.isLoading=!1}).catch(t=>{this.isLoading=!1,t.request.status===404&&h.pushMsg({style:"danger",title:"訂單取得失敗",content:"出現系統問題"})})},deleteOrder(e){const t=`https://vue3-course-api.hexschool.io/api/hexvuemm/admin/order/${e}`;this.isLoading=!0,n.delete(t).then(s=>{this.isLoading=!1,s.data.success?(this.getOrders(),h.pushMsg({style:"primary",title:"成功刪除訂單"})):h.pushMsg({style:"danger",title:"刪除訂單失敗",content:s.data.message})}).catch(s=>{this.isLoading=!1,s.request.status===404&&h.pushMsg({style:"danger",title:"訂單刪除失敗",content:"出現系統問題"})})}},getters:{orderTotalPrice(){let e=0;return Object.keys(this.orders).length&&(e=this.orders.map(t=>t.total).reduce((t,s)=>t+s,0)),e},orderNum(){let e=0;return Object.keys(this.orders).length&&(e=this.orders.length),e}}}),d=g(),L=p("couponStore",{state:()=>({coupons:[],pagination:{},isLoading:!1}),actions:{getCoupons(){const e="https://vue3-course-api.hexschool.io/api/hexvuemm/admin/coupons?page=:page";this.isLoading=!0,n.get(e).then(t=>{this.coupons=this.convertEnabled(t.data.coupons),this.pagination=t.data.pagination,this.isLoading=!1}).catch(t=>{t.request.status===404&&d.pushMsg({style:"danger",title:"折價券取得失敗",content:"出現系統問題"})})},updatedCoupon(e){let t="https://vue3-course-api.hexschool.io/api/hexvuemm/admin/coupon",s="post",a="新增";this.isLoading=!0,e.id!==void 0&&(t+=`/${e.id}`,s="put",a="更新"),n[s](t,{data:e}).then(i=>{this.isLoading=!1,i.data.success?(this.getCoupons(),d.pushMsg({style:"success",title:`成功${a}折價券`})):d.pushMsg({style:"danger",title:`${a}折價券失敗`,content:i.data.message})}).catch(i=>{i.request.status===404&&d.pushMsg({style:"danger",title:"折價券更新失敗",content:"抱歉，出現系統問題，請聯絡我們！"})})},deleteCoupon(e){const t=`https://vue3-course-api.hexschool.io/api/hexvuemm/admin/coupon/${e}`;this.isLoading=!0,n.delete(t).then(s=>{this.isLoading=!1,s.data.success?(this.getCoupons(),d.pushMsg({style:"primary",title:"成功刪除折價券"})):d.pushMsg({style:"danger",title:"刪除折價券失敗",content:s.data.message})}).catch(s=>{s.request.status===404&&d.pushMsg({style:"danger",title:"折價券更新失敗",content:"出現系統問題"})})},convertEnabled(e){const t=[...e];return t.forEach(s=>{const a=s;a.is_enabled=!!s.is_enabled}),t}}}),l=g(),M=p("adminNewsStore",{state:()=>({news:{},pagination:{},isLoading:!1}),actions:{getNews(){const e="https://vue3-course-api.hexschool.io/api/hexvuemm/admin/articles?page=:page";this.isLoading=!0,n.get(e).then(t=>{this.news=t.data.articles,this.pagination=t.data.pagination,this.isLoading=!1}).catch(t=>{this.isLoading=!1,t.request.status===404&&l.pushMsg({style:"danger",title:"消息取得失敗",content:"出現系統問題"})})},updateNews(e){let t="https://vue3-course-api.hexschool.io/api/hexvuemm/admin/article",s="post",a="新增";this.isLoading=!0,e.id!==void 0&&(t+=`/${e.id}`,s="put",a="更新"),n[s](t,{data:e}).then(i=>{this.isLoading=!1,i.data.success?(this.getNews(),l.pushMsg({style:"success",title:`成功${a}消息`})):l.pushMsg({style:"danger",title:`${a}消息失敗`,content:i.data.message})}).catch(i=>{this.isLoading=!1,i.request.status===404&&l.pushMsg({style:"danger",title:"消息更新失敗",content:"出現系統問題"})})},deleteNews(e){const t=`https://vue3-course-api.hexschool.io/api/hexvuemm/admin/article/${e}`;this.isLoading=!0,n.delete(t).then(s=>{this.isLoading=!1,s.data.success?(this.getNews(),l.pushMsg({style:"primary",title:"成功刪除消息"})):l.pushMsg({style:"danger",title:"刪除消息失敗",content:s.data.message})}).catch(s=>{this.isLoading=!1,s.request.status===404&&l.pushMsg({style:"danger",title:"消息刪除失敗",content:"出現系統問題"})})},switchPublic(e){const t={...e};t.content=t.title,t.isPublic=!t.isPublic,this.updateNews(t)}},getters:{newsNum(){let e=0;return Object.keys(this.news).length&&(e=this.news.length),e}}}),w={data(){return{modal:""}},props:{deleteData:{type:Object,default(){return{}}}},mixins:[v],methods:{...r(x,["deleteProduct"]),...r($,["deleteOrder"]),...r(L,["deleteCoupon"]),...r(M,["deleteNews"]),deleteAction(){const e=`delete${this.deleteData.source}`;this[e](this.deleteData.id),this.modal.hide()}},computed:{source(){let e="";const{source:t}=this.deleteData;return t==="Product"?e="商品":t==="Order"?e="訂單":t==="Coupon"?e="折價券":t==="News"?e="消息":e="",e}}},N={class:"modal fade",id:"deleteModal",tabindex:"-1",ref:"modal"},O={class:"modal-dialog modal-dialog-centered"},S={class:"modal-content"},D={class:"modal-header bg-danger-700 text-white"},C={class:"modal-title fs-5",id:"deleteModal"},q=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1),P={class:"modal-body text-center py-10"},k={class:"fw-medium text-danger-800"},j={class:"modal-footer bg-gray-200"},A=o("button",{type:"button",class:"btn btn-outline-danger-900 px-10 me-4","data-bs-dismiss":"modal"}," 取消 ",-1);function B(e,t,s,a,i,c){return b(),_("div",N,[o("div",O,[o("div",S,[o("div",D,[o("h2",C,"刪除"+u(c.source),1),q]),o("div",P,[m(" 確定要刪除"+u(c.source)+" ",1),o("span",k," 「"+u(s.deleteData.title!==void 0?s.deleteData.title:s.deleteData.id)+"」",1),m("嗎？ ")]),o("div",j,[A,o("button",{type:"button",class:"btn btn-danger-900 px-10",onClick:t[0]||(t[0]=(...f)=>c.deleteAction&&c.deleteAction(...f))}," 確定 ")])])])],512)}const F=y(w,[["render",B]]),G="/photographySelect/assets/icon-trashcan-c8b2b423.svg";export{F as D,G as _,$ as a,M as b,L as c};
