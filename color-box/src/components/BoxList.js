import {React, useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    const addBox = (box) => {
        let newBox = {...box}
        setBoxes(boxes => [...boxes, newBox])
    }
    
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
      }
    
    console.log(boxes)
    const listBoxes = boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          handleRemove={remove}
          color={box.color}
        />
      ))
    
      return (
        <div>
          <NewBoxForm addBox={addBox} />
          {listBoxes}
        </div>
      )
    
}

export default BoxList