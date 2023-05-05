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
            <Link to="/menu" id="_bar"><img src={menu} alt="메뉴" className="icon"/>메뉴</Link>
            <Link to="/cummunity" id="_bar"><img src={chat_writing} alt="커뮤니티" className="icon"/>커뮤니티</Link>
            <Link to="/home" id="_bar"><img src={home} alt="홈" className="icon"/>홈</Link>
            <Link to="/resume" id="_bar"><img src={document} alt="이력서" className="icon"/>이력서</Link>
            <Link to="/mypage" id="_bar"><img src={user} alt="마이페이지" className="icon"/>마이페이지</Link>
        </div>
    )
}

export default MenuBar;