import React,{useRef} from "react";
import MenuBar from "./components/MenuBar";
import menuicon from "./APP/align-justify.png";
import bell from "./APP/bell.png";
import write from"./APP/write.png";
import "./Cummunity.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cummunity(props){
    const [isAllValid,setIsAllVaild] =useState();
    const SelectMenu=()=>{
        
    }
    return(
        <>
        <div className="App">
             <header id="header_bar">
                <img src={menuicon} id="menuicon"></img>
                <img src={bell} id="bell"></img>
             </header>
            <div id="main_post_header">
                <ul id="main_post_list">
                    <li className="bold" onClick={SelectMenu}>전체글</li>
                    <li className =""  onClick={SelectMenu}>인기글</li>
                    <li className ="" onClick={SelectMenu}>공지</li>
                </ul>
                <Link to="/new_post"><img src={write} id="write"/></Link>
            </div>
            <div id="main_post">

            </div>
            <Link to="/new_post"><button id="writing_button">글쓰기</button></Link>
            <MenuBar className="menubar"/>
        </div>
        </>
        
    )
}

export default Cummunity;