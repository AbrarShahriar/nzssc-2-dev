import { Add, Email, VpnKeySharp } from "@material-ui/icons";
import React, { useState } from "react";
import './SignupModal.css'
import loginBg from '../images/login-full.png'
import { useStateValue } from "../StateProvider";


export function SignupModal({
  handleLoginModalState
}) {

    const [signupLoaded, setsignupLoaded] = useState(false)
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
                            <input type="email" name="email" placeholder='Email' />
                        </div>
                        <div className="form__input">
                            <VpnKeySharp />
                            <input type="password" name="password" placeholder='Password' />
                        </div>
                        <div className="form__input">
                            <VpnKeySharp />
                            <input type="password" name="confirm-password" placeholder='Confirm Password' />
                        </div>

                        <button onClick={handleSubmit}>Log in</button>
                    </div>
                        
                    </div>}

                <img onLoad={() => setsignupLoaded(true)} className='signup__bg' src={loginBg} alt="" />
            </form>
    </div>);
}
  