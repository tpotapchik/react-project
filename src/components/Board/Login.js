import React from 'react';

const Login = ({checkIsUser}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        checkIsUser(true);
    };
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="login-form-row">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name"/>
                </div>
                <div className="login-form-row">
                    <label htmlFor="name">Your password</label>
                    <input type="text" id="password"/>
                </div>
                <div className="login-form-row">
                    <button className="login-form-btn" type="submit">Sign in</button>
                </div>
            </form>
        </div>
    )
};

export default Login;


