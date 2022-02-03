import * as React from 'react';
import {useState} from "react";
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"

const Login = () =>{

      const[user, setUser] = useState({
            email: "",
            password: ""
      })

      const { login } = useAuth()
      const navigate = useNavigate()
      const  [error, setError] = useState()

      const handleChange = ({target: {name, value}}) => {
            //console.log(name, value)
            setUser({...user, [name]: value})
      }

      const handleSubmit = async (e) => {
            e.preventDefault()
            setError("")
            try {
                  await login(user.email, user.password)
                  navigate("/")
            } catch (error) {
                  setError(error.message)
            }
      }

      return(
      <div>
      {error && <p>{error}</p>}      
      <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Ingresa tu correo</label>
                  <input type="email" name="email" id="email" placeholder="email@server.com" onChange={handleChange}/>

                  <label htmlFor="password">Ingresa tu contraseña</label>
                  <input type="password" name="password" id="password" placeholder="******" onChange={handleChange} />
            <button>Login</button>
      </form>
      </div>
      )
}

export  default Login