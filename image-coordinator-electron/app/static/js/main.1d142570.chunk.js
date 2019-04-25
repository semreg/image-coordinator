(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(99)},48:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),l=a.n(c),i=(a(45),a(46),a(47),a(38)),o=a(7),s=(a(48),a(3));var m=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("nav",null,r.a.createElement(s.i,{color:"danger-color",dark:!0,expand:"md"},r.a.createElement(s.j,null,r.a.createElement("strong",{className:"white-text"},"Image Coordinator")),r.a.createElement(s.l,{onClick:function(){return c(!a)}}),r.a.createElement(s.c,{id:"navbarCollapse3",isOpen:a,navbar:!0},r.a.createElement(s.k,{left:!0},r.a.createElement(s.h,null,r.a.createElement("a",{className:"nav-link",href:"https://gitlab.com/Semreg/image-coordinator/issues",target:"_blank",rel:"noopener noreferrer"},"Issues")),r.a.createElement(s.h,null,r.a.createElement("a",{className:"nav-link",href:"https://gitlab.com/Semreg/image-coordinator/",target:"_blank",rel:"noopener noreferrer"},"Source Code")),r.a.createElement(s.h,null,r.a.createElement("a",{className:"nav-link",href:"#!",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.e,{className:"language-icon",fas:"true",icon:"language"})))),r.a.createElement(s.k,{right:!0},r.a.createElement(s.h,null,r.a.createElement("a",{className:"nav-link waves-effect waves-light",href:"https://gitlab.com/Semreg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.e,{fab:!0,icon:"gitlab"}))),r.a.createElement(s.h,null,r.a.createElement("a",{className:"nav-link waves-effect waves-light",href:"https://github.com/Semreg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.e,{fab:!0,icon:"github"}))),r.a.createElement(s.h,null,r.a.createElement("a",{className:"nav-link waves-effect waves-light",href:"https://www.linkedin.com/in/vladislav-chabaniuk-792849159",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.e,{fab:!0,icon:"linkedin"})))))))},u=(a(96),function(){return r.a.createElement("footer",null)}),d=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),t,r.a.createElement(u,null))},h=a(101);a(97);var f=function(e){var t=e.readURL,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement("div",{onDragOver:function(){return i(!0)},onDragLeave:function(){return i(!1)},className:"\n        image-upload-wrap\n        ".concat(l?"image-dropping":"","\n      ")},r.a.createElement("input",{id:"file-input",className:"file-upload-input",type:"file",onChange:t,accept:"image/*"}),r.a.createElement("div",{className:"drag-text"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-file-upload"}),r.a.createElement("p",{className:"drag-and-drop-text"},"Drag and drop an image here or click"))))},g=function(e){var t=e.removeUpload,a=e.image;return r.a.createElement("div",{className:"file-upload-content"},r.a.createElement("img",{className:"file-upload-image",src:a.source,alt:"your content"}),r.a.createElement("div",{className:"image-title-wrap"},r.a.createElement("button",{type:"button",onClick:t,className:"remove-image btn btn-dark"},r.a.createElement("span",{className:"capital"},r.a.createElement("i",{className:"fas fa-times"})," Remove"),r.a.createElement("br",null),r.a.createElement("span",{className:"image-title"},a.title))))},E=a(27);var v=function(e){var t=e.children,a=Object(E.b)({opacity:1,marginTop:0,from:{opacity:0,marginTop:-20}});return r.a.createElement(E.a.div,{style:a},t)};var p=function(e){var t=e.image,a=e.setImage,n=function(){return a({title:null,source:null,confirmed:t.isConfirmed})};return r.a.createElement(v,null,r.a.createElement(s.d,{className:"mt-5 text-center form-container"},r.a.createElement(s.m,null,r.a.createElement(s.b,null,r.a.createElement(s.g,null,r.a.createElement("h2",{className:"h1 display-3"},"Load Your Image"),r.a.createElement("p",null,"The image must have the correct extension and resolution."),r.a.createElement("div",{className:"file-upload"},t.source?r.a.createElement(g,{image:t,removeUpload:n}):r.a.createElement(f,{readURL:function(e){var r=e.target.files;if(r&&r[0]){var c=new FileReader;c.onload=function(e){var n=e.target.result;a({title:r[0].name,source:n,confirmed:t.isConfirmed})},c.readAsDataURL(r[0])}else n()}})),r.a.createElement("p",{className:"lead",style:{marginTop:"20px"}},r.a.createElement(s.a,{id:"button",color:"primary",className:"".concat(t.source?"":"disabled"),onClick:function(){return a({title:t.title,source:t.source,isConfirmed:!0})}},r.a.createElement("span",{className:"capital"},r.a.createElement("i",{className:"fas fa-chevron-right"})," Go next"))))))))};a(98);var b=function(e){var t=e.imageSource,a=e.imageProps,c=e.setImageProps,l=e.children,i=Object(n.useState)(!0),m=Object(o.a)(i,2),u=m[0],d=m[1],h=Object(n.useRef)(null);Object(n.useEffect)(function(){var e=h.current;c({width:e.clientWidth,height:e.clientHeight,selectionShape:a.selectionShape,isConfirmed:a.isConfirmed}),d(!1)},[]);var f=function(e){var t=e.target.value;t&&c({width:a.width,height:a.height,selectionShape:t,isConfirmed:a.isConfirmed})};return r.a.createElement(v,null,r.a.createElement("div",{style:{visibility:"hidden "}},u?r.a.createElement("img",{ref:h,src:t,alt:"loaded"}):""),r.a.createElement(s.d,{className:"mt-3 form-container text-center"},r.a.createElement("div",{className:"text-left"},l),r.a.createElement(s.m,{className:"mt-3"},r.a.createElement(s.b,null,r.a.createElement(s.g,null,r.a.createElement("h3",{className:"h1 display-3 text-center"},"Specify Properties"),r.a.createElement("hr",null),r.a.createElement("h2",{className:"text-center"},"Image Size"),r.a.createElement("span",{className:"text-muted text-center size-title"},"Do not change if you want to save the natural size"),r.a.createElement("div",{className:"content-center"},r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"grey-text text-left"},r.a.createElement(s.f,{label:"Width (px)",icon:"arrows-alt-h",group:!0,type:"text",validate:!0,error:"wrong",success:"right",onChange:function(e){return c({width:e.target.value,height:a.height,selectionShape:a.selectionShape,isConfirmed:a.isConfirmed})},value:String(a.width)}),r.a.createElement(s.f,{label:"Height (px)",icon:"arrows-alt-v",group:!0,type:"email",validate:!0,error:"wrong",success:"right",onChange:function(e){return c({width:a.width,height:e.target.value,selectionShape:a.selectionShape,isConfirmed:a.isConfirmed})},value:String(a.height)})))),r.a.createElement("h2",{className:"text-center"},"Shape of the Selection Area"),r.a.createElement("span",{className:"text-muted text-center size-title"},"Choose one of three options"),r.a.createElement("div",{className:"content-center mt-3 text-muted"},r.a.createElement("form",null,r.a.createElement("div",{id:"checkboxes",className:"checkboxes"},r.a.createElement("div",{className:"checkboxgroup"},r.a.createElement("label",{htmlFor:"my_radio_button_id1"},r.a.createElement("i",{className:"far fa-square radio-icon"})," "),r.a.createElement("input",{onClick:f,value:"1",type:"radio",name:"radio",id:"my_radio_button_id1",disabled:!0})),r.a.createElement("div",{className:"checkboxgroup"},r.a.createElement("label",{htmlFor:"my_radio_button_id2"},r.a.createElement("i",{className:"far fa-circle radio-icon"})),r.a.createElement("input",{onClick:f,value:"2",type:"radio",name:"radio",id:"my_radio_button_id2",disabled:!0})),r.a.createElement("div",{className:"checkboxgroup mb-3"},r.a.createElement("label",{htmlFor:"my_radio_button_id3"},r.a.createElement("i",{className:"fas fa-draw-polygon radio-icon"})),r.a.createElement("input",{onClick:f,value:"3",type:"radio",name:"radio",id:"my_radio_button_id3",defaultChecked:!0}))))))))))},w=a(9);var N=function(e){var t=e.coords,a=e.image,c=e.formContainerProps,l=e.imageProps,i=e.canvasProps,s=e.setCanvasProps,m=e.setCoords,u=e.setCurrentCoords,d=Object(n.useState)(null),h=Object(o.a)(d,2),f=h[0],g=h[1],E=Object(n.useRef)(null);Object(n.useEffect)(function(){if(c.width&&c.height)if(l.width>c.width){var e=l.width/l.height,t=.9*c.width;s({width:t,height:t/e})}else s({width:l.width,height:l.height})},[c]),Object(n.useEffect)(function(){var e=new Image;e.src=a.source,e.width=i.width,e.height=i.height,e.onload=function(){return g(e)}},[i]),Object(n.useEffect)(function(){if(f){var e=E.current,a=e.getContext("2d");a.clearRect(0,0,e.width,e.height),v(a,f,i.width,i.height),p(a,t),b(a,t)}},[t,f]);var v=function(e,t,a,n){return e.drawImage(t,0,0,a,n)},p=function(e,t){return t.forEach(function(t){e.beginPath(),e.fillStyle="tomato",e.strokeStyle="tomato",e.arc(t[0],t[1],2,0,2*Math.PI),e.fill(),e.stroke()})},b=function(e,t){t.length>2&&(e.fillStyle="rgba(148, 110, 110, 0.22)",e.beginPath(),e.moveTo(t[0][0],t[0][1]),t.forEach(function(t){e.lineTo(t[0],t[1])}),e.closePath(),e.fill())};return r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{ref:E,width:i.width,height:i.height,onClick:function(e){var a=e.target.getBoundingClientRect(),n=[e.clientX-a.left,e.clientY-a.top];u(n),m([].concat(Object(w.a)(t),[n]))}}))};var C=function(e){var t=e.children,a=e.image,c=e.imageProps,l=Object(n.useState)([]),i=Object(o.a)(l,2),m=i[0],u=i[1],d=Object(n.useState)([]),h=Object(o.a)(d,2),f=h[0],g=h[1],E=Object(n.useState)(null),p=Object(o.a)(E,2),b=p[0],C=p[1],k=Object(n.useState)({width:c.width,height:c.height}),S=Object(o.a)(k,2),y=S[0],j=S[1],x=Object(n.useState)({width:null,height:null}),O=Object(o.a)(x,2),_=O[0],P=O[1],R=Object(n.useRef)(null);Object(n.useEffect)(function(){P({width:R.current.clientWidth,height:R.current.clientHeight})},[]),Object(n.useEffect)(function(){console.log(I(m,y,c))},[m]);var I=function(e,t,a){return[e[0]*(a.width/t.width),e[1]*(a.height/t.height)]};return r.a.createElement(v,null,r.a.createElement(s.d,{className:"mt-3 form-container text-center"},r.a.createElement("div",{className:"text-left"},t),r.a.createElement(s.m,{className:"mt-3"},r.a.createElement(s.b,null,r.a.createElement("div",{className:"jumbotron",ref:R},r.a.createElement(N,{coords:m,removedCoords:f,currentCoords:b,image:a,canvasProps:y,imageProps:c,formContainerProps:_,setCanvasProps:j,setRemovedCoords:g,setCoords:u,setCurrentCoords:C}),r.a.createElement("h2",{className:"text-center mt-3"},"Coords"),r.a.createElement("span",{className:"text-muted text-center size-title"},"Automatically calculated for specified resolution"),r.a.createElement("div",{className:"content-center-auto"},r.a.createElement("div",{className:"grey-text text-left"},r.a.createElement(s.f,{label:"Last Coords",icon:"map-marker-alt",group:!0,type:"text",validate:!0,error:"wrong",success:"right",value:"".concat(b?"".concat(I(b,y,c)):"")}),r.a.createElement(s.f,{label:"All Coords",icon:"map",group:!0,type:"text",validate:!0,error:"wrong",success:"right",className:"text",value:"".concat(m.length>0?"".concat(m.map(function(e){return I(e,y,c)}).join(" ")):"")})),r.a.createElement("div",{className:"control-buttons"},r.a.createElement(s.a,{onClick:function(){m.length>=1&&(u(m.slice(0,-1)),C(m[m.length-2]),g([].concat(Object(w.a)(f),[m.pop()])))},className:"".concat(m.length<1?"disabled":"")},r.a.createElement("i",{className:"fas fa-undo"})," REDO"),r.a.createElement(s.a,{onClick:function(){if(f.length>=1){var e=f.slice(0,-1),t=f.pop();g(e),u([].concat(Object(w.a)(m),[t])),C(m[m.length-2])}},className:"".concat(f.length<1?"disabled":"")},r.a.createElement("i",{className:"fas fa-redo"})," UNDO"),r.a.createElement(s.a,{color:"danger",onClick:function(){u([]),g([]),C(null)}},r.a.createElement("i",{className:"fas fa-times"})," CLEAR"))))))))};var k=function(e){var t=e.image,a=e.setImage,c=Object(n.useState)({width:void 0,height:void 0,selectionShape:3,isConfirmed:!1}),l=Object(o.a)(c,2),i=l[0],m=l[1],u=function(){return a({title:t.title,source:t.source,isConfirmed:!1})};return r.a.createElement(r.a.Fragment,null,i.isConfirmed?r.a.createElement(C,{imageProps:i,image:t},r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"button button_cancel"},r.a.createElement(s.a,{color:"dark",onClick:u},r.a.createElement("i",{className:"fas fa-times"})," CANCEL")),r.a.createElement("div",{className:"button button_edit"},r.a.createElement(s.a,{onClick:function(){return m({width:i.width,height:i.height,selectionShape:i.selectionShape,isConfirmed:!1})}},r.a.createElement("i",{className:"fas fa-pen"})," EDIT")))):r.a.createElement(b,{imageSource:t.source,imageProps:i,setImageProps:m},r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"button button_cancel"},r.a.createElement(s.a,{color:"dark",onClick:u},r.a.createElement("i",{className:"fas fa-times"})," CANCEL")),r.a.createElement("div",{className:"button button_edit"},r.a.createElement(s.a,{color:"primary",onClick:function(){return m({width:i.width,height:i.height,selectionShape:i.selectionShape,isConfirmed:!0})}},r.a.createElement("i",{className:"fas fa-chevron-right"})," NEXT")))))};var S=function(){var e=Object(n.useState)({title:null,source:null,isConfirmed:!1}),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,a.isConfirmed?r.a.createElement(k,{image:a,setImage:c}):r.a.createElement(p,{image:a,setImage:c}))};var y=Object(i.hot)(function(e){return r.a.createElement(h.a,null,r.a.createElement(d,null,r.a.createElement(S,null)))}),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(y,null),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");j?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):x(t,e)})}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.1d142570.chunk.js.map