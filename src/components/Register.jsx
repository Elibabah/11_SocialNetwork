import * as React from 'react';
import {useState} from "react";
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"

const Register = () =>{

      const[user, setUser] = useState({
            email: "",
            password: ""
      })

      const { signup } = useAuth()
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
                  await signup(user.email, user.password)
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

                  <label htmlFor="password">Crea una contraseña</label>
                  <input type="password" name="password" id="password" placeholder="******" onChange={handleChange} />
            <button>Registrarse</button>
      </form>
      </div>
      )
}

export  default Register