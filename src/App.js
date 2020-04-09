import React from 'react'
import 'styles/index.scss';

import HelloWorld from 'components/HelloWorld';
import DisplayArticle from 'components/TestArticle';
import TodoView from 'components/Todo/TodoView';
import ProcessPanelView from 'components/ProcessPanel/ProcessPanelView';

const user = {name: 'Tanya'};

const article = {
    title: 'My first article',
    text: 'Some article content, some content and other content',
    author: 'Tanya',
};

function App() {
    return (
        <React.StrictMode>
            <HelloWorld userName={user.name}/>
            <hr />

            <h2>Post</h2>

            <DisplayArticle
                title={article.title}
                text={article.text}
                author={article.author}
            />

            <TodoView />

            <ProcessPanelView />
        </React.StrictMode>
    );
}

export default App;
