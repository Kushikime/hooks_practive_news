import React from 'react';
import { NewsCard } from './NewsCard';


export const MainContent = (props) => {

    

    return (
        
        <div className="mainContent">
            {
                props.news.map((article, index)=>{
                    return <NewsCard key={++index} urlToImage={article.urlToImage} title={article.title} desc={article.description} date={article.publishedAt} more={article.url} />;
                })
            }
        </div>
    );
}