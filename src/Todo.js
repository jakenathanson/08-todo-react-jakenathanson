import React, { Component } from 'react';
//import './App.css';

var styles = {
  float: 'right',
};
var styles1 = {
  float: 'right',
  marginRight: '4px',
};

class Todo extends Component {
  render() {
    return (
  <li class="list-group-item">
  Todo
  <span><input type="button" style={styles} class="btn btn-outline-danger btn-sm" value="Delete" ></input></span>
  <span><input type="button" style={styles1} class="btn btn-outline-success btn-sm" value="Check"></input></span>
  </li>
    );
  }
}

export default Todo;
