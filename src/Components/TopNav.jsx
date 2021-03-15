import React, { useEffect, useState } from 'react';

export const TopNav = (props) => {

    const api = 'a3df7e8eee3d45e883440134696d4794';
    const [category, setCategory] = useState("Tesla");

    function changeCategory(category){
        setCategory(category);
    }

    useEffect( () => {
        fetch(`http://newsapi.org/v2/everything?q=${category}&from=2021-02-15&sortBy=publishedAt&apiKey=${api}`)
            .then(response => response.json())
            .then(news => props.changeNews(news.articles))
    }, [category]);

    return (
        <div className="topNav">
            <ul className="newsCategories">
                <li><a onClick={()=>{changeCategory("Tesla")}} href="#">Tesla</a></li>
                <li><a onClick={()=>{changeCategory("Computer games")}} href="#">Game Industry</a></li>
                <li><a onClick={()=>{changeCategory("React.js")}} href="#">React news</a></li>
            </ul>
        </div>
    );
}