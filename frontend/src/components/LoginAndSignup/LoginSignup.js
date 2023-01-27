import React from 'react';
import './Login.css';

class LoginSignup extends React.Component {
  Signups = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#78C2AD";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  };
  Logins = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#78C2AD";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  };
  render() {
    return (
      
      <div className="MainDiv">
        <div class="form-modal">
          <div class="form-toggle">
            <button id="login-toggle" onClick={this.Logins}>
              log in
            </button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button id="signup-toggle" onClick={this.Signups}>
              sign up
            </button>
          </div>

          <div id="login-form">
            <form>
              <input type="text" placeholder="Enter email or username" />
              <input type="password" placeholder="Enter password" />
              <button type="button" className="btn login">
                login
              </button>
              <p>
                <a href="javascript:void(0)">Forgotten account</a>
              </p>
              <hr />
            </form>
          </div>

          <div id="signup-form">
            <form>
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Choose username" />
              <input type="password" placeholder="Create password" />
              <button type="button" className="btn signup">
                create account
              </button>
              <hr />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSignup;
