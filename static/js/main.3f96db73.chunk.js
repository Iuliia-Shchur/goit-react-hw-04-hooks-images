(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={Message:"ImageError_Message__2VgFQ",Img:"ImageError_Img__1kk6R"}},15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__FGP3f",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1MFOE"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1LPpa",Modal:"Modal_Modal__1DESh"}},27:function(e,t,a){e.exports={App:"App_App__3Grgb"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2cfDr"}},29:function(e,t,a){e.exports={Button:"Button_Button__3wdcw"}},35:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),o=a.n(c),s=(a(35),a(5)),i=a.n(s),l=a(18),u=a(12),m=a(3),j=a(8),g=(a(37),a(27)),b=a.n(g),d=a(6),h=a.n(d),p=a(1);var f=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(m.a)(a,2),c=n[0],o=n[1];return Object(p.jsx)("div",{children:Object(p.jsx)("header",{className:h.a.Searchbar,children:Object(p.jsxs)("form",{className:h.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return j.b.error("Enter your query!");t(c),o("")},children:[Object(p.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(p.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{name:"query",value:c,onChange:function(e){o(e.target.value.toLowerCase())},className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})},O=a(15),v=a.n(O),x=a(16),I=a.n(x),_=document.querySelector("#modal-root");var S=function(e){var t=e.modalImg,a=e.tags,n=e.onToggleModal;Object(r.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&n()};return Object(c.createPortal)(Object(p.jsx)("div",{className:I.a.Overlay,onClick:function(e){e.currentTarget===e.target&&n()},children:Object(p.jsx)("div",{className:I.a.Modal,children:Object(p.jsx)("img",{src:t,alt:a})})}),_)};var y=function(e){var t=e.id,a=e.previewImg,r=e.tags,n=e.onToggleModal,c=e.showModal,o=e.modalImg,s=e.onImgClick,i=e.largeImageURL;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(p.jsx)("img",{"data-img":i,src:a,alt:r,className:v.a.ImageGalleryItemImage,onClick:s})},t),c&&Object(p.jsx)(S,{modalImg:o,onToggleModal:n,tags:r})]})},w=a(28),M=a.n(w),F=a.p+"static/media/error.7d86105a.jpg",k=a(13),G=a.n(k);function L(e){var t=e.message;return Object(p.jsxs)("div",{role:"alert",className:G.a.AlertWrapper,children:[Object(p.jsx)("img",{className:G.a.Img,src:F,width:"240",alt:"sadcat"}),Object(p.jsxs)("p",{className:G.a.Message,children:["There are no ",t," images!"]})]})}var N=function(e){var t,a=e.images,n=Object(r.useState)(!1),c=Object(m.a)(n,2),o=c[0],s=c[1],i=Object(r.useState)(""),l=Object(m.a)(i,2),u=l[0],j=l[1],g=function(){s(!o)},b=function(e){var t=e.target.dataset.img;j(t),g()};return a&&(t=Object(p.jsx)("ul",{className:M.a.ImageGallery,children:a.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,n=e.largeImageURL;return Object(p.jsx)(y,{largeImageURL:n,previewImg:a,tags:r,onToggleModal:g,showModal:o,onImgClick:b,modalImg:u},t)}))})),Object(p.jsx)("div",{children:t})},B=a(29),E=a.n(B);var C=function(e){var t=e.onLoadMore;return Object(p.jsx)("button",{type:"button",className:E.a.Button,onClick:function(){return t()},children:"Load more"})},T=a(30),A={spinner:{display:"flex",alignItems:"center",marginBottom:10,fontSize:24}};var R=function(){return Object(p.jsx)("div",{role:"alert",children:Object(p.jsxs)("div",{style:A.spinner,children:[Object(p.jsx)(T.a,{size:"32",className:"icon-spin"}),"Loading..."]})})},U=a(17),D=a.n(U),q="23195406-da0192683225ba1cc94043cce";D.a.defaults.baseURL="https://pixabay.com/api/";var z="image_type=photo&orientation=horizontal&per_page=12";function P(){return(P=Object(u.a)(i.a.mark((function e(t,a){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("?&q=".concat(t,"&page=").concat(a,"&key=").concat(q,"&").concat(z));case 2:return r=e.sent,n=r.data.hits,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e,t){return P.apply(this,arguments)};var Q=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(1),o=Object(m.a)(c,2),s=o[0],g=o[1],d=Object(r.useState)([]),h=Object(m.a)(d,2),O=h[0],v=h[1],x=Object(r.useState)(!1),I=Object(m.a)(x,2),_=I[0],S=I[1];Object(r.useEffect)((function(){if(a){S(!0);var e=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J(a,s);case 3:t=e.sent,v((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),1!==s&&y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,S(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[s,a]);var y=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},w=O.length>0&&O.length>=12,M=""!==a;return Object(p.jsxs)("div",{className:b.a.App,children:[Object(p.jsx)(j.a,{autoClose:3e3}),Object(p.jsx)(f,{onSubmit:function(e){n(e),g(1),v([])}}),O.length>0?Object(p.jsx)(N,{images:O}):M&&Object(p.jsx)(L,{message:a}),w&&Object(p.jsx)(C,{onLoadMore:function(){S(!_),g((function(e){return e+1})),S(_)}}),_&&Object(p.jsx)(R,{}),Object(p.jsx)(j.a,{autoClose:3e3})]})};o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2ziwA",SearchForm:"Searchbar_SearchForm__1tDe6",SearchFormButton:"Searchbar_SearchFormButton__2hQlf",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1GMGD",SearchFormInput:"Searchbar_SearchFormInput__1UfvF"}}},[[57,1,2]]]);
//# sourceMappingURL=main.3f96db73.chunk.js.map