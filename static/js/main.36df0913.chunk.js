(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){e.exports=a(47)},29:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},47:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(15),i=a.n(r),o=(a(29),a(6)),l=a(7),c=a(5),u=a(9),m=a(8),d=(a(30),a(18),a(31),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onDragOver=function(e){e.preventDefault(),n.setState({draggedOver:e.target.value})},n.onDragStart=function(e,t){n.setState({draggedNow:t})},n.onDrop=function(e){var t=n.state.tasks.slice(),a=t.indexOf(n.state.draggedOver),s=t.indexOf(n.state.draggedNow);t.splice(s,1),t.splice(a,0,n.state.draggedNow),n.setState({tasks:t})},n.state={tasks:"",draggedOver:"",draggedNow:""},n}return Object(l.a)(a,[{key:"initiateState",value:function(){this.setState({tasks:this.props.value})}},{key:"render",value:function(){var e=this,t=[];return this.props.value.forEach((function(a){t.push(s.a.createElement("div",{key:a,onDragStart:function(t){return e.onDragStart(t,a)},draggable:!0},a))})),s.a.createElement("div",{onDrop:function(t){return e.onDrop(t)},onDragOver:function(t){return e.onDragOver(t)}},t)}}]),a}(n.Component)),h=(n.Component,a(20)),p=a(22),g=a.n(p),f=h.initializeApp({apiKey:"AIzaSyAUFQI0bXJ8J_7o0A-ocl_eWdQqW6RQs9Q",authDomain:"bucketlist-2f389.firebaseapp.com",databaseURL:"https://bucketlist-2f389.firebaseio.com",projectId:"bucketlist-2f389",storageBucket:"bucketlist-2f389.appspot.com",messagingSenderId:"131212765579",appId:"1:131212765579:web:a92c20e2ceef8b157aa78e",measurementId:"G-PE4B6RV988"}),v=f.database(),b=(g.a.createClass(f.database()),a(23)),k=a(16),E=function(e){var t=Object(n.useState)({}),a=Object(k.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(""),l=Object(k.a)(o,2),c=l[0],u=l[1],m=e.username;return Object(n.useEffect)((function(){v.ref().on("value",(function(e){i(Object(b.a)({},e.val())),console.log(e.val())}))}),[]),s.a.createElement("div",{className:"User-list"},s.a.createElement("div",null,s.a.createElement("input",{type:"text",value:c,onChange:function(e){u(e.target.value)}}),s.a.createElement("button",{className:"Add-Button",onClick:function(){return""!=(e=c).trim()&&v.ref("Details").child(m).child("tasks").push(e),void u("");var e}},"Add"),s.a.createElement("button",{className:"Reset-Button",onClick:function(){window.confirm("Empty Your Bucket ?")&&(v.ref("Details").child(m).child("tasks").set({title:" "}),u(""))}},"Reset")),s.a.createElement("div",null,Object.keys(r).map((function(e){return Object.keys(r[e][m].tasks).map((function(t){return""!=r[e][m].tasks[t].trim()?s.a.createElement("div",null,s.a.createElement("button",{className:"Reset-Button",onClick:function(){window.confirm("Confirm Delete")&&function(e){v.ref("Details").child(m).child("tasks").child(e).remove()}(t)}},"Delete")," ",r[e][m].tasks[t]):""}))}))),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("button",{className:"Log-Out-Button",onClick:function(){f.auth().signOut()}},"Log Out")))},O=a(13),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).login=n.login.bind(Object(c.a)(n)),n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.signup=n.signup.bind(Object(c.a)(n)),n.state={email:"",password:""},n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).catch((function(e){alert(e)}))}},{key:"signup",value:function(e){var t=this;e.preventDefault(),f.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){alert("You Have Been Successfully Registered"),v.ref("Details").child(t.state.email.replace("@","").replace(".","")).child("username").set(t.state.email),v.ref("Details").child(t.state.email.replace("@","").replace(".","")).child("tasks/title").set("")})).then((function(e){console.log(e)})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App-header"},s.a.createElement("div",null,s.a.createElement("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/263/bucket_1faa3.png",srcset:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/263/bucket_1faa3.png 2x",alt:"Bucket on Google Android 11.0",width:"120",height:"120"})),s.a.createElement("text",null,"Let's Start Bucket-Listing !!"),s.a.createElement("div",null,s.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),s.a.createElement("br",null),s.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",onClick:this.login,className:"Log-In-Button"},"Login"),s.a.createElement("button",{onClick:this.signup,style:{marginLeft:10},className:"Register-Button"},"Sign Up")))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).authListener=n.authListener.bind(Object(c.a)(n)),n.state={userprop:[],username:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;f.auth().onAuthStateChanged((function(t){console.log(t),t?(e.setState({userprop:t,username:t.email}),localStorage.setItem("user",t.uid)):(e.setState({userprop:null}),localStorage.removeItem("user"))}))}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.userprop?s.a.createElement(E,{username:this.state.username.replace("@","").replace(".","")}):s.a.createElement(w,null))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.36df0913.chunk.js.map