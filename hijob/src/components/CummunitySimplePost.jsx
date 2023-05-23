import React from "react";
import "./CummunitySimplePost.css";
import { Link } from "react-router-dom";

function SimplePost({title,author,time,count,like,reply}){
    
    return(
        <>
        <Link to="/cummunity_post" state={{title,author,time,count,like,reply}} style={{textDecoration:"none", color:"black"}}>
            <div className="post_container">
                <div id="text_box">
                    <h2>{title}</h2>
                    <div><span id="cummunity_author">{author}</span> <span id="cummunity_time">{time} </span></div>
                    <div><span id="cummunity_count">조회수 {count} </span><span id="cummunity_like">추천수 {like}</span></div>
                </div>
                <div id="reply_box">
                    <h4>{reply}</h4>
                    <span id="cummunity_reply">댓글</span>
                </div>
            </div> 
        </Link>
            <hr className="mainline"/>
       
        </>
    );
}

export default SimplePost;