const uid = () => Math.random().toString(34).slice(2);

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}


export const deleteTodo = (payload) => {
  return {
    type: 'DELETE_TODO',
    payload: payload
  }
}
