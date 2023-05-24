import React, { useState, useRef } from "react";
import "./SignUp.css";
import arrow from "./APP/arrow-prev.png";
import usericon from "./APP/userIcon.png";
import imgselect from "./APP/imgSelect.png";

import { Link } from "react-router-dom";
import { YEAR } from "./components/YEAR";
import { MONTH } from "./components/MONTH";
import { DAY } from "./components/DAY";

export default function SignUp() {
  const [imageUrl, setImageUrl] = useState(null);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    year: "",
    month: "",
    day: "",
    phoneNum: "",
    country: "",
  });

  const { firstName, lastName, year, month, day, phoneNum, country } =
    userInput;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ userInput, [name]: value });
  };

  //프로필 사진 입력
  const imgRef = useRef();
  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  //휴대폰 번호 유효성 검사
  const isPhoneNum = (phoneNum) => {
    const phoneNumRegex = /01[016789]-[^0][0-9]{2,3}-[0-9]{4,4}/;
    return phoneNumRegex.test(phoneNum);
  };
  const isPhoneNumValid = isPhoneNum(phoneNum);

  // 생년월일 입력여부 확인
  const isBirth = Boolean(year && month && day);

  // 전체 유효성 검사 후 버튼 활성화
  const isAllValid = isPhoneNumValid && isBirth;

  const activeBtn = isAllValid ? "undefined" : "disabled";

  return (
    <div className="containerSignup">
      <div className="header_signup">
        <Link to="/signup" className="toPrevPage">
          <img src={arrow} alt="arrow" />
          Sign Up
        </Link>
      </div>
      <div className="line_div">
        <div className="line_1"></div>
        <div className="line_1"></div>
      </div>

      <div className="image_div">
        <img src={usericon} alt="userIcon" className="userIconPNG" />
        <label htmlFor="image" className="image_iabel">
          <img src={imgselect} alt="imageSelect" className="imgSelectPNG" />
        </label>
        <input
          id="image"
          className="input_img"
          type="file"
          accept="image/*"
          src={imgselect}
        ></input>
      </div>

      <form className="form_su">
        <div className="from_text_title">First Name</div>
        <div className="form_text">
          <input
            className="form_text_input"
            placeholder="First Name"
            type="text"
            name="firstName"
            onChange={handleInput}
          ></input>
        </div>
        <div className="from_text_title">Last Name</div>
        <div className="form_text">
          <input
            className="form_text_input"
            placeholder="Last Name"
            type="text"
            name="lastName"
            onChange={handleInput}
          ></input>
        </div>
        <div className="from_text_title">Birth</div>
        <div className="selectBox">
          <p className="selectTitle">Month : </p>
          <select
            className="select"
            name="month"
            placeholder="MM"
            onChange={handleInput}
          >
            {MONTH.map((m) => {
              return <option key={m}> {m}</option>;
            })}
          </select>
          <p className="selectTitle">Day : </p>
          <select
            className="select"
            name="day"
            placeholder="DD"
            onChange={handleInput}
          >
            {DAY.map((d) => {
              return <option key={d}> {d}</option>;
            })}
          </select>
          <p className="selectTitle">Year : </p>
          <select
            className="select"
            name="year"
            placeholder="YYYY"
            onChange={handleInput}
          >
            {YEAR.map((y) => {
              return <option key={y}> {y}</option>;
            })}
          </select>
        </div>
        <div className="from_text_title">Phone Number</div>
        <div className="form_text">
          <input
            className="form_text_input"
            placeholder="010-0000-0000"
            type="text"
            name="phoneNum"
            onChange={handleInput}
          ></input>
        </div>
        <div className="from_text_title">Country</div>
        <div className="form_text">
          <select
            className="select_country"
            name="country"
            placeholder="US (United State)"
            onChange={handleInput}
          >
            <option value="1">미국</option>
            <option value="2">대한민국</option>
          </select>
        </div>
      </form>
      <Link to="/home">
        <button className="createBtn">Done</button>
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
