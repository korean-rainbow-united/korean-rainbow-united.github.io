(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71b15b40","chunk-6949f616"],{"0060":function(t,e,i){},"26d2":function(t,e,i){"use strict";i("4ee7")},"2db4":function(t,e,i){"use strict";var o=i("ade3"),a=(i("a9e3"),i("caad"),i("ca71"),i("8dd9")),s=i("a9ad"),n=i("7560"),c=i("f2e7"),r=i("fe6c"),l=i("58df"),d=i("80d2"),u=i("d9bd");e["a"]=Object(l["a"])(a["a"],s["a"],c["a"],Object(r["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:n["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,o=t.footer,a=t.insetFooter,s=t.left,n=t.right,c=t.top;return{paddingBottom:Object(d["f"])(i+o+a),paddingLeft:this.app?Object(d["f"])(s):void 0,paddingRight:this.app?Object(d["f"])(n):void 0,paddingTop:Object(d["f"])(e+c)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(u["e"])("auto-height",this),0==this.timeout&&Object(u["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(d["n"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(d["n"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,i=e(this.color,{staticClass:"v-snack__wrapper",class:a["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",i,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},3891:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:this.$route.params.id?"pa-12":""},[i("v-card",{staticClass:"mx-auto",attrs:{loading:t.loading,width:t.isMobile?"100%":800}},["비디오 컨텐츠"==t.localPost.category?i("iframe",{attrs:{width:"100%",height:t.isMobile?200:500,src:"https://www.youtube.com/embed/"+t.localPost.youtubeUrl,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):i("v-img",{attrs:{"lazy-src":"https://drive.google.com/uc?export=view&id="+t.localPost.imageUrl,height:t.isMobile?"50%":"100%",src:"https://drive.google.com/uc?export=view&id="+t.localPost.imageUrl}}),i("v-card-text",[i("div",{staticClass:"d-flex justify-space-between mt-4"},[i("div",{staticClass:"grey--text"},[t._v(t._s(t.localPost.numViews)+" Views")]),i("v-btn",{attrs:{color:"#9575cd",outlined:"",label:""},on:{click:function(e){return t.copyLink()}}},[t.isMobile?t._e():i("b",[t._v("Copy post link")]),i("v-icon",t._g(t._b({},"v-icon",t.attrs,!1),t.on),[t._v("mdi-share-variant-outline")])],1),i("v-snackbar",{attrs:{timeout:"2000",color:"#9575cd"},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[i("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" The post link has been copied to the clipboard. ")])],1)]),i("v-divider",{staticClass:"mx-2"}),i("v-card-title",[t._v(t._s(t.localPost.title)+" ")]),i("v-card-text",[i("div",{staticClass:"mt-1",domProps:{innerHTML:t._s(t.localPost.content)}})]),i("v-card-text",[i("div",{staticClass:"grey--text"},[t._v(" "+t._s(t.localPost.fromNow)+" ")])]),i("v-card-text",[this.$route.params.id?i("v-divider",{staticClass:"mx-2 mb-5"}):t._e(),i("div",{class:this.$route.params.id?"d-flex justify-space-between align-center":"d-flex justify-end align-center"},[this.$route.params.id?i("v-btn",{attrs:{depressed:"",color:"#9575cd",dark:"",onclick:"history.back()"}},[t._v("Go Back")]):t._e(),t.isLoggedIn?i("v-menu",{attrs:{top:"","offset-x":!0},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),o),[i("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-vertical")])],1)]}}],null,!1,1759850144)},[i("v-list",[i("v-list-item",{attrs:{to:{path:"/project/videos/edit/"+t.localPost._id}}},[i("v-list-item-title",[i("v-icon",{attrs:{left:""}},[t._v(" mdi-pencil ")]),t._v("수정하기")],1)],1),i("v-list-item",{on:{click:function(e){t.dialog=!0}}},[i("v-list-item-title",[i("v-icon",{attrs:{left:""}},[t._v(" mdi-trash-can-outline ")]),t._v("삭제하기")],1)],1)],1)],1):t._e()],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h6"},[t._v(" 게시물을 삭제합니다. ")]),i("v-card-text",[t._v("게시물을 영구적으로 삭제합니다. "),i("br"),t._v(" 게시물에 중요한 내용이 있다면 반드시 확인하세요.")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 취소 ")]),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.deleteVideo(t.localPost._id,t.localPost.category)}}},[t._v(" 삭제하기 ")])],1)],1)],1)],1)},a=[],s=i("5530"),n=(i("99af"),i("bc3a")),c=i.n(n),r=i("2f62"),l=i("c1df"),d=i.n(l),u=i("f1cd"),h=i.n(u),v={computed:Object(s["a"])(Object(s["a"])({},Object(r["c"])(["isLoggedIn"])),{},{isMobile:function(){return this.windowWidth<500}}),mounted:function(){var t=this;window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth}))},name:"PostDetail",props:["post"],data:function(){return{readMoreActivated:!1,localPost:"",loading:!1,snackbar:!1,selection:1,linkUrl:"",dialog:!1,offset:!0,windowWidth:window.innerWidth}},created:function(){this.post?(this.localPost=this.post,this.linkUrl="".concat(window.location.href,"/").concat(this.post._id)):this.getPosts(),this.localPost.content>200?this.readMoreActivated=!0:this.readMoreActivated=!1,this.$route.params.id&&(this.linkUrl="".concat(window.location.href))},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["deletePost","getVideos"])),{},{getPosts:function(){var t=this;c.a.get("".concat(this.$ROOT_API,"/posts/").concat(this.$route.params.id)).then((function(e){t.localPost=e.data,t.localPost.fromNow=d()(e.data.createdAt).fromNow()}))},copyLink:function(){h()(this.linkUrl),this.snackbar=!0},deleteVideo:function(t,e){this.deletePost(t,e)}})},p=v,m=(i("26d2"),i("2877")),f=i("6544"),b=i.n(f),g=i("8336"),w=i("b0af"),k=i("99d9"),_=i("169a"),y=i("ce7e"),x=i("132d"),P=i("adda"),C=i("8860"),j=i("da13"),O=i("5d23"),T=i("e449"),V=i("2db4"),A=i("2fa4"),$=Object(m["a"])(p,o,a,!1,null,"4efec8fa",null);e["default"]=$.exports;b()($,{VBtn:g["a"],VCard:w["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VDialog:_["a"],VDivider:y["a"],VIcon:x["a"],VImg:P["a"],VList:C["a"],VListItem:j["a"],VListItemTitle:O["c"],VMenu:T["a"],VSnackbar:V["a"],VSpacer:A["a"]})},"4ee7":function(t,e,i){},ca71:function(t,e,i){},d7c4:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"pt-10 mt-1 mx-5 mb-10"},t._l(t.allPosts,(function(t){return i("v-col",{key:t.id,attrs:{cols:"12",sm:"4",md:"3",lg:"3",xl:"3"}},[i("PostThumbnail",{staticClass:"thumbnail",attrs:{post:t}})],1)})),1)},a=[],s=i("5530"),n=i("db88"),c=i("3891"),r=i("2f62"),l={name:"VideoContent",data:function(){return{posts:""}},components:{PostThumbnail:n["a"],PostDetail:c["default"]},computed:Object(r["c"])(["allPosts"]),methods:Object(s["a"])({},Object(r["b"])(["getPosts","deleteVideo"])),created:function(){this.getPosts("비디오 컨텐츠")}},d=l,u=(i("dc29"),i("2877")),h=i("6544"),v=i.n(h),p=i("62ad"),m=i("0fd9"),f=Object(u["a"])(d,o,a,!1,null,"364b67a4",null);e["default"]=f.exports;v()(f,{VCol:p["a"],VRow:m["a"]})},db88:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{loading:t.loading}},[i("v-img",{attrs:{height:"100%",width:"100%","min-height":"10rem",src:"크레파스 워십"===t.post.category?"https://drive.google.com/uc?export=view&id="+t.post.imageUrl:"https://img.youtube.com/vi/"+t.post.youtubeUrl+"/0.jpg"},on:{click:function(e){return e.stopPropagation(),t.clickPost()}}})],1)},a=[],s=(i("99af"),i("3891")),n=i("9883"),c=i("bc3a"),r=i.n(c),l={name:"PostThumbnail",components:{PostDetail:s["default"]},props:["post"],data:function(){return{loading:!1,selection:1,dialog:!1}},created:function(){},methods:{clickPost:function(){n["a"].push({path:"/project/videos/".concat(this.post._id)}),r.a.post("".concat(this.$ROOT_API,"/posts/").concat(this.post._id))}}},d=l,u=i("2877"),h=i("6544"),v=i.n(h),p=i("b0af"),m=i("adda"),f=Object(u["a"])(d,o,a,!1,null,"16a51087",null);e["a"]=f.exports;v()(f,{VCard:p["a"],VImg:m["a"]})},dc29:function(t,e,i){"use strict";i("0060")},f1cd:function(t,e){function i(){return new DOMException("The request is not allowed","NotAllowedError")}async function o(t){if(!navigator.clipboard)throw i();return navigator.clipboard.writeText(t)}async function a(t){const e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre",e.style.webkitUserSelect="auto",e.style.userSelect="all",document.body.appendChild(e);const o=window.getSelection(),a=window.document.createRange();o.removeAllRanges(),a.selectNode(e),o.addRange(a);let s=!1;try{s=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(e)}if(!s)throw i()}async function s(t){try{await o(t)}catch(e){try{await a(t)}catch(s){throw s||e||i()}}}
/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.exports=s}}]);
//# sourceMappingURL=chunk-71b15b40.46111401.js.map