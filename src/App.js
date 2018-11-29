import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      <div class="card" style="width: 100%;">
  <ul class="list-group list-group-flush" id="todoList">
   <Todo />
  </ul>
</div>
    );
  }
}

export default App;
