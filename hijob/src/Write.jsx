import React from "react";
import "./Write.css";
import menuicon from "./APP/align-justify.png";
import bell from "./APP/bell.png";
import line from "./APP/Line 1.png";

function Write(){
    return(
        <div className="App">
            <header id="header_bar">
                <img src={menuicon} id="menuicon"></img>
                <img src={bell} id="bell"></img>
            </header>
            <form id="new_post">
                
                <button type="submit" id="submit_new_post">게시하기</button>
            </form>
        </div>
    )
}

export default Write;