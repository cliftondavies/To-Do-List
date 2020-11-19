(()=>{"use strict";var e={122:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"*{\n  border: 1px solid rgb(60, 255, 0);\n}\n\n\nbody { background-color: rgb(224, 77, 32);}\n\n.wrapper {\n  display: flex\n}\n\n.project-form{\n  display: none;\n}\n\n.show-project-form {\n  display: block;\n}\n\n.todo-form {\n  display: none;\n}\n\n.show-todo-form{\n  display: block;\n}\n\n.todo-wrapper-hidden {\n  display:none;\n}\n\n.show-todo-wrapper {\n  display: block;\n}\n\n.expanded-todo-card {\n  border: 3px solid rgb(28, 17, 170);\n  display: none;\n  /* z-index: 100; */\n}\n\n/* .expanded-todo-card span {\n  z-index: 1;\n} */\n\n.collapsed-todo-card {\n  border: 3px solid rgb(0, 0, 0);\n  /* z-index : 1000;\n  position: relative; */\n}\n\n/* .collapsed-todo-card span {\n  z-index: 1;\n  position: absolute;\n} */\n\n.show-todo-card {\n  display: block;\n}\n",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var d=e[r],c=t.base?d[0]+t.base:d[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var p=i(u),s={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(a[p].references++,a[p].updater(s)):a.push({identifier:u,updater:m(s,t),references:1}),o.push(u)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,v=0;function m(e,t){var n,o,r;if(t.singleton){var a=v++;n=f||(f=c(t)),o=p.bind(null,n,a,!1),r=p.bind(null,n,a,!0)}else n=c(t),o=s.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=i(n[o]);a[r].references--}for(var c=d(e,t),l=0;l<n.length;l++){var u=i(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=c}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(122);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";r(this,e),this.projectName=t,this.list=[]}var t,n,o;return t=e,o=[{key:"getLastAddedCategory",value:function(e){return e[e.length-1].projectName}},{key:"getAllCategories",value:function(e){var t=[];return e.forEach((function(e){return t.push(e.projectName)})),t}}],(n=[{key:"addTodo",value:function(e){return this.list.push(e)}},{key:"deleteTodo",value:function(e){var t=this.list.indexOf(e);this.list.splice(t,1)}}])&&a(t.prototype,n),o&&a(t,o),e}(),d=function(){var e=document.getElementById("main"),t=document.getElementById("wrapper"),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,r=document.createElement("".concat(e));return t&&(r.id=t),r.className+="".concat(n),r.textContent=o,r};return{mainPage:function(){var e=n("main","main","main");document.body.appendChild(e);var t=n("nav","nav","nav"),o=n("button","createProjectBtn","navBtn","add project"),r=n("button","createTodoBtn","navBtn","add todo");e.appendChild(t),t.appendChild(o),t.appendChild(r);var a=n("div","wrapper","wrapper"),i=n("section","project-column","project-column","project column"),d=n("section","todo-column","todo-column","todo column");e.appendChild(a),a.appendChild(i),a.appendChild(d)},projectForm:function(){var o=n("div","project-form-wrapper","project-form"),r=n("form","project-form","form"),a=n("input","project-input","input"),i=n("button","project-button","button","create project");i.setAttribute("type","submit"),e.insertBefore(o,t),o.appendChild(r),r.appendChild(a),r.appendChild(i)},todoForm:function(){var o=n("div","todo-form-wrapper","todo-form"),r=n("form","todo-form","form"),a=n("input","todo-title-input","input");a.setAttribute("placeholder","Title");var i=n("input","todo-description-input","input");i.setAttribute("placeholder","describe your todo");var d=n("input","todo-duedate-input","input");d.setAttribute("placeholder","duedate"),d.setAttribute("type","date");var c=n("input","todo-priority-input","input"),l=n("label","todo-label","low-priority","low");c.setAttribute("type","radio"),c.setAttribute("value","low"),c.setAttribute("name","todo-priority"),c.setAttribute("checked",!0);var u=n("input","todo-priority-input","input"),p=n("label","todo-label","high-priority","high");u.setAttribute("type","radio"),u.setAttribute("value","high"),u.setAttribute("name","todo-priority");var s=n("select","todo-category-input","input");s.setAttribute("name","category");var f=n("button","todo-button","button","create  todo");e.insertBefore(o,t),o.appendChild(r),r.appendChild(a),r.appendChild(i),r.appendChild(d),r.appendChild(l),r.appendChild(c),r.appendChild(p),r.appendChild(u),r.appendChild(s),r.appendChild(f)},createProjectCard:function(e){var t=document.querySelector(".project-column"),o=n("article","project-card"),r=n("h3","project-heading");r.textContent=e.projectName,o.appendChild(r),t.appendChild(o)},collapsedTodoCard:function(e){var t=n("article","","collapsed-todo-card"),o=n("span","","".concat(e.title),e.title),r=n("span","","".concat(e.dueDate),e.dueDate);return o.setAttribute("data-id",e.id),o.setAttribute("data-category",e.category),r.setAttribute("data-id",e.id),t.appendChild(o),t.appendChild(r),t},expandedTodoCard:function(e){var t=n("article","","expanded-todo-card"),o=n("h3","todo-title","".concat(e.Title),e.title),r=n("h4","todo-description","".concat(e.description),e.description),a=n("span","todo-date","".concat(e.dueDate),e.dueDate),i=n("button","todo-priority","todo-priority",e.priority),d=n("button","todo-status","todo-status",e.completed);return o.setAttribute("data-id",e.id),o.setAttribute("data-category",e.category),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i),t.appendChild(d),t},createListWrapper:function(e){var t=n("div",e,"todo-wrapper-hidden");document.querySelector(".todo-column").appendChild(t)},createOption:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;null===n&&(n=i.getLastAddedCategory(t));var o=document.createElement("option");o.textContent=n,o.setAttribute("value",n),e.appendChild(o)}}};function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"getList",value:function(){var e=JSON.parse(localStorage.getItem("list"));if(null==e){var t=[new i];return localStorage.setItem("list",JSON.stringify(t)),JSON.parse(localStorage.getItem("list"))}return e}},{key:"saveProject",value:function(t){var n=e.getList();n.push(t),localStorage.setItem("list",JSON.stringify(n))}},{key:"saveTodo",value:function(t){var n=e.getList(),o=n.find((function(e){return e.projectName===t.category})),r=n.indexOf(o);o.list.push(t),n[r]=o,localStorage.setItem("list",JSON.stringify(n))}},{key:"removeProject",value:function(e,t){e.splice(t,1),localStorage.setItem("list",JSON.stringify(e))}}],null&&c(t.prototype,null),n&&c(t,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=function(){function e(t,n,o,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.description=n,this.dueDate=o,this.priority=r,this.category=a,this.completed="Incomplete",this.id=Date.now()}var t,n;return t=e,(n=[{key:"updateStatus",value:function(){this.completed="Complete"===this.completed?"Incomplete":"Complete"}},{key:"updatePriority",value:function(){this.priority="Low"===this.priority?"High":"Low"}}])&&u(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"render",value:function(){var e=l.getList(),t=document.querySelector("#todo-category-input");i.getAllCategories(e).forEach((function(n){d().createOption(t,e,n)})),e.forEach((function(e){if(d().createProjectCard(e),e.list.length>0){d().createListWrapper(e.projectName);var t=document.querySelector("#".concat(e.projectName));e.list.forEach((function(e){t.appendChild(d().collapsedTodoCard(e)),t.appendChild(d().expandedTodoCard(e))}))}}))}},{key:"viewProjectForm",value:function(){document.querySelector("#project-form-wrapper").classList.toggle("show-project-form")}},{key:"viewTodoForm",value:function(){document.querySelector("#todo-form-wrapper").classList.toggle("show-todo-form")}},{key:"newCategory",value:function(e){var t=document.querySelector("#project-input").value,n=new i(t),o=document.querySelector("#todo-category-input");l.saveProject(n);var r=l.getList();d().createOption(o,r),d().createProjectCard(n),e.preventDefault()}},{key:"newTodo",value:function(e){var t=document.querySelector("#todo-title-input").value,n=document.querySelector("#todo-description-input").value,o=document.querySelector("#todo-duedate-input").value,r=document.querySelector('input[name="todo-priority"]:checked').value,a=document.querySelector("#todo-category-input").value,i=new p(t,n,o,r,a);l.saveTodo(i),d().collapsedTodoCard(i),e.preventDefault()}},{key:"showProjectList",value:function(e){document.querySelector("#".concat(e)).classList.toggle("show-todo-wrapper")}},{key:"expandTodo",value:function(e){var t=document.querySelector('span[data-id="'.concat(e,'"]'));t.parentNode.classList.toggle("expanded-todo-card"),t.parentNode.nextSibling.classList.toggle("show-todo-card")}},{key:"editTodo",value:function(e){var t=l.getList(),n=e.parent.dataset.id,o=e.parent.dataset.category,r=t.find((function(e){return e.projectName===o})),a=t.indexOf(r),i=r.list.find((function(e){return e.id===n})),d=r.list.indexOf(i);"Complete"===e.textContent||"Incompleted"===e.textContent?(i.updateStatus(),r.list[d]=i):"Delete"===e.textContent?r.deleteTodo(i):(i.updatePriority(),r.list[d]=i),t[a]=r,localStorage.setItem("list",JSON.stringify(t))}},{key:"deleteProject",value:function(){var e=l.getList(),t=document.querySelector(".project-heading").textContent,n=e.find((function(e){return e.projectName===t})),o=e.indexOf(n);l.removeProject(e,o)}}],null&&s(t.prototype,null),n&&s(t,n),e}();d().mainPage(),d().todoForm(),d().projectForm(),document.addEventListener("DOMContentLoaded",f.render);var v=document.querySelector("#createProjectBtn"),m=document.querySelector("#createTodoBtn"),h=document.querySelector("#project-form"),y=document.querySelector("#todo-form"),g=document.querySelector("#project-column"),b=document.querySelector(".todo-column");v.addEventListener("click",f.viewProjectForm),m.addEventListener("click",f.viewTodoForm),h.addEventListener("submit",f.newCategory),y.addEventListener("submit",f.newTodo),g.addEventListener("click",(function(e){f.showProjectList(e.target.textContent)})),b.addEventListener("click",(function(e){console.log(e.target),f.expandTodo(e.target.dataset.id)})),b.addEventListener("click",(function(e){}))})()})();