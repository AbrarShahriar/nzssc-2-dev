import React from "react";
import './Avatar.css'

export default function Avatar({
  authorImg,
  authorName,
  size
}) {
    if(authorImg) {
        return (
            <div className={`${(size === 'large') ? 'avatar__img__large' : 'avatar__img'}`}>
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
  