(this.webpackJsonpcovermaker=this.webpackJsonpcovermaker||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(12),l=n.n(a),o=n(23),c=n(17),u=n(11),m=n(31),d=n(51),f=n(59),b=n(141),g=Object(c.atom)({key:"coverSettingsState",default:{backgroundColor:"#3689e6",borderColor:"#8cd5ff",borderSize:5,imgHeight:480,imgWidth:720,text:"Your text here",textColor:"#fafafa",textSize:25}}),h=n(52),x=n.n(h),v=n(139),s=n(136);function p(){var e=Object(o.a)(["\n  align-items: center;\n  border-right: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  height: 100vh;\n  justify-content: center;\n  padding: 0 3rem;\n  > div {\n    margin-top: 1.2rem;\n  }\n"]);return p=function(){return e},e}var E=u.b.div(p()),C=function(){var e=Object(c.useRecoilState)(g),t=Object(f.a)(e,2),n=t[0],i=t[1],a=function(e){var t=e.target.value;i(Object(d.a)({},n,Object(m.a)({},e.target.id,t)))};return r.createElement(E,null,r.createElement("img",{src:x.a,height:"150",alt:"logo"}),r.createElement(b.a,{mb:3,mt:1},r.createElement(s.a,{variant:"h5",component:"h1"},"CoverMaker")),r.createElement(v.a,{fullWidth:!0,id:"text",label:"Text",multiline:!0,value:n.text,onChange:a}),r.createElement(v.a,{fullWidth:!0,id:"textSize",label:"Text Size",type:"number",value:n.textSize,onChange:a}),r.createElement(v.a,{fullWidth:!0,id:"textColor",label:"Text Color",value:n.textColor,onChange:a}),r.createElement(v.a,{fullWidth:!0,id:"borderSize",label:"Border Size",type:"number",value:n.borderSize,onChange:a}),r.createElement(v.a,{fullWidth:!0,id:"borderColor",label:"Border Color",value:n.borderColor,onChange:a}),r.createElement(v.a,{fullWidth:!0,id:"imgWidth",label:"Image Width",type:"number",value:n.imgWidth,onChange:a}),r.createElement(v.a,{fullWidth:!0,id:"imgHeight",label:"Image Height",type:"number",value:n.imgHeight,onChange:a}))},j=n(35),S=n(107),y=n(138),O=n(37);function z(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return z=function(){return e},e}var k=u.b.div(z()),W=function(e){var t=e.children,n=Object(r.useRef)();return i.a.createElement(k,null,i.a.createElement("div",{ref:n},t),i.a.createElement(b.a,{mt:3},i.a.createElement(y.a,{disableElevation:!0,variant:"contained",color:"primary"},i.a.createElement(S.a,{onClick:function(){return Object(O.exportComponentAsJPEG)(n)}},"JPG"),i.a.createElement(S.a,{onClick:function(){return Object(O.exportComponentAsPDF)(n)}},"PDF"),i.a.createElement(S.a,{onClick:function(){return Object(O.exportComponentAsPNG)(n)}},"PNG"))))};function H(){var e=Object(j.a)(["\n  align-items: center;\n  background: ",";\n  border: ","px solid ",";\n  color: ",";\n  display: flex;\n  font-size: ","px;\n  height: ","px;\n  justify-content: center;\n  line-height: 3em;\n  padding: 3rem;\n  text-align: center;\n  width: ","px;\n"]);return H=function(){return e},e}var P=u.b.div(H(),(function(e){return e.backgroundColor}),(function(e){return e.borderSize}),(function(e){return e.borderColor}),(function(e){return e.textColor}),(function(e){return e.textSize}),(function(e){return e.imgHeight}),(function(e){return e.imgWidth})),R=function(e){return r.createElement(P,e,r.createElement("h2",null,e.text))};function G(){var e=Object(j.a)(["\n  align-items: center;\n  display: flex;\n  flex: 3.5;\n  justify-content: center;\n  text-align: center;\n"]);return G=function(){return e},e}var J=u.b.div(G()),w=function(){var e=Object(c.useRecoilValue)(g);return r.createElement(J,null,r.createElement(W,null,r.createElement(R,{backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderSize:e.borderSize,imgHeight:e.imgHeight,imgWidth:e.imgWidth,text:e.text,textColor:e.textColor,textSize:e.textSize})))};function A(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n"]);return A=function(){return e},e}function B(){var e=Object(o.a)(["\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Open-Sans, Helvetica, Sans-Serif;\n  }\n"]);return B=function(){return e},e}var I=Object(u.a)(B()),T=u.b.div(A()),D=function(){return r.createElement(c.RecoilRoot,null,r.createElement(T,null,r.createElement(I,null),r.createElement(C,null),r.createElement(w,null)))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root"))},52:function(e,t,n){e.exports=n.p+"static/media/logo.04f1f264.svg"},70:function(e,t,n){e.exports=n(104)}},[[70,1,2]]]);
//# sourceMappingURL=main.496d3777.chunk.js.map