import React from 'react';

const NewsItem = () => {
    return (
        <article className="newsItem">
            <img src="" alt=""></img>
            <h1>Title</h1>
            <p>Description</p>
            <div>
                <p>Source</p>
                <p>Author</p>
            </div>
            <a href="https://google.com">Link</a>
        </article>
    );
}

export default NewsItem;