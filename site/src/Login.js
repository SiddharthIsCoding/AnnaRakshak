import react from "react";
import "./App.css"

function LoginPage(){
    return(
    <div className="login-page">
      <div className="login-card">

        <div className="logo">
          <span className="logo-icon">F</span>
          <span className="logo-text">FiPds</span>
        </div>

        <div className="heading">
          <h2>Think beYond.</h2>
          <h2 className="gradient-text">
            Build the Future.
          </h2>
          <p>Turn your ideas into possibilities.</p>
        </div>

        <div className="login-box">
          <h3>Welcome Back</h3>
          <p className="subtitle">Login to your account</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">
              Login to FiPds →
            </button>
          </form>
        </div>

      </div>
    </div>
    )
}


export default LoginPage();