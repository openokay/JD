webpackJsonp([13],{KEU4:function(i,e,t){"use strict";t.d(e,"a",function(){return c});var c={storeContent:{storeID:"12345678911",storeName:"上海恒惠DIY专营店(浦东店)",tel:"15908619974"},img:[{img:"http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/7891/27/15904/130166/5c7507ecE37fbbcca/e83f9dd699604906.jpg!q80.dpg.webp"},{img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t27685/257/138174952/125243/91747752/5b8657d3N0fc91f44.jpg!q70.dpg.webp"},{img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t23188/261/2536609299/123828/d9875db5/5b8657d5Nc20275f4.jpg!q70.dpg.webp"},{img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t26683/240/128771839/125798/d7787eb2/5b8657d7Nd941db4b.jpg!q70.dpg.webp"}],ProductName:"【不吃包退】好主人狗粮 全犬种通用5斤泰迪金毛拉布拉多比熊萨摩耶边牧法斗柯基阿拉斯加幼犬狗粮天然粮",CommodityTitle:"关注店铺享粉丝价，每日抽奖赢宠粮，奶糕专区满699送爱丽丝价值128元储粮桶，为犬猫囤起来！",NowPrice:"89",RowPrice:"129",Service_Support:["店铺发货&售后","货到付款","送保险","极速审核","七天无理由退货"],defaultCheck:{Classify:"760P",Versions:"256G",img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t23635/212/348009694/579108/3b61eb9b/5b2ce9b5Nc13ac7a7.png.webp"},Selectl:{category:[{id:"660P",img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t5683/358/2922188343/417060/dc4a1cef/59356516N8668c9a1.png.webp"},{id:"760P",img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t23635/212/348009694/579108/3b61eb9b/5b2ce9b5Nc13ac7a7.png.webp"},{id:"(含16G系统优盘)660P",img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t5659/344/2776984223/434618/200417ef/5933d0a7N9b067285.png.webp"},{id:"(含16G系统优盘)760P",img:"http://m.360buyimg.com/mobilecms/s720x720_jfs/t23635/212/348009694/579108/3b61eb9b/5b2ce9b5Nc13ac7a7.png.webp"}],versions:[{id:"128G"},{id:"256G"},{id:"512G"},{id:"1T"},{id:"2T"}]},verify:[{c:"660P",v:"128G",price:"309",inventory:"188"},{c:"660P",v:"256G",price:"379",inventory:"188"},{c:"660P",v:"512G",price:"679",inventory:"188"},{c:"660P",v:"1T",price:"1139",inventory:"18"},{c:"660P",v:"2T",price:"2219",inventory:"8"},{c:"760P",v:"128G",price:"309",inventory:"188"},{c:"760P",v:"256G",price:"409",inventory:"188"},{c:"760P",v:"512G",price:"789",inventory:"188"},{c:"760P",v:"1T",price:"1439",inventory:"18"},{c:"760P",v:"2T",price:"3219",inventory:"8"},{c:"(含16G系统优盘)660P",v:"128G",price:"349",inventory:"188"},{c:"(含16G系统优盘)660P",v:"256G",price:"449",inventory:"188"},{c:"(含16G系统优盘)660P",v:"512G",price:"749",inventory:"188"},{c:"(含16G系统优盘)660P",v:"1T",price:"1469",inventory:"18"},{c:"(含16G系统优盘)660P",v:"2T",price:"3249",inventory:"8"},{c:"(含16G系统优盘)760P",v:"128G",price:"349",inventory:"188"},{c:"(含16G系统优盘)760P",v:"256G",price:"449",inventory:"188"},{c:"(含16G系统优盘)760P",v:"512G",price:"829",inventory:"188"},{c:"(含16G系统优盘)760P",v:"1T",price:"1469",inventory:"18"},{c:"(含16G系统优盘)760P",v:"2T",price:"3249",inventory:"8"}]}},QOCQ:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=t("KEU4"),n={data:function(){return{show:!1,data:c.a.Selectl.category,data2:c.a.Selectl.versions,active:"",active2:"",value:1}},mounted:function(){console.log(c.a),this.active="760P",this.active2="256G"},computed:{calculate:function(){if(""!=this.active&&null!=this.active2)for(var i=0;i<c.a.verify.length;i++)if(c.a.verify[i].c==this.active&&c.a.verify[i].v==this.active2)return this.active+":"+this.active2+"单价：¥"+c.a.verify[i].price+"库存："+c.a.verify[i].inventory}},methods:{onOpenshow:function(){this.show=!0},outShow:function(){this.show=!1},oncheck1:function(i){this.active=i},oncheck2:function(i){this.active2=i}}},o={render:function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("div",{staticStyle:{width:"100%"}},i._l(i.data,function(e,c){return t("div",[t("span",{class:i.active==e.id?"active":"Classification",on:{click:function(t){return i.oncheck1(e.id)}}},[i._v(i._s(e.id))])])}),0),i._v(" "),t("div",{staticStyle:{width:"100%",display:"flex"}},i._l(i.data2,function(e){return t("div",[t("span",{class:i.active2==e.id?"active":"Classification",on:{click:function(t){return i.oncheck2(e.id)}}},[i._v(i._s(e.id))])])}),0),i._v("\n\t\n\t"+i._s(i.calculate)+"\n")])},staticRenderFns:[]};var r=t("VU/8")(n,o,!1,function(i){t("sTgB")},null,null);e.default=r.exports},sTgB:function(i,e){}});