import { useState } from 'react'
import './App.css'
import {set, useForm} from "react-hook-form"

function App() {

  const { 
    register,
    handleSubmit,
    watch,
    setError,
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
    // await delay(2) //simulating network delay

    let r = await fetch("http://localhost:3000/")
    let res = await r.text()
    console.log(data, res);

    // if(data.username !== "sushi"){
    //   setError("myform", {message: "Credentials Error"})
    // }
    // if(data.username === "username"){
    //   setError("blocked", {message: "This user is blocked from our site!!!"})
    // }
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
      <input
        placeholder='password'
        {...register("password", { required: {value: true, message: "required"}, minLength: {value: 3, message: "Min Length error"}, maxLength: {value: 8, message: "maxlength error"} })}
        type="password"
      />    
{errors.password && <div>{errors.password.message}</div>}     
      <br/>
        <input disabled={isSubmitting} type="submit" value="submit" />
        {errors.myform && <div>{errors.myform.message}</div>}
        {errors.blocked && <div>{errors.blocked.message}</div>}

      </form>
    </div>
    </>
  )
}

export default App
