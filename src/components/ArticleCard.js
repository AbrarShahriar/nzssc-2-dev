import { Favorite, FavoriteBorder, MoreVert } from '@material-ui/icons'
import React from 'react'
import './ArticleCard.css'
import Fade from "react-reveal/Fade";
import { Avatar, IconButton, MenuList } from '@material-ui/core';

function ArticleCard({ title, img, likes, timestamp, delay, authorName, authorImg }) {
    return (
        <Fade bottom delay={delay*100}>
            <div className='articlecard'>

                <div className="articlecard__header">
                    {img && <img src={img} />}
                </div>

                <div className="articlecard__body">
                    <h2>{title}</h2>
                    <div className="author__info">
                        {authorImg 
                        ? 
                            <div className="avatar__img">
                                <img src={authorImg} alt=""/>
                            </div>
                        :
                            <div className="avatar__text">
                                <span>{authorName[0]}</span>
                            </div>
                        }
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
