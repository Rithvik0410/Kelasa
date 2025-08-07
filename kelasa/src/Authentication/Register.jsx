export default function Register() {
    return (
        <>
            <h1 className="title">KELASA</h1>
            <div className="login-container">
                <form className="login-form">
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
                    <div className="form-group">
                        <label className="form-label">
                            Confirm Password
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
                        <a href="#forgot">Sign Up?</a>
                    </div>
                </form>
            </div>
        </>
    )
}