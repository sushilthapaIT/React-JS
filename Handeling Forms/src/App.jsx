import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"

function App() {

  const { 
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  return (
    <>
    <div className="container">
      <form action=''>
        <input type="text" value="username" id=''/>
        <input type="password" name="password" id="" />
        <input type="submit" value="submit" />
      </form>
    </div>
    </>
  )
}

export default App
