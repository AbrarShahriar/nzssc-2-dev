import React, { useEffect, useRef } from 'react'
import './Hero.css'
import Atom from './svg/Atom'
import Biological from './svg/Biological'
import Biology from './svg/Biology'
import Chemistry from './svg/Chemistry'
import DNA from './svg/DNA'
import Mitochondria from './svg/Mitochondria'
import Relativity from './svg/Relativity'
// import ill from '../images/Laboratory-cuate.svg'
// import ill from '../images/Outer space-bro.svg'
import ill from '../images/Science-bro.svg'
import { useMediaQuery } from '@material-ui/core';
import logo from '../images/banner.png'

function Hero() {
    const mobile = useMediaQuery(`(max-width: 600px)`)

    return (
        <div className='hero'>
            <Atom svgClass='icon icon-1'/>
            <Biological svgClass='icon icon-2' />
            <Biology svgClass='icon icon-3'/>
            <Chemistry svgClass='icon icon-4'/>
            <DNA svgClass='icon icon-5'/>
            <Mitochondria svgClass='icon icon-6'/>
            <Relativity svgClass='icon icon-7'/>

            <div className="hero_title">
                <div className="hero_banner slideLeft">
                    <img id='logo'  src={logo} alt=""/>
                </div>
                <p className='subtitle fadeUp'>
                    Conserve resources, <br/>
                    sustain life, <br/>
                    educate humans to be <br/>technologically progressive.
                </p>
            </div>

            {!mobile && <img className='zoom' src={ill} alt=""/>}
        </div>
    )
}

export default Hero
