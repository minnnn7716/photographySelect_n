import{l as c,p as o}from"./index-90c93330.js";import{t as n}from"./toastStore-fa35cab5.js";const e=n(),l=c("adminProductStore",{state:()=>({products:{},isLoading:!1}),actions:{getProducts(){const s="https://vue3-course-api.hexschool.io/api/hexvuemm/admin/products/all";this.isLoading=!0,o.get(s).then(t=>{this.products=t.data.products,this.isLoading=!1}).catch(()=>{this.isLoading=!1,e.pushMsg({style:"danger",title:"商品取得失敗",content:"出現系統問題"})})},deleteProduct(s){const t=`https://vue3-course-api.hexschool.io/api/hexvuemm/admin/product/${s}`;this.isLoading=!0,o.delete(t).then(a=>{this.isLoading=!1,a.data.success?(this.getProducts(),e.pushMsg({style:"primary",title:"成功刪除商品"})):e.pushMsg({style:"danger",title:"刪除商品失敗",content:a.data.message})}).catch(()=>{this.isLoading=!1,e.pushMsg({style:"danger",title:"商品刪除失敗",content:"出現系統問題"})})},updateProduct(s){let t="https://vue3-course-api.hexschool.io/api/hexvuemm/admin/product",a="post",i="新增";this.isLoading=!0,s.id!==void 0&&(t+=`/${s.id}`,a="put",i="更新"),o[a](t,{data:s}).then(d=>{this.isLoading=!1,d.data.success?(this.getProducts(),e.pushMsg({style:"success",title:`成功${i}商品`})):e.pushMsg({style:"danger",title:`${i}商品失敗`,content:d.data.message})}).catch(()=>{this.isLoading=!1,e.pushMsg({style:"danger",title:"商品更新失敗",content:"出現系統問題"})})},switchEnable(s){const t={...s};t.is_enabled=!t.is_enabled,this.updateProduct(t)}},getters:{productsTotal(){return Object.keys(this.products).length}}});export{l as a};