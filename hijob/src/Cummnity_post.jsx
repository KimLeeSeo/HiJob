import React, { useDeferredValue } from "react";
import MenuBar from "./components/MenuBar";
import "./Cummunity_post.css";
import { Link } from "react-router-dom";
import arrow from "./APP/arrow-prev.png";
import chat from "./APP/chat-writing.png";
import CummunityDetailPost from "./components/CummunityDetailPost";
import seventeen from "./APP/Seventeen.png";
import heart from "./APP/heart.png";

function Cummunity_post(){
    return(
        <>
        <div id="container">
             <heaer id="post_header">
                <Link to ="/cummunity" id="box">
                 <img src={arrow} id="arrow"/>
                 <div id="cummunity_button">커뮤니티</div>
                </Link>
             </heaer>

            <div id="cummunity_datail_post"> 
                 <CummunityDetailPost/>
            </div>
            
            <div className="menu_bar">
                <MenuBar></MenuBar>
            </div>
        </div>
        </>
        
    )
}

export default Cummunity_post;