import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

var styleb={width: '80%',
marginLeft: '10%',marginTop: '100px',marginRight: '10%'};

class App extends Component {
  constructor() {
      super()

  this.state = {
  todos: [],
  somethingElse: '',

}
this.addTodo = this.addTodo.bind(this);
this.onChange = this.onChange.bind(this);

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
  console.log(todo);

  self.setState({
     todos: [...self.state.todos, JSON.parse(this.responseText)]
   })

} else if (this.readyState == 4) {

  // this.status !== 200, error from server
  console.log(this.responseText);

}
};

xhttp2.open("POST", "https://api.kraigh.net/todos", true);
xhttp2.setRequestHeader("Content-type", "application/json");
xhttp2.setRequestHeader("x-api-key", "c5419f366b3a56b4e7a461d12362410c9a9f83f45e77ae1ce916ebe9b3db0230");
xhttp2.send(JSON.stringify(data));
    }


  render() {
    return (


      //<NewTodo/>


<div class="card" style={styleb}>
<div class="card-header">
        CSE204 ToDo App

      </div>
  <ul class="list-group list-group-flush" id="todoList">
  <NewTodo addTodo={this.addTodo} onChange={this.onChange} input={this.state.input}/ >

   {this.state.todos.map((todo) =>
     <Todo key={todo.id} id={todo.id} completed={todo.completed}
       text={todo.text} removeDeletedTodo={this.removeDeletedTodo}/>
   )}

  </ul>
</div>
    );
  }
}

export default App;
