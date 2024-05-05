import React from 'react';
import "../styles/Auth.css"

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Авторизация</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="login">Логин:</label>
                        <input type="text" id="login" name="login" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button className='submitButton' type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
