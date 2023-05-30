import React from "react";
import arrow from "./APP/arrow-prev.png";
import { Link } from 'react-router-dom';
import Picture from "./components/Picture";
import "./Resume.css";
import { useState } from "react";

function Resume(){
    const [inputCount , setInputCount] = useState();

    const onTextareaHandler = (e)=>{
        setInputCount(
            e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length);
    }
    return(
        <div id='container'>
           <header id="post_header">
                <Link to ="/home" id="box">
                 <img src={arrow} id="arrow"/>
                 <div id="cummunity_button">채용 공고</div>
                </Link>
             </header>
            <div id="resume_container">
                <form id="resume_form">
                    <div id="personal_info">
                        <Picture id="picture"/>
                        <div id="user_profile">
                            <p>이름</p>
                            <input type="text" name="user-name" placeholder="이름" className="resume_input"/>
                            <p>전화번호</p>
                            <input type="number" name="phone-number" placeholder="전화번호" className="resume_input"/>
                            <p>주소</p>
                            <input type="text" name="adress" placeholder="주소" className="resume_input"/>
                        </div>
                    </div>
                    <div id="produce">
                        <p id="produce_mention">자기소개서 (1000자 이내)</p>
                        <textarea id="resume_produce" maxLength="1000" onChange={onTextareaHandler}/>
                        <p id="count_data">
                            <span>{inputCount}</span>
                            <span>/1000 자</span>
                        </p>
                    </div>
                    <input type="submit" id="resume_submit" value="지원하기"></input>
                </form>
            </div>   
        </div>
    )
}

export default Resume;