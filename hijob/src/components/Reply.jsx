import React from "react";
import "./Reply.css";
import dots from "../APP/dots-horizontal.png";

function Reply({name,contents,date,time}){
    return(
        <div id="reply_content">
            <div id="reply_name">
                <h4>{name}</h4>
                <img src={dots} id="dots-horizontal"/>
            </div>
            <p id="reply_contents_box">{contents}</p>
            <div id="reply_info">
                <span id="reply_date">{date}</span>
                <span id="reply_time">{time}</span>
            </div>
        </div>
    );
}

export default Reply;