import React from 'react';
import ArticleItem from './ArticleItem';

import './ArticleItems.scss';

const ArticleItems = ({ items }) => {
    return (
        <div className="article-items">
            {
                items.length > 0 ?
                    items.map(item => {
                        return (
                            <ArticleItem
                                key={item.id}
                                title={item.title}
                                text={item.text}
                                author={item.author}
                            />
                        )
                    })
                    : <div>Not found</div>
            }
        </div>
    )
};

export default ArticleItems;