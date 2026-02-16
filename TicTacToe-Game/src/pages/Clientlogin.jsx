import React from 'react'
import '../css/Login.css'

function Clientlogin() {
  return (
    <div className='login-container'>
    <div className='card'>
        <h1>LOGIN</h1>
        <form>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' placeholder='Username' required/>
            <br/>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' placeholder='Password' required/>
            <br/>
            <button type='submit'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Clientlogin