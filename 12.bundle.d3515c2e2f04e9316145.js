(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[12],{127:function(e,n,t){"use strict";var o=t(0),s=t.n(o),a=t(2),r=t.n(a),i=t(130),c=t(126),l=t(14),m=(t(131),t(132),t(133),t(128),function(){return(m=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var s in n=arguments[t])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)}),f=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)n.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(t[o[s]]=e[o[s]])}return t};n.a=function(e){var n=e.children,t=e.title,a=e.className,g=e.code,u=f(e,["children","title","className","code"]),p=Object(o.useState)(!1),d=p[0],x=p[1];return s.a.createElement("div",m({className:r()("code-card",a)},u),s.a.createElement("h1",null,t),s.a.createElement("div",{className:"code-card_demo"},n),s.a.createElement(l.m,{className:"icon-code-toggle",type:"code",onClick:function(){return x(!d)}}),s.a.createElement(c.a,{in:d,timeout:300,classNames:"code",unmountOnExit:!0},s.a.createElement(i.UnControlled,{className:"code-mirror_container",value:g,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,n,t){console.log(t)}})))}},128:function(e,n,t){var o=t(7),s=t(129);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);e.exports=s.locals||{}},129:function(e,n,t){(n=t(8)(!1)).push([e.i,"[class^=f-]{box-sizing:border-box}[class^=f-]::before{box-sizing:border-box}[class^=f-]::after{box-sizing:border-box}.code-card{border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container .CodeMirror{z-index:0;height:auto}.code-enter{opacity:0;transform:scaleY(0);transform-origin:top left}.code-enter-active{opacity:1;transform:scaleY(1);transition:opacity 300ms, transform 300ms}.code-exit{opacity:1}.code-exit-active{opacity:0;transform:scaleY(0.9);transform-origin:top left;transition:opacity 300ms, transform 300ms}\n",""]),e.exports=n},26:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t.n(o),a=t(127),r=t(14);n.default=function(){return s.a.createElement("div",{className:"exp-message"},s.a.createElement(a.a,{title:"基本用法",code:"\nconst info = () => {\n  message.info('This is a normal message');\n};\n<Button type=\"primary\" onClick={info}>\n\tDisplay normal message\n</Button>\n\t\t\t"},s.a.createElement(r.f,{type:"primary",onClick:function(){r.w.info("This is a normal message")}},"Display normal message")),s.a.createElement(a.a,{style:{marginTop:30},title:"其他类型用法",code:"\nconst success = () => {\n\tmessage.success('This is a success message');\n};\n\nconst error = () => {\n\tmessage.error('This is an error message');\n};\n\nconst warning = () => {\n\tmessage.warning('This is a warning message');\n};\n<Button onClick={success}>Success</Button>\n<Button onClick={error}>Error</Button>\n<Button onClick={warning}>Warning</Button>\n\t\t\t"},s.a.createElement(r.f,{onClick:function(){r.w.success("This is a success message")}},"Success"),s.a.createElement(r.f,{onClick:function(){r.w.error("This is an error message")}},"Error"),s.a.createElement(r.f,{onClick:function(){r.w.warning("This is a warning message")}},"Warning")),s.a.createElement(a.a,{style:{marginTop:30},title:"修改延时",code:"\n<Button onClick={() => {\n\tmessage.info('info 1 s', 1);\n}}>info 1 s</Button>\n\t\t\t"},s.a.createElement(r.f,{onClick:function(){r.w.info("info 1 s",1)}},"info 1 s")),s.a.createElement(a.a,{style:{marginTop:30},title:"message 动画结束时回调",code:"\n<Button\n\tonClick={() => {\n\t\tmessage.info('message 动画结束时回调1', 1, () => {\n\t\t\tconsole.log('message 动画结束时回调1');\n\t\t});\n\t}}\n>message 动画结束时回调1</Button>\n<Button\n\tonClick={() => {\n\t\tmessage.info('message 动画结束时回调2', () => {\n\t\t\tconsole.log('message 动画结束时回调2');\n\t\t});\n\t}}\n>message 动画结束时回调2</Button>\n\t\t\t"},s.a.createElement(r.f,{onClick:function(){r.w.info("message 动画结束时回调1",1,(function(){console.log("message 动画结束时回调1")}))}},"message 动画结束时回调1"),s.a.createElement(r.f,{onClick:function(){r.w.info("message 动画结束时回调2",(function(){console.log("message 动画结束时回调2")}))}},"message 动画结束时回调2")))}}}]);