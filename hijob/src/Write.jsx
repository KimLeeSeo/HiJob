import React from "react";
import "./Write.css";
import menuicon from "./APP/align-justify.png";
import bell from "./APP/bell.png";
import line from "./APP/Line 1.png";
import MenuBar from "./components/MenuBar";

function Write(){
    return(
        <div id="container">
            <header id="header_bar">
                <img src={menuicon} id="menuicon"></img>
                <img src={bell} id="bell"></img>
            </header>
            <form id="new_post">
                <input></input>
                <img src={line} alt="line" id="title_line"/>
                <input></input>
                <button type="submit" id="submit_new_post">게시하기</button>
            </form>

        </div>
    )
}

export default Write;