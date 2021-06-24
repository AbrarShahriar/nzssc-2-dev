import React from 'react'
import CardRow from '../components/CardRow'
import Hero from '../components/Hero'
import Title from '../components/Title'
import './Home.css'
import { Announcement, Email, ExitToApp, Facebook, Group, LibraryBooksOutlined, MenuBook, Message } from '@material-ui/icons'
import ExploreBtn from '../components/ExploreBtn'
import Atom from '../components/svg/Atom'
import Biological from '../components/svg/Biological'
import Biology from '../components/svg/Biology'
import Chemistry from '../components/svg/Chemistry'
import DNA from '../components/svg/DNA'
import Mitochondria from '../components/svg/Mitochondria'
import Relativity from '../components/svg/Relativity'
import Hero1 from '../components/Hero1'

function Home() {
    return (
        <div className='home'>

            

            {/* <Hero /> */}
            <Hero1 />
            
            <div className="home__content__pos">
                <div className="home__content">
                    <Atom svgClass='icon icon-1'/>
                    <Biological svgClass='icon icon-2' />
                    <Biology svgClass='icon icon-3'/>
                    <Chemistry svgClass='icon icon-4'/>
                    <DNA svgClass='icon icon-5'/>
                    <Mitochondria svgClass='icon icon-6'/>
                    <Relativity svgClass='icon icon-7'/>

                    <Title title='news & notices' Icon={Announcement} />
                    <CardRow type='news'/>
                    <ExploreBtn title='See More'/>


                    <Title title='articles' Icon={LibraryBooksOutlined} />
                    <CardRow type='article'/>
                    <ExploreBtn />


                    <Title title='book review' Icon={MenuBook} />
                    <CardRow type='book'/>
                    <ExploreBtn />


                </div>
            </div>

            
        </div>
    )
}

export default Home
