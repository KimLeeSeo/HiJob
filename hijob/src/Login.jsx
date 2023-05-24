import React from "react";
import "./Login.css";
//import styled from "styled-components";
import logo_login from "./APP/logo2.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="containerLogin">
      <div className="logo">
        <img src={logo_login} alt="logo" />
        <div className="logo_text">세계인의 구직정보를 모아</div>
      </div>
      <div className="login_container">
        <form>
          <div className="login_input_wrap">
            <input placeholder="Enter email" type="text" />
          </div>
          <div className="login_input_wrap">
            <input
              placeholder="Enter password"
              type="password"
              autoComplete="off"
            />
          </div>
        </form>
        <div className="pwd_search">Forget Password?</div>
      </div>
      <Link to="/home" className="button_div_login">
        <button>Login</button>
      </Link>
      <div className="create_account">
        Not register yet?
        <Link className="signupLink" to="/signup">
          Create Account
        </Link>
      </div>
    </div>
  );
}
