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
      //const  [error, setError] = useState()

      const handleChange = ({target: {name, value}}) => {
            //console.log(name, value)
            setUser({...user, [name]: value})
      }

      const handleSubmit = async (e) => {
            e.preventDefault()
            console.log(user)
            //signup(user.email, user.password)

            try {
                  await signup(user.email, user.password)
                  //navigate("11_SocialNetwork/")
                  console.log("try")
            } catch (error) {
                  console.log(error)
            }
      }
      return(
      <div>

      
      <form onSubmit={handleSubmit}>
    
            <div>
                  <label>Ingresa tu correo</label>
                  <input type="email" name="email" id="email" placeholder="email@server.com" onChange={handleChange}/>
            </div>
            <div>
                  <label>Crea una contraseña</label>
                  <input type="password" name="password" id="password" placeholder="contraseña" onChange={handleChange} />
            </div>
            <button>Crear usuario</button>
      </form>
      </div>
      )
}

export  default Register