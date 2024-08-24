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

  const onSubmit = (data) => console.log(data);

  return (
    <>
    <div className="container" onSubmit={handleSubmit(onSubmit)}>
      <form action=''>
      <input
        placeholder='username'
        {...register("username", { required: {value: true, message: "required"}, minLength: {value: 3, message: "Min Length error"}, maxLength: {value: 3, message: "maxlength error"} })}
        type="text"
      />        
{errors.username && <div>{errors.username.message}</div>}
        <br/>
        <input placeholder='password' type="password" {...register("password")}/>
        <br/>
        <input type="submit" value="submit" />
      </form>
    </div>
    </>
  )
}

export default App
