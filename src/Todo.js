import React, { Component } from 'react';
//import './App.css';

class Todo extends Component {
  render() {
    return (
  <li class="list-group-item" id="47f62be0-ed42-11e8-8ea6-493f4624a2aa">HI<span><input type="button" style="float:right;" class="btn btn-outline-danger btn-sm" value="Delete" onclick="Delete('47f62be0-ed42-11e8-8ea6-493f4624a2aa')"></input></span><span><input type="button" style="float:right; margin-right: 4px;" class="btn btn-outline-success btn-sm" value="Check" onclick="Update('47f62be0-ed42-11e8-8ea6-493f4624a2aa')"></input></span></li>
    );
  }
}

export default Todo;
