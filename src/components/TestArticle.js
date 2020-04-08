import React from 'react';

import './TestArticle.scss';

const DisplayArticle = (props) => {
    const { title, author, text } = props;
    return (
        <div className="article-item">
            <h2 className="article-title">This is {title}</h2>
            <p className="article-text">{text}</p>
            <p className="article-author">{author}</p>
        </div>
    )
};

export default DisplayArticle;