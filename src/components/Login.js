import React from 'react'
import { FaUser,FaLock } from "react-icons/fa";
import "./login.css";

const Login = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username'></input>
                <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password'></input>
                <FaLock className='icon'/>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />Remember me </label>
                <a href='#'>Forget password</a>
            </div>

            <button type="submit">Login</button>
            <div className='register-link'>
              <p>Don't have an account <a href='#'>Register</a></p>
            </div>
        </form>

    </div>
  )
}

export default Login;