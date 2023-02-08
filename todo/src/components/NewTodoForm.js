import {React, useState} from 'react'
import {v4 as uuid} from 'uuid'

const NewTodoForm = ({addTodo}) => {
    const initialState = {
        todo: ''
    }

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTodo({...formData, id: uuid()})
        setFormData(initialState)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo">New Todo</label>
          <input
            onChange={handleChange}
            type="text"
            name="todo"
            value={formData.todo}
            id="todo"
          />
        </div>
        <button id="newTodoButton">Add a new todo item</button>
      </form>

    )
}

export default NewTodoForm