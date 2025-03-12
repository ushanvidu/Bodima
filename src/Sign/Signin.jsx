import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./signin.css"; // Import CSS file

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>

                {/* Email Input */}
                <div className="input-box">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label className={email ? "active" : ""}>Email</label>
                </div>

                {/* Password Input */}
                <div className="input-box">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label className={password ? "active" : ""}>Password</label>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                {/* Login Button */}
                <button className="login-btn">Login</button>

                {/* Divider */}

                {/* Register Link */}
                <p className="register-link">
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </div>
        </div>
    );
}