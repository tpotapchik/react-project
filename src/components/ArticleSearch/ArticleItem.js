import React from 'react';

import './ArticleItem.scss';

const ArticleItem = ({ title, text, author }) => {
    return (
        <div className="article-item">
            <h2 className="article-title">{title}</h2>
            <p className="article-text">{text}</p>
            <p className="article-author">{author}</p>
        </div>
    )
};

export default ArticleItem;
