import React, { useState } from 'react';
import ArticleItems from './ArticleItems';
import ArticleSearch from './ArticleSearch';

const articleItemsPanel = [
    {
        id: 1,
        title: 'Thoughtful Design',
        text: 'Some article content, some content and other content',
        author: 'Tanya'
    },
    {
        id: 2,
        title: 'Well Crafted',
        text: 'Some article content, some content and other content',
        author: 'Michael'
    },
    {
        id: 3,
        title: 'Easy to Customize',
        text: 'Some article content, some content and other content',
        author: 'Ivan'
    }
];

const Article = () => {
    const [items, setItems] = useState(articleItemsPanel);

    function onInputChange(arr) {
        setItems(arr);
    }

    return (
        <div>
            <ArticleSearch onInput={onInputChange} defaultItems={articleItemsPanel}/>
            <ArticleItems items={items}/>
        </div>
    )
};

export default Article;