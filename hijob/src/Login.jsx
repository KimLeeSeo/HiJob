import React, { useState } from "react";
import "./Login.css";
import logo_login from "./APP/logo2.png";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Firebase에 이메일과 비밀번호로 로그인 요청
      await auth.signInWithEmailAndPassword(email, password);
      console.log("로그인 성공");
      alert("로그인 성공");
      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.error("로그인 실패", error);
      alert("로그인 실패");
    }
  };

  return (
    <div className="containerLogin">
      <div className="logo">
        <img src={logo_login} alt="logo" />
        <div className="logo_text">세계인의 구직정보를 모아</div>
      </div>
      <div className="login_container">
        <form onSubmit={handleSignIn}>
          <div className="login_input_wrap">
            <input
              placeholder="Enter email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login_input_wrap">
            <input
              placeholder="Enter password"
              type="password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="pwd_search">Forget Password?</div>
      </div>
      <div className="button_div_login">
        <button type="submit" onClick={handleSignIn}>
          Login
        </button>
      </div>
      <div className="create_account">
        Not register yet?
        <Link className="signupLink" to="/signup">
          Create Account
        </Link>
      </div>
    </div>
  );
}
