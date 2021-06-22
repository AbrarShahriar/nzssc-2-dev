import { Favorite, FavoriteBorder, MoreVert } from '@material-ui/icons'
import React from 'react'
import './BookCard.css'
import Fade from "react-reveal/Fade";
import { Avatar, IconButton, MenuList } from '@material-ui/core';

function BookCard({ title, img, likes, timestamp, delay, authorName, authorImg, writer }) {
    return (
        <Fade bottom delay={delay*100}>
            <div className='bookcard'>

                <div className="bookcard__header">
                    <div className="author__info">
                        {authorImg 
                        ? 
                            <Avatar src={authorImg} />
                        :
                            <Avatar>{authorName[0]}</Avatar>
                        }
                        <span>{authorName}</span>

                        <div className='article__action'>
                            <MoreVert />
                        </div>
                    </div>
                    {img && <img src={img} />}
                </div>

                <div className="bookcard__body">
                    <h2>{title}</h2>
                    <p>Writer: <span>{writer}</span></p>
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
