import { Announcement } from '@material-ui/icons'
import React from 'react'
import CardRow from '../components/CardRow'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'
import Title from '../components/Title'
import './Home.css'

function Home() {
    return (
        <div className='home'>

            <Hero />
            
            <div className="home__content">
                <Title title='news' Icon={Announcement} />

                <CardRow />
            </div>

            
        </div>
    )
}

export default Home
