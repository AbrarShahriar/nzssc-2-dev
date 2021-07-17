import { Favorite, FavoriteBorder } from '@material-ui/icons'
import React from 'react'
import './NewsCard.css'
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'

function NewsCard({ title, img, likes, timestamp, delay, nid }) {
    return (
        <Fade bottom delay={delay*100}>
            <div className='newscard'>

                <div className="newscard__header">
                    {img && <img src={img} />}
                    <Link target='_blank' to={`/news&notices/${nid}`} className='read__btn'>Read</Link>
                </div>

                <div className="newscard__body">
                    <h2>{title}</h2>
                    <span>{timestamp}</span>
                </div>

                <div className="newscard__footer">
                    <div className="likes">
                        <FavoriteBorder />
                        <span>{likes}</span>
                    </div>
                    <Link className='mobile_read_btn' to={`/news&notices/${nid}`} target="_blank">Read</Link>
                </div>

            </div>
        </Fade>
    )
}

export default NewsCard
