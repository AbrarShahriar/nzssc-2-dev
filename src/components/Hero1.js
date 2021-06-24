import React from 'react'
import './Hero1.css'
import bg from '../images/hero-bg1.png'
import ill from '../images/spacebro1.png'
import logo from '../images/logo.png'

function Hero1() {
    return (
        <div className='hero1'>
            <img className='hero1__bg' src={bg} alt=""/>
            <div className="logo__withText">
                <img src={logo} alt=""/>
                <div className="banner__title">
                    <h1>Noakhali Zilla School</h1>
                    <h2>Science Club</h2>
                </div>
            </div>
            <img className='spacebro' src={ill} alt=""/>
        </div>
    )
}

export default Hero1
