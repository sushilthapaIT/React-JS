import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={() => getAdjective()}>Click me</button>
    </div>
  )
}

export default memo(Navbar)
