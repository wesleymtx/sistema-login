import React, { useState } from 'react'
import axios from 'axios';
import './index.css'


const Register = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const handleSubmit = event => {
        axios.post('http://localhost:8080/v1/api/user', {
            "firstName": name,
            "lastName": lastName,
            "email": email,
            "password": senha
        })
        .then((e)=>console.log(e))
        event.preventDefault()
    }
    return <>
     <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input onChange={e=>setName(e.target.value)} type="text"/>
            <label>Last Name</label>
            <input onChange={e=>setLastName(e.target.value)} type="text"/>
            <label>Email</label>
            <input onChange={e=>setEmail(e.target.value)} type="text"/>
            <label>Senha</label>
            <input onChange={e=>setSenha(e.target.value)} type="password"/>
            <input type="submit" value="Sign Up"/>
        </form>
    </>
}

export default Register;