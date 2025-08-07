import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Sending data:', { name, password }); // Debug log

        axios.post('http://localhost:3001/register', { name, password })
            .then(result => {
                console.log('Success:', result);
                alert('Registration successful!');
                navigate('/login'); // Redirect to login after successful registration
            })
            .catch(err => {
                console.error('Error:', err);
                alert('Registration failed. Please try again.');
            })
    }
    return (
        <>
            <h1 className="title">KELASA</h1>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-title">Hello There!</h1>

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
                    <div className="form-group">
                        <label className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-input"
                            placeholder="Confirm your password"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="input-highlight"></div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Register
                    </button>

                    <div className="forgot-password">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>
                            Already have an account? Sign In
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}