import { Add, Email, VpnKeySharp } from "@material-ui/icons";
import React, { useState } from "react";
import './LoginModal.css'
import loginBg from '../images/login-full.png'
import { useStateValue } from "../StateProvider";


export function LoginModal({
  handleLoginModalState
}) {

    const [loginLoaded, setloginLoaded] = useState(false)
    const [{ user }, dispatch] = useStateValue()


    const handleSubmit = e => {
        e.preventDefault()
        e.stopPropagation()

        dispatch({
            type: 'SET_USER',
            user: 'Abrar'
        })

        handleLoginModalState()
    }

    return (
        <div className="login__modal">
            <form>
                {loginLoaded && <div className="main">
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
                        
                    </div>}

                <img onLoad={() => setloginLoaded(true)} className='login__bg' src={loginBg} alt="" />
            </form>
    </div>);
}
  