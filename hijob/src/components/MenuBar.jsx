import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";
import menu from "../APP/menu.png";
import chat_writing from "../APP/chat-writing.png";
import home from "../APP/home.png";
import document from "../APP/document.png";
import user from "../APP/user.png";
import { Outlet } from "react-router-dom";

function MenuBar(){
    return( 
        <div className="bar"> 
            <Link to="/cummunity" id="_bar"><img src={chat_writing} alt="커뮤니티" className="icon"/></Link>
            <Link to="/home" id="_bar"><img src={home} alt="홈" className="icon"/></Link>
            <Link to="/mypage" id="_bar"><img src={user} alt="마이페이지" className="icon"/></Link>
        </div>
    )
}

export default MenuBar;