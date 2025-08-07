import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
export default function Login() {
    const navigate = useNavigate();

    const handleSignUpClick = (e) => {
        e.preventDefault();
        navigate('/signup');
    };
    const [name, setName] = React.useState()
    const [password, setPassword] = React.useState()
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { name, password })
            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1 className="title">KELASA</h1>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-title">Welcome Back</h1>

                    <div className="form-group">
                        <label className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Enter your username"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className="input-highlight"></div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="input-highlight"></div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Sign In
                    </button>

                    <div className="forgot-password">
                        <a href="#forgot">Forgot your password?</a>
                    </div>
                    <div className="forgot-password">
                        <a href="#signup" onClick={handleSignUpClick}>Sign Up?</a>
                    </div>
                </form>
            </div>
        </>
    )
}