(window.webpackJsonpcardz=window.webpackJsonpcardz||[]).push([[0],{166:function(e,t,r){},202:function(e,t,r){e.exports=r.p+"static/media/logo.422cba5c.svg"},208:function(e,t,r){e.exports=r.p+"static/media/lucas.eaba7ec4.png"},209:function(e,t,r){e.exports=r.p+"static/media/RDJ.fdf7012b.png"},210:function(e,t,r){e.exports=r.p+"static/media/student.673c0200.png"},211:function(e,t,r){e.exports=r.p+"static/media/einstien.1ca36c16.png"},254:function(e,t,r){e.exports=r(373)},259:function(e,t,r){},280:function(e,t,r){},286:function(e,t,r){},373:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"setCards",(function(){return A})),r.d(n,"nextCard",(function(){return D})),r.d(n,"prevCard",(function(){return R})),r.d(n,"addCard",(function(){return P})),r.d(n,"updateCard",(function(){return T})),r.d(n,"deleteCardItem",(function(){return _})),r.d(n,"swapSides",(function(){return I})),r.d(n,"getCardsets",(function(){return L})),r.d(n,"setAllCardsets",(function(){return F})),r.d(n,"addCardset",(function(){return z})),r.d(n,"deleteCardset",(function(){return U})),r.d(n,"flipCard",(function(){return W}));var a={};r.r(a),r.d(a,"getCards",(function(){return H})),r.d(a,"getCurrentCard",(function(){return J})),r.d(a,"getCurrentCardSet",(function(){return M})),r.d(a,"getCardsetNames",(function(){return K})),r.d(a,"getNumberOfCards",(function(){return G})),r.d(a,"getCurrentCardSetArray",(function(){return V}));var c=r(0),o=r.n(c),i=r(15),l=r.n(i),s=(r(259),r(423)),u=r(148),d=r.n(u)()({palette:{type:"light",primary:{main:"rgb(88, 118, 168)"},secondary:{main:"#f5f5f5"}}}),p=r(71),f=r(19),m=r(199),h=r(200),b="card/NEXT_CARD",C="card/PREV_CARD",g="card/SET_CARDS",v="card/ADD_CARD",E="card/UPDATE_CARD",y="card/SWAP_SIDES",O="card/DELETE_CARD_ITEM",j="card/GET_CARDSETS",S="card/SET_ALL_CARDSETS",w="cardset/ADD_CARDSET",k="cardset/DELETE_CARDSET",N="cardset/EDIT_COURSE",x="card/FLIP_CARD";function A(e){return{type:g,payload:e}}function D(){return{type:b}}function R(){return{type:C}}function P(e){return{type:v,payload:e}}function T(e,t,r){return{type:E,payload:{card:e,side:t,content:r}}}function _(e){return{type:O,payload:e}}function I(e,t,r){return{type:y,payload:{itemId:e,front:t,back:r}}}function L(e){return{type:j,payload:e}}function F(e){return{type:S,payload:e}}function z(e,t){return{type:w,payload:[e,t]}}function U(e){return{type:k,payload:e}}function W(){return{type:x}}var B=r(152),H=function(e){return e.cards},J=function(e){return e.currentCard},M=function(e){return e.currentCardSet},K=function(e){return e.allCardSets},G=Object(B.a)([H,M],(function(e,t){return t?e[t].cards.length:null})),V=Object(B.a)([H,M],(function(e,t){return t?e[t].cards:null})),X=r(234),$=r(20);function q(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(r,!0).forEach((function(t){Object($.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e,t){return Y({},e,{currentCard:0,currentCardSet:t.payload})},ee=function(e,t){var r=G(e),n=e.currentCard+1;return Y({},e,{currentCard:n>r-1?0:n})},te=function(e,t){var r=G(e),n=e.currentCard-1;return Y({},e,{currentCard:n<0?r-1:n})},re=function(e,t){var r=M(e);return Y({},e,{cards:Y({},e.cards,Object($.a)({},r,Y({},e.cards[r],{cards:e.cards[r].cards.concat(t.payload)})))})},ne=function(e,t){var r=M(e);J(e),V(e);if(null===r)return e;var n=e.cards[r].cards.map((function(e){return e._id===t.card?Y({},e,Object($.a)({},t.side,t.content)):e}));return Y({},e,{cards:Y({},e.cards,Object($.a)({},r,Y({},e.cards[r],{cards:n})))})},ae=function(e,t){var r=M(e);if(null===r)return e;var n=e.cards[r].cards.filter((function(e){return e._id!==t.payload}));return Y({},e,{cards:Y({},e.cards,Object($.a)({},r,Y({},e.cards[r],{cards:n})))})},ce=function(e,t){var r=M(e);if(null===r)return e;var n=e.cards[r].cards.map((function(e){return e._id===t.itemId?Y({},e,{front:t.back,back:t.front}):e}));return Y({},e,{cards:Y({},e.cards,Object($.a)({},r,Y({},e.cards[r],{cards:n})))})},oe=function(e,t){var r=e.cards,n=t.payload.name;r[n];return Y({},e,{cards:Object(X.a)(r,[n].map(q)),currentCardSet:null,allCardSets:e.allCardSets.filter((function(e){return e!==t.payload.name}))})};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(r,!0).forEach((function(t){Object($.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se={currentCard:null,currentCardSet:null,cards:{},allCardSets:[],flipped:!1};var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Z(e,t);case b:return ee(e);case C:return te(e);case v:return re(e,t);case E:return ne(e,t.payload);case y:return ce(e,t.payload);case O:return ae(e,t);case S:return le({},e,{allCardSets:t.payload});case j:return le({},e,{cards:t.payload});case w:return le({},e,{currentCardSet:t.payload[0],currentCard:0,allCardSets:e.allCardSets.concat(t.payload[0]),cards:le({},e.cards,Object($.a)({},t.payload[0],t.payload[1]))});case k:return oe(e,t);case N:return le({},e,{currentCardSet:t.payload,allCardSets:e.allCardSets.map((function(e){return e===t.payload[0]?t.payload[1]:e}))});case x:return le({},e,{flipped:!e.flipped});default:return e}},de=Object(m.createLogger)(),pe=Object(f.a)(de,h.a)(f.e),fe=Object(f.c)({card:ue}),me=function(e){return pe(fe,e)},he=(r(280),r(389)),be=r(64),Ce=r(202),ge=r.n(Ce),ve=Object(he.a)((function(e){return{headerContainer:{backgroundColor:e.palette.primary.main,width:"100%"},logo:{float:"left",fontSize:25,color:e.palette.secondary.main},headerLayout:{display:"flex",padding:"10px 0",margin:"auto",width:"80%"},title:{width:"40%",margin:"auto",height:"100%"},navigation:{display:"flex",justifyContent:"flex-end",width:"60%","&> a":{textDecoration:"none"}},navItem:{color:e.palette.secondary.main,padding:"10px 15px",margin:"0 10px",border:"2px ".concat(e.palette.secondary.main," solid"),borderRadius:4}}})),Ee=function(e){var t=ve();return o.a.createElement("div",{className:t.headerContainer},o.a.createElement("div",{className:t.headerLayout},o.a.createElement("div",{className:t.title},o.a.createElement("div",{className:t.logo},o.a.createElement("img",{src:ge.a,alt:"Test Master Logo"}))),o.a.createElement("div",{className:t.navigation},o.a.createElement(be.a,{to:"/"},o.a.createElement("div",{className:t.navItem},"Home")),o.a.createElement(be.a,{to:"services"},o.a.createElement("div",{className:t.navItem},"Services")),o.a.createElement(be.a,{to:"about"},o.a.createElement("div",{className:t.navItem},"About")),o.a.createElement(be.a,{to:"contact"},o.a.createElement("div",{className:t.navItem},"Contact")),e.user?o.a.createElement(be.a,{to:"profile"},o.a.createElement("div",{className:t.navItem},"Profile")):o.a.createElement(be.a,{to:"card"},o.a.createElement("div",{className:t.navItem},"Login")))))},ye=r(412),Oe=r(46),je=r(139),Se=r(47),we=(r(286),r(149));function ke(){var e=Object(Oe.a)(["\n  width: 100%;\n"]);return ke=function(){return e},e}var Ne=Se.a.div(ke()),xe=function(e){return o.a.createElement(Ne,null,e.children)},Ae=r(23),De=r(38),Re=r(33),Pe=r(32),Te=r(34);function _e(){var e=Object(Oe.a)(["\n  position: absolute;\n  right: 0;\n  padding: 10px;\n  color: gray;\n"]);return _e=function(){return e},e}function Ie(){var e=Object(Oe.a)(["\n  color: black;\n  width: 500px;\n  padding: 140px 0;\n  text-align: center;\n  height: 100%;\n"]);return Ie=function(){return e},e}var Le=Se.a.div(Ie()),Fe=Se.a.div(_e()),ze=function(e){function t(){return Object(Ae.a)(this,t),Object(Re.a)(this,Object(Pe.a)(t).apply(this,arguments))}return Object(Te.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cardSet,r=e.side,n=e.current,a=e.total;return o.a.createElement("div",null,t&&o.a.createElement(Fe,null,n,"/",a),o.a.createElement(Le,null,r))}}]),t}(o.a.Component);function Ue(){var e=Object(Oe.a)(["\n  margin: 0 5px;\n  padding: 10px 15px;\n  text-transform: uppercase;\n  background-color: white;\n  border-radius: 5px;\n  font-size: 15px;\n  transition: 0.2s;\n  :focus {\n    outline: none;\n  }\n  :active {\n    border-style: solid;\n  }\n  :hover {\n    background-color: rgb(88, 118, 168);\n    color: white;\n    border-color: white;\n  }\n"]);return Ue=function(){return e},e}function We(){var e=Object(Oe.a)(["\n  margin: auto;\n  width: fit-content;\n"]);return We=function(){return e},e}function Be(){var e=Object(Oe.a)(["\n  margin: 15px auto;\n  position: relative;\n  width: 500px;\n  height: 300px;\n  justify-content: center;\n"]);return Be=function(){return e},e}var He={nextCard:n.nextCard,prevCard:n.prevCard,flipCard:n.flipCard},Je=Object(f.d)(Object(p.b)((function(e){var t=e.card;return{card:t,currentCard:a.getCurrentCard(t),currentCardSet:a.getCurrentCardSet(t),numberOfCards:a.getNumberOfCards(t),currentCardSetArray:a.getCurrentCardSetArray(t)}}),He)),Me=Se.a.div(Be()),Ke=Se.a.div(We()),Ge=Se.a.button(Ue());var Ve=Je((function(e){var t=Object(je.b)({opacity:e.card.flipped?1:0,transform:"perspective(600px) rotateX(".concat(e.card.flipped?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),r=t.transform,n=t.opacity;return o.a.createElement(xe,null,e.currentCardSet&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Me,{onClick:e.flipCard},o.a.createElement(je.a.div,{className:"flip",style:{opacity:n.interpolate((function(e){return 1-e})),transform:r}},o.a.createElement(we.a,{className:"paper"},o.a.createElement(ze,{cardSet:e.currentCardSet,total:e.numberOfCards,current:e.currentCard+1,side:e.currentCardSetArray[e.currentCard].front}))),o.a.createElement(je.a.div,{className:"flip",style:{opacity:n,transform:r.interpolate((function(e){return"".concat(e," rotateX(180deg)")}))}},o.a.createElement(we.a,{className:"paper"},o.a.createElement(ze,{cardSet:e.currentCardSet,total:e.numberOfCards,current:e.currentCard+1,side:e.currentCardSetArray[e.currentCard].back})))),o.a.createElement(Ke,null,e.currentCardSet&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Ge,{className:"btn",onClick:function(){return e.prevCard()}},"Previous"),o.a.createElement(Ge,{className:"btn",onClick:function(){return e.nextCard()}},"Next")))))})),Xe=r(167),$e=(r(166),r(417)),qe=r(418),Qe=r(419),Ye=r(411),Ze=r(195);function et(){var e=Object(Oe.a)(["\n  background-color: transparent;\n  padding: 1px !important;\n"]);return et=function(){return e},e}function tt(){var e=Object(Oe.a)(["\n  position: absolute !important;\n  right: 12px;\n  top: 5px;\n"]);return tt=function(){return e},e}var rt=Object(Se.a)(we.a)(tt()),nt=Object(Se.a)(Xe.a)(et()),at=function(e){function t(e){var r;return Object(Ae.a)(this,t),(r=Object(Re.a)(this,Object(Pe.a)(t).call(this,e))).handleFront=function(e){clearTimeout(r.timeout),r.setState({front:e.target.value}),r.timeout=setTimeout((function(){var e=r.props.id;r.props.update(e,"front",r.state.front)}),1e3)},r.swapItems=function(e,t,n){r.setState({front:r.state.back,back:r.state.front}),r.props.swap(e,t,n)},r.handleDelete=function(e){r.setState({deletedItem:r.props.id}),setTimeout((function(){r.props.delete(e)}),500)},r.handleBack=function(e){clearTimeout(r.timeout),r.setState({back:e.target.value}),r.timeout=setTimeout((function(){var e=r.props.id;r.props.update(e,"back",r.state.back)}),1e3)},r.state={front:r.props.front,back:r.props.back,deletedItem:null},r.timeout=null,r}return Object(Te.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this,t=this.state,r=t.front,n=t.back;return console.log("LIST REDRAWN"),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ye.a,{style:{transformOrigin:"top"},timeout:{enter:0,exit:300},mountOnEnter:!0,unmountOnExit:!0,in:this.state.deletedItem!==this.props.id},o.a.createElement(ye.a,{container:!0,spacing:3,className:"list-item"},o.a.createElement(ye.a,{item:!0,xs:!0},o.a.createElement(Ze.a,{fullWidth:!0,multiline:!0,rowsMax:"4",id:"front",label:"front",onChange:this.handleFront,value:r})),o.a.createElement(ye.a,{item:!0,xs:!0},o.a.createElement(Ze.a,{fullWidth:!0,multiline:!0,rowsMax:"4",id:"back",label:"back",onChange:this.handleBack,value:n})),o.a.createElement(rt,null,o.a.createElement(nt,{onClick:function(){return e.swapItems(e.props.id,r,n)}},o.a.createElement($e.a,{fontSize:"small"})),o.a.createElement(nt,null,o.a.createElement(qe.a,{fontSize:"small"})),o.a.createElement(nt,{onClick:function(){return e.handleDelete(e.props.id)}},o.a.createElement(Qe.a,{fontSize:"small"}))))))}}]),t}(o.a.Component),ct="api/FETCH_CARDS_PENDING",ot="api/FETCH_CARDS_PENDING",it="api/FETCH_CARDS_ERROR";var lt="http://testmasterlive.com",st=function(){return console.log("production",Object({NODE_ENV:"production",PUBLIC_URL:"."})),function(e){e({type:ct}),fetch(lt+"/cardsets",{mode:"cors"}).then((function(e){return e.json()})).then((function(t){if(t.error)throw t.error;var r={};return t.map((function(e){return r[e.name]={id:e._id,cards:e.cards}})),e(function(e){return{type:ot,cards:e}}()),e(n.getCardsets(r)),e(n.setAllCardsets(t.map((function(e){return e.name})))),t})).catch((function(t){e(function(e){return{type:it,error:e}}(t))}))}},ut=r(420),dt=Object(f.d)(Object(p.b)((function(e){var t=e.card;return{card:t,currentCard:a.getCurrentCard(t),currentCardsSetArray:a.getCurrentCardSetArray(t),currentCardSet:a.getCurrentCardSet(t)}}),(function(e){return{addCard:function(t){return e(function(e){var t={card:{front:"",back:""}};return function(r){fetch("http://testmasterlive.com/cardsets/"+e.id,{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},method:"post",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){r(n.addCard(e.cards[e.cards.length-1]))}))}}(t))},updateCard:function(t,r,a,c){return e(function(e,t,r,a){return function(c){var o=lt+"/cardsets/"+e+"/"+t,i={card:Object($.a)({},r,a)};fetch(o,{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},method:"put",body:JSON.stringify(i)}).then(c(n.updateCard(t,r,a)))}}(t,r,a,c))},deleteCard:function(t,r){e(function(e,t){return function(r){var a=lt+"/cardsets/"+e.id+"/"+t;fetch(a,{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},method:"put",body:JSON.stringify({delete:"delete"})}).then(r(n.deleteCardItem(t)))}}(t,r))},swapSides:function(t,r,a){return e(n.swapSides(t,r,a))}}}))),pt=Object(he.a)((function(e){return{container:{margin:"auto",width:800,padding:"15px 0"},addContainer:{display:"flex",paddingTop:"inherit"}}}));var ft=dt((function(e){console.log("LIST CONTAINER REDRAWN ",e.currentCardsSetArray);var t=function(t){e.deleteCard(e.card.cards[e.currentCardSet],t)},r=function(t,r,n){e.updateCard(e.card.cards[e.currentCardSet].id,t,r,n)},n=e.currentCardSet?e.currentCardsSetArray.map((function(n){return o.a.createElement(at,{key:n._id,id:n._id,front:n.front,back:n.back,update:r,delete:t,swap:e.swapSides})})):null,a=pt();return o.a.createElement("div",{className:a.container},e.currentCardSet?o.a.createElement(we.a,{className:"list-paper"},n,o.a.createElement("div",{className:a.addContainer},o.a.createElement(Xe.a,{className:"list-plus",onClick:function(){return e.addCard(e.card.cards[e.currentCardSet])}},o.a.createElement(ut.a,null)))):null)})),mt=r(385),ht=r(388),bt=r(170),Ct=r(421),gt=r(206),vt=r.n(gt),Et=Object(he.a)((function(e){return{list:function(t){return{position:"relative","&:hover":{backgroundColor:e.palette.secondary.main},backgroundColor:t?e.palette.secondary.main:"white","&:before":{content:"''",position:"absolute",left:0,width:5,height:"100%",backgroundColor:t?e.palette.primary.main:"rgba(0,0,0,0)"}}},button:function(t){return{"& button":{display:t?"block":"none","&:hover":{color:e.palette.primary.main,backgroundColor:"rgba(0,0,0,0)"}}}}}})),yt=function(e){var t=e.deleteCardset,r=e.onClick,n=e.primary,a=e.active,c=Et(a);return o.a.createElement(ht.a,{className:c.list,button:!0,onClick:r},o.a.createElement(bt.a,{primary:n}),o.a.createElement(Ct.a,{className:c.button},o.a.createElement(Xe.a,{edge:"end","aria-label":"delete",onClick:t},o.a.createElement(vt.a,null))))},Ot=r(416),jt=Object(f.d)(Object(p.b)((function(e){var t=e.card;return{cards:a.getCards(t),cardsets:a.getCardsetNames(t),currentCardSet:a.getCurrentCardSet(t)}}),(function(e){return{getCardSets:function(){return e(st())},addCardset:function(t){return e(function(e){return function(t){var r={name:e};fetch("http://testmasterlive.com/cardsets",{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},method:"post",body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(r){return t(n.addCardset(e,{id:r._id,cards:r.cards}))})).catch((function(e){return console.log(e)}))}}(t))},setCards:function(t){return e(n.setCards(t))},deleteCardset:function(t){return e(function(e){return function(t){fetch(lt+"/cardsets/"+e,{mode:"cors",method:"delete"}).then((function(e){return e.json()})).then((function(e){return t(n.deleteCardset(e))})).catch((function(e){return console.log(e)}))}}(t))},nextCard:function(){return e(n.nextCard())},prevCard:function(){return e(n.prevCard())},flipCard:function(){return e(n.flipCard())}}}))),St=function(e){function t(e){var r;return Object(Ae.a)(this,t),(r=Object(Re.a)(this,Object(Pe.a)(t).call(this,e))).handleKeyUp=function(e){switch(console.log("key",e.keyCode),e.keyCode){case 32:r.props.flipCard();break;case 39:r.props.nextCard();break;case 37:r.props.prevCard()}},r.handleEnter=function(e){"Enter"===e.key&&(r.props.addCardset(e.target.value),r.setState({showInput:!1}))},r.deleteCardset=function(){var e=r.props,t=e.currentCardSet,n=e.cards;r.props.deleteCardset(n[t].id)},r.state={showInput:!1},r}return Object(Te.a)(t,e),Object(De.a)(t,[{key:"componentDidMount",value:function(){this.props.getCardSets(),document.addEventListener("keyup",this.handleKeyUp,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp,!1)}},{key:"preAddCardset",value:function(){console.log("test"),this.setState({showInput:!0})}},{key:"render",value:function(){var e=this,t=this.props.classes;console.log(this.props.currentCardSet);var r=this.props.cardsets.length>1?this.props.cardsets.map((function(t){return o.a.createElement(yt,{key:t,onClick:function(){return e.props.setCards(t)},primary:t,active:t===e.props.currentCardSet,deleteCardset:e.deleteCardset})})):null;return o.a.createElement("div",{className:t.courseList},o.a.createElement("h2",{className:t.courseHeader},"Courses"),o.a.createElement(Ot.a,{component:"nav","aria-label":"secondary mailbox folders"},r,this.state.showInput&&o.a.createElement(ht.a,null,o.a.createElement(Ze.a,{onKeyPress:this.handleEnter}))),o.a.createElement("div",{className:t.addContainer},o.a.createElement(Xe.a,{className:t.plus,onClick:function(){return e.preAddCardset()}},o.a.createElement(ut.a,null))))}}]),t}(o.a.Component),wt=Object(mt.a)((function(e){return{courseList:{width:"100%",maxWidth:360},courseHeader:{color:e.palette.primary.main,marginBlockEnd:0},addContainer:{display:"flex",paddingTop:"inherit"},plus:{margin:"auto !important"}}}))(jt(St)),kt=r(207),Nt=r.n(kt),xt=(r(304),r(305),r(208)),At=r.n(xt),Dt=r(209),Rt=r.n(Dt),Pt=r(210),Tt=r.n(Pt),_t=r(211),It=r.n(_t),Lt=Object(he.a)((function(e){return{container:{width:"auto",padding:50,margin:"auto",backgroundColor:e.palette.primary.main},slider:{margin:"auto"},img:{width:"auto"}}})),Ft=function(){var e=Lt(),t=[At.a,Rt.a,Tt.a,It.a].map((function(t,r){return o.a.createElement("div",{key:r,className:e.container},o.a.createElement("img",{className:e.img,src:t,alt:"study".concat(r)}))}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Home"),o.a.createElement(Nt.a,Object.assign({className:e.slider},{dots:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,arrows:!1}),t))},zt=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Services"))},Ut=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"About"))},Wt=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Contact"))},Bt=r(212),Ht=r.n(Bt),Jt=r(219),Mt=r.n(Jt),Kt=r(229),Gt=r.n(Kt),Vt=r(220),Xt=r.n(Vt),$t=r(227),qt=r.n($t),Qt=r(157),Yt=r.n(Qt),Zt=r(156),er=r.n(Zt),tr=r(221),rr=r.n(tr),nr=r(222),ar=r.n(nr),cr=r(224),or=r.n(cr),ir=r(225),lr=r.n(ir),sr=r(226),ur=r.n(sr),dr=r(230),pr=r.n(dr),fr=r(223),mr=r.n(fr),hr=r(228),br=r.n(hr),Cr=r(231),gr=r.n(Cr);function vr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Er={Add:Object(c.forwardRef)((function(e,t){return o.a.createElement(Mt.a,Object.assign({},e,{ref:t}))})),Check:Object(c.forwardRef)((function(e,t){return o.a.createElement(Xt.a,Object.assign({},e,{ref:t}))})),Clear:Object(c.forwardRef)((function(e,t){return o.a.createElement(er.a,Object.assign({},e,{ref:t}))})),Delete:Object(c.forwardRef)((function(e,t){return o.a.createElement(rr.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(c.forwardRef)((function(e,t){return o.a.createElement(Yt.a,Object.assign({},e,{ref:t}))})),Edit:Object(c.forwardRef)((function(e,t){return o.a.createElement(ar.a,Object.assign({},e,{ref:t}))})),Export:Object(c.forwardRef)((function(e,t){return o.a.createElement(mr.a,Object.assign({},e,{ref:t}))})),Filter:Object(c.forwardRef)((function(e,t){return o.a.createElement(or.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(c.forwardRef)((function(e,t){return o.a.createElement(lr.a,Object.assign({},e,{ref:t}))})),LastPage:Object(c.forwardRef)((function(e,t){return o.a.createElement(ur.a,Object.assign({},e,{ref:t}))})),NextPage:Object(c.forwardRef)((function(e,t){return o.a.createElement(Yt.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(c.forwardRef)((function(e,t){return o.a.createElement(qt.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(c.forwardRef)((function(e,t){return o.a.createElement(er.a,Object.assign({},e,{ref:t}))})),Search:Object(c.forwardRef)((function(e,t){return o.a.createElement(br.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(c.forwardRef)((function(e,t){return o.a.createElement(Gt.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(c.forwardRef)((function(e,t){return o.a.createElement(pr.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(c.forwardRef)((function(e,t){return o.a.createElement(gr.a,Object.assign({},e,{ref:t}))}))},yr=Object(he.a)((function(e){return{container:{padding:15},title:{color:e.palette.primary.main},paper:{padding:15,margin:20},list:{color:"black"},input:{marginBottom:15},table:{margin:20}}})),Or=function(e){var t=e.handleAdd,r=e.cardsetChosen,n=e.chosen,a=e.title,c=e.serializer,i=yr();console.log("COLLECTIONS REDRAWN",n);var l=a?a[0].toUpperCase()+a.slice(1):null,s=c?c.map((function(e){return{title:e,field:e}})):null,u=[];u.length=n?Object.keys(n).length:0;c&&Object.keys(n).map((function(e){return c.map((function(t){return u[e]=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?vr(r,!0).forEach((function(t){Object($.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vr(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u[e],Object($.a)({},t,n[e][t]))}))}));return o.a.createElement(ye.a,{item:!0,xs:9},o.a.createElement("h2",{className:i.title},l),c&&o.a.createElement(Ht.a,{style:{margin:20},title:r||l,icons:Er,editable:{onRowAdd:function(e){return t(e,a,r)}},columns:s,data:u}))},jr=r(232),Sr=r(424),wr=Object(he.a)((function(e){return{root:{height:"100%"},container:{height:"100%"},title:{color:e.palette.primary.main},list:{position:"relative","&:hover":{backgroundColor:e.palette.secondary.main},backgroundColor:e.palette.secondary.main,"&:before":{content:"''",position:"absolute",left:0,width:5,height:"100%",backgroundColor:e.palette.primary.main}}}})),kr=function(e){var t=e.cardsets,r=e.handleSelect,n=wr(),a=o.a.useState(null),c=Object(jr.a)(a,2),i=c[0],l=c[1],s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t?(l(t),r("cardsets",t)):(l(e),r(e))},u=t?t.map((function(e){return o.a.createElement(ht.a,{key:e._id,button:!0,classes:{selected:n.list},selected:i===e.name,onClick:function(){return s("cardsets",e.name)}},o.a.createElement(bt.a,{primary:e.name}))})):null;return o.a.createElement(ye.a,{className:n.root,item:!0,xs:3},o.a.createElement("div",{className:n.container},o.a.createElement("h2",{className:n.title},"Collections"),o.a.createElement(Ot.a,{component:"nav",subheader:o.a.createElement("li",null)},o.a.createElement(ht.a,{button:!0,classes:{selected:n.list},onClick:function(){return s("users")},selected:"users"===i},o.a.createElement(bt.a,{primary:"Users"})),o.a.createElement(ht.a,{button:!0,classes:{selected:n.list},onClick:function(){return s("services")},selected:"services"===i},o.a.createElement(bt.a,{primary:"Services"})),o.a.createElement(Sr.a,null,"Cardsets"),u)))},Nr=function(e){function t(e){var r;return Object(Ae.a)(this,t),(r=Object(Re.a)(this,Object(Pe.a)(t).call(this,e))).handleSelect=function(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(console.log(e),e){case"services":t=["_id","title","description"],n=r.state.services;break;case"users":t=["_id","email","school"],n=r.state.users;break;case"cardsets":t=["_id","front","back"],console.log(r.state.cardsets,a),n=r.state.cardsets.filter((function(e){return e.name===a}))[0].cards}r.setState({chosenCollection:n,collectionName:e,chosenSerializer:t,chosenCardset:a})},r.handleAdd=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n||fetch(r.state.url+"services",{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},method:"post"})},r.state={cardsets:null,users:null,services:null,chosenCollection:null,collectionName:null,chosenSerializer:null,chosenCardset:null,url:"http://localhost:4000/"},r}return Object(Te.a)(t,e),Object(De.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.url+"cardsets").then((function(e){return e.json()})).then((function(t){return e.setState({cardsets:t})})),fetch(this.state.url+"services").then((function(e){return e.json()})).then((function(t){return e.setState({services:t})}))}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(ye.a,{container:!0,className:e.root,spacing:0},o.a.createElement(kr,{cardsets:this.state.cardsets,handleSelect:this.handleSelect}),o.a.createElement(Or,{chosen:this.state.chosenCollection,title:this.state.collectionName,serializer:this.state.chosenSerializer,cardsetChosen:this.state.chosenCardset,handleAdd:this.handleAdd}))}}]),t}(o.a.Component),xr=Object(mt.a)((function(e){return{root:{height:"100%"}}}))(Nr),Ar=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"AdminLogin"))},Dr=Object(he.a)((function(e){return{courseList:{height:"100%",marginRight:20},wrapper:{minHeight:"100%",marginBottom:-50,backgroundColor:"white"},push:{height:50},footer:{height:50,backgroundColor:e.palette.primary.main},"@global":{html:{backgroundColor:e.palette.primary.main}},routes:{height:"100%"}}})),Rr=function(){var e=Dr();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.wrapper},o.a.createElement(Ee,null),o.a.createElement(be.b,{className:e.routes},o.a.createElement(Ft,{path:"/"}),o.a.createElement(Ut,{path:"about"}),o.a.createElement(zt,{path:"services"}),o.a.createElement(Wt,{path:"contact"}),o.a.createElement(Pr,{listStyle:e.courseList,path:"card"}),o.a.createElement(xr,{path:"admin"}),o.a.createElement(Ar,{path:"admin/login"})),o.a.createElement("div",{className:e.push})),o.a.createElement("div",{className:e.footer}))},Pr=function(e){var t=e.listStyle;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ye.a,{container:!0,spacing:0,justify:"center"},o.a.createElement(ye.a,{item:!0,className:t},o.a.createElement(wt,null)),o.a.createElement(ye.a,{item:!0},o.a.createElement(Ve,null),o.a.createElement(ft,null))))},Tr=me();var _r=function(){return o.a.createElement(p.a,{store:Tr},o.a.createElement(s.a,{theme:d},o.a.createElement(Rr,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(_r,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[254,1,2]]]);
//# sourceMappingURL=main.029bebee.chunk.js.map