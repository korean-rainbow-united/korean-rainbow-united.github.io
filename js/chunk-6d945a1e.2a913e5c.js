(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d945a1e"],{"0798":function(e,t,o){"use strict";var i=o("5530"),a=o("ade3"),n=(o("caad"),o("0c18"),o("10d2")),s=o("afdd"),r=o("9d26"),l=o("f2e7"),d=o("7560"),h=o("2b0e"),c=h["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),u=o("58df"),m=o("d9bd");t["a"]=Object(u["a"])(n["a"],l["a"],c).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:Object(a["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(s["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(r["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||d["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,o){},"0e421":function(e,t,o){e.exports=o.p+"img/image1.cf902fd4.jpg"},"165e":function(e,t,o){},"54e8":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-container",{staticClass:"px-5"},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1200",outlined:"",color:"transparent"}},[i("v-card-text",[i("v-row",[i("v-col",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{color:"#9575CD",dark:""},on:{click:function(t){e.isEnglish=!e.isEnglish}}},[e._v(e._s(0==e.isEnglish?"English":"Korean"))])],1)],1),i("div",{staticClass:"mt-10 text--primary text-h5"},[i("span",[e._v("인물")]),i("v-divider")],1),i("br"),i("div",{directives:[{name:"show",rawName:"v-show",value:0==e.isEnglish,expression:"isEnglish == false"}],staticClass:"text--primary"},[i("div",{staticClass:"d-flex justify-center ma-5"},[i("h1",[e._v(' "육우당" ')])]),i("v-alert",{attrs:{border:"left","colored-border":"",color:"#CE93D8",elevation:"2"}},[i("div",{staticClass:"pa-5  text-caption text-sm-body-1"},[e._v(" 난 내가 비정상이라고 생각하지 않는다. 오른손잡이가 있으면 왼손잡이가 있는 것이고, 이런 길이 있으면 저런 길도 있는 것이다. 보통 사람들은 ‘가장 많이 다니는 길’을 걷는다면, 난 단지 ‘인적이 드문 길’을 걷고 있는 것뿐이다.” ")]),i("div",{staticClass:"d-flex justify-center justify-sm-end px-5 my-4 text-caption text-sm-body-1"},[e._v(" – 2002년 10월 8일, 육우당의 일기중 ")])]),i("div",{staticClass:"mt-10"},[i("p",[e._v(" 그는 본명 대신 ‘육우당’이라는 호로 불리고 있다. 그는 술, 담배, 수면제, 파운데이션, 녹차, 묵주가 자신의 여섯 친구라며 자신의 호를 육우(六友)당이라고 지었다. ")]),i("p",[e._v(" 육우당은 성 소수자에 대한 교회와 사회의 차별에 항의하기 위해 목숨을 잃은 한국의 게이 시인이자 활동가이자 독실한 천주교도였습니다. 그는 2003년 4월 26일, 18 세의 나이로 사망했습니다. 그는 유서에 “몰지각한 편견으로 이 사회는 수많은 성적 소수자를 낭떠러지로 내몰고 있다”며 “내 한목숨 죽어서 동성애 사이트가 유해 매체에서 삭제되고, 소돔과 고모라 운운하는 가식적인 기독교인들에게 무언가 깨달음을 준다면 그것으로 족하다”고 적었다. ")]),i("p",[e._v(" 그의 삶에서 따돌림, 폭력, 멸시와 괴롭힘은 일상적인 일이었다. 사춘기 때부터 우울증에 시달렸고, 성정체성 문제로 정신과 상담도 받아야만 했다. 결국, 고등학교를 중퇴했고, 가출 후 마땅히 머물 곳이 없었던 그는 일이 끝나면 기름난로 하나뿐이던 동인련 사무실에서 돗자리 하나 깔고 잠을 자곤 했다. 그는 끼니를 거르는 일도 종종 있었지만 자신을 알아보고, 차별하는 사람이 없는 서울 생활이 오히려 심리적으로 편하다고 하였다. 검정고시를 준비하며 아르바이트와 노동으로 생활비를 조달하였고, 계속 자신의 월급 중 일부를 동성애자인권연대에 후원했고, 성소수자들의 인권을 위한 다양한 활동에 참여했을 뿐만 아니라 노인 요양원과 고아원 자원봉사와 시조 짓기도 병행했다. 또한 노동자 집회, 장애인 차별 반대 집회, 성노동자 인권 집회, 반전 평화운동도 참여하며, 다른 사람을 차별하지 않고 함부로 폭력을 휘두르지 않을 양심을 호소했다. ")]),i("p",[e._v(" 그는 시조를 통해서 유교사상, 기독교 근본주의, 정치인등을 비판했다. 정부, 기득권층, 상류층이 금욕주의와 도덕주의로 대중을 괴롭힌다고 역설했고, 일부 기독교인들이 성적 소수자들을 잔인하게 낭떨어지로 몰고 간다고 한탄했다. ")]),i("p",[e._v(" 가톨릭 교회 신자였던 그는 동성애자에 대한 사회적 편견에 좌절해 끝내 세상을 떠났다. 죽은 뒤에도 한동안 인터넷에는 그의 이름이나 필명들만 언급, 소개되어도 익명의 악플과 조롱, 비방이 쏟아지기도 했다. 그의 이름은 2010년 이후에나 한국 사회에 공개될 수 있었다. 그가 떠난 뒤 동인련은 매년 4월 고 육우당 추모의 밤을 진행해 왔다. 이후 그는 고통받는 청소년 성(性) 소수자 인권의 상징이 됐다. ")]),i("p",[i("a",{attrs:{target:"_blank",href:"https://librewiki.net/wiki/%EC%9C%A1%EC%9A%B0%EB%8B%B9"}},[e._v('리브레 위키 "육우당" 항목 링크')])]),i("v-divider",{staticClass:"info my-10",staticStyle:{opacity:"0.22"}}),i("v-alert",{staticClass:"pt-10",attrs:{border:"left","colored-border":"",color:"#CE93D8",elevation:"2"}},[i("div",{staticClass:"pa-5  text-caption text-sm-body-1"},[e._v(" 육우당은 동성애자들이 멸시받지 않는 세상이 오게 해달라고 기도하며, 동성애자들을 정죄의 대상으로 여기는 기독교의 태도에 목숨을 잃었다. 하지만 18년이 지난 지금도 그의 울부짖는 영혼이 여전히 한국 사회를 떠돌고 있다. 하나님의 사랑이라는 이름으로 한 인간의 존엄한 삶을 짓밟는 기독교와 한국 사회는, 얼마나 더 많은 사람이 목숨을 내어놓아야 소수자들의 울부짖음을 들을 것인가? ")]),i("div",{staticClass:"d-flex justify-center justify-sm-end px-5 my-4 text-caption text-sm-body-1"},[e._v(" – Hyerim Park ")])])],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.isEnglish,expression:"isEnglish == true"}],staticClass:"text--primary"},[i("p",[e._v(" A letter from Korean Rainbow United (a network of The United Church of Canada) ")]),i("p",[e._v(" Warm greetings. ")]),i("p",[e._v(" We are writing to you, in faith and hope, to share a story about the life and death of a queer activist in South Korea who called himself by Yukoodang. Yukoodang means “My Six Friends” and he wrote that his Yukoo (􁇯􁠺) were “alcohol, cigarettes, sleeping pills, make-up foundation, green tea, and a rosary.” Yukoodang, a 19-year-old gay youth, committed suicide on April 26, 2003, in his office at Donginryun, (Solidarity for LGBTQ Human Rights of Korea) which had also been his nightly shelter away from his family since he was a minor. Yukoodang was a devoted Catholic. His baptismal name was Antonio. In spite of his frustration with his church, Yukoodang’s last words in his will were that he loved Catholicism and his God would bless Donginryun. ")]),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[i("v-img",{attrs:{src:o("0e421")}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"8",lg:"8"}},[i("p",[e._v(" Yukoodang came out in middle school and endured daily bullying, violence and harassment. He supported himself after quitting high school and running away from home. Yukoodang became a very active member of the LGBTQ movement. He regularly sent donations to Donginryun by saving his pocket money. He wrote many opinion pieces for newspapers, denouncing discrimination against LGBTQs and demanding a repeal of the anti-gay clause in the Juvenile Protection Act. Under the rainbow flag, he enthusiastically joined rallies against the war in Iraq. ")]),i("p",[e._v(" At his death, Yukoodang left a 6-page letter next to his body, a rosary and a cross on his desk, and about 30 dollars for donation, which was all he had. He said in his will, “Please use this money for the liberation of sexual minorities. Brothers and sisters, please don’t forget that only your efforts can make an impact for our next generation.” ")])])],1),i("p",[e._v(" In his suicide note, Yukoodang wrote, “The God I believe in will accept me.” He also expressed anger and criticism towards homophobia and discrimination against LGBTQ people, particularly from the Christian Right. “How cruel and anti-biblical it is to discriminate against sexual minorities. After death, I can proudly say that I am gay, with no need to suffer, no need to hide myself anymore. … If, with my death, I can repeal the anti-gay clause in the Juvenile Protection Act and enlighten the bigoted Christians who talk of Sodom and Gomorrah, I would give my life.” ")]),i("p",[e._v(" Yukoodang’s death did, indeed, raise awareness about LGBTQ youth in Korean society. Many LGBTQs came out on the street to challenge the bigoted view that homosexuality is harmful to the nation’s youth. For the first time, the LGBTQ movement found Christian allies who would stand up for LGBTQ rights against the Christian Right. The anti-gay clause in the Juvenile Protection Act was repealed in 2004. ")]),i("p",[e._v(" In his life, Yukoodang enjoyed writing sijos (traditional three-stanza Korean poems) to express his emotions, dreams and visions. Yukoodang, who was a passionate peace activist and dreamed of becoming a sijo poet, was remembered as a quiet friend to many - his writing helps those who survived him to learn about his struggle and resistance. A collection of his sijo poems was published posthumously as “My Hon (spirit/soul) Rains Down as a Flower” in 2006. ")]),i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"8",lg:"8"}},[i("v-card",{staticClass:"pa-10 py-16 mb-5"},[i("p",[e._v(" The Reality "),i("br"),i("br"),e._v(" Sodom and Gomorrah, The frightening story Those preachers tell To drive us out to the edge of the cliff. They hold the pretentious cross In their fists; We struggle desperately under their feet Not to fall. If we fall, Jesus will save us. As he did for prostitutes and those who cannot walk Jesus will show his love even to us, The love, Warm and soft, Like a cotton-wool blanket. "),i("br"),i("br"),e._v(" (written in sijo form by Yukoodang) ")])])],1),i("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4"}},[i("v-img",{attrs:{src:o("7f84")}})],1)],1),i("p",[e._v(" Since 2007, Rainbow Christians and allies have commemorated Yukoodang’s life every April on the anniversary of his death. Each year that Rainbow Jesus Alliance gathers for prayer and remembrance, more pictures of the beloved ones we lost stand beside Yukoodang’s picture on the communion table and more personal articles are placed next to Yukoodang’s rosary and cross. ")]),i("p",[e._v(" Yukoodang’s death has become a pivotal turning point in queer history in Korea, as well as in our Christian narrative of queer liberational theology. The Rev. Borah Lim says that minjung liberational theologies are written by people’s lived experiences, through “events”. For example, the death of Jeon Tae-il who, in 1970 self-immolated while holding the book of The Labour Standards Act and crying out, “Keep the Labour Standards Act!” and “We are not a machine!” in order to bring public attention to the human rights abuses of young female labourers in textile factories brought reform and a legacy of labour liberation. ")]),i("p",[e._v(" Queer liberation in Korea asks who the minjung (people) are now and calls us to the rainbow work of solidarity with all people who are outcast and marginalized in society. The Korean legacy of liberation is still in the present progressive tense. It’s moving forward, but still had a long way to go. Since the early 2000s, the LGBTQ community and movement in Korea has grown and gained support from other sectors of society, including Christian rainbow alliances. However, many LGBTQ youth in Korea are still facing pervasive prejudice, discrimination and bullying, driven not only out of school and home but also driven to suicide. This year in March, within the past two weeks, we witnessed the deaths of three transgender activists because their rights and voices were denied and mocked. Christian Right groups have become more organized and aggressive; they are still opposing the introduction of the Anti-Discrimination Law and Student Human Rights Ordinances that prohibit discrimination on the basis of sexual orientation and gender identity. Yukoodang’s real name, Hyun-seok Yoon, was disclosed to the public only after 2010. One member in Korean Rainbow United lamented, “How many lives should be taken away from us until Korean churches and society finally give ear to the minorities’ loud mourning and outcry? They still trample on the dignity and rights of the life of full human beings in the name of God’s love.” ")]),i("p",[e._v(" That is why we need you. We invite you to share your light/colour with the work of rainbow solidarity in Korea, focusing especially on support to Rainbow Jesus (www.rainbowyesu.org) and to the Annual Gathering for commemorating the life of Yukoodang (on the fourth Thursday in April). We, Korean Rainbow United, hope to create a double rainbow of hope through global ecumenism and partnership as United Church members/friends and as Korean Rainbow queer people and allies. ")]),i("p",[e._v(" Yukoodang is the epitome of the oppressed but proud Korean LGBTQ youth. We invite you to commemorate with us his death and fight for LGBTQ rights and liberation that he dreamed of. ")]),i("v-card",{staticClass:"pa-5"},[e._v(" The Song of Paradise "),i("br"),e._v(" “Come already, Come already, the world of peace! Come already, eating up the world of dark night. Come flowing on the Milky Way, like the flower petal on the river. Come already, the world of beauty, equality and peace, The world that protects homosexuals The world that respects the disabled The world that is hospitable to all of Black descent. Dear Paradise, when your day comes, Everyone will rejoice day and night, Dancing merrily with all peoples, In the joy of paradise.” "),i("br"),i("br"),e._v(" (Yukoodang’s sijo) ")]),i("br"),i("p",[e._v("written by Ha Na Park")])],1)],1)],1)],1)],1)},a=[],n={name:"GreatName",data:function(){return{isEnglish:!1}}},s=n,r=(o("f932"),o("2877")),l=o("6544"),d=o.n(l),h=o("0798"),c=o("8336"),u=o("b0af"),m=o("99d9"),p=o("62ad"),f=o("a523"),g=o("ce7e"),v=o("adda"),y=o("0fd9"),b=Object(r["a"])(s,i,a,!1,null,"000f02f4",null);t["default"]=b.exports;d()(b,{VAlert:h["a"],VBtn:c["a"],VCard:u["a"],VCardText:m["c"],VCol:p["a"],VContainer:f["a"],VDivider:g["a"],VImg:v["a"],VRow:y["a"]})},"7f84":function(e,t,o){e.exports=o.p+"img/image2.c3b6b981.jpg"},afdd:function(e,t,o){"use strict";var i=o("8336");t["a"]=i["a"]},f932:function(e,t,o){"use strict";o("165e")}}]);
//# sourceMappingURL=chunk-6d945a1e.2a913e5c.js.map