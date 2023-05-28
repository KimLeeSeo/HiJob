import React from "react";
import { useLocation } from "react-router-dom";
import "./CummunityDetailPost.css"
import chat from "../APP/chat-gray.png";
import seventeen from "../APP/Seventeen.png";
import heart from "../APP/heart.png";
import redheart from "../APP/redheart.png";
import Reply from "./Reply"
import { useState } from "react";

function CummunityDetailPost(){
    const location =useLocation();
    const [imgSrc,setimgSrc]=useState(heart);
    const [isClick,setisClick]=useState(false);

    const ChangeColor=()=>{
        if(isClick){
            setimgSrc(redheart);
            setisClick(false);
        }else{
            setimgSrc(heart);
            setisClick(true);
        }
    }

    if(location.state){
        const title = location.state.title;
        const author = location.state.author;
        const time = location.state.time;
        const count = location.state.count;
        const like = location.state.like;
        const reply = location.state.reply;
        const content = location.state.content;
        
        return(
            <div id="detail_post_content">
                <div className="datailpost_container">
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
                    <hr className="mainline"/>
                </div>

                <div id="detail_post_box"> 
                    <div id="detail_post">
                        {content}
                    </div>
                    <hr className="mainline"/>
                    <div id="like_container">
                        <img src={imgSrc} id="like_button" alt="좋아요" onClick={ChangeColor}/>
                        <span id="post_like">좋아요</span>
                    </div>

                    <form id="reply_container">
                        <div id="whitebox">
                            <textarea name="reply" form="reply_container" placeholder="광고성 글, 비방글 등은 사전 동의없이 삭제될 수 있습니다."  id="reply_input" rows="9"></textarea>
                        </div> 
                       <hr className="mainline" id="post_line"/>
                        <input type="submit" id="post_submit_button" value="등록"></input>
                    </form>

                    <div id="reply_count">
                        <img src={chat} id="chat_icon" alt="채팅"/>
                        <span id="post_chat">{reply}개의 댓글이 있습니다.</span>
                    </div>
                    <hr className="mainline"/>
                    <div id="replies">
                        <Reply name={"익명"} 
                        contents={"Say, say, say, say영웅본색 like this시간과 공간에 구애받지 않는 자세힘을 다하고 쓰러져도포기를 모르고 날뛰는 중 Say, say, say, say영웅본색 like this시간과 공간에 구애받지 않는 자세힘을 다하고 쓰러져도포기를 모르고 날뛰는 중 Say, say, say, say영웅본색 like this시간과 공간"} 
                        date={"2023.05.05"} time={"16:18"}/>
                    </div>
                    <hr className="mainline"/>
                </div>
            </div>
    )
    }else{
        return null;
    }
}

export default CummunityDetailPost;