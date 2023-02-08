import {React} from 'react'

const Todo = ({text, handleRemove, id}) => {
    const remove = () => handleRemove(id)

    return <div>
        <p>{text}</p>
        <button onClick={remove}>X</button>
    </div>
}

export default Todo