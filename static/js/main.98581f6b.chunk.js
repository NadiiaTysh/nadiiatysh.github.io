(this.webpackJsonpprivate=this.webpackJsonpprivate||[]).push([[0],{103:function(e,t,a){},124:function(e,t,a){e.exports=a(191)},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),s=a.n(c),i=a(21),l=a(123),o=a(27),u=a(8),d=Object.freeze({TASK_START_FETCHING:"TASK_START_FETCHING",TASK_STOP_FETCHING:"TASK_STOP_FETCHING",TASK_SET_FETCHING_ERROR:"TASK_SET_FETCHING_ERROR",TASK_ADD:"TASK_ADD",TASK_EDIT:"TASK_EDIT",TASK_REMOVE:"TASK_REMOVE",TASK_FETCH:"TASK_FETCH"}),m={data:{},isFetching:!1,error:null},h=Object.freeze({LIST_START_FETCHING:"LIST_START_FETCHING",LIST_STOP_FETCHING:"LIST_STOP_FETCHING",LIST_SET_FETCHING_ERROR:"LIST_SET_FETCHING_ERROR",LIST_FILL:"LIST_FILL",LIST_FETCH_ASYNC:"LIST_FETCH_ASYNC"}),E={data:null,isFetching:!1,error:null},T=Object.freeze({GLOBALIZED_NEW_TASK:"GLOBALIZED_NEW_TASK",GLOBALIZED_SELECT_TASK:"GLOBALIZED_SELECT_TASK",GLOBALIZED_HIDE_TASK:"GLOBALIZED_HIDE_TASK"}),f={isShownSelectedCard:!1,isShownBlankCard:!1,filteredData:null},S=Object(o.c)({task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case d.TASK_ADD:case d.TASK_EDIT:return Object(u.a)(Object(u.a)({},e),{},{data:n});case d.TASK_REMOVE:return Object(u.a)({},e);case d.TASK_START_FETCHING:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!0});case d.TASK_STOP_FETCHING:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1});case d.TASK_SET_FETCHING_ERROR:return Object(u.a)(Object(u.a)({},e),{},{error:n,data:null});default:return e}},list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h.LIST_START_FETCHING:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!0});case h.LIST_STOP_FETCHING:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1});case h.LIST_SET_FETCHING_ERROR:return Object(u.a)(Object(u.a)({},e),{},{error:n,data:null});case h.LIST_FILL:return Object(u.a)(Object(u.a)({},e),{},{data:n.reverse(),error:null});default:return e}},globalized:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case T.GLOBALIZED_NEW_TASK:return{isShownBlankCard:!0,isShownSelectedCard:!1,filteredData:null};case T.GLOBALIZED_SELECT_TASK:return{isShownBlankCard:!1,isShownSelectedCard:!0,filteredData:n};case T.GLOBALIZED_HIDE_TASK:return{isShownBlankCard:!1,isShownSelectedCard:!1};default:return e}}}),p=a(114),_=a(115),v=(Object(p.createLogger)({duration:!0,collapsed:!0,colors:{title:function(e){return e.error?"firebrick":"deepskyblue"},prevState:function(){return"#1C5FAF"},action:function(){return"#149945"},nextState:function(){return"#A47104"},error:function(){return"#ff0005"}}}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,o.d),b=[_.a];var F=Object(o.e)(S,v(o.a.apply(void 0,Object(l.a)(b)))),g=(a(103),a(43)),O=a(25),k=a.n(O),N=a(60),C="https://lab.lectrum.io/rtx/api",I=Object.freeze({todos:{getFetch:function(){return fetch("".concat(C,"/todos"),{method:"GET",headers:{"Content-Type":"application/json","x-user":"tyshko"}})},addFetch:function(e){return fetch("".concat(C,"/todos"),{method:"POST",headers:{"Content-Type":"application/json","x-user":"tyshko"},body:JSON.stringify(e)})},editFetch:function(e,t){return fetch("".concat(C,"/todos/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json","x-user":"tyshko"},body:JSON.stringify(e)})},removeFetch:function(e){return fetch("".concat(C,"/todos/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json","x-user":"tyshko"}})}}}),A={startFetching:function(){return{type:h.LIST_START_FETCHING}},stopFetching:function(){return{type:h.LIST_STOP_FETCHING}},setFetchingError:function(e){return{type:h.LIST_SET_FETCHING_ERROR,payload:e,error:!0}},fillList:function(e){return{type:h.LIST_FILL,payload:e}},getListFetch:function(){return function(){var e=Object(N.a)(k.a.mark((function e(t){var a,n,r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A.startFetching()),e.next=3,I.todos.getFetch();case 3:if(200!==(a=e.sent).status){e.next=12;break}return e.next=7,a.json();case 7:n=e.sent,r=n.data,t(A.fillList(r)),e.next=14;break;case 12:c={status:a.error},t(A.setFetchingError(c));case 14:t(A.stopFetching());case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},L=function(){return{type:T.GLOBALIZED_NEW_TASK}},y=function(e){return{type:T.GLOBALIZED_SELECT_TASK,payload:e}},D=function(){return{type:T.GLOBALIZED_HIDE_TASK}},j=function(){var e=Object(i.b)(),t=function(){var e=Object(i.b)();Object(n.useEffect)((function(){e(A.getListFetch())}),[e]);var t=Object(i.c)((function(e){return e.list})),a=t.data,r=t.isFetching,c=t.error;return{data:a,isFetching:r,error:c,receivedData:function(){if(!r&&a&&0!==a.length)return a}}}(),a=t.data,r=t.isFetching,c=t.error,s=t.receivedData,l=Object(i.c)((function(e){return e.globalized})),o=l.isShownBlankCard,u=l.isShownSelectedCard,d=l.filteredData;return{data:a,isFetching:r,error:c,receivedData:s,isShownBlankCard:o,handleNewTask:function(){e(L())},isShownSelectedCard:u,handleSelectItem:function(t){var n=a.filter((function(e){return e.hash===t})),r=Object(g.a)(n,1)[0];e(y(r))},filteredData:d}},w=a(67),R=a(119),K=a.n(R),G=(a(134),a(39)),H=a.n(G),x={addTask:function(e){return{type:d.TASK_ADD,payload:e}},editTask:function(e){return{type:d.TASK_EDIT,payload:e}},removeTask:function(){return{type:d.TASK_REMOVE}},startFetching:function(){return{type:d.TASK_START_FETCHING}},stopFetching:function(){return{type:d.TASK_STOP_FETCHING}},setFetchingError:function(e){return{type:d.TASK_SET_FETCHING_ERROR,payload:e,error:!0}},addTaskFetch:function(e){return function(){var t=Object(N.a)(k.a.mark((function t(a){var n,r,c,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(x.startFetching()),t.next=3,I.todos.addFetch(e);case 3:if(201!==(n=t.sent).status){t.next=12;break}return t.next=7,n.json();case 7:r=t.sent,c=r.data,a(x.addTask(c)),t.next=14;break;case 12:s={status:n.status},a(x.setFetchingError(s));case 14:a(x.stopFetching());case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},editTaskFetch:function(e,t){return function(){var a=Object(N.a)(k.a.mark((function a(n){var r,c,s,i;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(x.startFetching()),a.next=3,I.todos.editFetch(e,t);case 3:if(200!==(r=a.sent).status){a.next=12;break}return a.next=7,r.json();case 7:c=a.sent,s=c.data,n(x.editTask(s)),a.next=14;break;case 12:i={status:r.status},n(x.setFetchingError(i));case 14:n(x.stopFetching());case 15:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},removeTaskFetch:function(e){return function(){var t=Object(N.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(x.startFetching()),t.next=3,I.todos.removeFetch(e);case 3:204===(n=t.sent).status?a(x.removeTask()):(r={status:n.status},a(x.setFetchingError(r))),a(x.stopFetching());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},B={completed:!1,title:"",description:"",deadline:"",tag:"",checklist:[{title:"mockup",completed:!1}]},M=a(88),Z=M.a().shape({title:M.b().min(3,"Task title is too short").required("Task title field is required"),tag:M.b().required("Task tag field is required")}),P=[{name:"Sketch",className:"first"},{name:"Spotify",className:"second"},{name:"Dribble",className:"third"},{name:"Behance",className:"fourth"},{name:"UX",className:"fifth"}],V=function(e){var t=P.map((function(t,a){var n=H()({selected:t.name===e.formik.values.tag});return r.a.createElement("span",{name:"tag",key:a,className:"tag ".concat(t.className," ").concat(n),id:t.name,onClick:function(t){e.setFieldValue("tag",t.target.id)}},t.name)}));return r.a.createElement(r.a.Fragment,null,t)},z=function(){var e=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.globalized})),a=t.isShownSelectedCard,r=t.filteredData,c=r&&new Date(Date.parse(r.deadline)),s=Object(n.useState)(r?c:new Date((new Date).setHours(23,59,59,999))),l=Object(g.a)(s,2),o=l[0],u=l[1],d=Object(n.useState)(!!r&&r.completed),m=Object(g.a)(d,2),h=m[0],E=m[1],T=Object(w.c)({enableReinitialize:!0,initialValues:r||B,onSubmit:function(t){if(a){var n={completed:t.completed,title:t.title,description:t.description,deadline:t.deadline,tag:t.tag,checklist:[{title:t.checklist[0].title,completed:t.checklist[0].completed,hash:t.checklist[0].hash}]};e(x.editTaskFetch(n,t.hash))}else e(x.addTaskFetch(t));setTimeout((function(){e(A.getListFetch())}),300),e(D())},validationSchema:Z});Object(n.useEffect)((function(){return r?u(new Date(Date.parse(r.deadline))):void 0}),[r]),Object(n.useEffect)((function(){return r?E(r.completed):void 0}),[r]),T.values.deadline=o.toISOString(),T.values.completed=h;var f=H()({"button-complete-task":!0,completed:h}),S=T.setFieldValue;return{formik:T,startDate:o,handleCompleted:function(){E(!0!==h)},filteredData:r,isShownSelectedCard:a,handleStartDate:function(e){u(e)},buttonCompleted:f,setFieldValue:S,handleDeleteTask:function(t){t.preventDefault(),e(x.removeTaskFetch(T.values.hash)),e(A.getListFetch()),e(D())}}}(),t=e.formik,a=e.startDate,c=e.handleStartDate,s=e.handleCompleted,l=e.isShownSelectedCard,o=e.buttonCompleted,u=e.setFieldValue,d=e.handleDeleteTask;return r.a.createElement(w.b,null,r.a.createElement("div",{className:"task-card"},r.a.createElement(w.a,{onSubmit:t.handleSubmit,onReset:t.handleReset},r.a.createElement("div",{className:"head"},r.a.createElement("button",{className:o,type:"button",onClick:s},"Mark as complete"),l&&r.a.createElement("button",{name:"remove",className:"button-remove-task",onClick:d})),r.a.createElement("div",{className:"content"},r.a.createElement("input",{type:"text",placeholder:"Task title",className:"title",name:"title",onChange:t.handleChange,value:t.values.title}),r.a.createElement("div",{className:"deadline"},r.a.createElement("span",{className:"label"},"Due to"),r.a.createElement("span",{className:"date",name:"deadline",value:t.values.deadline},r.a.createElement(K.a,{selected:a,onChange:function(e){return c(e)},minDate:new Date,dateFormat:"MMMM d, yyyy"}))),r.a.createElement("div",{className:"description"},r.a.createElement("span",{className:"label"},"Description"),r.a.createElement("textarea",{className:"text",placeholder:"Describe your event",name:"description",onChange:t.handleChange,value:t.values.description})),r.a.createElement("div",{className:"checklist"},r.a.createElement("span",{className:"label"},"Checklist"),r.a.createElement("div",{className:"sub-tasks"},r.a.createElement("div",{className:"sub-task completed"},r.a.createElement("input",{type:"text",name:"checklist",onChange:t.handleChange,value:t.values.checklist[0].title})))),r.a.createElement("div",{className:"tags"},r.a.createElement(V,{setFieldValue:u,formik:t})),(t.errors.title||t.errors.tag)&&t.dirty&&r.a.createElement("div",{className:"errors"},r.a.createElement("p",{className:"errorMessage"},t.errors.title),r.a.createElement("p",{className:"errorMessage"},t.errors.tag)),r.a.createElement("div",{className:"form-controls"},r.a.createElement("button",{className:"button-reset-task",type:"reset"},"Reset"),r.a.createElement("button",{className:"button-save-task",type:"submit"},"Save"))))))},W=a(122),q=a.n(W),J=function(e){var t=e.data,a=e.isFetching,n=e.error,c=e.receivedData,s=e.handleSelectItem;if(n&&404===n.status)return r.a.createElement("p",null,"Not Found");if(n&&404!==n.status)return r.a.createElement("p",null,"Something went wrong");var i=a&&r.a.createElement("div",{className:"forecast"},r.a.createElement("p",{className:"message"},"Loading data from api")),l=c()&&t.map((function(e){var t=e.title,a=e.deadline,n=e.tag,c=e.hash,i=e.completed,l=P.filter((function(e){return e.name===n})),o=Object(g.a)(l,1)[0],u=q()(a).format("MMMM D, yyyy"),d=H()({task:!0,completed:i});return r.a.createElement("div",{className:d,key:c,onClick:function(){return s(c)}},r.a.createElement("span",{className:"title"},t),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"deadline"},u),r.a.createElement("span",{className:"tag ".concat(o.className)},n)))}));return c()?r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"tasks"},i,l)):r.a.createElement("div",{className:"list empty"})},U=function(){var e=j(),t=e.data,a=e.isFetching,n=e.error,c=e.receivedData,s=e.isShownBlankCard,i=e.handleNewTask,l=e.isShownSelectedCard,o=e.handleSelectItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",{className:"controls"},r.a.createElement("button",{className:"button-create-task",onClick:i},"New Task")),r.a.createElement("div",{className:"wrap"},r.a.createElement(J,{data:t,isFetching:a,error:n,receivedData:c,handleSelectItem:o}),l&&r.a.createElement(z,null),s&&r.a.createElement(z,null))),r.a.createElement("footer",null,r.a.createElement("span",null,"\xa9 2020 Lectrum LLC - All Rights Reserved.")))},X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{store:F},r.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.98581f6b.chunk.js.map