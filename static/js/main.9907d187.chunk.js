(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,n,t){e.exports=t(49)},37:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(15),i=t.n(o),c=(t(37),t(4)),u=t(5),s=t(9),p=t(6),l=t(10),d=t(8),f=t(26),h=t(7),v=t(27),b=(t(42),t(3)),m="SEARCH",y="IS_LOADING",g="RESET_SEARCH",O="HIDE_LOADING",j="CHANGE_SEARCH",x="ADD_FAVOURITES",E="REMOVE_FAVOURITES",w="ADD_HANDLED_DATA",A="ADD_DATA",k={search:"",data:[],handledData:[],favourites:[],isLoading:!1},D=Object(h.combineReducers)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:case g:return Object(b.a)({},e,{data:n.payload});case y:return Object(b.a)({},e,{isLoading:!0});case O:return Object(b.a)({},e,{isLoading:!1});case x:case E:return Object(b.a)({},e,{favourites:n.payload});case j:return Object(b.a)({},e,{search:n.payload});case w:return Object(b.a)({},e,{handledData:n.payload,isLoading:!1});case A:return Object(b.a)({},e,{data:n.payload});default:return Object(b.a)({},e)}}}),R=t(1),_=t(2),C=t(28),L=t(16),F=t.n(L),S=(t(44),t(12)),z=t.n(S),I=t(17),T=function(){var e=Object(I.a)(z.a.mark(function e(n,t){var a;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.filter(function(e){return e.keywords.includes(n)}),e.abrupt("return",a);case 2:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}(),H=function(){var e=Object(I.a)(z.a.mark(function e(n){var t;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.map(function(e,n){return e.favourite=!1,e.position=n,e}),e.abrupt("return",t);case 2:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),N=function(e,n,t,a){return function(r){t[e.position].favourite=!1;var o=n.filter(function(n){return n.position!==e.position}),i=a.map(function(n){return n.position===e.position&&(n.favourite=!1),n});r({type:A,payload:t}),r({type:x,payload:o}),r({type:w,payload:i})}};function V(){var e=Object(R.a)(["\n    display: flex;\n    width: 50%;\n    font-size: 26px;\n    & > h2 {\n        font-weight: normal;\n        font-size: 32px;\n        line-height: 37px;\n        padding: 0 16px;\n        width: 80%;\n    }\n    & > ul, h2 {\n        margin-top: 0; \n        margin-bottom: 0;\n    }\n    & > i {\n        top: 6px;\n        height: 25px;\n        cursor: pointer;\n        position: relative;\n        ","\n"]);return V=function(){return e},e}function M(){var e=Object(R.a)(["\n    display: flex;\n    padding: 30px 15px;\n"]);return M=function(){return e},e}var P=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(u.a)(n,[{key:"_showResult",value:function(){var e=this;return this.props.handledData.map(function(n,t){return r.a.createElement(K,{key:t},r.a.createElement(B,{theme:n.favourite?"#23995C":"#AAAAAA"},r.a.createElement("i",{className:"fa fa-star",onClick:function(t){return n.favourite?e.props.removeFavourites(n,e.props.favourites,e.props.data,e.props.handledData):e.props.addFavouritres(n,e.props.favourites,e.props.data,e.props.handledData)}}),r.a.createElement("h2",null,n.title)),r.a.createElement(B,{dangerouslySetInnerHTML:{__html:F()(n.body)}}))})}},{key:"render",value:function(){return r.a.createElement(C.a,{blocking:this.props.isLoading},this._showResult())}}]),n}(a.Component),W={addFavouritres:function(e,n,t,a){return function(r){e.favourite=!0,t[e.position].favourite=!0,n.push(e);var o=a.map(function(n){return n.position===e.position&&(n.favourite=!0),n});r({type:x,payload:n}),r({type:A,payload:t}),r({type:w,payload:o})}},removeFavourites:N},G=Object(d.b)(function(e){return{isLoading:e.appReducer.isLoading,handledData:e.appReducer.handledData,favourites:e.appReducer.favourites,data:e.appReducer.data}},W)(P),K=_.a.section(M()),B=_.a.div(V(),function(e){var n=e.theme;return"color: ".concat(n)});function J(){var e=Object(R.a)(["\n    color: #fff;\n    display: flex;\n    height: 200px;\n    font-size: 60px;\n    font-weight: bold;\n    align-items: center;\n    justify-content: center;\n    background: linear-gradient(to right, #1c5995 0%,#23975e 100%,#23975e 100%);\n"]);return J=function(){return e},e}var U=function(){return r.a.createElement($,null,"Toronto Waste Lookup")},$=_.a.section(J());function q(){var e=Object(R.a)(["\n    color: #fff;\n    outline: none;\n    font-size: 50px;\n    margin: 0 0 0 25px;\n    background: #23995C;\n    transform: scale(-1, 1);\n"]);return q=function(){return e},e}function Q(){var e=Object(R.a)(["\n    width: 95%;\n    outline: none;\n    font-size: 30px;\n    padding: 15px 0;\n    text-indent: 15px;\n    border-radius: 3px;\n    border: 1px solid black;\n    border: 2px solid #AAAAAA;\n"]);return Q=function(){return e},e}function X(){var e=Object(R.a)(["\n    display: flex;\n    padding: 15px;\n"]);return X=function(){return e},e}var Y=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r))))._handleKeyPress=function(e){"Enter"===e.key&&t.props.search(t.props.searchValue,t.props.data)},t}return Object(l.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(ne,null,r.a.createElement(te,{value:this.props.searchValue,onKeyPress:this._handleKeyPress,onChange:function(n){return e.props.changeSearch(n.target.value)}}),r.a.createElement(ae,{onClick:function(n){return e.props.search(e.props.searchValue,e.props.data)}},r.a.createElement("i",{className:"fa fa-search"})))}}]),n}(a.Component),Z={search:function(e,n){return e.length?function(){var t=Object(I.a)(z.a.mark(function t(a){var r;return z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a({type:y}),t.prev=1,n.length){t.next=10;break}return t.next=5,fetch("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000").then(function(e){return e.json()});case 5:return n=t.sent,t.next=8,H(n);case 8:n=t.sent,a({type:A,payload:n});case 10:return t.next=12,T(e,n);case 12:r=t.sent,a({type:w,payload:r}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.log(t.t0);case 19:case"end":return t.stop()}},t,this,[[1,16]])}));return function(e){return t.apply(this,arguments)}}():{type:""}},changeSearch:function(e){return function(n){n({type:j,payload:e}),e.length||n({type:w,payload:[]})}}},ee=Object(d.b)(function(e){return{searchValue:e.appReducer.search,data:e.appReducer.data}},Z)(Y),ne=_.a.section(X()),te=_.a.input(Q()),ae=_.a.button(q());function re(){var e=Object(R.a)(["\n    display: flex;\n    width: 50%;\n    font-size: 26px;\n    & > h2 {\n        font-weight: normal;\n        font-size: 32px;\n        line-height: 37px;\n        padding: 0 16px;\n        width: 80%;\n    }\n    & > ul, h2 {\n        margin-top: 0; \n        margin-bottom: 0\n    }\n    & > i {\n        top: 6px;\n        height: 25px;\n        color: #23995C;\n        cursor: pointer;\n        position: relative;\n    }\n"]);return re=function(){return e},e}function oe(){var e=Object(R.a)(["\n    margin: 0;\n    color: #23995C;\n    display: block;\n    font-size: 40px;\n"]);return oe=function(){return e},e}function ie(){var e=Object(R.a)(["\n    display: flex;\n    padding: 10px 5px;\n"]);return ie=function(){return e},e}function ce(){var e=Object(R.a)(["\n    padding: 15px;\n    background-color: #F7FEFA;\n"]);return ce=function(){return e},e}var ue=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(u.a)(n,[{key:"_showResult",value:function(){var e=this;return this.props.favourites.length<=1?r.a.createElement("div",null):r.a.createElement(le,null,r.a.createElement(fe,null,"Favourites"),this.props.favourites.map(function(n,t){return r.a.createElement(de,{key:t},r.a.createElement(he,null,r.a.createElement("i",{className:"fa fa-star",onClick:function(t){return e.props.removeFavourites(n,e.props.favourites,e.props.data,e.props.handledData)}}),r.a.createElement("h2",null,n.title)),r.a.createElement(he,{dangerouslySetInnerHTML:{__html:F()(n.body)}}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,this._showResult())}}]),n}(a.Component),se={removeFavourites:N},pe=Object(d.b)(function(e){return{isLoading:e.appReducer.isLoading,handledData:e.appReducer.handledData,favourites:e.appReducer.favourites,data:e.appReducer.data}},se)(ue),le=_.a.section(ce()),de=_.a.div(ie()),fe=_.a.h1(oe()),he=_.a.div(re()),ve=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(d.a,{store:Object(h.createStore)(D,{},Object(v.composeWithDevTools)(Object(h.applyMiddleware)(f.a)))},r.a.createElement(U,null),r.a.createElement(ee,null),r.a.createElement(G,null),r.a.createElement(pe,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.9907d187.chunk.js.map