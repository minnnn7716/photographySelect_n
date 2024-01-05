import{m,_ as b,o as l,c as i,a as t,t as u,b as h,d as w,r as p,w as d,n as x,F as _,e as C,f,g as y,h as L,i as A,v as S,j as F}from"./index-75005144.js";import{c as k,p as T}from"./cartStore-9c02aed8.js";import{t as O}from"./toastStore-24da0ea0.js";import{F as V,f as P,_ as B,a as R}from"./FavoriteBtn-88439e92.js";import{O as q,m as J}from"./modalMixin-b8f36e48.js";import{_ as D}from"./icon-cart-default-4a215bc3.js";import{T as U}from"./ToastMessages-0d274052.js";const N={methods:{showOffcanvas(){this.offcanvas.show()},hideOffcanvas(){this.offcanvas.hide()},routerPush(s){this.$router.push(s),this.offcanvas.hide()},routerPushProduct(s){this.$router.push(`/products/${s}`),this.offcanvas.hide()}},mounted(){this.offcanvas=new q(this.$refs.offcanvas),this.offcanvas.hide()}},z={data(){return{modal:""}},props:{deleteData:{type:String,default:""}},mixins:[J],methods:{...m(k,["deleteAllCart"]),deleteAction(){const s=`deleteAll${this.deleteData}`;this[s](),this.modal.hide()},deleteAllFavorite(){this.$emit("emit-delete-all")}},computed:{source(){let s="";const e=this.deleteData;return e==="Cart"?s="購物車":e==="Favorite"&&(s="喜愛清單"),s}}},E={class:"modal fade",id:"deleteModal",tabindex:"-1",ref:"modal"},G={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content font-sans-tw"},I={class:"modal-header bg-danger-700 text-white"},K={class:"modal-title fs-5",id:"deleteModal"},Q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1),W={class:"modal-body text-center py-10"},X={class:"fw-medium text-danger-800"},Y={class:"modal-footer bg-gray-200"},Z=t("button",{type:"button",class:"btn btn-outline-danger-900 px-10 me-4","data-bs-dismiss":"modal"}," 取消 ",-1);function tt(s,e,c,g,$,r){return l(),i("div",E,[t("div",G,[t("div",H,[t("div",I,[t("h2",K,"刪除全部"+u(r.source),1),Q]),t("div",W,[h(" 確定要刪除 "),t("span",X," 全部"+u(r.source),1),h(" 嗎？ ")]),t("div",Y,[Z,t("button",{type:"button",class:"btn btn-danger-900 px-10",onClick:e[0]||(e[0]=(...a)=>r.deleteAction&&r.deleteAction(...a))}," 確定 ")])])])],512)}const j=b(z,[["render",tt]]),st={data(){return{offcanvas:""}},components:{FavoriteBtn:V,DeleteModal:j},mixins:[N],watch:{products:"getFavoriteList",favoriteList(){this.filterProducts(this.products)}},methods:{...m(k,["addCart"]),...m(O,["pushMsg"]),...m(P,["getFavoriteList","filterProducts","deleteAllFavorite"]),showFavoriteOffcanvas(){this.getFavoriteList(),this.offcanvas.show()},availableNum(s){return s.totalNum-s.soldNum||0}},computed:{...w(T,["products"]),...w(P,["favoriteList","favoriteProducts"])}},et=t("div",{class:"icon-switch"},[t("img",{class:"icon-switch-default",src:B,alt:"喜愛清單"}),t("img",{class:"icon-switch-active",src:R,alt:"喜愛清單"})],-1),ot=[et],nt={class:"offcanvas offcanvas-end",tabindex:"-1",ref:"offcanvas"},at={class:"offcanvas-header justify-content-end"},lt={class:"d-flex justify-content-between align-items-center px-4 pb-4 border-bottom border-black"},it={class:"font-serif-en fs-2",id:"favoriteOffcanvasLabel"},rt={class:"font-sans-tw fs-6 fw-light"},ct={key:0,class:"flex-grow-1 d-flex flex-column align-items-center justify-content-center font-sans-tw"},dt=t("p",{class:"mb-3 fs-5"},"尚無喜愛商品",-1),ft={key:1,class:"list-unstyled font-sans-tw fw-light px-4 overflow-auto"},ut={class:"d-flex"},pt=["src","alt"],ht={class:"d-flex flex-column justify-content-between"},vt={class:"fs-5 fw-light mb-2"},mt={class:"d-flex align-items-center"},_t=["onClick"],bt=t("img",{src:D,alt:"加入購物車"},null,-1),gt=[bt],$t={key:1};function yt(s,e,c,g,$,r){const a=p("RouterLink"),v=p("FavoriteBtn"),o=p("DeleteModal");return l(),i(_,null,[t("a",{class:"btn px-2 px-lg-3 py-2 me-2 border-0",onClick:e[0]||(e[0]=d((...n)=>r.showFavoriteOffcanvas&&r.showFavoriteOffcanvas(...n),["prevent"]))},ot),t("div",nt,[t("div",at,[t("button",{type:"button",class:"btn icon-close border-0",onClick:e[1]||(e[1]=(...n)=>s.hideOffcanvas&&s.hideOffcanvas(...n))})]),t("div",lt,[t("h5",it,[h(" Favorite "),t("span",rt,"("+u(s.favoriteProducts.length)+")",1)]),t("button",{type:"button",class:x(["btn-custom-light px-5 flex-inherit",{"pe-none opacity-50":!s.favoriteList.length}]),onClick:e[2]||(e[2]=(...n)=>s.$refs.deleteModal.showModal&&s.$refs.deleteModal.showModal(...n))}," 刪除全部 ",2)]),s.favoriteProducts.length?(l(),i("ul",ft,[(l(!0),i(_,null,C(s.favoriteProducts,n=>(l(),i("li",{key:`favorite ${n.id}`,class:"d-flex justify-content-between py-4 border-bottom border-gray-400"},[t("div",ut,[t("a",{href:"#",onClick:e[4]||(e[4]=d((...M)=>s.routerPushProduct&&s.routerPushProduct(...M),["prevent"]))},[t("img",{class:"img-full me-4",style:{width:"100px",height:"130px"},src:n.imageUrl,alt:n.title},null,8,pt)]),t("div",ht,[t("div",null,[t("h3",vt,[f(a,{to:"/products",class:"text-gray-800"},{default:y(()=>[h(u(n.title),1)]),_:2},1024)]),f(a,{to:"/products",class:"text-gray-800"},{default:y(()=>[h(u(n.author),1)]),_:2},1024)]),t("p",null,"單價 NT "+u(s.$filters.currency(n.price)),1)])]),t("div",mt,[r.availableNum(n)?(l(),i("a",{key:0,href:"#",class:"icon-cart d-inline-block rounded-circle p-2",onClick:d(M=>s.addCart(n.id,1),["prevent"])},gt,8,_t)):(l(),i("p",$t,"售完")),f(v,{id:n.id,onClick:s.getFavoriteList},null,8,["id","onClick"])])]))),128))])):(l(),i("div",ct,[dt,t("a",{href:"#",class:"btn btn-primary rounded-pill",onClick:e[3]||(e[3]=d(n=>s.routerPush("/products"),["prevent"]))}," 來去逛逛吧！ ")]))],512),f(o,{ref:"deleteModal",deleteData:"Favorite",onEmitDeleteAll:s.deleteAllFavorite},null,8,["onEmitDeleteAll"])],64)}const kt=b(st,[["render",yt]]),wt="/photographySelect/assets/icon-cart-active-a1235378.svg",xt={data(){return{offcanvas:""}},components:{DeleteModal:j},mixins:[N],methods:{...m(k,["getCart","updatedCart","deleteCart","deleteAllCart"]),availableNum(s){const{totalNum:e,soldNum:c}=s.product;return e-c}},computed:{...w(k,["cartsData"])},created(){this.getCart()}},Ct=t("div",{class:"icon-switch"},[t("img",{class:"icon-switch-default",src:D,alt:"購物車"}),t("img",{class:"icon-switch-active",src:wt,alt:"購物車"})],-1),Ot={key:0,class:"icon-cart-num position-absolute"},Nt={class:"font-sans-tw"},Mt={class:"offcanvas-custom offcanvas offcanvas-end border-0",tabindex:"-1",ref:"offcanvas"},Pt={class:"offcanvas-header justify-content-end"},Ft={class:"d-flex justify-content-between align-items-center px-4 pb-4 border-bottom border-black"},Dt={class:"font-serif-en fs-2",id:"favoriteOffcanvasLabel"},jt={class:"font-sans-tw fs-6 fw-light"},Lt={key:0,class:"flex-grow-1 d-flex flex-column align-items-center justify-content-center font-sans-tw"},At=t("p",{class:"mb-3 fs-5"},"購物車內尚無商品",-1),St={key:1,class:"list-unstyled font-sans-tw fw-light px-4 overflow-auto flex-grow-1"},Tt={class:"d-flex"},Vt=["onClick"],Bt=["src","alt"],Rt={class:"d-flex flex-column justify-content-between"},qt={class:"fs-5 mb-2"},Jt=["onClick"],Ut={class:"d-flex align-items-center"},zt=t("span",{class:"mx-1"},"×",-1),Et=["id","onUpdate:modelValue","onChange"],Gt=["value","selected"],Ht=["onClick"],It={class:"offcanvas-footer d-flex justify-content-between align-items-center p-3 border-top border-black"},Kt={class:"font-sans-tw d-flex align-items-center"},Qt={class:"fs-3 fw-medium ms-2"};function Wt(s,e,c,g,$,r){const a=p("RouterLink"),v=p("DeleteModal");return l(),i(_,null,[t("a",{href:"#",class:"btn px-2 px-lg-3 py-2 me-2 border-0 position-relative",onClick:e[0]||(e[0]=d((...o)=>s.showOffcanvas&&s.showOffcanvas(...o),["prevent"]))},[Ct,s.cartsData.itemsNum?(l(),i("div",Ot,[t("span",Nt,u(s.cartsData.itemsNum),1)])):L("",!0)]),t("div",Mt,[t("div",Pt,[t("button",{type:"button",class:"btn icon-close border-0",onClick:e[1]||(e[1]=(...o)=>s.hideOffcanvas&&s.hideOffcanvas(...o))})]),t("div",Ft,[t("h5",Dt,[h(" Cart "),t("span",jt,"("+u(s.cartsData.itemsNum)+")",1)]),t("button",{type:"button",class:x(["btn-custom-light px-5 flex-inherit",{"pe-none opacity-50":Object.prototype.hasOwnProperty.call(s.cartsData,"carts")?!s.cartsData.carts.length:!1}]),onClick:e[2]||(e[2]=(...o)=>s.$refs.deleteModal.showModal&&s.$refs.deleteModal.showModal(...o))}," 刪除全部 ",2)]),s.cartsData.itemsNum?(l(),i("ul",St,[(l(!0),i(_,null,C(s.cartsData.carts,o=>(l(),i("li",{key:`cart ${o.product.title}`,class:"d-flex align-items-center justify-content-between py-4 border-bottom border-gray-400"},[t("div",Tt,[t("a",{href:"#",onClick:d(n=>s.routerPushProduct(o.product_id),["prevent"])},[t("img",{class:"img-full me-4",style:{width:"90px",height:"120px"},src:o.product.imagesUrl[0],alt:o.product.title},null,8,Bt)],8,Vt),t("div",Rt,[t("div",null,[t("h3",qt,[t("a",{href:"#",onClick:d(n=>s.routerPushProduct(o.product_id),["prevent"]),class:"text-gray-800"},u(o.product.title),9,Jt)]),f(a,{to:"/products",class:"text-gray-800"},{default:y(()=>[h(u(o.product.author),1)]),_:2},1024)]),t("div",Ut,[t("p",null,"NT "+u(s.$filters.currency(o.product.price)),1),zt,A(t("select",{name:"productNum",style:{width:"80px"},class:"form-select rounded-0 border-gray-800 text-center py-1",id:`${o.product.id}productNum`,"onUpdate:modelValue":n=>o.qty=n,onChange:n=>s.updatedCart(o.id,o.product_id,o.qty)},[(l(!0),i(_,null,C(r.availableNum(o),n=>(l(),i("option",{value:n,key:`數量 ${n}`,selected:n==o.qty},u(n),9,Gt))),128))],40,Et),[[S,o.qty]])])])]),t("a",{href:"#",onClick:d(n=>s.deleteCart(o.id),["prevent"]),class:"btn icon-close border-0"},null,8,Ht)]))),128))])):(l(),i("div",Lt,[At,t("a",{href:"#",class:"btn btn-primary rounded-pill",onClick:e[3]||(e[3]=d(o=>s.routerPush("/products"),["prevent"]))}," 來去逛逛吧！ ")])),t("div",It,[t("p",Kt,[h(" 總金額 "),t("span",Qt,u(s.$filters.currency(s.cartsData.total)),1)]),t("a",{href:"#",onClick:e[4]||(e[4]=d(o=>s.routerPush("/cart"),["prevent"])),class:x(["btn-custom-dark flex-inherit",{"pe-none opacity-50":Object.prototype.hasOwnProperty.call(s.cartsData,"carts")?!s.cartsData.carts.length:!1}])},"前往結帳",2)])],512),f(v,{ref:"deleteModal",deleteData:"Cart"},null,512)],64)}const Xt=b(xt,[["render",Wt]]),Yt="/photographySelect/assets/icon-user-9aaa1382.svg";const Zt={data(){return{offcanvas:""}},mixins:[N],methods:{...m(O,["pushMsg"]),loginJudge(){const s="https://vue3-course-api.hexschool.io/api/user/check",e=document.cookie.replace(/(?:(?:^|.*;\s*)psToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${e}`,this.$http.post(s).then(c=>{c.data.success?this.$router.push("/admin/products"):this.$router.push("/login"),this.offcanvas.hide()}).catch(c=>{c.request.status===404&&this.pushMsg({style:"danger",title:"登入憑證驗證失敗",content:"抱歉，出現系統問題，請聯絡我們！"})})}}},ts=t("div",{class:"icon-list"},null,-1),ss=[ts],es={class:"offcanvas offcanvas-end",tabindex:"-1",ref:"offcanvas"},os={class:"offcanvas-header justify-content-end"},ns={class:"offcanvas-body navOffcanvas-offcanvas-body list-unstyled font-serif-en fs-2 fs-xl-1 p-0 d-flex flex-column justify-content-center"},as={class:"navOffcanvas-offcanvas-footer px-6 pb-6 pb-xl-10 d-flex justify-content-between align-items-end"},ls=F('<ul class="list-unstyled font-sans-tw fs-normal-1 fw-light"><li class="mb-2"><a class="d-inline-block link-gray-800 btn-custom-hover-scale-sm" href="tel:04-22876543">04-22876543</a></li><li class="mb-2"><a class="d-inline-block link-gray-800 btn-custom-hover-scale-sm" href="mailto:photoselect@gmail.com">photoselect@gmail.com</a></li><li><a class="d-inline-block link-gray-800 btn-custom-hover-scale-sm" href="google.com" target="_blank">台中市南區集攝路 128 巷 66 號之 8</a></li></ul>',1),is=t("img",{class:"transition-3",src:Yt,alt:"後台管理員"},null,-1),rs=[is];function cs(s,e,c,g,$,r){return l(),i(_,null,[t("button",{type:"button",class:"btn px-1 px-lg-3 py-2 border-0",onClick:e[0]||(e[0]=(...a)=>s.showOffcanvas&&s.showOffcanvas(...a))},ss),t("div",es,[t("div",os,[t("button",{type:"button",class:"btn icon-close border-0",onClick:e[1]||(e[1]=(...a)=>s.hideOffcanvas&&s.hideOffcanvas(...a))})]),t("ul",ns,[t("li",null,[t("a",{href:"#",onClick:e[2]||(e[2]=d(a=>s.routerPush("/"),["prevent"])),class:"d-block text-center link-dark py-2 py-xl-4"},"Home")]),t("li",null,[t("a",{href:"#",onClick:e[3]||(e[3]=d(a=>s.routerPush("/products"),["prevent"])),class:"d-block text-center link-dark py-2 py-xl-4 navOffcanvas-productsLink"},"Products")]),t("li",null,[t("a",{href:"#",onClick:e[4]||(e[4]=d(a=>s.routerPush("/news"),["prevent"])),class:"d-block text-center link-dark py-2 py-xl-4"},"News")]),t("li",null,[t("a",{href:"#",onClick:e[5]||(e[5]=d(a=>s.routerPush("/order"),["prevent"])),class:"d-block text-center link-dark py-2 py-xl-4"},"Check Order")])]),t("div",as,[ls,t("button",{type:"button",class:"navOffcanvas-loginBtn btn border-0 btn-custom-hover-scale-sm",onClick:e[6]||(e[6]=(...a)=>r.loginJudge&&r.loginJudge(...a))},rs)])],512)],64)}const ds=b(Zt,[["render",cs]]);const fs={components:{FavoriteOffcanvas:kt,CartOffcanvas:Xt,NavOffcanvas:ds}},us={class:"navbar front-navbar fixed-top py-2 py-lg-3 px-lg-8"},ps={class:"container-fluid"},hs=t("h1",{class:"navbar-brand front-navbar-brand"},"集攝 Photography Select",-1),vs={class:"list-unstyled mb-0 d-flex align-items-center"};function ms(s,e,c,g,$,r){const a=p("RouterLink"),v=p("FavoriteOffcanvas"),o=p("CartOffcanvas"),n=p("NavOffcanvas");return l(),i("nav",us,[t("div",ps,[f(a,{to:"/",class:"d-inline-block img-hover-scale-sm"},{default:y(()=>[hs]),_:1}),t("ul",vs,[t("li",null,[f(v)]),t("li",null,[f(o)]),t("li",null,[f(n)])])])])}const _s=b(fs,[["render",ms]]);const bs={methods:{...m(O,["pushMsg"]),loginJudge(){const s="https://vue3-course-api.hexschool.io/api/user/check",e=document.cookie.replace(/(?:(?:^|.*;\s*)psToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${e}`,this.$http.post(s).then(c=>{c.data.success?this.$router.push("/admin/products"):this.$router.push("/login")}).catch(c=>{c.request.status===404&&this.pushMsg({style:"danger",title:"登入憑證驗證失敗",content:"抱歉，出現系統問題，請聯絡我們！"})})}}},gs={class:"bg-gray-800 py-8 mt-15 mt-xxl-24 mt-3xl-40"},$s={class:"container font-sans-tw fs-normal-1 position-relative d-flex flex-column-reverse flex-lg-row justify-content-between align-items-lg-end"},ys=F('<p class="d-lg-none text-white fw-light text-center mt-8"> © 2023｜m_m ｜ 此網站為個人作品展示，<br class="d-md-none">非商業使用，圖片源於 Unsplash </p><ul class="list-unstyled fw-light mb-0"><li class="mb-2"><a class="link-white" href="tel:04-22876543">04-22876543</a></li><li class="mb-2"><a class="link-white" href="mailto:photoselect@gmail.com">photoselect@gmail.com</a></li><li><a class="link-white" href="google.com" target="_blank">台中市南區集攝路 128 巷 66 號之 8</a></li></ul>',2),ks={class:"text-end"},ws=t("p",{class:"d-none d-lg-block text-white fw-light text-start"}," © 2023｜m_m ｜ 此網站為個人作品展示，非商業使用，圖片源於 Unsplash ",-1),xs=t("div",{class:"footer-decoText position-absolute end-0 text-gray-800"},[t("span",{class:"font-serif-tw writing-vertical d-none d-lg-inline-block"},"集 攝"),t("span",{class:"font-serif-en fs-2 fs-md-1 fs-lg-display-6"},"PhotoGraphy Select")],-1);function Cs(s,e,c,g,$,r){return l(),i("footer",gs,[t("div",$s,[ys,t("div",ks,[t("button",{type:"button",onClick:e[0]||(e[0]=(...a)=>r.loginJudge&&r.loginJudge(...a)),class:"btn btn-gray-700 rounded-pill fs-normal-1 fw-light mb-3 px-5"}," 管理員登入 "),ws]),xs])])}const Os=b(bs,[["render",Cs]]),Ns={components:{Navbar:_s,FooterComponent:Os,ToastMessages:U}};function Ms(s,e,c,g,$,r){const a=p("Navbar"),v=p("RouterView"),o=p("FooterComponent"),n=p("ToastMessages");return l(),i(_,null,[f(a),f(v,{class:"frontView"}),f(o),f(n)],64)}const Ts=b(Ns,[["render",Ms]]);export{Ts as default};
