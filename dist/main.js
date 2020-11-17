(()=>{"use strict";var t={122:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(645),r=o.n(n)()((function(t){return t[1]}));r.push([t.id,"*{\n  border: 1px solid rgb(60, 255, 0);\n}\n\n\nbody { background-color: rgb(224, 77, 32);}\n\n.wrapper {\n  display: flex\n}\n\n.project-form{\n  display: none;\n}\n\n.show-project-form {\n  display: block;\n}\n\n.todo-form {\n  display: none;\n}\n\n.show-todo-form{\n  display: block;\n}\n\n/* \n.show-todo-form\n\n.hide-todo-card\n\n.show-todo-card\n\n\n*/\n",""]);const i=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(r[d]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),e.push(c))}},e}},379:(t,e,o)=>{var n,r=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),i=[];function d(t){for(var e=-1,o=0;o<i.length;o++)if(i[o].identifier===t){e=o;break}return e}function a(t,e){for(var o={},n=[],r=0;r<t.length;r++){var a=t[r],c=e.base?a[0]+e.base:a[0],s=o[c]||0,l="".concat(c," ").concat(s);o[c]=s+1;var p=d(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:h(u,e),references:1}),n.push(l)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var d=r(t.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(e)}return e}var s,l=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function p(t,e,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),d=t.childNodes;d[e]&&t.removeChild(d[e]),d.length?t.insertBefore(i,d[e]):t.appendChild(i)}}function u(t,e,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,f=0;function h(t,e){var o,n,r;if(e.singleton){var i=f++;o=m||(m=c(e)),n=p.bind(null,o,i,!1),r=p.bind(null,o,i,!0)}else o=c(e),n=u.bind(null,o,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var o=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<o.length;n++){var r=d(o[n]);i[r].references--}for(var c=a(t,e),s=0;s<o.length;s++){var l=d(o[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}o=c}}}}},e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=o(379),e=o.n(t),n=o(122);e()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;const r=()=>{const t=document.getElementById("main"),e=document.getElementById("wrapper"),o=(t,e,o,n)=>{const r=document.createElement(`${t}`);return e&&(r.id=e),r.className+=`${o}`,r.textContent=n,r};return{mainPage:()=>{const t=o("main","main","main");document.body.appendChild(t);const e=o("nav","nav","nav"),n=o("button","createProjectBtn","navBtn","add project"),r=o("button","createTodoBtn","navBtn","add todo");t.appendChild(e),e.appendChild(n),e.appendChild(r);const i=o("div","wrapper","wrapper"),d=o("section","project-column","project-column","project column"),a=o("section","todo-column","todo-column","todo column");t.appendChild(i),i.appendChild(d),i.appendChild(a)},projectForm:()=>{const n=o("div","project-form-wrapper","project-form"),r=o("form","project-form","form"),i=o("input","project-input","input"),d=o("button","project-button","button","create project");d.setAttribute("type","submit"),t.insertBefore(n,e),n.appendChild(r),r.appendChild(i),r.appendChild(d)},todoForm:()=>{const n=o("div","todo-form-wrapper","todo-form"),r=o("form","todo-form","form"),i=o("input","todo-title-input","input"),d=o("input","todo-description-input","input"),a=o("input","todo-duedate-input","input"),c=o("input","todo-priority-input","input"),s=o("input","todo-category-input","input"),l=o("button","todo-button","button","create  todo");t.insertBefore(n,e),n.appendChild(r),r.appendChild(i),r.appendChild(d),r.appendChild(a),r.appendChild(c),r.appendChild(s),r.appendChild(l)},createProjectCard:t=>{const e=document.querySelector(".project-column"),n=o("article","project-card"),r=o("h3","project-heading");r.textContent=t.projectName,n.appendChild(r),e.appendChild(n)},collapsedTodoCard:t=>{const e=document.querySelector(".todo-column"),n=o("article","collapsed-todo-card",""),r=o("span","todo-title",`${t.Title}`),i=o("span","todo-date",`${t.dueDate}`);n.appendChild(r),n.appendChild(i),e.appendChild(n)},expandedTodoCard:t=>{const e=document.querySelector(".todo-column"),n=o("article","expanded-todo-card",""),r=o("h3","todo-title",`${t.Title}`),i=o("h4","todo-description",`${t.description}`),d=o("span","todo-date",`${t.dueDate}`),a=o("button","todo-priority",`${t.priority}`),c=o("button","todo-priority",`${t.completed}`);n.setAttribute("data-id","todo.id"),n.setAttribute("data-category","todo.category"),n.appendChild(r),n.appendChild(i),n.appendChild(d),n.appendChild(a),n.appendChild(c),e.appendChild(n)},createListWrapper:t=>{const e=o("div",t,"todo-wrapper-hidden","hidden");document.querySelector(".todo-column").appendChild(e)}}},i=class{constructor(t="default"){this.projectName=t,this.list=[]}addTodo(t){return this.list.push(t)}deleteTodo(t){const e=this.list.indexOf(t);this.list.splice(e,1)}static addCategory(t){i.categories.push(t.projectName)}};i.categories=[];const d=class{static getList(){if(JSON.parse(localStorage.getItem("list")))JSON.parse(localStorage.getItem("list"));else{const t=[new i];localStorage.setItem("list",JSON.stringify(t)),JSON.parse(localStorage.getItem("list"))}}static save(t){const e=d.getList();if(t instanceof i)e.push(t);else{const o=e.find((e=>e.projectName===t.category)),n=e.indexOf(o);o.addTodo(t),e[n]=o}localStorage.setItem("list",JSON.stringify(e))}static removeProject(t,e){t.splice(e,1),localStorage.setItem("list",JSON.stringify(t))}static removeTodo(){}},a=class{constructor(t,e,o,n,r,i){this.title=t,this.description=e,this.dueDate=o,this.priority=n,this.category=r,this.completed="Incomplete",this.id=i()}static incrementId(){return a.numberOfTodos+1}updateStatus(){this.completed="Complete"===this.completed?"Incomplete":"Complete"}updatePriority(){this.priority="Low"===this.priority?"High":"Low"}};a.numberOfTodos=0;const c=class{static render(){d.getList().forEach((t=>{r().createProjectCard(t),r().createListWrapper(t.projectName),t.list.forEach((t=>r().collapsedTodoCard(t)))}))}static viewProjectForm(){document.querySelector("#project-form-wrapper").classList.toggle("show-project-form")}static newCategory(t){t.preventDefault();const e=document.querySelector("#project-input").value;console.log(d.getList());const o=new i(e);console.log(o),r().createProjectCard(o),d.save(o)}static viewTodoForm(){document.querySelector("#todo-form-wrapper").classList.toggle("show-todo-form")}static newTodo(t){const e=document.querySelector("todo-title-input").value,o=document.querySelector("todo-description-input").value,n=document.querySelector("todo-date-input").value,i=document.querySelector("todo-priority-input").value,c=document.querySelector("todo-category-input").value,s=new a(e,o,n,i,c,a.incrementId);r().collapsedTodoCard(s),d.save(s),t.preventDefault()}static expandTodo(){const t=document.querySelector(".collapsed-todo-card"),e=document.querySelector(".expanded-todo-card");t.classList.toggle("hide-todo-card"),e.classList.toggle("show-todo-card")}static editTodo(t){const e=d.getList(),o=t.parent.dataset.id,n=t.parent.dataset.category,r=e.find((t=>t.projectName===n)),i=e.indexOf(r),a=r.list.find((t=>t.id===o)),c=r.list.indexOf(a);"Complete"===t.textContent||"Incompleted"===t.textContent?a.updateStatus():"Delete"===t.textContent?r.deleteTodo(a):a.updatePriority(),r.list[c]=a,e[i]=r,localStorage.setItem("list",JSON.stringify(e))}static deleteProject(){const t=d.getList(),e=document.querySelector(".project-heading").textContent,o=t.find((t=>t.projectName===e)),n=t.indexOf(o);d.removeProject(t,n)}};r().mainPage(),r().todoForm(),r().projectForm();const s=document.querySelector("#createProjectBtn"),l=document.querySelector("#createTodoBtn"),p=document.querySelector("#project-form"),u=document.querySelector("#todo-form");s.addEventListener("click",c.viewProjectForm),l.addEventListener("click",c.viewTodoForm),p.addEventListener("submit",c.newCategory),u.addEventListener("submit",c.newTodo)})()})();