import { FavoriteBorderOutlined } from "@material-ui/icons";
import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import './Result.css'

export default function Result({
  ss,
  topic,
  id,
  authorImg,
  authorName,
  timestamp,
  title,
  desc
}) {

    return (
        <div className="result">

            <div className="result__left">
                <img src={ss} alt="" />
            </div>

            <div className="result__right">
                <h3>
                    <Link to={`/${topic}/${id}`}>{title}</Link>
                </h3>

                <p>{desc}</p>

                <div className="author__info">
                    <Avatar authorImg={authorImg} authorName={authorName} />
                    <span>{authorName}</span>
                </div>

                <span className='timestamp'>{timestamp}</span>

                <FavoriteBorderOutlined className='like' />
            </div>

        </div>
    );
}
  