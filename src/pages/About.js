import React from 'react'
import './About.css'
import logo from '../images/logo.png'

function About() {
    return (
        <div className='about'>
            <div className="about__content">
                <div className='wave' />
                <div className="logo__withText">
                    <img src={logo} alt=""/>
                    <div className="banner__title">
                        <h1>Noakhali Zilla School</h1>
                        <h2>Science Club</h2>
                    </div>
                </div>

                <div className="about__body">
                    <p>
                        <strong>Noakhali Zilla School Science Club</strong>, also known as <strong>NZSSC</strong>, the most promising, versatile and distinguished <span className="keypoints">co-curricular activities-club</span> of Noakhali Zilla School, holding the noble moto <span className="keypoints">"Awaken the spirit of science"</span>. It began it's inception in 2020 to promote the zeal of science among the students. It is the pioneer of science clubs in the Sub-continent.

                        <br/>
                        <br/>

                        The mission of this club is to make students <span className="keypoints">develop their interest in the field of science </span>  
                        and also provide them a <span className="keypoints">platform to showcase talent</span> as budding scientists and research of the future and also to awaken the spirit of science.

                        <br/>
                        <br/>

                        NZSSC also features <span className="keypoints">breaking news about the latest dicoveries in science, health, the environment, technology and more</span> - from leading universitites, scientific journals nad research organizations.

                        <br/>
                        <br/>

                        We hope you enjoy NZSSC and make it one of your regularly visited websites. Let's start the journey towards future together!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
