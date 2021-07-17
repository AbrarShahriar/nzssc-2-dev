import { Email, VpnKeySharp } from "@material-ui/icons";
import React, { useState } from "react";
import './LoginModal.css'
import loginBg from '../images/login-full.png'
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase'

export function LoginModal({
  handleLoginModalState
}) {

    const [loginLoaded, setloginLoaded] = useState(false)
    const [state, dispatch] = useStateValue()

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
            handleLoginModalState()
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className="login__modal">
            <form>
                {loginLoaded && <div className="main">
                    <h1>Log in</h1>

                    <div className="form__inputs">
                        <div className="form__input">
                            <Email />
                            <input onChange={handleUserCredChange} value={userCred.email} type="email" name="email" placeholder='Email' />
                        </div>
                        <div className="form__input">
                            <VpnKeySharp />
                            <input onChange={handleUserCredChange} value={userCred.password} type="password" name="password" placeholder='Password' />
                        </div>

                        <button onClick={handleSubmit}>Log in</button>
                    </div>
                        
                    </div>}

                <img onLoad={() => setloginLoaded(true)} className='login__bg' src={loginBg} alt="" />
            </form>
    </div>);
}
  