(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(17)},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),o=a(8),i=a.n(o),r=a(9),d=a(2),c=a(3),l=a(6),p=a(4),u=a(5),h=a(1),b=(a(15),{float:"right"}),f=function(t){function e(){return Object(d.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){if(0==this.props.completed)var t={},e={float:"right",marginRight:"4px"};else{t={textDecoration:"line-through",color:"#28a745"};e={display:"none"}}return n.a.createElement("li",{class:"list-group-item",style:t,id:this.props.id},this.props.text,n.a.createElement("span",null,n.a.createElement("input",{type:"button",style:b,class:"btn btn-outline-danger btn-sm",id:"D"+this.props.id,onClick:this.props.delete,value:"Delete"})),n.a.createElement("span",null,n.a.createElement("input",{type:"button",style:e,class:"btn btn-outline-success btn-sm",id:"U"+this.props.id,onClick:this.props.update,value:"Check"})))}}]),e}(s.Component),g={float:"left",width:"78%",marginRight:"2%"},y={position:"absolute",left:"-9999px"},m={float:"right",width:"20%"},v={marginBottom:"30px"},O=function(t){function e(){return Object(d.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("span",null,n.a.createElement("div",{class:"card-body",style:v},n.a.createElement("form",{onSubmit:this.props.addTodo},n.a.createElement("input",{type:"text",onChange:this.props.onChange,value:this.props.input,class:"form-control",id:"note",placeholder:"New ToDo",style:g}),n.a.createElement("input",{type:"submit",style:y}),n.a.createElement("button",{onClick:this.props.addTodo,type:"button",style:m,class:"btn btn-outline-primary"},"Add"))))}}]),e}(s.Component),j={width:"80%",marginLeft:"10%",marginTop:"100px",marginRight:"10%"},E={float:"right",marginRight:"8px"},k=function(t){function e(){var t;return Object(d.a)(this,e),(t=Object(l.a)(this,Object(p.a)(e).call(this))).state={todos:[],somethingElse:""},t.addTodo=t.addTodo.bind(Object(h.a)(Object(h.a)(t))),t.onChange=t.onChange.bind(Object(h.a)(Object(h.a)(t))),t.delete=t.delete.bind(Object(h.a)(Object(h.a)(t))),t.update=t.update.bind(Object(h.a)(Object(h.a)(t))),t.sort=t.sort.bind(Object(h.a)(Object(h.a)(t))),t.sortB=t.sortB.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);t.setState({todos:e}),console.log(t.state.todos)}},e.open("GET","https://api.kraigh.net/todos",!0),e.setRequestHeader("x-api-key","c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230"),e.send()}},{key:"update",value:function(t){var e=t.target.id.substring(1),a=this;console.log(e);var s=new XMLHttpRequest;s.onreadystatechange=function(){if(4==this.readyState&&200==this.status){for(var t=a.state.todos,s=0;s<t.length;s++)if(t[s].id==e){t[s].completed=!0,a.setState({todos:t})}}else this.readyState};var n="https://api.kraigh.net/todos/"+e;s.open("PUT",n,!0),s.setRequestHeader("Content-type","application/json"),s.setRequestHeader("x-api-key","c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230"),s.send(JSON.stringify({completed:!0}))}},{key:"delete",value:function(t){var e=this,a=t.target.id.substring(1);console.log(a);var s=new XMLHttpRequest;s.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=e.state.todos.filter(function(t){if(t.id!==a)return t});console.log(t),e.setState({todos:t})}else 4==this.readyState&&console.log(this.responseText)};var n="https://api.kraigh.net/todos/"+a;s.open("DELETE",n,!0),s.setRequestHeader("Content-type","application/json"),s.setRequestHeader("x-api-key","c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230"),s.send()}},{key:"onChange",value:function(t){this.setState({input:t.target.value})}},{key:"addTodo",value:function(t){var e=this.state.input;console.log(t.target),console.log(this.state.input),this.state.input="",t.preventDefault(),console.log(e);var a=this,s=new XMLHttpRequest,n={text:e};s.onreadystatechange=function(){if(4==this.readyState&&200==this.status){JSON.parse(this.responseText);a.setState({todos:Object(r.a)(a.state.todos).concat([JSON.parse(this.responseText)])})}else this.readyState},s.open("POST","https://api.kraigh.net/todos",!0),s.setRequestHeader("Content-type","application/json"),s.setRequestHeader("x-api-key","c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230"),s.send(JSON.stringify(n))}},{key:"sort",value:function(){var t=this.state.todos;t.sort(function(t,e){return parseFloat(e.created)-parseFloat(t.created)}),console.log(t),this.state.todos=[],this.setState(this.state.todos=t)}},{key:"sortB",value:function(){var t=this.state.todos;t.sort(function(t,e){return parseFloat(t.created)-parseFloat(e.created)}),console.log(t),this.state.todos=[],this.setState(this.state.todos=t)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{class:"card",style:j},n.a.createElement("div",{class:"card-header"},"CSE204 ToDo App",n.a.createElement("div",{class:"btn-group",style:E},n.a.createElement("button",{type:"button",class:"btn-outline-secondary btn-sm dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort By"),n.a.createElement("div",{class:"dropdown-menu"},n.a.createElement("button",{type:"button",onClick:this.sort,class:"btn"},"Created Date Ascend"),n.a.createElement("button",{type:"button",onClick:this.sortB,class:"btn"},"Created Date Descend")))),n.a.createElement("ul",{class:"list-group list-group-flush",id:"todoList"},n.a.createElement(O,{addTodo:this.addTodo,onChange:this.onChange,input:this.state.input}),this.state.todos.map(function(e){return n.a.createElement(f,{key:e.id,id:e.id,completed:e.completed,text:e.text,delete:t.delete,update:t.update,removeDeletedTodo:t.removeDeletedTodo})})))}}]),e}(s.Component);i.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.82f8fcea.chunk.js.map