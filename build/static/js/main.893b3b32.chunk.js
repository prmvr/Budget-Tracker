(this.webpackJsonpbudget=this.webpackJsonpbudget||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),i=n.n(s),r=(n(14),n(2)),o=n(9),l=n(5),j=n(0),u=function(e,t){switch(t.type){case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:[t.payload].concat(Object(o.a)(e.transactions))});case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});default:return e}},d={transactions:[{id:1,title:"Burger",category:"Food",date:"",amount:-20},{id:2,title:"Burger",category:"Food",date:"",amount:-20},{id:3,title:"Burger",category:"Food",date:"",amount:-20},{id:4,title:"Salary",category:"Payment Recieved",date:"",amount:2700}]},b=Object(c.createContext)(d),O=function(e){var t=e.children,n=Object(c.useReducer)(u,d),a=Object(r.a)(n,2),s=a[0],i=a[1];return Object(j.jsx)(b.Provider,{value:{transactions:s.transactions,deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){i({type:"ADD_TRANSACTION",payload:e})}},children:t})},h=function(){var e=Object(c.useContext)(b).transactions,t=[],n=[],a=[],s=e.map((function(e){t.push(e.amount),e.amount>0?a.push(e.amount):n.push(e.amount)}));return s=t.reduce((function(e,t){return e+t}),0).toFixed(2),n=n.reduce((function(e,t){return e-t}),0).toFixed(2),a=a.reduce((function(e,t){return e+t}),0).toFixed(2),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("h1",{className:"income ".concat(s>0?"green":"red"),children:["$",s]}),Object(j.jsxs)("p",{className:"desc-cash",children:["| ",Object(j.jsxs)("span",{className:"income",children:["Income: $",a]})," | ",Object(j.jsxs)("span",{className:"spending",children:["Spending:$",n]})," | "]})]})})},x=function(){return Object(j.jsx)("div",{className:"container"})},m=function(e){var t=e.transaction,n=t.amount,a=t.title,s=t.category,i=t.id,r=function(e){var t=e.toFixed(2);if((t=t.toString().split("")).includes("-")){t.shift(),t.unshift("- $")}else t.unshift("$");return t}(n),o=Object(c.useContext)(b).deleteTransaction;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"transaction",children:[Object(j.jsx)("button",{className:"hide-btn delete",onClick:function(e){return o(i)},children:"Delete"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"title",children:a}),Object(j.jsxs)("p",{className:"desc",children:["Category:",Object(j.jsx)("span",{className:"tag",children:s})]})]}),Object(j.jsxs)("div",{className:"cash-change-holder ".concat(n>0?"green":"red"),children:[Object(j.jsx)("h5",{className:"amount",children:n>0?"Deposit":"Withdrawl"}),Object(j.jsx)("h1",{className:"amount small",children:r})]})]})})},p=function(){var e=Object(c.useContext)(b).transactions;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"budget-title",children:"Transaction History"}),Object(j.jsx)("ul",{children:e.map((function(e){return Object(j.jsx)(m,{transaction:e},e.id)}))})]})},v=n(4),g=n(18),f=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)("Misc."),d=Object(r.a)(u,2),O=d[0],h=d[1],x=Object(c.useState)(Date.now()),m=Object(r.a)(x,2),p=m[0],f=(m[1],Object(c.useContext)(b).addTransaction);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"budget-title",children:"Add a Transaction"}),Object(j.jsxs)("form",{action:"",onSubmit:function(e){var t;e.preventDefault();var c=(t={id:Object(g.a)(),title:n,category:O,date:p},Object(v.a)(t,"date",p),Object(v.a)(t,"amount",+o),t);f(c),a(""),l("")},className:"entry-form",children:[Object(j.jsx)("p",{className:"explain-text",children:"Title the expense/deposit"}),Object(j.jsx)("input",{type:"text",name:"title",placeholder:"Enter a title",value:n,onChange:function(e){return a(e.target.value)},required:!0}),Object(j.jsxs)("select",{name:"category",id:"category",value:O,onChange:function(e){h(e.target.value)},children:[Object(j.jsx)("option",{value:"Food",children:"Food"}),Object(j.jsx)("option",{value:"Payment Recieved",children:"Deposit"}),Object(j.jsx)("option",{value:"Entertainment",children:"Entertainment"}),Object(j.jsx)("option",{value:"Grocery",children:"Grocery"}),Object(j.jsx)("option",{value:"Travel",children:"Travel"}),Object(j.jsx)("option",{value:"Supplies",children:"Supplies"}),Object(j.jsx)("option",{value:"Textbooks/Books",children:"Textbooks/Books"}),Object(j.jsx)("option",{value:"Transportation",children:"Transportation"}),Object(j.jsx)("option",{value:"Education",children:"Education"}),Object(j.jsx)("option",{value:"Home",children:"Home Improvement"}),Object(j.jsx)("option",{value:"Gaming",children:"Gaming"}),Object(j.jsx)("option",{value:"cosmetics",children:"Cosmetics"}),Object(j.jsx)("option",{value:"Recurring Transaction",children:"Reccuring Transaction \u2b50"}),Object(j.jsx)("option",{value:"Misc.",children:"Misc."})]}),Object(j.jsx)("p",{className:"explain-text",children:"Enter an amount use a ( - ) sign for an expense"}),Object(j.jsx)("input",{type:"number",step:"any",name:"amount",placeholder:"Enter an Amount (USD)",value:o,onChange:function(e){l(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})]})};function N(){return Object(j.jsxs)(O,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(x,{}),Object(j.jsx)(p,{}),Object(j.jsx)(f,{})]})}i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.893b3b32.chunk.js.map