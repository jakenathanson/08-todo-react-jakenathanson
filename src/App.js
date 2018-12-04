import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

var styleb={width: '80%',
marginLeft: '10%',marginTop: '100px',marginRight: '10%'};

var right = {
  float: 'right',
  marginRight: '8px'
};

class App extends Component {
  constructor() {
      super()

  this.state = {
  todos: [],
  somethingElse: '',

}
this.addTodo = this.addTodo.bind(this);
this.onChange = this.onChange.bind(this);
this.delete = this.delete.bind(this);
this.update = this.update.bind(this);
this.sort = this.sort.bind(this);
this.sortB = this.sortB.bind(this);



      // stuff here
    }

    componentDidMount() {

var self = this;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var temp = JSON.parse(this.responseText);
      self.setState({todos: temp});
      console.log(self.state.todos);

  }
};
xhttp.open("GET", "https://api.kraigh.net/todos", true);
xhttp.setRequestHeader("x-api-key","c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230");
xhttp.send();




    }

update(event){
  var pass = event.target.id;
  var real = pass.substring(1);
  var self = this;
  var data4 = {
    "completed": true
}
  console.log(real);

// Initalize AJAX Request
var xhttp4 = new XMLHttpRequest();

// Response handler
xhttp4.onreadystatechange = function() {

  // Wait for readyState = 4 & 200 response
  if (this.readyState == 4 && this.status == 200) {



    var temp = self.state.todos;
    //console.log(temp);
     for(var i=0; i<temp.length; i++)
     {

         if(temp[i].id==real){
            var found = i;
            //console.log(found);
            temp[i].completed = true;
            self.setState({ todos: temp})

         }
     }




  } else if (this.readyState == 4) {

      // this.status !== 200, error from server
      //console.log(this.responseText);

  }
};
var http4link = "https://api.kraigh.net/todos/"+ real;
xhttp4.open("PUT", http4link, true);
xhttp4.setRequestHeader("Content-type", "application/json");
xhttp4.setRequestHeader("x-api-key", "c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230");
xhttp4.send(JSON.stringify(data4));

}




delete(event) {
  var self = this;
  var pass = event.target.id;
  var real = pass.substring(1);
  console.log(real);
  var xhttp3 = new XMLHttpRequest();

// Response handler
xhttp3.onreadystatechange = function() {

    // Wait for readyState = 4 & 200 response
    if (this.readyState == 4 && this.status == 200) {

      const remainingTodos = self.state.todos.filter((todo) => {
        //console.log(todo);
  // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
  if (todo.id !== real) {
    return todo;
  }
  });
  console.log(remainingTodos);
  self.setState({todos: remainingTodos});

        // parse JSON response
        //console.log(todo);

    } else if (this.readyState == 4) {

        // this.status !== 200, error from server
        console.log(this.responseText);

    }
};
var http3link = "https://api.kraigh.net/todos/"+ real;
xhttp3.open("DELETE", http3link, true);
xhttp3.setRequestHeader("Content-type", "application/json");
xhttp3.setRequestHeader("x-api-key", "c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230");
xhttp3.send();

}

onChange(event) {
  // Set the state to the value of the input
  this.setState({
    input: event.target.value
  });
}

addTodo(event) {
      // Handle new Todo form submit
      //this.state.input.reset();
      //
      const newTodoText = this.state.input;
      console.log(event.target);
      console.log(this.state.input);
      this.state.input='';
      event.preventDefault();
      console.log(newTodoText);
      var self = this;
      var xhttp2 = new XMLHttpRequest();
      var data = {
text: newTodoText
}

      xhttp2.onreadystatechange = function() {

// Wait for readyState = 4 & 200 response
if (this.readyState == 4 && this.status == 200) {

  // parse JSON response
  var todo = JSON.parse(this.responseText);
  //console.log(todo);

  self.setState({
     todos: [...self.state.todos, JSON.parse(this.responseText)]
   })

} else if (this.readyState == 4) {

  // this.status !== 200, error from server
  //console.log(this.responseText);

}
};

xhttp2.open("POST", "https://api.kraigh.net/todos", true);
xhttp2.setRequestHeader("Content-type", "application/json");
xhttp2.setRequestHeader("x-api-key", "c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230");
xhttp2.send(JSON.stringify(data));
    }

    sort(){
      var self = this;
      var temp = self.state.todos;
      //console.log(self.state.todos);
    temp.sort(function (a, b) {
  return parseFloat(b.created) - parseFloat(a.created);
});
  console.log(temp);
  self.state.todos=[];

  self.setState(self.state.todos = temp);
    }

    sortB(){
      var self = this;
      var temp = self.state.todos;
      //console.log(self.state.todos);
    temp.sort(function (a, b) {
  return parseFloat(a.created) - parseFloat(b.created);
});
  console.log(temp);
    self.state.todos=[];
    self.setState(self.state.todos = temp);
    }





  render() {
    return (


      //<NewTodo/>


<div class="card" style={styleb}>
<div class="card-header">
        CSE204 ToDo App
<div class="btn-group" style={right}>
  <button type="button" class="btn-outline-secondary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>
  <div class="dropdown-menu">
    <button type="button"  onClick={this.sort} class="btn">Created Date Ascend</button>
    <button type="button"  onClick={this.sortB} class="btn">Created Date Descend</button>

  </div>
</div>

      </div>
  <ul class="list-group list-group-flush" id="todoList">
  <NewTodo addTodo={this.addTodo} onChange={this.onChange} input={this.state.input}/ >

   {this.state.todos.map((todo) =>
     <Todo key={todo.id} id={todo.id} completed={todo.completed}
       text={todo.text} delete={this.delete} update={this.update} removeDeletedTodo={this.removeDeletedTodo}/>
   )}

  </ul>
</div>
    );
  }
}

export default App;
