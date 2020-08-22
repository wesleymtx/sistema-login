import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("Matheus@email.com")
    const [senha, setSenha] = useState("12345678")


    const handleSubmit = event => {
        axios.post('http://localhost:8080/v1/api/auth', { "email": email, "password": senha })
          .then(resp => { const {data} = resp
            if(data){
                localStorage.setItem('app-token', data)
                window.location.href='http://localhost:3000/'

            }
        } )
          .catch(resp=>console.log(resp))

        event.preventDefault()
      }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text"/><br/>
                <label>Senha: </label>
                <input onChange={(e)=>setSenha(e.target.value)} type="password"/><br/>
                <input type="submit"/>
            </form>
        </div>
    ) 
}

export default Login;
