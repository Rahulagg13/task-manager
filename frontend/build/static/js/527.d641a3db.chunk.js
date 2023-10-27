"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[527],{7332:function(e,t,n){var a=n(7689),r=n(184);t.Z=function(){var e=(0,a.s0)();return(0,r.jsx)("button",{onClick:function(){e(-1)},className:"mt-12 px-12  w-12 text-lg font-bold",children:"Back"})}},1527:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(4165),r=n(5861),s=n(2791),c=n(7689),i=n(757),u=n(7419),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function p(e){var t=new Date(e);return"".concat(l[t.getMonth()]," ").concat(t.getDate(),",").concat(t.getFullYear()," ").concat(o[t.getDay()])}var d=n(8348),f=n(7332),h=n(184),k=function(){var e=(0,c.UO)().id,t=(0,i.Z)(),n=t.getTaskValue,o=t.getTask,l=t.deleteTask,k=n.title,x=n.description,v=n.dueDate,m=n.priority;(0,c.s0)();(0,s.useEffect)((function(){o(e)}),[]);var Z=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:d.Am.success("Task Deleted!!!");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Z,{}),(0,h.jsxs)("section",{className:"h-full w-full flex flex-col ",children:[(0,h.jsxs)("div",{className:"  px-8 py-12 flex justify-between ",children:[(0,h.jsxs)("h1",{className:"font-bold text-5xl uppercase tracking-wider",children:[k," "]}),(0,h.jsxs)("div",{className:"flex justify-center items-center space-x-6",children:[(0,h.jsxs)("p",{className:" tracking-wide font-semibold",children:["Due date:- ",p(v)]}),(0,h.jsx)("h1",{className:"italic",children:m})]})]}),(0,h.jsx)("div",{className:"font-base px-8 text-xl tracking-wide min-h-[450px]  ",children:x}),(0,h.jsx)("div",{className:"  space-x-8 flex justify-center px-12 mt-7",children:(0,h.jsx)(u.Z,{className:"bg-red-500 ",onClick:Z,children:"Delete"})})]})]})}},7419:function(e,t,n){var a=n(184);t.Z=function(e){var t=e.className,n=e.children,r=e.type,s=e.onClick;return(0,a.jsx)("button",{type:"".concat(r||"button"),className:"px-4 py-2 ".concat(t," text-white font-medium rounded-xl cursor-pointer hover:scale-110"),onClick:s||void 0,children:n})}},757:function(e,t,n){var a=n(4165),r=n(5861),s=n(9439),c=n(2791),i=n(4673),u=n(1243);t.Z=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),n=t[0],o=t[1],l=(0,c.useState)({}),p=(0,s.Z)(l,2),d=p[0],f=p[1],h=(0,i.Z)(["jwt"]),k=(0,s.Z)(h,1)[0],x=(0,c.useState)(!1),v=(0,s.Z)(x,2),m=v[0],Z=v[1],y=(0,c.useState)({}),w=(0,s.Z)(y,2),g=w[0],b=w[1];function j(){return(j=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,u.Z.get("https://task-manger-backend-kc5q.onrender.com/api/v1/tasks/alltask",{headers:{Authorization:"Bearer ".concat(k.jwt)}});case 4:t=e.sent,o(t.data.tasks),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0);case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}function N(){return(N=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,u.Z.post("https://task-manger-backend-kc5q.onrender.com/api/v1/tasks/newtask",t,{headers:{Authorization:"Bearer ".concat(k.jwt),"Content-Type":"application/json"}});case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(e.t0);case 10:return e.prev=10,Z(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}function T(){return(T=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,u.Z.get("https://task-manger-backend-kc5q.onrender.com/api/v1/"+"tasks/".concat(t),{headers:{Authorization:"Bearer ".concat(k.jwt)}});case 4:n=e.sent,f(n.data.task),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0);case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}function A(){return(A=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,u.Z.delete("https://task-manger-backend-kc5q.onrender.com/api/v1/"+"tasks/".concat(t),{headers:{Authorization:"Bearer ".concat(k.jwt)}});case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(e.t0);case 10:return e.prev=10,Z(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}return{getAlltask:function(){return j.apply(this,arguments)},alltask:n,cookies:k,createTask:function(e){return N.apply(this,arguments)},isLoading:m,error:g,getTask:function(e){return T.apply(this,arguments)},getTaskValue:d,deleteTask:function(e){return A.apply(this,arguments)}}}}}]);
//# sourceMappingURL=527.d641a3db.chunk.js.map