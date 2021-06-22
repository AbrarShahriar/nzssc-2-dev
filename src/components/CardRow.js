import React from 'react'
import './CardRow.css'
import NewsCard from './NewsCard'
import ArticleCard from './ArticleCard'

import ss from "../images/banner.png";
import ss1 from "../images/ss.jpg";
import BookCard from './BookCard';

function CardRow({ type }) {


    if(type === 'news') {
        return (
            <div className='cardrow'>
                {Array.from(new Array(4)).map((card, index) => (
                    <NewsCard 
                        title='Shamim e ki bollo!!'
                        img={ss1}
                        likes={32}
                        timestamp='1 hour ago'
                        delay={index}
                    />
                ))}
            </div>
        )
    } else if (type === 'article') {
        return (
            <div className='cardrow'>
                {Array.from(new Array(4)).map((card, index) => (
                    <ArticleCard 
                        title='Kheladhula sikhun Shamim theke 10ti upaye'
                        authorName='AbrarShahriar'
                        img={ss1}
                        likes={547}
                        timestamp='1 hour ago'
                        delay={index}
                    />
                ))}
            </div>
        )
    } else if (type === 'book') {
        return (
            <div className='cardrow'>
                {Array.from(new Array(4)).map((card, index) => (
                    <BookCard
                        authorName='AbrarShahriar'
                        title='Belly Dance 101'
                        writer='Mehedi Hasan Shamim'
                        img={ss1}
                        likes={547}
                        timestamp='1 hour ago'
                        delay={index}
                    />
                ))}
            </div>
        )
    } 
    

    return (
        <div className='cardrow'>
        
            {Array.from(new Array(4)).map((card, index) => (
                <NewsCard 
                    title='Shamim e ki bollo!!'
                    img={ss1}
                    likes={32}
                    timestamp='1 hour ago'
                    delay={index}
                />
            ))}
           
        </div>
    )
}

export default CardRow
