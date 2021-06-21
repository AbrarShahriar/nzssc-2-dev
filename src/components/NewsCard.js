import { Favorite, FavoriteBorder } from '@material-ui/icons'
import React from 'react'
import './NewsCard.css'
import Fade from "react-reveal/Fade";

function NewsCard({ title, img, likes, timestamp, delay }) {
    return (
        <Fade bottom delay={delay*100}>
            <div className='newscard'>

                <div className="newscard__header">
                    {img && <img src={img} />}
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
                    <button>Read More</button>
                </div>

            </div>
        </Fade>
    )
}

export default NewsCard
