import React from 'react'
import CardRow from '../components/CardRow'
import Title from '../components/Title'
import './Home.css'
import { Announcement, GroupOutlined, LibraryBooksOutlined, MenuBook } from '@material-ui/icons'
import bg from '../images/hero-bg1.png'
import ExploreBtn from '../components/ExploreBtn'
import Atom from '../components/svg/Atom'
import Biological from '../components/svg/Biological'
import Biology from '../components/svg/Biology'
import Chemistry from '../components/svg/Chemistry'
import DNA from '../components/svg/DNA'
import Mitochondria from '../components/svg/Mitochondria'
import Relativity from '../components/svg/Relativity'
import Hero1 from '../components/Hero1'
import Members from '../components/Members'
import { useStateValue } from '../StateProvider'
import Loader from '../components/Loader'

const currentYear = new Date().getFullYear()

const Home = React.memo(() => {
    const [{ loading }] = useStateValue()
    return (
        <div className='home'>

            <Hero1 />
            
            <div className="home__content__pos">
                <img src={bg} alt="" className="hero1__bottom"/>
                <div className="home__content">
                    <Atom svgClass='icon icon-1'/>
                    <Biological svgClass='icon icon-2' />
                    <Biology svgClass='icon icon-3'/>
                    <Chemistry svgClass='icon icon-4'/>
                    <DNA svgClass='icon icon-5'/>
                    <Mitochondria svgClass='icon icon-6'/>
                    <Relativity svgClass='icon icon-7'/>

                    <Title title='news & notices' Icon={Announcement} />
                    {loading.news 
                    ? 
                        <div className="loading__home">
                            <Loader />
                        </div>
                    :
                        <>
                            <CardRow type='news'/>
                            <ExploreBtn title='See More' to='/news&notices'/>
                        </>
                    }


                    <Title title='articles' Icon={LibraryBooksOutlined} />
                    {loading.articles 
                    ?  
                        <div className="loading__home">
                            <Loader />
                        </div>
                    :
                        <>
                            <CardRow type='article'/>
                            <ExploreBtn to='/articles' />
                        </>
                    }

                    <Title title='book review' Icon={MenuBook} />
                    {loading.bookReview 
                    ? 
                        <div className="loading__home">
                            <Loader />
                        </div> 
                    :
                        <>
                            <CardRow type='book'/>
                            <ExploreBtn to='/bookreview' />
                        </>
                    }


                    <Title title='members' Icon={GroupOutlined} year={currentYear}/>
                    <Members />

                </div>

            </div>
            
        </div>
    )
}) 

export default Home
