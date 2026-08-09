import React, { useState } from "react";
import Button from "./Button";

/**
 * Simple login / register form.
 * Uses local state to switch between login and register modes.
 * No real backend — this is just the UI for a high-school level demo.
 */
function LoginBox() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app you would send this to a server.
    // For now we just show an alert so students can see it works.
    alert(
      isLogin
        ? `Logging in with ${email}`
        : `Creating account for ${name} (${email})`
    );
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>
        <p className="login-sub">
          {isLogin
            ? "Log in to continue your training."
            : "Start setting your standard today."}
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              minLength={6}
            />
          </div>

          <Button type="submit" variant="primary" className="login-submit">
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </form>

        <p className="login-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="link-button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>

        <a href="/" className="back-home">
          ← Back to home
        </a>
      </div>
    </div>
  );
}

export default LoginBox;
