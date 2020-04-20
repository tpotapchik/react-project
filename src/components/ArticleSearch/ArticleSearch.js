import React from 'react';
import TextInput from './components/TextInput'

import './ArticleSearch.scss'

const ArticleSearch = ({ defaultItems, onInput }) => {
    function onChangeHandler(e) {
        const arr = [];
        const targetValueLowercase = e.target.value.toLowerCase();

        defaultItems.forEach(item => {
            const titleLowercase = item.title.toLowerCase();
            if (titleLowercase.indexOf(targetValueLowercase) !== -1) {
                arr.push(Object.assign({}, item));
            }
        });
        onInput(arr);
    }

    return (
        <form className="article-form">
            <div className="article-form-row form-row">
                <label>What are you looking for?</label>
                <TextInput
                    name="search"
                    autoComplete="off"
                    onHandleChange={onChangeHandler}
                />
            </div>
        </form>
    );
};

export default ArticleSearch;
