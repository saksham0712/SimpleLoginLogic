import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Home from '../Home/Home'
// import { Redirect } from "react-router-dom"

// import express from 'express'
// const app = express();
// app.use(express.json());

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

const [LoggedIn, setLoggedIn] = useState(false)

      const onSubmit = (dataAya) => {
        console.log("before",dataAya.email, dataAya.phone);
           axios.get('http://localhost:3001/restaurants')
            .then(response => {
           const resdata = response.data.data;
           const findres = resdata.find(item => item.email == dataAya.email && item.phone == dataAya.phone)
           console.log(findres)
           if(findres !== undefined){
            alert('logged inn')
            setLoggedIn(true);
           }else (
            alert('galt password hun thodi kher nahi')
           )
            })
            .catch(err => {
              console.log(err);
            
          });
          if(LoggedIn){
            return <Home />
          }
       
    }
      
  return (
    <div>
   <form onSubmit={handleSubmit(onSubmit)}>
   <input defaultValue="email" {...register("email", { required: true })} />
   <input defaultValue="phone" {...register("phone", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" placeholder='Login' />
   </form>

    </div>
  )
}

export default Login
