import { Add, Email, VpnKeySharp } from "@material-ui/icons";
import React, { useState } from "react";
import './SignupModal.css'
import loginBg from '../images/login-full.png'
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase'

export function SignupModal({
  handleLoginModalState
}) {

    const [signupLoaded, setsignupLoaded] = useState(false)
    const [{ user }, dispatch] = useStateValue()

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
                handleLoginModalState()
            })
            .catch(err => alert(err.message))
        } else {
            alert('Passwords dont match')
        }

    }

    return (
        <div className="signup__modal">
            <form>
                {signupLoaded && <div className="main">
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
                            <input onChange={handleUserCredChange} value={userCred.password} type="password" name="password" placeholder='Password' />
                        </div>
                        <div className="form__input">
                            <VpnKeySharp />
                            <input onChange={handleUserCredChange} value={userCred.confirmPassword} type="password" name="confirmPassword" placeholder='Confirm Password' />
                        </div>

                        <button onClick={handleSubmit}>Sign Up</button>
                    </div>
                        
                    </div>}

                <img onLoad={() => setsignupLoaded(true)} className='signup__bg' src={loginBg} alt="" />
            </form>
    </div>);
}
  