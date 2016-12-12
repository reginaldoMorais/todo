import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  onSubmit(event, addTodo) {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  }

  render() {
    const { todos, addTodo, toggleTodo } = this.props;
    return (
      <div className='todo'>
        <input type='text' placeholder='Adicionar tarefas' onKeyDown={(event) => this.onSubmit(event,  addTodo)} />
        <ul className='todo__list'>
          {todos.map(todo => (
            <li key={todo.get('id')} className='todo__item' onClick={(event) => toggleTodo(todo.get('id'))}>
              <Todo todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
