(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"17ea":function(e,t,a){"use strict";a("bebb")},"1ead":function(e,t,a){},"48ac":function(e,t,a){},"757b":function(e,t,a){"use strict";a("f409")},a6d4:function(e,t,a){"use strict";a("1ead")},bebb:function(e,t,a){},e203:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app",attrs:{id:"App"}},[a("div",{staticClass:"app__content"},[a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-user"},[a("div",{staticClass:"profile-head"},[a("div",{staticClass:"profile-head__id"},[a("img",{staticClass:"profile-head__avatar",attrs:{src:"https://i.ibb.co/ryXm152/4.png",alt:""}}),a("div",[a("div",{staticClass:"profile-head__name"},[e._v(" "+e._s(e.user[0])+" ")]),a("div",{staticClass:"profile-head__mail"},[e._v(" "+e._s(e.user[1])+" ")])])]),a("div",{staticClass:"profile-head__options",on:{click:e.logout}},[a("i",{staticClass:"fas fa-sign-out-alt"})])])]),a("div",[a("div",{staticClass:"menu-main"},[a("div",{staticClass:"menu__item active",attrs:{id:"inbox"},on:{click:e.Inbox}},[e._m(0),a("span",{staticClass:"menu-main__pill pill"},[e._v(e._s(e.inboxArray.length))])]),a("div",{staticClass:"menu__item",attrs:{id:"sent"},on:{click:e.Sent}},[e._m(1),a("span",{staticClass:"menu-main__pill pill"},[e._v(e._s(e.sentArray.length))])]),a("div",{staticClass:"menu__item",attrs:{id:"drafts"},on:{click:e.Draft}},[e._m(2),a("span",{staticClass:"menu-main__pill pill"},[e._v(e._s(e.draftsArray.length))])]),a("div",{staticClass:"menu__item",attrs:{id:"trash"},on:{click:e.Trash}},[e._m(3),a("span",{staticClass:"menu-main__pill pill"},[e._v(e._s(e.trashArray.length))])]),a("div",{staticClass:"menu__item",attrs:{id:"contacts"},on:{click:e.contacts}},[e._m(4),a("span",{staticClass:"menu-main__pill pill"},[e._v(e._s(e.friends.length))])])])]),a("div",{staticClass:"menu__item-dark ",attrs:{title:"Dark Mode"}},[e._m(5),a("span",{staticClass:"menu-main__pill pill slideBtn"},[a("input",{attrs:{type:"checkbox",value:"None",id:"slideButton",name:"check",unchecked:""},on:{click:e.darkMode}}),a("label",{attrs:{for:"slideButton"}})])]),a("div",{directives:[{name:"onClick",rawName:"v-onClick",value:e.submitChoice,expression:"submitChoice"}],staticClass:"top-search fas fa-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search mails..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),a("div",[a("div",{staticClass:"dropdown",attrs:{id:"filter"}},[a("button",{staticClass:"dropbtn"},[e._v("Filters")]),a("div",{staticClass:"dropdown-content"},[a("a",{attrs:{id:"noFilter"},on:{click:function(t){return e.selectFilter("noFilter")}}},[e._v("None")]),a("a",{attrs:{id:"name",active:""},on:{click:function(t){return e.selectFilter("name")}}},[e._v("Name")]),a("a",{attrs:{id:"subject"},on:{click:function(t){return e.selectFilter("subject")}}},[e._v("Subject")]),a("a",{attrs:{id:"email"},on:{click:function(t){return e.selectFilter("email")}}},[e._v("E-mail")]),a("a",{attrs:{id:"date"},on:{click:function(t){return e.selectFilter("date")}}},[e._v("Date")]),a("a",{attrs:{id:"priority"},on:{click:function(t){return e.selectFilter("priority")}}},[e._v("Priority")]),a("a",{attrs:{id:"message"},on:{click:function(t){return e.selectFilter("message")}}},[e._v("Message")])])]),a("div",{staticClass:"dropdown",attrs:{id:"sort"}},[a("button",{staticClass:"dropbtn"},[e._v("Sort")]),a("div",{staticClass:"dropdown-content"},[a("a",{on:{click:function(t){return e.selectSort("noSort")}}},[e._v("None")]),a("a",{on:{click:function(t){return e.selectSort("name")}}},[e._v("Name")]),a("a",{on:{click:function(t){return e.selectSort("subject")}}},[e._v("Subject")]),a("a",{on:{click:function(t){return e.selectSort("email")}}},[e._v("E-mail")]),a("a",{on:{click:function(t){return e.selectSort("date")}}},[e._v("Date")]),a("a",{on:{click:function(t){return e.selectSort("priority")}}},[e._v("Priority")]),a("a",{on:{click:function(t){return e.selectSort("message")}}},[e._v("Message")])])])]),a("div",{staticClass:"new"},[a("button",{staticClass:"new__button new-mail__toggle",on:{click:e.newMail}},[a("i",{staticClass:"fas fa-plus"})]),a("div",{staticClass:"new-mail"},[a("div",{staticClass:"new-mail__top"},[e._m(6),a("i",{staticClass:"new-mail__close new-mail__toggle fas fa-times",on:{click:e.newMail}})]),a("div",{staticClass:"new-mail-exp"},[a("div",{staticClass:"new-mail-exp__item"},[a("div",{staticClass:"new-mail-exp__label"},[e._v("To")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Email,expression:"Email"}],staticClass:"new-mail-exp__input",attrs:{placeholder:"Enter email",type:"text"},domProps:{value:e.Email},on:{input:function(t){t.target.composing||(e.Email=t.target.value)}}})]),a("div",{staticClass:"new-mail-exp__item"},[a("div",{staticClass:"new-mail-exp__label"},[e._v("Object")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Subject,expression:"Subject"}],staticClass:"new-mail-exp__input",attrs:{placeholder:"Enter mail object",type:"text"},domProps:{value:e.Subject},on:{input:function(t){t.target.composing||(e.Subject=t.target.value)}}})])]),a("div",{staticClass:"new-mail__content"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Body,expression:"Body"}],staticClass:"new-mail__message",domProps:{value:e.Body},on:{input:function(t){t.target.composing||(e.Body=t.target.value)}}})]),a("div",{staticClass:"new-mail-foot"},[a("div",{staticClass:"new-mail-foot__insert"},[a("div",[a("input",{attrs:{type:"file"},on:{change:e.onFileSelected}})]),a("div",[a("label",{attrs:{for:"Pbox"}},[e._v("Priority "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.Priority,expression:"Priority",modifiers:{number:!0}}],attrs:{id:"Pbox",type:"number",min:"1",max:"5",step:"1"},domProps:{value:e.Priority},on:{input:function(t){t.target.composing||(e.Priority=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])]),a("div",{staticClass:"new-mail-foot__actions"},[a("button",{staticClass:"button button new-mail__toggle",on:{clcik:e.sendNewMessageToDraft}},[e._v("DRAFT")]),a("button",{staticClass:"button button--primary",on:{clcik:e.sendNewMessage}},[a("i",{staticClass:"fas fa-paper-plane"})])])])])])]),a("div",{staticClass:"mails"},[e.contactsSelected?a("div",{staticClass:"message-list scrollable"},[a("div",{staticClass:"scrollable__target"},e._l(e.filteredList,(function(t){return a("mail",{key:t.id,attrs:{id:t.id,name:t.name,subject:t.subject,email:t.email,date:t.date,priority:t.priority,message:t.message,attachments:t.attachments},on:{delete:e.deleteMail}})})),1)]):a("div",{staticClass:"message-list scrollable",attrs:{id:"hide"}},[a("div",{staticClass:"scrollable__target"},[a("new-contact",{on:{"add-contact":e.addContact}}),a("ul",e._l(e.friends,(function(t){return a("contacts-comp",{key:t.id,attrs:{id:t.id,name:t.name,"phone-number":t.phone,"email-address":t.email},on:{remove:e.deleteContact}})})),1)],1)])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"menu__icon fas fa-inbox"}),a("span",{staticClass:"menu__label"},[e._v("Inbox")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"menu__icon fas fa-paper-plane"}),a("span",{staticClass:"menu__label"},[e._v("Sent mail")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"menu__icon fas fa-pencil-alt"}),a("span",{staticClass:"menu__label"},[e._v("Drafts")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"menu__icon fas fa-trash-alt"}),a("span",{staticClass:"menu__label"},[e._v("Trash")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"menu__icon far fa-address-book"}),a("span",{staticClass:"menu__label"},[e._v(" Contacts")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"menu__icon far fa-moon"}),a("span",{staticClass:"menu__label"},[e._v("Dark Mode")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new-mail__title"},[a("span",[e._v("New message")])])}],n=a("a34a"),l=a.n(n),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("body",[a("div",{staticClass:"contact"},[a("div",[a("strong",[e._v(" Name: ")]),e._v(e._s(e.name))]),a("br"),a("div",[a("button",{staticClass:"fill btnContact",on:{click:e.toggleDetails}},[e._v(" "+e._s(e.detailsAreVisible?"Hide":"Show")+" Details ")]),a("button",{staticClass:"fill btnContact",on:{click:function(t){return e.$emit("remove",e.emailAddress)}}},[e._v(" remove ")])]),e.detailsAreVisible?a("ul",[a("br"),a("div",[a("strong",[e._v("Email:")]),e._v(e._s(e.emailAddress))])]):e._e()])])},c=[],o={props:["id","name","emailAddress"],emits:["remove"],data:function(){return{detailsAreVisible:!1}},methods:{toggleDetails:function(){this.detailsAreVisible=!this.detailsAreVisible},removeContact:function(){this.$emit("remove-contact",this.id)}}},m=o,d=(a("757b"),a("2877")),u=Object(d["a"])(m,r,c,!1,null,"735e279a",null),v=u.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message message--new "},[a("div",{staticClass:"message__actions"},[a("span",{staticClass:"menu-main__pill pill"},[e._v(e._s(e.priority))]),a("input",{attrs:{type:"button",id:"delete"}}),a("label",{staticClass:"message__icon ",attrs:{for:"delete"},on:{click:function(t){return e.$emit("delete",e.date)}}},[a("i",{staticClass:"message__icon fas fa-trash-alt"})])]),a("div",{staticClass:"message__content"},[a("div",{staticClass:"message__exp"},[a("div",[e._v("To: "+e._s(e.name))]),a("div",{staticClass:"date"},[e._v(e._s(e.date))])]),a("div",{staticClass:"message__exp"},[e._v("From: "+e._s(e.email))]),a("div",{staticClass:"message__title"},[e._v(e._s(e.subject))]),a("div",{staticClass:"buttons message__email"},[a("button",{staticClass:"fill",on:{click:e.toggleDetails}},[e._v(" "+e._s(e.detailsAreVisible?"Hide":"Show")+" Message ")])]),e.detailsAreVisible?a("div",[a("div",{staticClass:"message__expr"},[a("p",[e._v("« "+e._s(e.message)+" »")]),a("p",[e._v('Attachments: "'+e._s(e.attachments)+'"')])])]):e._e()])])},f=[],p={props:["id","name","email","subject","message","date","priority","attachments"],data:function(){return{detailsAreVisible:!1}},emits:["delete"],methods:{toggleDetails:function(){this.detailsAreVisible=!this.detailsAreVisible}}},h=p,g=(a("a6d4"),Object(d["a"])(h,_,f,!1,null,"221d0ba8",null)),b=g.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitData(t)}}},[a("div",{attrs:{calss:"form__div "}},[a("label",{staticClass:"label"},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredName,expression:"enteredName"}],staticClass:"input",attrs:{required:"",autofocus:"",type:"text"},domProps:{value:e.enteredName},on:{input:function(t){t.target.composing||(e.enteredName=t.target.value)}}})]),a("div",{attrs:{calss:"form__div "}},[a("label",{staticClass:"label"},[e._v("E-Mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredEmail,expression:"enteredEmail"}],staticClass:"input",attrs:{required:"",autofocus:"",type:"email"},domProps:{value:e.enteredEmail},on:{input:function(t){t.target.composing||(e.enteredEmail=t.target.value)}}})]),e._m(0)])},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{calss:"form__div "}},[a("button",{staticClass:"fill btn"},[e._v("Add Contact")])])}],w={emits:["add-contact"],data:function(){return{enteredName:"",enteredPhone:"",enteredEmail:""}},methods:{submitData:function(){this.$emit("add-contact",this.enteredName,this.enteredEmail)}}},x=w,E=(a("17ea"),Object(d["a"])(x,C,y,!1,null,null,null)),k=E.exports,S=a("bc3a"),F=a.n(S);function I(e,t,a,s,i,n,l){try{var r=e[n](l),c=r.value}catch(o){return void a(o)}r.done?t(c):Promise.resolve(c).then(s,i)}function B(e){return function(){var t=this,a=arguments;return new Promise((function(s,i){var n=e.apply(t,a);function l(e){I(n,s,i,l,r,"next",e)}function r(e){I(n,s,i,l,r,"throw",e)}l(void 0)}))}}var N={components:{Mail:b,NewContact:k,ContactsComp:v},name:"Secure",data:function(){return{emails:[],arrDisplay:[],inboxArray:[],sentArray:[],draftsArray:[],trashArray:[],modeVisible:!1,search:"",list:["Name","E-mail","Subject","Message","Date","Priority"],visible:!1,selectedFilter:"",selectedSort:"",FORS:0,contactsSelected:!1,friends:[],Email:"",Subject:"",Body:"",Priority:"",selectedFile:null,user:["Ahmed Akram","akramovic@fmail.com"],selectedFromMenu:"",arr:""}},mounted:function(){this.getUser(),this.contacts(),this.Trash(),this.Draft(),this.Sent(),this.Inbox(),this.selectedFilter="noFilter",this.selectedSort="noSort",this.arrDisplay=this.emails,this.contactsSelected=!0},computed:{filteredList:function(){var e=this;return this.emails.filter((function(t){if("name"===e.selectedFilter);else if("email"===e.selectedFilter);else if("subject"===e.selectedFilter);else{if("message"===e.selectedFilter)return e.arrDisplay=t.message.toLowerCase().includes(e.search.toLowerCase()),e.arrDisplay;if("date"===e.selectedFilter);else if("priority"===e.selectedFilter);else if("noFilter"===e.selectedFilter)return e.arrDisplay=t.message.toLowerCase().includes(e.search.toLowerCase()),e.arrDisplay}}))}},methods:{getUser:function(){var e=this;return B(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("test"),t.next=3,F.a.get("http://localhost:8085/api/user").then((function(t){return e.user=t.data}));case 3:console.log("test");case 4:case"end":return t.stop()}}),t)})))()},onFileSelected:function(e){this.selectedFile=e.target.files[0]},logout:function(){this.$router.push("/")},addContact:function(e,t){var a={name:e,email:t};this.friends.push(a)},deleteContact:function(e){this.friends=this.friends.filter((function(t){return t.email!==e}))},deleteMail:function(e){var t=this;return B(l.a.mark((function a(){return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.arr=[e,t.selectedFromMenu],console.log(t.selectedFromMenu);case 2:case"end":return a.stop()}}),a)})))()},darkMode:function(){var e=document.querySelector(".app");e.classList.toggle("dark-mode")},changeClass:function(e){var t=document.getElementById(e),a=["inbox","sent","trash","drafts"];t.className="menu__item active";for(var s=0;s<a.length;s++){var i=a[s];if(i!==e){var n=document.getElementById(a[s]);n.classList.remove("active")}}},newMail:function(){document.querySelector(".new-mail").classList.toggle("active"),document.querySelector(".new__button").classList.toggle("active")},Inbox:function(){var e=this;return B(l.a.mark((function t(){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selectedFromMenu="Inbox",a=document.getElementById("inbox"),a.className="menu__item active",document.getElementById("contacts").classList.remove("active"),document.getElementById("sent").classList.remove("active"),document.getElementById("trash").classList.remove("active"),document.getElementById("drafts").classList.remove("active"),e.contactsSelected=!0,t.next=10,F.a.get("http://localhost:8085/api/getIndex",{params:{folder:e.selectedFromMenu}}).then((function(t){return e.emails=t.data}));case 10:e.inboxArray=e.emails;case 11:case"end":return t.stop()}}),t)})))()},Sent:function(){var e=this;return B(l.a.mark((function t(){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selectedFromMenu="Sent",a=document.getElementById("sent"),a.className="menu__item active",document.getElementById("contacts").classList.remove("active"),document.getElementById("inbox").classList.remove("active"),document.getElementById("trash").classList.remove("active"),document.getElementById("drafts").classList.remove("active"),e.contactsSelected=!0,t.next=10,F.a.get("http://localhost:8085/api/getIndex",{params:{folder:e.selectedFromMenu}}).then((function(t){return e.emails=t.data}));case 10:e.sentArray=e.emails;case 11:case"end":return t.stop()}}),t)})))()},Draft:function(){var e=this;return B(l.a.mark((function t(){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selectedFromMenu="Draft",a=document.getElementById("drafts"),a.className="menu__item active",document.getElementById("contacts").classList.remove("active"),document.getElementById("sent").classList.remove("active"),document.getElementById("trash").classList.remove("active"),document.getElementById("inbox").classList.remove("active"),e.contactsSelected=!0,t.next=10,F.a.get("http://localhost:8085/api/getIndex",{params:{folder:e.selectedFromMenu}}).then((function(t){return e.emails=t.data}));case 10:e.draftsArray=e.emails;case 11:case"end":return t.stop()}}),t)})))()},Trash:function(){var e=this;return B(l.a.mark((function t(){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selectedFromMenu="Trash",a=document.getElementById("trash"),a.className="menu__item active",document.getElementById("contacts").classList.remove("active"),document.getElementById("sent").classList.remove("active"),document.getElementById("drafts").classList.remove("active"),document.getElementById("inbox").classList.remove("active"),e.contactsSelected=!0,t.next=10,F.a.get("http://localhost:8085/api/getIndex",{params:{folder:e.selectedFromMenu}}).then((function(t){return e.emails=t.data}));case 10:e.trashArray=e.emails;case 11:case"end":return t.stop()}}),t)})))()},selectFilter:function(e){this.FORS=0,this.selectedFilter=e,document.getElementById(e).className="clicked"},selectSort:function(e){this.FORS=1,this.selectedSort=e},sendNewMessage:function(){var e=this;return B(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("print"),e.arr=[e.ToEmail,e.ToPriority,e.body,e.subject],console.log(e.arr),t.next=5,F.a.get("http://localhost:8085/api/sendEmail",{params:{arr:e.arr+""}}).then((function(e){return console.log(e)}));case 5:case"end":return t.stop()}}),t)})))()},sendNewMessageToDraft:function(){},contacts:function(){this.selectedFromMenu="Contacts";var e=document.getElementById("contacts");e.className="menu__item active",document.getElementById("inbox").classList.remove("active"),document.getElementById("sent").classList.remove("active"),document.getElementById("trash").classList.remove("active"),document.getElementById("drafts").classList.remove("active"),this.contactsSelected=!1,this.friends=[{name:"Manuel Lorenz",email:"manuel@localhost.com"},{name:"Julie Jones",email:"julie@localhost.com"},{name:"Ahmed Akram",email:"manuel@localhost.com"},{name:"Rana Ayman",email:"julie@localhost.com"},{name:"Marwan",email:"manuel@localhost.com"},{name:"Fares",email:"julie@localhost.com"}]}}},A=N,M=(a("ff06"),Object(d["a"])(A,s,i,!1,null,"3227c22c",null));t["default"]=M.exports},f409:function(e,t,a){},ff06:function(e,t,a){"use strict";a("48ac")}}]);
//# sourceMappingURL=about.7d13c28a.js.map