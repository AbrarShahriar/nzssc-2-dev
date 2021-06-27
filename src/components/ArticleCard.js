import { Favorite, FavoriteBorder, MoreVert } from '@material-ui/icons'
import React from 'react'
import './ArticleCard.css'
import Fade from "react-reveal/Fade";
import { IconButton, MenuList } from '@material-ui/core';
import Avatar from './Avatar'

function ArticleCard({ title, img, likes, timestamp, delay, authorName, authorImg, tag }) {
    return (
        <Fade bottom delay={delay*100}>
            <div className='articlecard'>

                <div className="articlecard__header">
                    {img && <img src={img} />}
                    <button className='read__btn'>Read</button>
                </div>

                <div className="articlecard__body">
                    <span className='tag'>{tag}</span>
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

                <div className="articlecard__footer">
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

export default ArticleCard
