import React from 'react';

const NewsItem = (props) => {
    return (
        <article className="newsItem">
            <img src={props.data.urlToImage} alt=""></img>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <div className="flex">
                <p>{props.data.source.name}</p>
                <p>{props.data.author}</p>
            </div>
            <a href={props.data.url}>Link</a>
        </article>
    );
}

export default NewsItem;