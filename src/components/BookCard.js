import { Favorite, FavoriteBorder, MoreVert } from '@material-ui/icons'
import React from 'react'
import './BookCard.css'
import Fade from "react-reveal/Fade";
import Avatar from './Avatar';
import { Link } from 'react-router-dom'


function BookCard({ title, img, likes, timestamp, delay, authorName, authorImg, bid }) {
    return (
        <Fade bottom delay={delay*100}>
            <div className='bookcard'>

                <div className="bookcard__header">
                    {img && <img src={img} />}
                    <Link target='_blank' to={`/bookreview/${bid}`} className='read__btn'>Read</Link>
                </div>

                <div className="bookcard__body">
                    <h2>{title}</h2>
                    <div className="author__info">
                        <Avatar 
                            authorImg={authorImg}
                            authorName={authorName}
                        />
                        <span>{authorName}</span>

                        <div className='article__action'>
                            <MoreVert />
                        </div>
                    </div>
                    <span>{timestamp}</span>
                </div>

                <div className="bookcard__footer">
                    <div className="likes">
                        <FavoriteBorder />
                        <span>{likes}</span>
                    </div>
                    <Link className='mobile_read_btn' target='_blank' to={`/bookreview/${bid}`}>Read</Link>
                </div>

            </div>
        </Fade>
    )
}

export default BookCard
