import{_ as g,m as n,d as u,r as o,o as e,c as a,a as s,t as f,F as _,e as h,f as r}from"./index-75005144.js";import{p as d,c as P}from"./cartStore-9c02aed8.js";import{P as y}from"./ProductListItem-7d3d6f51.js";import{P as v}from"./PaginationComponent-897f3722.js";import"./toastStore-24da0ea0.js";import"./RatingScore-a33dc21d.js";import"./FavoriteBtn-88439e92.js";import"./icon-cart-default-4a215bc3.js";const L="/photographySelect/assets/icon-star-5e899565.svg",b={components:{ProductListItem:y,Pagination:v},watch:{"$route.params":{handler(){this.$route.query.page&&this.getProducts(this.$route.query.page)},deep:!0,immediate:!0}},methods:{...n(d,["getProducts"]),...n(P,["addCart"]),getEmitPage(t){this.getProducts(t)}},computed:{...u(d,["products","pagination","isLoading"])},created(){this.getProducts(this.$route.query.page)}},$={class:"container pt-2 pt-lg-8"},w={class:"d-flex align-items-end mb-6 mb-lg-14"},x=s("h2",{class:"fs-display-7 fs-md-display-5 fs-lg-display-3 fs-xl-display-1 font-serif-en"}," Products ",-1),C={class:"d-flex ms-3 mb-3 mb-md-4 mb-lg-6"},E=s("img",{class:"me-2",src:L,alt:"間隔裝飾圖"},null,-1),S={class:"fs-normal-1 fs-md-6 fs-xl-4 font-sans-tw fw-light"},k={class:"row row-cols-2 row-cols-lg-4 gx-6 gx-lg-12 gy-6 gy-lg-16 list-unstyled mb-6 mb-lg-12"};function q(t,A,B,I,F,c){const l=o("ProductListItem"),m=o("Pagination"),p=o("LoadingOverlay");return e(),a("div",$,[s("div",w,[x,s("div",C,[E,s("p",S,"("+f(t.products.length)+")",1)])]),s("ul",k,[(e(!0),a(_,null,h(t.products,i=>(e(),a("li",{class:"d-flex flex-column",key:i.id},[r(l,{product:i,onAddCart:t.addCart},null,8,["product","onAddCart"])]))),128))]),r(m,{"page-info":t.pagination,onEmitPage:c.getEmitPage},null,8,["page-info","onEmitPage"]),r(p,{active:t.isLoading},null,8,["active"])])}const J=g(b,[["render",q]]);export{J as default};
