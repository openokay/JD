webpackJsonp([14],{"/IpZ":function(t,e){},DKKb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("cjUp"),o=a("Fd2+"),s={name:"feedback",data:function(){return{actionsheet:!1,columns:["功能意见","界面意见","性能问题","网络问题","新的需求","其他问题"],checkType:"",textareas:""}},mounted:function(){console.log("1")},methods:{onConfirm:function(t){console.log(t),this.checkType=t,this.actionsheet=!this.actionsheet}},components:{navigationTop:n.a,Actionsheet:o.a,Button:o.d,Picker:o.u}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navigationTop",[a("div",{attrs:{slot:"icon_left"},slot:"icon_left"},[a("div",{staticStyle:{"margin-top":"5px","font-size":"24px"}},[a("van-icon",{attrs:{name:"arrow-left"}})],1)]),t._v(" "),a("div",{attrs:{slot:"content_center"},slot:"content_center"},[a("span",{staticStyle:{display:"flex","justify-content":"center","margin-top":"8px"}},[t._v("问题反馈")])]),t._v(" "),a("div",{attrs:{slot:"icon_right"},slot:"icon_right"})]),t._v(" "),a("div",{staticClass:"feedback_box"},[a("span",{staticClass:"feedback_title"},[t._v("问题反馈")]),t._v(" "),a("div",{staticStyle:{"border-bottom":"1px solid #666"}}),t._v(" "),a("span",{staticClass:"feedback_thank"},[t._v("对您给予的帮助和支持，深表感谢")]),t._v(" "),a("van-button",{staticStyle:{display:"flex","margin-bottom":"20px"},attrs:{type:"default"},on:{click:function(){return t.actionsheet=!t.actionsheet}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.checkType,expression:"!checkType"}]},[t._v("问题类型")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.checkType,expression:"checkType"}]},[t._v(t._s(t.checkType))])]),t._v(" "),a("input",{staticClass:"feedback_input",attrs:{placeholder:"您的联系方式：手机号,邮箱？"}}),t._v(" "),a("span",{staticStyle:{color:"red",float:"right","margin-right":"16px","margin-top":"-20px"}},[t._v("*选填")]),t._v(" "),a("van-actionsheet",{model:{value:t.actionsheet,callback:function(e){t.actionsheet=e},expression:"actionsheet"}},[a("van-picker",{attrs:{"show-toolbar":"",title:"标题",columns:t.columns},on:{cancel:function(){return t.actionsheet=!t.actionsheet},confirm:t.onConfirm}})],1),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textareas,expression:"textareas"}],staticClass:"feedback_textarea",domProps:{value:t.textareas},on:{input:function(e){e.target.composing||(t.textareas=e.target.value)}}}),t._v(" "),a("van-button",{attrs:{type:"danger",size:"large"}},[t._v("提交")])],1)],1)},staticRenderFns:[]};var c=a("VU/8")(s,i,!1,function(t){a("/IpZ")},"data-v-da6bd990",null);e.default=c.exports}});