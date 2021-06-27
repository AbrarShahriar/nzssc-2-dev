import React from "react";
import './Avatar.css'

export default function Avatar({
  authorImg,
  authorName
}) {
    if(authorImg) {
        return (
            <div className="avatar__img">
                <img src={authorImg} alt=""/>
            </div>
        )
    }

    return (
        <div className="avatar__text">
            <span>{authorName[0]}</span>
        </div>
    );
}
  