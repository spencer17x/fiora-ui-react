(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[7],{112:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(4),c=n.n(a),i=n(115),l=n(111),s=n(14),p=(n(116),n(117),n(118),n(113),function(){return(p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}),f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};t.a=function(e){var t=e.children,n=e.title,a=e.className,m=e.code,u=f(e,["children","title","className","code"]),d=Object(o.useState)(!1),g=d[0],b=d[1];return r.a.createElement("div",p({className:c()("code-card",a)},u),r.a.createElement("h1",null,n),r.a.createElement("div",{className:"code-card_demo"},t),r.a.createElement(s.m,{className:"icon-code-toggle",type:"code",onClick:function(){return b(!g)}}),r.a.createElement(l.a,{in:g,timeout:300,classNames:"code",unmountOnExit:!0},r.a.createElement(i.UnControlled,{className:"code-mirror_container",value:m,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,t,n){console.log(n)}})))}},113:function(e,t,n){var o=n(8),r=n(114);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},114:function(e,t,n){(t=n(9)(!1)).push([e.i,"[class^=f-]{box-sizing:border-box}[class^=f-]::before{box-sizing:border-box}[class^=f-]::after{box-sizing:border-box}.code-card{width:80%;border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container .CodeMirror{height:auto}.code-enter{opacity:0;transform:scaleY(0);transform-origin:top left}.code-enter-active{opacity:1;transform:scaleY(1);transition:opacity 300ms, transform 300ms}.code-exit{opacity:1}.code-exit-active{opacity:0;transform:scaleY(0.9);transform-origin:top left;transition:opacity 300ms, transform 300ms}\n",""]),e.exports=t},20:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(112),c=n(14);t.default=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1],i=function(){return n(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{title:"基本用法",style:{marginBottom:"20px"}},r.a.createElement(c.f,{onClick:function(){return n(!0)}},"打开dialog"),r.a.createElement(c.j,{title:"Dialog 对话框",visible:t,onClose:i,buttons:[r.a.createElement(c.f,{onClick:i},"取消"),r.a.createElement(c.f,{type:"primary",onClick:i},"确认")]},r.a.createElement("span",null,"这是一段信息"))),r.a.createElement(a.a,{title:"编码式弹窗"},r.a.createElement(c.f,{onClick:function(){c.j.alert({title:"标题",content:"内容内容内容内容"}).then((function(e){return console.log(e)}))}},"Dialog Alert"),r.a.createElement(c.f,{onClick:function(){c.j.confirm({title:"标题",content:"内容内容内容内容"}).then((function(e){return console.log(e)}))}},"Dialog Confirm"),r.a.createElement(c.f,{onClick:function(){c.j.prompt({title:"标题",content:"内容内容内容内容"}).then((function(e){return console.log(e)}))}},"Dialog Prompt")))}}}]);