import { Favorite, FavoriteBorder, MoreVert } from '@material-ui/icons'
import React from 'react'
import './ArticleCard.css'
import Fade from "react-reveal/Fade";
import Avatar from './Avatar'
import { Link } from 'react-router-dom'


function ArticleCard({ title, img, likes, timestamp, delay, authorName, authorImg, tag, aid }) {
    return (
        <Fade bottom delay={delay*100}>
            <div className='articlecard'>

                <div className="articlecard__header">
                    {img && <img src={img} />}
                    <Link target='_blank' to={`/articles/${aid}`} className='read__btn'>Read</Link>
                </div>

                <div className="articlecard__body">
                    <span className='tag'>{tag || ''}</span>
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
                        <span>{likes || 0}</span>
                    </div>
                    <Link className='mobile_read_btn' target='_blank' to={`/articles/${aid}`} >Read</Link>
                </div>

            </div>
        </Fade>
    )
}

export default ArticleCard
