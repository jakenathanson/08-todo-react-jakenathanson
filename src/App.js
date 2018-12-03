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



       //const newTodoText = this.state.input;
       //this.state.input = '';
      // Ajax Call
      //this.setState({...this.state.todos, "k"});
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
   <Todo />
  </ul>
</div>
    );
  }
}

export default App;
