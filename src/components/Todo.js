import React from 'react';

class Todo extends React.Component {
  renderItem() {
    const { todo } = this.props;
    if(todo.get('isDone')) {
      return <strike>{todo.get('text')}</strike>;
    } else {
      return <span>{todo.get('text')}</span>;
    }
  }

  render() {
    return this.renderItem();
  }
}

export default Todo;
