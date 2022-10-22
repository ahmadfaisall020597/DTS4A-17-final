import React from "react";
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <form>
            <div className="container">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
                <button id="login-button" type="submit">
                    Login
                </button>

                <Link to="/register">Register</Link>
            </div>
        </form>
    )
}