import { Email, VpnKeySharp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import  { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'

function Register() {
    const [{ user }, dispatch] = useStateValue()
    const history = useHistory()
    
    useEffect(() => {
        user && history.push('/')
    }, [user])

    const [userCred, setUserCred] = useState({
        email: '',
        password: '',
        confirmPassword: ''
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

        if(userCred.password === userCred.confirmPassword) {
            auth.createUserWithEmailAndPassword(userCred.email, userCred.password)
            .then(userData => {
                dispatch({
                    type: 'SET_USER',
                    user: userData.user
                })
            })
            .catch(err => alert(err.message))
        } else {
            alert('Passwords dont match')
        }

    }

    return (
        <div className="register">
            <form>
                <div className="main">
                    <h1>Sign Up</h1>

                    <div className="form__inputs">
                        <div className="name">
                            <div className="form__input__name">
                                <input type="text" name="firstname" placeholder='First Name' />
                            </div>
                            <div className="form__input__name">
                                <input type="text" name="lastname" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className="form__input">
                            <Email />
                            <input onChange={handleUserCredChange} value={userCred.email} type="email" name="email" placeholder='Email' />
                        </div>
                        <div className="form__input">
                            <VpnKeySharp />
                            <input onChange={handleUserCredChange} value={userCred.password}  type="password" name="password" placeholder='Password' />
                        </div>
                        <div className="form__input">
                            <VpnKeySharp />
                            <input onChange={handleUserCredChange} value={userCred.confirmPassword} type="password" name="confirm-password" placeholder='Confirm Password' />
                        </div>

                        <button onClick={handleSubmit}>Sign Up</button>
                    </div>
                    <Link className='auth__link' to='/login'>Already have an account?</Link>
                        
                    </div>
            </form>
    </div>
    )
}

export default Register
