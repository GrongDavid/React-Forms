import {React, useState} from 'react'
import {v4 as uuid} from 'uuid'

const NewBoxForm = ({addBox}) => {
    const initialState = {
        color: '',
        width: '',
        height: ''
    }

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) =>{
        e.preventDefault()
        addBox({...formData, id: uuid()})
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
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="color"
            value={formData.color}
            id="color"
          />
        </div>
        <button id="newBoxButton">Add a new box!</button>
      </form>

    )
}

export default NewBoxForm