(this["webpackJsonpreact-simon-says"]=this["webpackJsonpreact-simon-says"]||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/wood.97685270.jpg"},31:function(e,t,n){e.exports=n(51)},38:function(e,t,n){e.exports=n.p+"static/media/applause.9cb7c788.wav"},39:function(e,t,n){e.exports=n.p+"static/media/aww.827dbe6b.wav"},40:function(e,t,n){e.exports=n.p+"static/media/a_sharp.8c41f6e6.wav"},41:function(e,t,n){e.exports=n.p+"static/media/c_sharp.8b562331.wav"},42:function(e,t,n){e.exports=n.p+"static/media/f_sharp.720b7b95.wav"},43:function(e,t,n){e.exports=n.p+"static/media/g_sharp.14433c26.wav"},51:function(e,t,n){"use strict";n.r(t);var r,a,o,c,l=n(0),u=n.n(l),i=n(22),s=n.n(i),d=n(2),g=n(23),f=n(6),h=n(4),p=n(28);function b(){var e=Object.keys(r).map((function(e){return r[e]}));return e[Math.floor(Math.random()*e.length)]}!function(e){e.Red="Red",e.Blue="Blue",e.Yellow="Yellow",e.Green="Green"}(r||(r={})),function(e){e.en="en",e.es="es",e.fr="fr"}(a||(a={})),function(e){e.SOUND="sound",e.HIGH_SCORE="high_score",e.LOCALE="locale",e.HIGH_SCORE_DATE="high_score_date"}(o||(o={})),function(e){e.Digit1="Digit1",e.Digit2="Digit2",e.Digit3="Digit3",e.Digit4="Digit4",e.M="KeyM",e.SPACE="Space"}(c||(c={}));var v=n(38),m=n(39),S=n(40),w=n(41),E=n(42),O=n(43);function x(e){var t=new Audio(e);t.volume=.5,t.play().then((function(){return t.remove()}))}function C(e){x(function(e){switch(e){case r.Red:return S;case r.Blue:return w;case r.Yellow:return O;case r.Green:default:return E}}(e))}var j={$Green:"#23A623",$Green_Lit:"#00F500",$Red:"#B50D0D",$Red_Lit:"#FF0000",$Yellow:"#C2B206",$Yellow_Lit:"#FFFF00",$Blue:"#5454C4",$Blue_Lit:"#0000FF"};function R(e){var t=new Date;return new Date(t.setFullYear(t.getFullYear()+e))}var H=function(e,t,n){return function(){var r=function(e){return e.code===t&&n()};return window.addEventListener(e,r),function(){return window.removeEventListener(e,r)}}},y=[[r.Green,r.Yellow],[r.Red,r.Blue]],L=a.en,B={allowUserInput:!1,canStartRound:!0,clearHighScore:h.noop,currentLocale:L,handleUpdateLocale:h.noop,onButtonClick:h.noop,roundData:[],soundEnabled:!0,startGame:h.noop,toggleSound:h.noop,userSelectedValues:[],preventChangeSettings:!1},D=Object(l.createContext)(B),G=function(){return Object(l.useContext)(D)},k=function(e){var t=e.children,n=Object(p.a)(),r=Object(f.a)(n,3),a=r[0],i=r[1],s=r[2],d=Object(l.useState)(B.roundData),S=Object(f.a)(d,2),w=S[0],E=S[1],O=Object(l.useState)(B.currentLitColor),j=Object(f.a)(O,2),y=j[0],L=j[1],G=Object(l.useState)(B.allowUserInput),k=Object(f.a)(G,2),_=k[0],I=k[1],$=Object(l.useState)(B.userSelectedValues),F=Object(f.a)($,2),T=F[0],U=F[1],A=Object(l.useState)(B.canStartRound),P=Object(f.a)(A,2),Y=P[0],M=P[1],N=Object(l.useState)(a[o.SOUND]?"true"===a[o.SOUND]:B.soundEnabled),z=Object(f.a)(N,2),V=z[0],J=z[1],W=Object(l.useState)(a[o.LOCALE]||B.currentLocale),q=Object(f.a)(W,2),K=q[0],Q=q[1],X=Object(h.last)(w),Z=(null===X||void 0===X?void 0:X.roundId)||0,ee=!(Y||_),te=a[o.HIGH_SCORE]&&a[o.HIGH_SCORE_DATE]?{score:Number(a[o.HIGH_SCORE]),date:new Date(a[o.HIGH_SCORE_DATE])}:void 0,ne=function(e){return V&&void x("applause"===e?v:m)},re=function(e){return V&&C(e)},ae=function(e,t){i(e,t,{expires:R(10)})},oe=function(){Y&&(I(!1),M(!1),function(){var e=Z+1,t=((null===X||void 0===X?void 0:X.color)||[]).concat([b()]);E(w.concat({roundId:e,color:t})),ce(t)}())};Object(l.useEffect)(H("keyup",c.SPACE,oe));var ce=function(e){var t=function(e,t){for(var n=[],r=e.length>t.length?e.length:t.length,a=0;a<r;a++)n.push(e[a]),n.push(t[a]);return n}(e,Object(h.fill)(Object(h.range)(e.length),null)),n=function(e){e===t.length-1&&I(!0);var n=t[e];n&&re(n),L(n)};t.forEach((function(e,t){return Object(h.delay)(n,1e3*(t+1),t)}))},le=function(e){var t=ue(e),n=t&&e.length===(null===X||void 0===X?void 0:X.color.length);t||(E([]),ne("aww")),n&&(!te||Z>te.score)&&(ne("applause"),ae(o.HIGH_SCORE,Z),ae(o.HIGH_SCORE_DATE,new Date)),!n&&t||(I(!1),U([]),M(!0))},ue=function(e){return Object(h.isEqual)(e,null===X||void 0===X?void 0:X.color.slice(0,e.length))},ie=Object(g.a)({},B,{allowUserInput:_,canStartRound:Y,clearHighScore:function(){return s(o.HIGH_SCORE)},currentLitColor:y,currentLocale:K,currentRound:Z,handleUpdateLocale:function(e){Q(e),ae(o.LOCALE,e)},highScoreInfo:te,onButtonClick:function(e){if(Z&&_&&(re(e),T.length<Z)){var t=T.concat(e);U(t),le(t),t.length===Z&&(L(e),Object(h.delay)(L,350,null))}},preventChangeSettings:ee,roundData:w,soundEnabled:V,startGame:oe,toggleSound:function(e){J(e),ae(o.SOUND,e)},userSelectedValues:T});return u.a.createElement(D.Provider,{value:ie},t)},_=n(53),I={en:{"clearHighScore.button.text":"Clear","clearHighScore.button.title":"Clear high score","clearHighScore.header":"High Score: {score}","clearHighScore.header.empty":"No High Score","default.document.title":"React Simon Says","localeChooser.label":"Locale:","localeChooser.value.en":"English","localeChooser.value.es":"Spanish","localeChooser.value.fr":"French","soundToggle.label":"Sound","soundToggle.title":"Toggle Sound","startButton.text.inProgress":"Round {currentRound} in progress","startButton.text.startGame":"Start Game","startButton.text.startGuess":"Start Guessing","startButton.text.startRound":"Start Round {nextRound}"},es:{"clearHighScore.button.text":"Clara","clearHighScore.button.title":"Puntuaci\xf3n alta clara","clearHighScore.header":"Puntuaci\xf3n Alta: {score}","clearHighScore.header.empty":"No Puntuaci\xf3n Alta","default.document.title":"React Sim\xf3n Dice","localeChooser.label":"Localizaci\xf3n:","localeChooser.value.en":"Ingl\xe9s","localeChooser.value.es":"Espa\xf1ol","localeChooser.value.fr":"Franc\xe9s","soundToggle.label":"Sonido","soundToggle.title":"Cambiar el Sonido","startButton.text.inProgress":"Ronda {currentRound} en progreso","startButton.text.startGame":"Comenzar el juego","startButton.text.startGuess":"Empieza a adivinar","startButton.text.startRound":"Comienza la Ronda {nextRound}"},fr:{"clearHighScore.button.text":"Clair","clearHighScore.button.title":"Score \xe9lev\xe9 clair","clearHighScore.header":"Score \xe9lev\xe9: {score}","clearHighScore.header.empty":"Pas de score \xe9lev\xe9","default.document.title":"React Simon Dit","localeChooser.label":"Locale:","localeChooser.value.en":"Anglais","localeChooser.value.es":"Espagnol","localeChooser.value.fr":"Fran\xe7ais","soundToggle.label":"Bruit","soundToggle.title":"Basculer Bruit","startButton.text.inProgress":"Ronde {currentRound} en cours","startButton.text.startGame":"D\xe9marrer le jeu","startButton.text.startGuess":"Commencez \xe0 deviner","startButton.text.startRound":"D\xe9but de la ronde {nextRound}"}},$=function(e){var t=e.children,n=G().currentLocale;return u.a.createElement(_.a,{locale:n,messages:I[n]},t)},F=n(52),T=n(3);function U(){var e=Object(T.a)(["\n    margin-left: 8px;\n"]);return U=function(){return e},e}function A(){var e=Object(T.a)(["\n    margin: 0 0 5px 0;\n    white-space: nowrap;\n"]);return A=function(){return e},e}function P(){var e=Object(T.a)(["\n    margin: 0 0 5px 0;\n"]);return P=function(){return e},e}function Y(){var e=Object(T.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n"]);return Y=function(){return e},e}function M(){var e=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    white-space: nowrap;\n    margin: 0;\n"]);return M=function(){return e},e}var N=d.b.h2(M()),z=d.b.h3(Y()),V=d.b.h5(P()),J=d.b.h2(A()),W=d.b.button(U()),q=function(){var e=G(),t=e.highScoreInfo,n=e.clearHighScore,r=e.preventChangeSettings,a=Object(F.a)().formatMessage;return t?u.a.createElement(N,null,u.a.createElement(z,null,a({id:"clearHighScore.header"},{score:t.score}),u.a.createElement(W,{disabled:r,onClick:n,title:a({id:"clearHighScore.button.title"})},a({id:"clearHighScore.button.text"}))),u.a.createElement(V,null,t.date.toLocaleString())):u.a.createElement(J,null,a({id:"clearHighScore.header.empty"}))};function K(){var e=Object(T.a)(["\n    margin-left: 8px;\n    flex-shrink: 0;\n"]);return K=function(){return e},e}function Q(){var e=Object(T.a)(["\n    align-items: center;\n    display: flex;\n    flex-shrink: 0;\n    justify-content: center;\n    padding-top: 8px;\n    width: 100%;\n"]);return Q=function(){return e},e}var X=d.b.div(Q()),Z=d.b.select(K()),ee=function(){var e=G(),t=e.currentLocale,n=e.handleUpdateLocale,r=e.preventChangeSettings,o=Object(F.a)().formatMessage,c=Object.keys(a).map((function(e){return a[e]})).map((function(e){return u.a.createElement("option",{key:e,value:e},o({id:"localeChooser.value.".concat(e)}))}));return u.a.createElement(X,null,o({id:"localeChooser.label"}),u.a.createElement(Z,{disabled:r,value:t,onChange:function(e){return n(a[e.target.value])}},c))},te=function(){var e=G(),t=e.soundEnabled,n=e.toggleSound,r=e.preventChangeSettings,a=Object(F.a)().formatMessage,o=function(){return!r&&n(!t)};return Object(l.useEffect)(H("keyup",c.M,o)),u.a.createElement("div",{style:{paddingTop:"4px"}},u.a.createElement("input",{name:"soundToggle",type:"checkbox",checked:t,disabled:r,onChange:o,title:a({id:"soundToggle.title"})}),a({id:"soundToggle.label"}))};function ne(){var e=Object(T.a)(["\n    height: 25vh;\n    width: 25vh;\n    border-radius: 25px;\n    max-width: 49vw;\n    transition-duration: 0.4s;\n    -webkit-tap-highlight-color: transparent;\n    margin: 2px;\n    background-color: ",";\n\n    :hover {\n        ","\n    }\n\n    ","\n    ","\n"]);return ne=function(){return e},e}var re=d.b.div(ne(),(function(e){return e.unlit}),(function(e){var t=e.allowUserInput,n=e.lit;return t&&"background-color: ".concat(n,";")}),(function(e){return e.allowUserInput&&"cursor: pointer;"}),(function(e){var t=e.isLit,n=e.lit;return t&&"background-color: ".concat(n,";")})),ae=function(e){var t=e.buttonColor,n=e.index,a=G(),o=a.currentLitColor,c=a.allowUserInput,i=a.onButtonClick,s=function(){return i(t)};return Object(l.useEffect)(H("keyup","Digit".concat(n),s)),u.a.createElement(re,Object.assign({allowUserInput:c,isLit:o===t,onClick:s},function(e){switch(e){case r.Red:return{unlit:j.$Red,lit:j.$Red_Lit};case r.Blue:return{unlit:j.$Blue,lit:j.$Blue_Lit};case r.Yellow:return{unlit:j.$Yellow,lit:j.$Yellow_Lit};default:return{unlit:j.$Green,lit:j.$Green_Lit}}}(t)))};function oe(){var e=Object(T.a)(["\n    display: flex;\n"]);return oe=function(){return e},e}var ce=d.b.div(oe()),le=function(){var e=0,t=function(t){return u.a.createElement(ae,{key:t,buttonColor:t,index:++e})};return u.a.createElement(u.a.Fragment,null,y.map((function(e,n){return u.a.createElement(ce,{key:n},e.map(t))})))},ue=n(26),ie=function(){var e=(0,Object(F.a)().formatMessage)({id:"default.document.title"});return u.a.createElement(ue.Helmet,{title:e})};function se(){var e=Object(T.a)(["\n    height: 35px;\n    min-width: 150px;\n    width: 250px;\n    margin-top: 10px;\n"]);return se=function(){return e},e}var de=d.b.button(se()),ge=function(){var e=G(),t=e.startGame,n=e.currentRound,r=e.canStartRound,a=e.allowUserInput,o=Object(F.a)().formatMessage;return u.a.createElement(de,{disabled:!r,onClick:t},function(){var e="inProgress",t=(n||0)+1;a?e="startGuess":r&&(e=n?"startRound":"startGame");var c="startButton.text.".concat(e);return o({id:c},{nextRound:t,currentRound:n})}())};function fe(){var e=Object(T.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]);return fe=function(){return e},e}var he=d.b.div(fe()),pe=function(){return u.a.createElement(he,null,u.a.createElement(ie,null),u.a.createElement(q,null),u.a.createElement(le,null),u.a.createElement(ge,null),u.a.createElement(ee,null),u.a.createElement(te,null))},be=n(27),ve=n.n(be);function me(){var e=Object(T.a)(["\n    margin-left: auto;\n    margin-right: auto;\n    width: 25vw;\n    max-width: 675px;\n"]);return me=function(){return e},e}function Se(){var e=Object(T.a)(["\n    display: table-cell;\n    vertical-align: middle;\n"]);return Se=function(){return e},e}function we(){var e=Object(T.a)(["\n    display: table;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-image: url(",");\n    background-size: cover;\n"]);return we=function(){return e},e}var Ee=d.b.div(we(),ve.a),Oe=d.b.div(Se()),xe=d.b.div(me()),Ce=function(){return u.a.createElement(d.a,{theme:{color:j}},u.a.createElement(k,null,u.a.createElement($,null,u.a.createElement(Ee,null,u.a.createElement(Oe,null,u.a.createElement(xe,null,u.a.createElement(pe,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(u.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.bcc719c9.chunk.js.map