import React, { Component } from 'react';
//import './App.css';
var styles = {
  float: 'right',
};
class Todo extends Component {
  render() {
    var iscomplete = this.props.completed;
    if(iscomplete==false)
    {
      var complete = {};
      var styles1 = {
        float: 'right',
        marginRight: '4px',
      };
  } else {
      complete = {
        textDecoration: "line-through",
        color: "#28a745"
      }
      var styles1 = {
        display: "none"
      };

    }
    return (
  <li class="list-group-item" style={complete} id={this.props.id}>
  {this.props.text}
  <span><input type="button" style={styles} class="btn btn-outline-danger btn-sm" id={"D" + this.props.id} onClick={this.props.delete} value="Delete" ></input></span>
  <span><input type="button" style={styles1} class="btn btn-outline-success btn-sm" id={"U" + this.props.id} onClick={this.props.update} value="Check"></input></span>
  </li>
    );
  }
}

export default Todo;
