import {React} from 'react'

const Box = ({id, color, width, height, handleRemove,}) => {
    const remove = () => handleRemove(id)

    return <div style={{backgroundColor: `${color}`, width: `${width}rem`, height: `${height}rem`, margin: '5px'}}>
        <button onClick={remove}>X</button>
    </div>
}

export default Box