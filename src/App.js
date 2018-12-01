import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

var styleb={width: '80%',
marginLeft: '10%',marginTop: '100px',marginRight: '10%'};

class App extends Component {
  render() {
    return (


      //<NewTodo/>


<div class="card" style={styleb}>
<div class="card-header">
        CSE204 ToDo App

      </div>
  <ul class="list-group list-group-flush" id="todoList">
  <NewTodo/ >
   <Todo />
  </ul>
</div>
    );
  }
}

export default App;
