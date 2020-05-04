import React from 'react'
import 'styles/index.scss';

import HelloWorld from 'components/HelloWorld';
import TodoView from 'components/Todo/TodoView';
import ProcessPanelView from 'components/ProcessPanel/ProcessPanelView';
import Timer from 'components/Timer/Timer';
import Registration from 'components/Registration/Registration';
import Converter from 'components/Converter/Converter';
import ConverterAdvanced from 'components/Converter/ConverterAdvanced';
import Article from 'components/ArticleSearch/Article';
import ChildrenEx from 'components/Children';
import WrappedComponent from 'components/Test/TestComponent';
import CatMouse from 'components/Cat/CatMouse';
import SwitchView from 'components/SwitchSun/SwitchView.js';
import LearnRoutes from 'components/LearnRoutes/LearnRoutes.js';
import BoardView from 'components/Board/BoardView';

const user = {name: 'Tanya'};

function App() {
    return (
        <React.StrictMode>
            <section className="container section">
                <LearnRoutes />
            </section>
            <section className="container section">
                <BoardView />
            </section>
            <section className="container section">
                <SwitchView />
            </section>
            <section className="container section">
                {/*<CatMouse />*/}
            </section>
            <WrappedComponent />
            <section className="container section">
                <ChildrenEx>hi children</ChildrenEx>
            </section>
            <section className="container section">
                <Article />
            </section>
            <section className="container section">
                <Timer />
            </section>

            <HelloWorld userName={user.name}/>

            <section className="container section">
                <TodoView />
            </section>
            <section className="container section">
                <ProcessPanelView />
            </section>
            <section className="container section">
                <Registration />
            </section>
            <section className="container section">
                <Converter />
            </section>
            <section className="container section">
                <ConverterAdvanced />
            </section>
        </React.StrictMode>
    );
}

export default App;
