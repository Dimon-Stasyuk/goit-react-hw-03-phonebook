(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),o=n(11),s=n(3),u=n(4),l=n(6),b=n(5),m=(n(16),n(9)),d=(n(17),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.checkName=function(t){return e.props.contacts.map((function(e){return e.name.toLowerCase()})).includes(t.toLowerCase())},e.onSubmit=function(t){var n=e.state.name;t.preventDefault(),e.checkName(n)?alert("".concat(n," is already in contacts.")):(e.props.onSubmit(e.state),e.reset())},e.reset=function(){e.setState({name:"",number:""})},e.handleInputChange=function(t){var n=t.target.name;e.setState(Object(m.a)({},n,t.target.value))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.onSubmit,t=this.handleInputChange,n=this.state,a=n.number,c=n.name;return Object(d.jsxs)("form",{action:"",onSubmit:e,children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{type:"text",name:"name",onChange:t,value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",onChange:t,value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{type:"submit",className:"btn",children:"Add contact"})]})}}]),n}(c.a.Component),j=h,f=(n(19),function(e){var t=e.value,n=e.onChange;return Object(d.jsx)("div",{className:"filter-container",children:Object(d.jsxs)("label",{className:"filter-lable",children:["Find contacts by name",Object(d.jsx)("input",{className:"filter-input",value:t,onChange:n,type:"text",name:"filter",required:!0})]})})}),p=(n(20),function(e){var t=e.contacts,n=e.removeContact;return Object(d.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(d.jsxs)("li",{children:[Object(d.jsxs)("span",{className:"name",children:[" ",t,":"]}),Object(d.jsxs)("span",{className:"tel",children:[" ",a]}),Object(d.jsx)("button",{type:"button",className:"contact-btn btn",onClick:function(){return n(c)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},c)}))})}),O=n(10),v=n.n(O),C=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleFilterChange=function(t){e.setState({filter:t.target.value})},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.addContact=function(t){var n=t.name,a=t.number,c={id:v.a.generate(),name:n,number:a};e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[c])}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.addContact,c=this.handleFilterChange,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Phoneboock"}),Object(d.jsx)(j,{onSubmit:a,contacts:this.state.contacts}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(f,{value:n,onChange:c}),Object(d.jsx)(p,{contacts:r,removeContact:this.removeContact})]})}}]),n}(c.a.Component),x=C;i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d5c0b944.chunk.js.map