import React from 'react'
import './CardRow.css'
import NewsCard from './NewsCard'

import ss from "../images/banner.png";
import ss1 from "../images/ss.jpg";

function CardRow() {
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
