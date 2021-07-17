import React from 'react'
import './CardRow.css'
import NewsCard from './NewsCard'
import ArticleCard from './ArticleCard'
import ss1 from "../images/ss.jpg";
import BookCard from './BookCard';
import { useStateValue } from '../StateProvider'
import moment from 'moment'

const col = 3

function CardRow({ type }) {
    const [{ news, articles, bookReviews }, dispatch] = useStateValue()

    if(type === 'news') {
        return (
            <div className='cardrow'>
                {news.map((singleNews, index) => (
                    <NewsCard 
                        title={singleNews.title}
                        img={singleNews.cover}
                        likes={singleNews.likes}
                        timestamp={singleNews.timestamp ? moment(singleNews.timestamp?.seconds*1000).fromNow() : 'just now'}
                        delay={index}
                        key={index}
                        nid={singleNews.id}
                    />
                ))}
            </div>
        )
    } else if (type === 'article') {
        return (
            <div className='cardrow'>
                {articles.map((article, index) => (
                    <ArticleCard 
                        tag='physics'
                        title={article.title}
                        authorName={article.authorName}
                        img={article.cover}
                        likes={article.likes}
                        timestamp={article.timestamp ? moment(article.timestamp?.seconds*1000).fromNow() : 'just now'}
                        delay={index}
                        key={index}
                        aid={article.id}
                    />
                ))}
            </div>
        )
    } else if (type === 'book') {
        return (
            <div className='cardrow'>
                {bookReviews.map((bookReview, index) => (
                    <BookCard
                        authorName={bookReview.authorName}
                        title={bookReview.title}
                        img={bookReview.cover}
                        likes={bookReview.likes}
                        timestamp={bookReview.timestamp ? moment(bookReview.timestamp?.seconds*1000).fromNow() : 'just now'}
                        delay={index}
                        key={index}
                        bid={bookReview.id}
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

export default React.memo(CardRow)
