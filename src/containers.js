import { connect } from 'react-redux';
import TodoListComponent from './components/TodoList';
import * as actions from './actions/actions';

const mapStateToProps = (todos) => ({ todos });

export const TodoList = connect(
  mapStateToProps,
  actions
)(TodoListComponent);
