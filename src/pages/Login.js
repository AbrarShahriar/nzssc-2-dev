import { Email, VpnKeySharp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import  { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {
    const [{ user }, dispatch] = useStateValue()
    const history = useHistory()
    
    useEffect(() => {
        user && history.push('/')
    }, [user])

    const [userCred, setUserCred] = useState({
        email: '',
        password: ''
    })

    const handleUserCredChange = e => {
        setUserCred({
            ...userCred,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        e.stopPropagation()

        auth.signInWithEmailAndPassword(userCred.email, userCred.password)
        .then(userData => {
            dispatch({
                type: 'SET_USER',
                user: userData.user
            })
        })
        .catch(err => alert(err.message))
    }
    
    return (
        <div className="login">
            <form>
                <div className="main">
                    <h1>Log in</h1>

                    <div className="form__inputs">
                        <div className="form__input">
                            <Email />
                            <input onChange={handleUserCredChange} value={userCred.email} type="email" name="email" placeholder='Email' />
                        </div>
                        <div className="form__input">
                            <VpnKeySharp />
                            <input onChange={handleUserCredChange} value={userCred.password}  type="password" name="password" placeholder='Password' />
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
