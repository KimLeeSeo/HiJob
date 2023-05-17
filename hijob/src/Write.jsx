import React from "react";
import "./Write.css";
import menuicon from "./APP/align-justify.png";
import bell from "./APP/bell.png";
import line from "./APP/Line 1.png";
import MenuBar from "./components/MenuBar";
import { Link } from "react-router-dom";
import arrow from "./APP/arrow-prev.png";

function Write(){
    return(
        <div id="container">
            <header id="header_bar">
                <Link to ="/cummunity" id="box">
                    <img src={arrow} id="arrow"/>
                    <div id="cummunity_button">커뮤니티</div>
                </Link>
                <img src={bell} id="bell"></img>
            </header>
            <div id="new_post_container">
                <form id="new_post">
                    <input placeholder="제목" id="new_post_title"></input>
                    <img src={line} alt="line" id="title_line"/>
                    <textarea placeholder="내용을 입력하세요" id="new_post_content"></textarea>
                    <button type="submit" id="submit_new_post">게시하기</button>
                </form>
            </div>
        </div>
    )
}

export default Write;