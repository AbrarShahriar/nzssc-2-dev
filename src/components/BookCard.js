import { Favorite, FavoriteBorder, MoreVert } from '@material-ui/icons'
import React from 'react'
import './BookCard.css'
import Fade from "react-reveal/Fade";
import { IconButton, MenuList } from '@material-ui/core';
import Avatar from './Avatar';

function BookCard({ title, img, likes, timestamp, delay, authorName, authorImg, writer }) {
    return (
        <Fade bottom delay={delay*100}>
            <div className='bookcard'>

                <div className="bookcard__header">
                    {img && <img src={img} />}
                    <button className='read__btn'>Read</button>
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
                    <button>Read</button>
                </div>

            </div>
        </Fade>
    )
}

export default BookCard
