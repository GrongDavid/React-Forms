import {React, useState} from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        let newTodo = {...todo}
        setTodos(todos => [...todos, newTodo])
    }
    
    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
      }
    
    console.log(todos)
    const listTodos = todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.todo}
          handleRemove={remove}
        />
      ))
    
      return (
        <div>
          <NewTodoForm addTodo={addTodo} />
          {listTodos}
        </div>
      )
    
}

export default TodoList