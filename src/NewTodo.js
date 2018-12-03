import React, { Component } from 'react';
//import './App.css';

var styles = {
  float: 'left',
  width:'78%',
  marginRight:'2%'
};
var styles1 = {
  position: 'absolute',
  left: '-9999px',
};
var styles2 = {
  float: 'right',
  width: '20%',
};
var styles3 = {
  marginBottom: '30px',
};
//onSubmit={this.props.addTodo} onChange={this.props.onChange} input={this.state.input}
//onClick={this.props.addTodo}
class NewTodo extends Component {
  render() {
    return (
      <span>
      <div class="card-body" style={styles3} >
      <form onSubmit={this.props.addTodo}>
      <input type="text" onChange={this.props.onChange} value={this.props.input} class="form-control" id="note" placeholder="New ToDo" style={styles}></input>
      <input type="submit" style={styles1}></input>
      <button onClick={this.props.addTodo} type="button" style={styles2} class="btn btn-outline-primary">Add</button>
      </form>
      </div>
      </span>
    );
  }
}

export default NewTodo;
