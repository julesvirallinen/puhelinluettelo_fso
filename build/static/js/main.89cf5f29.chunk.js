(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=(t(20),t(14)),i=t(2),l=t(3),s=t.n(l),m="api/persons",f=function(){return s.a.get(m).then((function(e){return e.data}))},d=function(e){return s.a.post(m,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))};function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var g=function(e){var n=e.persons,t=e.search,a=e.setPersons,c=e.showMessage,o=n.filter((function(e){return e.name.toLowerCase().includes(t)}));return r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",{key:e.name},e.name," - ",e.number,r.a.createElement("button",{onClick:function(){return function(e){window.confirm("Do you really wanna delete ".concat(e.name))&&b(e.id).then((function(t){console.log("response data",t),a(n.filter((function(n){return n.id!==e.id})))})).catch((function(e){c("Error in deleting number","error")}))}(e)}}," delete "))})))},v=function(e){var n=e.message,t=e.messageType;return null===n?null:r.a.createElement("div",{className:t},n)},w=function(e){var n=e.formHandler,t=e.newName,a=e.newNumber,c=e.handlePersonChange,o=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:a,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},O=function(e){var n=e.handleSearch,t=e.search;return r.a.createElement("p",null,"Filter shown with:",r.a.createElement("input",{onChange:n,value:t}))},E=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),s=l[0],m=l[1],b=Object(a.useState)(""),E=Object(i.a)(b,2),j=E[0],y=E[1],P=Object(a.useState)(""),S=Object(i.a)(P,2),k=S[0],C=S[1],N=Object(a.useState)(null),D=Object(i.a)(N,2),T=D[0],B=D[1],H=Object(a.useState)("success"),J=Object(i.a)(H,2),M=J[0],W=J[1];Object(a.useEffect)((function(){f().then((function(e){c(e)}))}),[]);var x=function(e,n){W(n),B(e),setTimeout((function(){B(null)}),5e3)},A=function(){if(window.confirm("".concat(s," is already in phonebook. Replace number?"))){var e=t.find((function(e){return e.name===s})),n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach((function(n){Object(u.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{number:j});h(e.id,n).then((function(n){c(t.map((function(t){return t.id!==e.id?t:n}))),x("".concat(s," edited"),"success"),m(""),y("")}))}};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:T,messageType:M}),r.a.createElement(O,{handleSearch:function(e){C(e.target.value)},search:k}),r.a.createElement("h3",null,"Add new:"),r.a.createElement(w,{formHandler:function(e){e.preventDefault(),t.map((function(e){return e.name})).includes(s)?A():d({name:s,number:j}).then((function(e){c(t.concat(e)),x("".concat(s," added"),"success"),m(""),y("")}))},newName:s,newNumber:j,handlePersonChange:function(e){m(e.target.value)},handleNumberChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{persons:t,search:k,setPersons:c,showMessage:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.89cf5f29.chunk.js.map