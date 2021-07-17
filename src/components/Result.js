import { FavoriteBorderOutlined, Favorite } from "@material-ui/icons";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import './Result.css'
import { useStateValue } from '../StateProvider'
import { db } from '../firebase'
import firebase from 'firebase'

export default function Result({
  ss,
  topic,
  id,
  authorImg,
  authorName,
  timestamp,
  title,
  likes
}) {
    const [{ user }] = useStateValue()
    const [currentUserLiked, setCurrentUserLiked] = useState(false)
    const [currentUserLikedWithTotal, setCurrentUserLikedWithTotal] = useState(likes && likes.length)

    const handleLike = e => {
        if(!user) return alert('Login to like posts')
        db.collection(topic).doc(id).set({
            likes: firebase.firestore.FieldValue.arrayUnion(user.email)
        }, { merge: true })
        setCurrentUserLiked(true)
        setCurrentUserLikedWithTotal(prevCount => prevCount + 1)
    }
    const handleUnlike = e => {
        if(!user) return alert('Login to like posts')
        db.collection(topic).doc(id).set({
            likes: firebase.firestore.FieldValue.arrayRemove(user.email)
        }, { merge: true })
        setCurrentUserLiked(false)
        setCurrentUserLikedWithTotal(prevCount => prevCount - 1)
    }

    return (
        <div className="result">

            <div className="result__left">
                <img src={ss} alt="" />
            </div>

            <div className="result__right">
                <h3>
                    <Link target='_blank' to={`/${topic}/${id}`}>{title}</Link>
                </h3>

                <div className="author__info">
                    <Avatar authorImg={authorImg} authorName={authorName} />
                    <span>{authorName}</span>
                </div>

                <span className='timestamp'>{timestamp}</span>

                <div className="like">
                    <span>{currentUserLikedWithTotal && currentUserLikedWithTotal}</span>
                    {(likes && likes.includes(user.email) || currentUserLiked )
                    ?
                        <Favorite onClick={handleUnlike} />
                    :
                        <FavoriteBorderOutlined onClick={handleLike} />
                    }
                </div>
            </div>

        </div>
    );
}
  