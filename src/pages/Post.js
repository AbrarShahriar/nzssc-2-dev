import React, { useEffect, useState } from 'react'
import './Post.css'
import { useParams } from 'react-router-dom'
import Avatar from '../components/Avatar'
import { FavoriteBorderOutlined } from '@material-ui/icons'
import { db } from '../firebase'
import moment from 'moment'

 
function Post({ topic }) {
    const { id } = useParams()

    const [post, setPost] = useState({
        cover: '',
        title: '',
        authorName: '',
        authorImg: null,
        postBody: '',
        topic: '',
        id: 's',
        tag: '',
        likes: 0,
        timestamp: ''
    })

    useEffect(() => {
        db.collection(topic).doc(id).get()
        .then(doc => {
            console.log(doc.data());
            
            setPost(doc.data())
        })
        .catch(err => alert(err.message))
    }, [])
    
    return (
        <div className='post'>
            <div className="post__content">

                <div className="post__header">
                    <img src={post.cover} alt=""/>
                    <h1>{post.title}</h1>
                    {post.authorName && <div className="post__author__info">
                        <Avatar 
                            size='large'
                            authorImg={post.authorImg}
                            authorName={post.authorName}
                        />
                        <span>{post.authorName}</span>
                    </div>}
                    <span>{post.timestamp ? moment(post.timestamp?.seconds*1000).fromNow() : 'just now'}</span>
                </div>

                <div className="post__body">
                    <div dangerouslySetInnerHTML={{__html: post.body}}></div>
                </div>

                <div className="post__footer">
                    <p>Enjoyed what you read??</p>
                    <FavoriteBorderOutlined />
                </div>

            </div>
        </div>
    )
}

export default Post
