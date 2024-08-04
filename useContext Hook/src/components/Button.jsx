import React from 'react'
import Component from './Component'

const Button = ({count}) => {
  return (
    <div>
      <button>I am button<span><Component count={count}/></span></button>
    </div>
  )
}

export default Button
