import { Email, VpnKeySharp } from '@material-ui/icons'
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className="login">
            <form>
                <div className="main">
                    <h1>Log in</h1>

                    <div className="form__inputs">
                        <div className="form__input">
                            <Email />
                            <input type="email" name="email" placeholder='Email' />
                        </div>
                        <div className="form__input">
                            <VpnKeySharp />
                            <input type="password" name="password" placeholder='Password' />
                        </div>

                        <button onClick={handleSubmit}>Log in</button>
                    </div>
                    <Link className='auth__link' to='/register'>Don't have an account?</Link>
                    </div>
            </form>
    </div>
    )
}

export default Login
