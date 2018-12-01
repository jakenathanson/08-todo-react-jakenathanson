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

class NewTodo extends Component {
  render() {
    return (
      <span>
      <div class="card-body" style={styles3} >
      <form>
      <input type="text" class="form-control" id="note" placeholder="New ToDo" style={styles}></input>
      <input type="submit" style={styles1}></input>
      <button type="button" style={styles2} class="btn btn-outline-primary">Add</button>
      </form>
      </div>
      </span>
    );
  }
}

export default NewTodo;
