import React, {useContext} from 'react'
import { counterContext } from '../context/context'

const Component = () => {
    const value = useContext(counterContext);
  return (
    <div>
      {value.counter}
    </div>
  )
}

export default Component
