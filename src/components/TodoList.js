import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
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
    const { todos, addTodo, toggleTodo, deleteTodo } = this.props;
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
        <button className="todo__button" onClick={(event) => deleteTodo()}>Deletar lista</button>
      </div>
    );
  }
}

const mapStateToProps = (todos) => ({ todos });
export default connect(mapStateToProps, actions)(TodoList);
