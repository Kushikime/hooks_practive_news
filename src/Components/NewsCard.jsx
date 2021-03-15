
import React from 'react';

export const NewsCard = (props) => {


    return (
        <div className="newsCard">
            <div className="leftBlock">
                <img src={props.urlToImage} alt={props.title} />
            </div>

            <div className="rightBlock">
                <div>
                    <span className="title">{props.title}</span>
                    <p className="description">{props.desc}</p>
                </div>
                
                <div className="bottomInfo">
                    <a href={props.more} target="_blank" className="more">Read more...</a>
                    <span className="date">{props.date}</span>
                </div>
            </div>
        </div>
    );
}