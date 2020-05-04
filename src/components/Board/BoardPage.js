import React, {useState} from 'react';
import BoardView from './BoardView.js';
import Login from './Login';
import AboutTodo from './AboutTodo';
import NotFound from './NotFound';
import './BoardPage.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";

const BoardPage = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
            <div>
                <nav className="navigation">
                    {
                        isLoggedIn ?
                            <NavLink exact to="/">Home</NavLink>
                            :
                            <>
                                <NavLink exact to="/">Home</NavLink>
                                <NavLink to="/login">Login</NavLink>
                            </>
                    }

                    <NavLink to="/about">About</NavLink>
                </nav>
            </div>
            <Switch>
                {
                    isLoggedIn ?
                        <>
                            <Route exact path="/"><BoardView /></Route>
                            <Redirect to="/" />
                        </>
                        :
                        <>
                            <Redirect to="/login" />
                            <Route path="/login"><Login checkIsUser={setLoggedIn}/></Route>
                        </>

                }
                <Route path="/about">
                    <AboutTodo />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
};

export default BoardPage;




