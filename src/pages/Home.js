import React from 'react'
import CardRow from '../components/CardRow'
import Hero from '../components/Hero'
import Title from '../components/Title'
import './Home.css'
import { Announcement, Email, ExitToApp, Facebook, Group, LibraryBooksOutlined, MenuBook, Message } from '@material-ui/icons'
import ExploreBtn from '../components/ExploreBtn'


function Home() {
    return (
        <div className='home'>

            <Hero />
            
            <div className="home__content">
                <Title title='news & notices' Icon={Announcement} />
                <CardRow type='news'/>
                <ExploreBtn />


                <Title title='articles' Icon={LibraryBooksOutlined} />
                <CardRow type='article'/>
                <ExploreBtn />


                <Title title='book review' Icon={MenuBook} />
                <CardRow type='book'/>
                <ExploreBtn />


            </div>

            
        </div>
    )
}

export default Home
