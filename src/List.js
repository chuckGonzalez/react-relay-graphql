import React, { Component } from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;