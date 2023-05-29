import React, { useState } from "react";
import "./SignUp.css";
import arrow from "./APP/arrow-prev.png";
import visible from "./APP/visible.png";
import invisible from "./APP/invisible.png";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

export default function SignUp() {
  const [imageSrc, setImageSrc] = useState(invisible);
  const [isClicked, setClicked] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const [imageSrcConfirm, setImageSrcConfirm] = useState(invisible);
  const [isClickedConfirm, setClickedConfirm] = useState(false);
  const [showPwdConfirm, setShowPwdConfirm] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setImageSrc(invisible);
      setClicked(false);
      setShowPwd(false);
    } else {
      setImageSrc(visible);
      setClicked(true);
      setShowPwd(true);
    }
  };

  const handleClickConfirm = () => {
    if (isClickedConfirm) {
      setImageSrcConfirm(invisible);
      setClickedConfirm(false);
      setShowPwdConfirm(false);
    } else {
      setImageSrcConfirm(visible);
      setClickedConfirm(true);
      setShowPwdConfirm(true);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Firebase에 이메일과 비밀번호로 회원가입 요청
      await auth.createUserWithEmailAndPassword(email, password);
      console.log("회원가입 성공");
      alert("회원가입 성공");
      navigate("/signup2");
    } catch (error) {
      setError(error.message);
      console.error("회원가입 실패", error);
      alert("회원가입 실패");
    }
  };

  return (
    <div className="containerSignup">
      <div className="header_signup">
        <Link to="/login" className="toPrevPage">
          <img src={arrow} alt="arrow" />
          Sign Up
        </Link>
      </div>
      <div className="line_div">
        <div className="line_1"></div>
        <div className="line_2"></div>
      </div>
      <form className="form_su" onSubmit={handleSignUp}>
        <div className="from_text_title">Email</div>
        <div className="form_text">
          <input
            className="form_text_input"
            placeholder="example@gmail.com"
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </div>
        <div className="from_text_title">Password</div>
        <div className="form_pwd">
          <input
            className="form_input_pwd"
            placeholder="••••••"
            type={showPwd ? "text" : "password"}
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
          <img
            src={imageSrc}
            alt="visible"
            onClick={handleClick}
            className="visiblePNG"
          />
        </div>
        <div className="from_text_title">Confirm Password</div>
        <div className="form_pwd">
          <input
            className="form_input_pwd"
            placeholder="••••••"
            type={showPwdConfirm ? "text" : "password"}
            name="pwCheck"
          ></input>
          <img
            src={imageSrcConfirm}
            alt="visible"
            onClick={handleClickConfirm}
            className="visiblePNG"
          />
        </div>
        <div className="from_text_title">Phone Number</div>
        <div className="form_text">
          <input
            className="form_text_input"
            placeholder="010-0000-0000"
            type="text"
            name="phoneNum"
          ></input>
        </div>
        <div className="checkbox_signup">
          <div className="checkbox_div">
            <input type="checkbox" />
            <label>
              Read the Rules and be aware of all the rules and tick the box if
              you accept the rules.
            </label>
          </div>
          <div className="checkbox_div">
            <input type="checkbox" />
            <label>Do you want to know the news?</label>
          </div>
        </div>
        <input className="createBtn" type="submit"></input>
      </form>
      <div className="have_account">
        <p>Do you have an account? </p>
        <Link to="/login" className="Link_login">
          Login
        </Link>
      </div>
      \
    </div>
  );
}
