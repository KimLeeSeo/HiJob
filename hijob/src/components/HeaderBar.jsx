import React from "react";
import menuicon from "../APP/align-justify.png";
import bell from "../APP/bell.png";
import write from"../APP/write.png";
import "./HeaderBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function HeaderBar(){
    return(
        <>
             <header id="header_bar">
                <img src={menuicon} id="menuicon"></img>
                <img src={bell} id="bell"></img>
             </header>
            <div id="main_post_header">
                <ul id="main_post_list">
                    <li className="bold">전체글</li>
                    <li>인기글</li>
                    <li>공지</li>
                </ul>
                <Link to="/cummunity_post"><img src={write} id="write"/></Link>
            </div>
        </>
    )
}

export default HeaderBar;