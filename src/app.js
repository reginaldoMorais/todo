import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import TodoList from './components/TodoList';
import { List, Map } from 'immutable';

const initialState = List([]);
const store = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
);
