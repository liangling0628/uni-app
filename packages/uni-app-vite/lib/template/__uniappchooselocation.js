"use weex:vue";
(()=>{var C=Object.create;var d=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var G=A=>d(A,"__esModule",{value:!0});var k=(A,t)=>()=>(t||A((t={exports:{}}).exports,t),t.exports);var Q=(A,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of _(t))!T.call(A,a)&&(s||a!=="default")&&d(A,a,{get:()=>t[a],enumerable:!(r=E(t,a))||r.enumerable});return A},N=(A,t)=>Q(G(d(A!=null?C(y(A)):{},"default",!t&&A&&A.__esModule?{get:()=>A.default,enumerable:!0}:{value:A,enumerable:!0})),A);var m=k((sA,w)=>{w.exports=Vue});var P=Object.prototype.toString,g=A=>P.call(A),u=A=>g(A).slice(8,-1);function j(){return typeof __channelId__=="string"&&__channelId__}function F(A,t){switch(u(t)){case"Function":return"function() { [native code] }";default:return t}}function O(A,t,s){return j()?(s.push(t.replace("at ","uni-app:///")),console[A].apply(console,s)):s.map(function(a){let o=g(a).toLowerCase();if(o==="[object object]"||o==="[object array]")try{a="---BEGIN:JSON---"+JSON.stringify(a,F)+"---END:JSON---"}catch{a=o}else if(a===null)a="---NULL---";else if(a===void 0)a="---UNDEFINED---";else{let i=u(a).toUpperCase();i==="NUMBER"||i==="BOOLEAN"?a="---BEGIN:"+i+"---"+a+"---END:"+i+"---":a=String(a)}return a}).join("---COMMA---")+" "+t}function h(A,t,...s){let r=O(A,t,s);r&&console[A](r)}var f={onLoad(){this.initMessage()},methods:{initMessage(){let{from:A,callback:t,runtime:s,data:r={},useGlobalEvent:a}=plus.webview.currentWebview().extras||{};this.__from=A,this.__runtime=s,this.__page=plus.webview.currentWebview().id,this.__useGlobalEvent=a,this.data=JSON.parse(JSON.stringify(r)),plus.key.addEventListener("backbutton",()=>{typeof this.onClose=="function"?this.onClose():plus.webview.currentWebview().close("auto")});let o=this,i=function(n){let l=n.data&&n.data.__message;!l||o.__onMessageCallback&&o.__onMessageCallback(l.data)};if(this.__useGlobalEvent)weex.requireModule("globalEvent").addEventListener("plusMessage",i);else{let n=new BroadcastChannel(this.__page);n.onmessage=i}},postMessage(A={},t=!1){let s=JSON.parse(JSON.stringify({__message:{__page:this.__page,data:A,keep:t}})),r=this.__from;if(this.__runtime==="v8")this.__useGlobalEvent?plus.webview.postMessageToUniNView(s,r):new BroadcastChannel(r).postMessage(s);else{let a=plus.webview.getWebviewById(r);a&&a.evalJS(`__plusMessage&&__plusMessage(${JSON.stringify({data:s})})`)}},onMessage(A){this.__onMessageCallback=A}}};var x={data(){return{locale:"en",fallbackLocale:"en",localization:{en:{done:"OK",cancel:"Cancel"},zh:{done:"\u5B8C\u6210",cancel:"\u53D6\u6D88"},"zh-hans":{},"zh-hant":{},messages:{}}}},onLoad(){this.initLocale()},created(){this.initLocale()},methods:{initLocale(){if(this.__initLocale)return;this.__initLocale=!0;let A=(plus.webview.currentWebview().extras||{}).data||{};if(A.messages&&(this.localization.messages=A.messages),A.locale){this.locale=A.locale.toLowerCase();return}let t={chs:"hans",cn:"hans",sg:"hans",cht:"hant",tw:"hant",hk:"hant",mo:"hant"},s=plus.os.language.toLowerCase().split("/")[0].replace("_","-").split("-"),r=s[1];r&&(s[1]=t[r]||r),s.length=s.length>2?2:s.length,this.locale=s.join("-")},localize(A){let t=this.locale,s=t.split("-")[0],r=this.fallbackLocale,a=this.localization;function o(i){return a[i]||{}}return o("messages")[A]||o(t)[A]||o(s)[A]||o(r)[A]||A}}};var e=N(m());var D=(A,t)=>{let s=A.__vccOpts||A;for(let[r,a]of t)s[r]=a;return s};var M=Object.defineProperty,U=Object.defineProperties,R=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,v=(A,t,s)=>t in A?M(A,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):A[t]=s,K=(A,t)=>{for(var s in t||(t={}))z.call(t,s)&&v(A,s,t[s]);if(B)for(var s of B(t))H.call(t,s)&&v(A,s,t[s]);return A},Y=(A,t)=>U(A,R(t)),V={map_center_marker_container:{"":{alignItems:"flex-start",width:"22px",height:"70px"}},map_center_marker:{"":{width:"22px",height:"35px"}},"unichooselocation-icons":{"":{fontFamily:"unichooselocation",textDecoration:"none",textAlign:"center"}},page:{"":{flex:1,position:"relative"}},"flex-r":{"":{flexDirection:"row",flexWrap:"nowrap"}},"flex-c":{"":{flexDirection:"column",flexWrap:"nowrap"}},"flex-fill":{"":{flex:1}},"a-i-c":{"":{alignItems:"center"}},"j-c-c":{"":{justifyContent:"center"}},"nav-cover":{"":{position:"absolute",left:0,top:0,right:0,height:"100px",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0))"}},statusbar:{"":{height:"22px"}},"title-view":{"":{paddingTop:"5px",paddingRight:"15px",paddingBottom:"5px",paddingLeft:"15px"}},"btn-cancel":{"":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},"btn-cancel-text":{"":{fontSize:"30px",color:"#ffffff"}},"btn-done":{"":{backgroundColor:"#007AFF",borderRadius:"3px",paddingTop:"5px",paddingRight:"12px",paddingBottom:"5px",paddingLeft:"12px"}},"btn-done-disabled":{"":{backgroundColor:"#62abfb"}},"text-done":{"":{color:"#ffffff",fontSize:"15px",fontWeight:"bold",lineHeight:"15px",height:"15px"}},"text-done-disabled":{"":{color:"#c0ddfe"}},"map-view":{"":{flex:2,position:"relative"}},map:{"":{width:"750rpx",justifyContent:"center",alignItems:"center"}},"map-location":{"":{position:"absolute",right:"20px",bottom:"25px",width:"44px",height:"44px",backgroundColor:"#ffffff",borderRadius:"40px",boxShadow:"0 2px 4px rgba(100, 100, 100, 0.2)"}},"map-location-text":{"":{fontSize:"20px"}},"map-location-text-active":{"":{color:"#007AFF"}},"result-area":{"":{flex:2,position:"relative"}},"search-bar":{"":{paddingTop:"12px",paddingRight:"15px",paddingBottom:"12px",paddingLeft:"15px",backgroundColor:"#ffffff"}},"search-area":{"":{backgroundColor:"#ebebeb",borderRadius:"5px",height:"30px",paddingLeft:"8px"}},"search-text":{"":{fontSize:"14px",lineHeight:"16px",color:"#b4b4b4"}},"search-icon":{"":{fontSize:"16px",color:"#b4b4b4",marginRight:"4px"}},"search-tab":{"":{flexDirection:"row",paddingTop:"2px",paddingRight:"16px",paddingBottom:"2px",paddingLeft:"16px",marginTop:"-10px",backgroundColor:"#FFFFFF"}},"search-tab-item":{"":{marginTop:0,marginRight:"5px",marginBottom:0,marginLeft:"5px",textAlign:"center",fontSize:"14px",lineHeight:"32px",color:"#333333",borderBottomStyle:"solid",borderBottomWidth:"2px",borderBottomColor:"rgba(0,0,0,0)"}},"search-tab-item-active":{"":{borderBottomColor:"#0079FF"}},"no-data":{"":{color:"#808080"}},"no-data-search":{"":{marginTop:"50px"}},"list-item":{"":{position:"relative",paddingTop:"12px",paddingRight:"15px",paddingBottom:"12px",paddingLeft:"15px"}},"list-line":{"":{position:"absolute",left:"15px",right:0,bottom:0,height:".5px",backgroundColor:"#d3d3d3"}},"list-name":{"":{fontSize:"14px",lines:1,textOverflow:"ellipsis"}},"list-address":{"":{fontSize:"12px",color:"#808080",lines:1,textOverflow:"ellipsis",marginTop:"5px"}},"list-icon-area":{"":{paddingLeft:"10px",paddingRight:"10px"}},"list-selected-icon":{"":{fontSize:"20px",color:"#007AFF"}},"search-view":{"":{position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"#f6f6f6"}},"searching-area":{"":{flex:5}},"search-input":{"":{fontSize:"14px",height:"30px",paddingLeft:"6px"}},"search-cancel":{"":{color:"#0079FF",marginLeft:"10px"}},"loading-view":{"":{paddingTop:"15px",paddingRight:"15px",paddingBottom:"15px",paddingLeft:"15px"}},"loading-icon":{"":{width:"28px",height:"28px",color:"#808080"}}},Z=weex.requireModule("dom");Z.addRule("fontFace",{fontFamily:"unichooselocation",src:"url('data:font/truetype;charset=utf-8;base64,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aG9vc2Vsb2NhdGlvbkdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAAoAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdAAKAHUAbgBpAGMAaABvAG8AcwBlAGwAbwBjAGEAdABpAG8AbgBSAGUAZwB1AGwAYQByAHUAbgBpAGMAaABvAG8AcwBlAGwAbwBjAGEAdABpAG8AbgB1AG4AaQBjAGgAbwBvAHMAZQBsAG8AYwBhAHQAaQBvAG4AVgBlAHIAcwBpAG8AbgAgADEALgAwAHUAbgBpAGMAaABvAG8AcwBlAGwAbwBjAGEAdABpAG8AbgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAQIBAwEEAQUBBgAKbXlsb2NhdGlvbgZ4dWFuemUFY2xvc2UGc291c3VvAAAAAA==')"});var p=weex.requireModule("mapSearch"),J=16,b="data:image/png;base64,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",W={mixins:[f,x],data(){return{positionIcon:b,mapScale:J,userKeyword:"",showLocation:!0,latitude:39.908692,longitude:116.397477,nearList:[],nearSelectedIndex:-1,nearLoading:!1,nearLoadingEnd:!1,noNearData:!1,isUserLocation:!1,statusBarHeight:20,mapHeight:250,markers:[{id:"location",latitude:39.908692,longitude:116.397477,zIndex:"1",iconPath:b,width:26,height:36}],showSearch:!1,searchList:[],searchSelectedIndex:-1,searchLoading:!1,searchEnd:!1,noSearchData:!1,localization:{en:{search_tips:"Search for a place",no_found:"No results found",nearby:"Nearby",more:"More"},zh:{search_tips:"\u641C\u7D22\u5730\u70B9",no_found:"\u5BF9\u4E0D\u8D77\uFF0C\u6CA1\u6709\u641C\u7D22\u5230\u76F8\u5173\u6570\u636E",nearby:"\u9644\u8FD1",more:"\u66F4\u591A"}},searchNearFlag:!0,searchMethod:"poiSearchNearBy"}},computed:{disableOK(){return this.nearSelectedIndex<0&&this.searchSelectedIndex<0},searchMethods(){return[{title:this.localize("nearby"),method:"poiSearchNearBy"},{title:this.localize("more"),method:"poiKeywordsSearch"}]}},filters:{distance(A){return A>100?`${A>1e3?(A/1e3).toFixed(1)+"k":A.toFixed(0)}m | `:A>0?"100m\u5185 | ":""}},watch:{searchMethod(){this._searchPageIndex=1,this.searchEnd=!1,this.searchList=[],this._searchKeyword&&this.search()}},onLoad(){this.statusBarHeight=plus.navigator.getStatusbarHeight(),this.mapHeight=plus.screen.resolutionHeight/2;let A=this.data;this.userKeyword=A.keyword||"",this._searchInputTimer=null,this._searchPageIndex=1,this._searchKeyword="",this._nearPageIndex=1,this._hasUserLocation=!1,this._userLatitude=0,this._userLongitude=0},onReady(){this.mapContext=this.$refs.map1,this.data.latitude&&this.data.longitude?(this._hasUserLocation=!0,this.moveToCenter({latitude:this.data.latitude,longitude:this.data.longitude})):this.getUserLocation()},onUnload(){this.clearSearchTimer()},methods:{cancelClick(){this.postMessage({event:"cancel"})},doneClick(){if(this.disableOK)return;let A=this.showSearch&&this.searchSelectedIndex>=0?this.searchList[this.searchSelectedIndex]:this.nearList[this.nearSelectedIndex],t={name:A.name,address:A.address,latitude:A.location.latitude,longitude:A.location.longitude};this.postMessage({event:"selected",detail:t})},getUserLocation(){plus.geolocation.getCurrentPosition(({coordsType:A,coords:t})=>{A.toLowerCase()==="wgs84"?this.wgs84togcjo2(t,s=>{this.getUserLocationSuccess(s)}):this.getUserLocationSuccess(t)},A=>{this._hasUserLocation=!0,h("log","at template/__uniappchooselocation.nvue:292","Gelocation Error: code - "+A.code+"; message - "+A.message)},{geocode:!1})},getUserLocationSuccess(A){this._userLatitude=A.latitude,this._userLongitude=A.longitude,this._hasUserLocation=!0,this.moveToCenter({latitude:A.latitude,longitude:A.longitude})},searchclick(A){this.showSearch=A,A===!1&&plus.key.hideSoftKeybord()},showSearchView(){this.searchList=[],this.showSearch=!0},hideSearchView(){this.showSearch=!1,plus.key.hideSoftKeybord(),this.noSearchData=!1,this.searchSelectedIndex=-1,this._searchKeyword=""},onregionchange(A){var t=A.detail,s=t.type||A.type,r=t.causedBy||A.causedBy;r!=="drag"||s!=="end"||this.mapContext.getCenterLocation(a=>{if(!this.searchNearFlag){this.searchNearFlag=!this.searchNearFlag;return}this.moveToCenter({latitude:a.latitude,longitude:a.longitude})})},onItemClick(A,t){this.searchNearFlag=!1,t.stopPropagation&&t.stopPropagation(),this.nearSelectedIndex!==A&&(this.nearSelectedIndex=A),this.moveToLocation(this.nearList[A]&&this.nearList[A].location)},moveToCenter(A){this.latitude===A.latitude&&this.longitude===A.longitude||(this.latitude=A.latitude,this.longitude=A.longitude,this.updateCenter(A),this.moveToLocation(A),this.isUserLocation=this._userLatitude===A.latitude&&this._userLongitude===A.longitude)},updateCenter(A){this.nearSelectedIndex=-1,this.nearList=[],this._hasUserLocation&&(this._nearPageIndex=1,this.nearLoadingEnd=!1,this.reverseGeocode(A),this.searchNearByPoint(A),this.onItemClick(0,{stopPropagation:()=>{this.searchNearFlag=!0}}),this.$refs.nearListLoadmore.resetLoadmore())},searchNear(){this.nearLoadingEnd||this.searchNearByPoint({latitude:this.latitude,longitude:this.longitude})},searchNearByPoint(A){this.noNearData=!1,this.nearLoading=!0,p.poiSearchNearBy({point:{latitude:A.latitude,longitude:A.longitude},key:this.userKeyword,sortrule:1,index:this._nearPageIndex,radius:1e3},t=>{this.nearLoading=!1,this._nearPageIndex=t.pageIndex+1,this.nearLoadingEnd=t.pageIndex===t.pageNumber,t.poiList&&t.poiList.length?(this.fixPois(t.poiList),this.nearList=this.nearList.concat(t.poiList),this.fixNearList()):this.noNearData=this.nearList.length===0})},moveToLocation(A){!A||this.mapContext.moveToLocation(Y(K({},A),{fail:t=>{h("error","at template/__uniappchooselocation.nvue:419","chooseLocation_moveToLocation",t)}}))},reverseGeocode(A){p.reverseGeocode({point:A},t=>{t.type==="success"&&this._nearPageIndex<=2&&(this.nearList.splice(0,0,{code:t.code,location:A,name:"\u5730\u56FE\u4F4D\u7F6E",address:t.address||""}),this.fixNearList())})},fixNearList(){let A=this.nearList;if(A.length>=2&&A[0].name==="\u5730\u56FE\u4F4D\u7F6E"){let t=this.getAddressStart(A[1]),s=A[0].address;s.startsWith(t)&&(A[0].name=s.substring(t.length))}},onsearchinput(A){var t=A.detail.value.replace(/^\s+|\s+$/g,"");this.clearSearchTimer(),this._searchInputTimer=setTimeout(()=>{clearTimeout(this._searchInputTimer),this._searchPageIndex=1,this.searchEnd=!1,this._searchKeyword=t,this.searchList=[],this.search()},300)},clearSearchTimer(){this._searchInputTimer&&clearTimeout(this._searchInputTimer)},search(){this._searchKeyword.length===0||this._searchEnd||this.searchLoading||(this.searchLoading=!0,this.noSearchData=!1,p[this.searchMethod]({point:{latitude:this.latitude,longitude:this.longitude},key:this._searchKeyword,sortrule:1,index:this._searchPageIndex,radius:5e4},A=>{this.searchLoading=!1,this._searchPageIndex=A.pageIndex+1,this.searchEnd=A.pageIndex===A.pageNumber,A.poiList&&A.poiList.length?(this.fixPois(A.poiList),this.searchList=this.searchList.concat(A.poiList)):this.noSearchData=this.searchList.length===0}))},onSearchListTouchStart(){plus.key.hideSoftKeybord()},onSearchItemClick(A,t){t.stopPropagation(),this.searchSelectedIndex!==A&&(this.searchSelectedIndex=A),this.moveToLocation(this.searchList[A]&&this.searchList[A].location)},getAddressStart(A){let t=A.addressOrigin||A.address;return A.province+(A.province===A.city?"":A.city)+(/^\d+$/.test(A.district)||t.startsWith(A.district)?"":A.district)},fixPois(A){for(var t=0;t<A.length;t++){let s=A[t];s.name=s.name.replace(/\\/g,""),s.addressOrigin=s.address.replace(/\\/g,""),s.address=this.getAddressStart(s)+s.addressOrigin}},wgs84togcjo2(A,t){let s=weex.requireModule("stream"),r=`https://apis.map.qq.com/jsapi?qt=translate&type=1&points=${A.longitude},${A.latitude}&key=MAP_KEY&output=json&pf=jsapi&ref=jsapi`;s.fetch({method:"GET",url:r,type:"json"},a=>{if(a.ok){let o=a.data.detail.points[0];t({latitude:o.lat,longitude:o.lng})}})}}};function X(A,t,s,r,a,o){return(0,e.openBlock)(),(0,e.createElementBlock)("view",{class:"page flex-c"},[(0,e.createElementVNode)("view",{class:"flex-r map-view"},[(0,e.createElementVNode)("map",{class:"map flex-fill",ref:"map1",scale:a.mapScale,"show-location":a.showLocation,longitude:a.longitude,latitude:a.latitude,onRegionchange:t[0]||(t[0]=(...i)=>o.onregionchange&&o.onregionchange(...i)),style:(0,e.normalizeStyle)("height:"+a.mapHeight+"px")},[(0,e.createElementVNode)("div",{class:"map_center_marker_container"},[(0,e.createElementVNode)("u-image",{class:"map_center_marker",src:a.positionIcon},null,8,["src"])])],44,["scale","show-location","longitude","latitude"]),(0,e.createElementVNode)("view",{class:"map-location flex-c a-i-c j-c-c",onClick:t[1]||(t[1]=i=>o.getUserLocation())},[(0,e.createElementVNode)("u-text",{class:(0,e.normalizeClass)(["unichooselocation-icons map-location-text",{"map-location-text-active":a.isUserLocation}]),appendAsTree:!0},"\uEC32",10,["appendAsTree"])]),(0,e.createElementVNode)("view",{class:"nav-cover"},[(0,e.createElementVNode)("view",{class:"statusbar",style:(0,e.normalizeStyle)("height:"+a.statusBarHeight+"px")},null,4),(0,e.createElementVNode)("view",{class:"title-view flex-r"},[(0,e.createElementVNode)("view",{class:"btn-cancel",onClick:t[2]||(t[2]=(...i)=>o.cancelClick&&o.cancelClick(...i))},[(0,e.createElementVNode)("u-text",{class:"unichooselocation-icons btn-cancel-text",appendAsTree:!0},"\uE61C",8,["appendAsTree"])]),(0,e.createElementVNode)("view",{class:"flex-fill"}),(0,e.createElementVNode)("view",{class:(0,e.normalizeClass)(["btn-done flex-r a-i-c j-c-c",{"btn-done-disabled":o.disableOK}]),onClick:t[3]||(t[3]=(...i)=>o.doneClick&&o.doneClick(...i))},[(0,e.createElementVNode)("u-text",{class:(0,e.normalizeClass)(["text-done",{"text-done-disabled":o.disableOK}]),appendAsTree:!0},(0,e.toDisplayString)(A.localize("done")),11,["appendAsTree"])],2)])])]),(0,e.createElementVNode)("view",{class:(0,e.normalizeClass)(["flex-c result-area",{"searching-area":a.showSearch}])},[(0,e.createElementVNode)("view",{class:"search-bar"},[(0,e.createElementVNode)("view",{class:"search-area flex-r a-i-c",onClick:t[4]||(t[4]=(...i)=>o.showSearchView&&o.showSearchView(...i))},[(0,e.createElementVNode)("u-text",{class:"search-icon unichooselocation-icons",appendAsTree:!0},"\uE60A",8,["appendAsTree"]),(0,e.createElementVNode)("u-text",{class:"search-text",appendAsTree:!0},(0,e.toDisplayString)(A.localize("search_tips")),9,["appendAsTree"])])]),a.noNearData?(0,e.createCommentVNode)("v-if",!0):((0,e.openBlock)(),(0,e.createElementBlock)("list",{key:0,ref:"nearListLoadmore",class:"flex-fill list-view",loadmoreoffset:"5","scroll-y":!0,onLoadmore:t[5]||(t[5]=i=>o.searchNear())},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(a.nearList,(i,n)=>((0,e.openBlock)(),(0,e.createElementBlock)("cell",{key:i.uid,appendAsTree:!0},[(0,e.createElementVNode)("view",{class:"list-item",onClick:l=>o.onItemClick(n,l)},[(0,e.createElementVNode)("view",{class:"flex-r"},[(0,e.createElementVNode)("view",{class:"list-text-area flex-fill flex-c"},[(0,e.createElementVNode)("u-text",{class:"list-name",appendAsTree:!0},(0,e.toDisplayString)(i.name),9,["appendAsTree"]),(0,e.createElementVNode)("u-text",{class:"list-address",appendAsTree:!0},(0,e.toDisplayString)(i.distance|A.distance)+(0,e.toDisplayString)(i.address),9,["appendAsTree"])]),n===a.nearSelectedIndex?((0,e.openBlock)(),(0,e.createElementBlock)("view",{key:0,class:"list-icon-area flex-r a-i-c j-c-c"},[(0,e.createElementVNode)("u-text",{class:"unichooselocation-icons list-selected-icon",appendAsTree:!0},"\uE651",8,["appendAsTree"])])):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("view",{class:"list-line"})],8,["onClick"])],8,["appendAsTree"]))),128)),a.nearLoading?((0,e.openBlock)(),(0,e.createElementBlock)("cell",{key:0,appendAsTree:!0},[(0,e.createElementVNode)("view",{class:"loading-view flex-c a-i-c j-c-c"},[(0,e.createElementVNode)("loading-indicator",{class:"loading-icon",animating:!0,arrow:"false"})])],8,["appendAsTree"])):(0,e.createCommentVNode)("v-if",!0)],544)),a.noNearData?((0,e.openBlock)(),(0,e.createElementBlock)("view",{key:1,class:"flex-fill flex-r a-i-c j-c-c"},[(0,e.createElementVNode)("u-text",{class:"no-data",appendAsTree:!0},(0,e.toDisplayString)(A.localize("no_found")),9,["appendAsTree"])])):(0,e.createCommentVNode)("v-if",!0),a.showSearch?((0,e.openBlock)(),(0,e.createElementBlock)("view",{key:2,class:"search-view flex-c"},[(0,e.createElementVNode)("view",{class:"search-bar flex-r a-i-c"},[(0,e.createElementVNode)("view",{class:"search-area flex-fill flex-r"},[(0,e.createElementVNode)("u-input",{focus:!0,onInput:t[6]||(t[6]=(...i)=>o.onsearchinput&&o.onsearchinput(...i)),class:"search-input flex-fill",placeholder:A.localize("search_tips")},null,40,["placeholder"])]),(0,e.createElementVNode)("u-text",{class:"search-cancel",onClick:t[7]||(t[7]=(...i)=>o.hideSearchView&&o.hideSearchView(...i)),appendAsTree:!0},(0,e.toDisplayString)(A.localize("cancel")),9,["appendAsTree"])]),(0,e.createElementVNode)("view",{class:"search-tab"},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(o.searchMethods,(i,n)=>((0,e.openBlock)(),(0,e.createElementBlock)("u-text",{onClick:l=>a.searchMethod=a.searchLoading?a.searchMethod:i.method,key:n,class:(0,e.normalizeClass)([{"search-tab-item-active":i.method===a.searchMethod},"search-tab-item"]),appendAsTree:!0},(0,e.toDisplayString)(i.title),11,["onClick","appendAsTree"]))),128))]),a.noSearchData?(0,e.createCommentVNode)("v-if",!0):((0,e.openBlock)(),(0,e.createElementBlock)("list",{key:0,class:"flex-fill list-view",enableBackToTop:!0,"scroll-y":!0,onLoadmore:t[8]||(t[8]=i=>o.search()),onTouchstart:t[9]||(t[9]=(...i)=>o.onSearchListTouchStart&&o.onSearchListTouchStart(...i))},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(a.searchList,(i,n)=>((0,e.openBlock)(),(0,e.createElementBlock)("cell",{key:i.uid,appendAsTree:!0},[(0,e.createElementVNode)("view",{class:"list-item",onClick:l=>o.onSearchItemClick(n,l)},[(0,e.createElementVNode)("view",{class:"flex-r"},[(0,e.createElementVNode)("view",{class:"list-text-area flex-fill flex-c"},[(0,e.createElementVNode)("u-text",{class:"list-name",appendAsTree:!0},(0,e.toDisplayString)(i.name),9,["appendAsTree"]),(0,e.createElementVNode)("u-text",{class:"list-address",appendAsTree:!0},(0,e.toDisplayString)(i.distance|A.distance)+(0,e.toDisplayString)(i.address),9,["appendAsTree"])]),n===a.searchSelectedIndex?((0,e.openBlock)(),(0,e.createElementBlock)("view",{key:0,class:"list-icon-area flex-r a-i-c j-c-c"},[(0,e.createElementVNode)("u-text",{class:"unichooselocation-icons list-selected-icon",appendAsTree:!0},"\uE651",8,["appendAsTree"])])):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("view",{class:"list-line"})],8,["onClick"])],8,["appendAsTree"]))),128)),a.searchLoading?((0,e.openBlock)(),(0,e.createElementBlock)("cell",{key:0,appendAsTree:!0},[(0,e.createElementVNode)("view",{class:"loading-view flex-c a-i-c j-c-c"},[(0,e.createElementVNode)("loading-indicator",{class:"loading-icon",animating:!0})])],8,["appendAsTree"])):(0,e.createCommentVNode)("v-if",!0)],32)),a.noSearchData?((0,e.openBlock)(),(0,e.createElementBlock)("view",{key:1,class:"flex-fill flex-r j-c-c"},[(0,e.createElementVNode)("u-text",{class:"no-data no-data-search",appendAsTree:!0},(0,e.toDisplayString)(A.localize("no_found")),9,["appendAsTree"])])):(0,e.createCommentVNode)("v-if",!0)])):(0,e.createCommentVNode)("v-if",!0)],2)])}var c=D(W,[["render",X],["styles",[V]]]);var L=plus.webview.currentWebview(),q=parseInt(L.id),$="template/__uniappchooselocation",S={};try{S=JSON.parse(L.__query__)}catch{}c.mpType="page";var I=Vue.createPageApp(c,{$store:getApp().$store,__pageId:q,__pagePath:$,__pageQuery:S});I.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...c.styles||[]]));I.mount("#root");})();
