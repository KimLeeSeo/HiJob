import React, { useDeferredValue } from "react";
import MenuBar from "./components/MenuBar";
import "./Cummunity_post.css";
import { Link } from "react-router-dom";
import arrow from "./APP/arrow-prev.png";

function Cummunity_post(){
    return(
        <>
        <div className="App">
             <heaer id="post_header">
                <Link to ="/cummunity" id="box">
                 <img src={arrow} id="arrow"/>
                 <div id="cummunity_button">커뮤니티</div>
                </Link>
             </heaer>
        </div>
        </>
        
    )
}

export default Cummunity_post;