import React from "react";
import './Member.css'


export function Member({
  ss,
  direction,
  name,
  title
}) {
  return (
        <div className="member ">
            <img src={ss} alt="" />
            <div className={`member__info ${direction}`}>
                <span className="member__title">{title}</span>
                <span className="member__name">{name}</span>
            </div>
        </div>
        );
}
  