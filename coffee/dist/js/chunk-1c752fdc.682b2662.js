(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c752fdc"],{"930d":function(e,t,a){"use strict";a("af22")},a821:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aboutme"},[a("div",{staticClass:"head"},[a("BackNav",{attrs:{"left-arrow":"","left-text":"返回",title:"新增地址"}})],1),a("div",{staticClass:"center"},[a("van-address-edit",{attrs:{"area-list":e.areaList,"show-postal":"","show-delete":!1,"show-set-default":"","show-search-result":"","search-result":e.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"],"tel-validator":e.yztel,"postal-validator":e.yzpostal},on:{save:e.onSave,delete:e.onDelete,"change-detail":e.onChangeDetail}})],1)])},s=[],o=a("ade3"),c=(a("b0c0"),a("8b10")),i=a("9163"),r=Object(o["a"])({name:"Address",components:{BackNav:c["a"]},data:function(){return{areaList:i["areaList"],searchResult:[],user:{}}},created:function(){},methods:{onSave:function(e){e.isDefault?e.isDefault=1:e.isDefault=0,this.user=e,this.axios({method:"post",url:"/addAddress",data:{name:e.name,tel:e.tel,province:e.province,city:e.city,county:e.county,addressDetail:e.addressDetail,areaCode:e.areaCode,postalCode:e.postalCode,isDefault:e.isDefault}}).then((function(e){})).catch((function(e){console.log("err ==> ",e)}))},yztel:function(e){var t=/^1[3-9]\d{9}$/;return!!t.test(e)||(this.$toast("手机号格式不正确"),!1)},yzpostal:function(e){console.log("e",e);var t=/^[0-9]{6}$/;return!!t.test(e)||(this.$toast("邮政编码格式不正确"),!1)},onDelete:function(){return{content:{}}},onChangeDetail:function(e){console.log(e),this.searchResult=e?[{name:"黄龙万科中心",address:"杭州市西湖区"},{name:"海淀北一街",address:"北京海淀区"},{name:"科技园飞亚达大厦3-10楼",address:"深圳市南山区"}]:[]},aboutMe:function(){var e=this;this.axios({method:"get",url:"/findAccountInfo"}).then((function(t){e.myAll=t.data.result[0],e.nickName=e.myAll.nickName,e.desc=e.myAll.desc})).catch((function(e){console.log("err ==> ",e)}))},amendName:function(){this.axios({method:"post",url:"/updateNickName",data:{nickName:this.nickName}}).then((function(e){})).catch((function(e){console.log("err ==> ",e)}))},amendBrief:function(){this.axios({method:"post",url:"/updateDesc",data:{desc:this.desc}}).then((function(e){})).catch((function(e){console.log("err ==> ",e)}))}}},"created",(function(){})),l=r,u=(a("930d"),a("2877")),d=Object(u["a"])(l,n,s,!1,null,"cae335fc",null);t["default"]=d.exports},ade3:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},af22:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1c752fdc.682b2662.js.map