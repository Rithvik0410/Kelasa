import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const handleSignUpClick = (e) => {
        e.preventDefault();
        navigate('/signup');
    };

    return (
        <>
            <h1 className="title">KELASA</h1>
            <div className="login-container">
                <form className="login-form">
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