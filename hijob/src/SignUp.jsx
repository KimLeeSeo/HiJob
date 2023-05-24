import React, { useState } from "react";
import "./SignUp.css";
import arrow from "./APP/arrow-prev.png";
import visible from "./APP/visible.png";
import invisible from "./APP/invisible.png";

import { Link } from "react-router-dom";

import SignUp_2 from "./SignUp_2";

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

  const [userInput, setUserInput] = useState({
    id: "",
    email: "",
    pw: "",
    pwCheck: "",
  });

  const { id, email, pw, pwCheck } = userInput;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ userInput, [name]: value });
  };
  //이메일 유효성 검사
  /*const isEmail = (email) => {
    const emailRegex = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    return emailRegex.test(email);
  };

  const isEmailValid = isEmail(email);*/

  //비밀번호 유효성 검사 (대소문자, 숫자, 특수문자 포함 8자리 이상)
  /*const isPw = (pw) => {
    const pwRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return pwRegex.test(pw);
  };
  const isPwValid = isPw(pw);

  //비밀번호 재확인
  const isPwSame = pw ===pwCheck;
  const pwDoubleCheck = !isPwSame ? 'pwDoubleCheck' : undefined;
  */

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
      <form className="form_su">
        <div className="from_text_title">ID</div>
        <div className="form_text">
          <input
            className="form_text_input"
            placeholder="example#1234"
            type="text"
            name="id"
            onChange={handleInput}
          ></input>
        </div>
        <div className="from_text_title">Email</div>
        <div className="form_text">
          <input
            className="form_text_input"
            placeholder="example@gmail.com"
            type="text"
            name="email"
            autoComplete="username"
            onChange={handleInput}
          ></input>
        </div>
        <div className="from_text_title">Password</div>
        <div className="form_pwd">
          <input
            className="form_input_pwd"
            placeholder="••••••"
            type={showPwd ? "text" : "password"}
            name="pw"
            onChange={handleInput}
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
            onChange={handleInput}
          ></input>
          <img
            src={imageSrcConfirm}
            alt="visible"
            onClick={handleClickConfirm}
            className="visiblePNG"
          />
        </div>
      </form>
      <div className="checkbox_signup">
        <div className="checkbox_div">
          <input type="checkbox" />
          <label>
            Read the Rules and be aware of all the rules and tick the box if you
            accept the rules.
          </label>
        </div>
        <div className="checkbox_div">
          <input type="checkbox" />
          <label>Do you want to know the news?</label>
        </div>
      </div>
      <Link to="/signup2">
        <button className="createBtn">Create Account</button>
      </Link>
      <div className="have_account">
        <p>Do you have an account? </p>
        <Link to="/login" className="Link_login">
          Login
        </Link>
      </div>
    </div>
  );
}
