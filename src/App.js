import React from 'react'
import 'styles/index.scss';

import HelloWorld from 'components/HelloWorld';
import DisplayArticle from 'components/TestArticle';
import TodoView from 'components/Todo/TodoView';
import ProcessPanelView from 'components/ProcessPanel/ProcessPanelView';
import Timer from 'components/Timer/Timer';

const user = {name: 'Tanya'};

const article = {
    title: 'My first article',
    text: 'Some article content, some content and other content',
    author: 'Tanya',
};

function App() {
    return (
        <React.StrictMode>
            <section className="container section">
                <Timer />
            </section>

            <HelloWorld userName={user.name}/>

            <section className="container section">
                <h2>Post</h2>
                <DisplayArticle
                    title={article.title}
                    text={article.text}
                    author={article.author}
                />
            </section>
            <section className="container section">
                <TodoView />
            </section>
            <section className="container section">
                <ProcessPanelView />
            </section>
        </React.StrictMode>
    );
}

export default App;
