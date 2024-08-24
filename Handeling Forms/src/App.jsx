import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"

function App() {

  const { 
    register,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting},
  } = useForm()


  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  }  

  const onSubmit = async (data) => {
    await delay(4) //simulating network delay
    console.log(data);
  };

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
    <div className="container">
      <form action='' onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder='username'
        {...register("username", { required: {value: true, message: "required"}, minLength: {value: 3, message: "Min Length error"}, maxLength: {value: 8, message: "maxlength error"} })}
        type="text"
      />        
{errors.username && <div>{errors.username.message}</div>}
        <br/>
        <input placeholder='password' type="password" {...register("password")}/>
        <br/>
        <input disabled={isSubmitting} type="submit" value="submit" />
      </form>
    </div>
    </>
  )
}

export default App
