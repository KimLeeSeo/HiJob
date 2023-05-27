import React from "react";
import "./Write.css";
import bell from "./APP/bell.png";
import line from "./APP/Line 1.png";
import { Link } from "react-router-dom";
import arrow from "./APP/arrow-prev.png";
import { useState , useEffect} from "react";

import { firestore } from './firebase';
import { getDatabase, ref, set } from "firebase/database";

function Write(){
    const [name,setName] = useState("");
    const [content,setContent] = useState("");
    
    const onChangeTitle = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };
    const onChangeContent = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    };

    const commu = firestore.collection("Community");

    const writeUserData=() => {
        commu.doc("test").set({
            name: name,
            content: content,
            writer: "익명",
            like : 0,
            count : 0,
            reply :0,
            img : ""
        });
      }

    return(
        <div id="container">
            <header id="header_bar">
                <Link to ="/cummunity" id="box">
                    <img src={arrow} id="arrow"/>
                    <div id="cummunity_button">커뮤니티</div>
                </Link>
                <img src={bell} id="bell"></img>
            </header>
            <div id="new_post_container">
                <form id="new_post">
                    <input placeholder="제목" id="new_post_title" onChange={onChangeTitle}></input>
                    <img src={line} alt="line" id="title_line"/>
                    <textarea placeholder="내용을 입력하세요" id="new_post_content" form="new_post" onChange={onChangeContent}></textarea>
                    <Link to ="/cummunity" id="box">
                        <button type="submit" id="submit_new_post" onClick={writeUserData()}>게시하기</button>
                    </Link>
                    
                </form>
            </div>
        </div>
    )
}

export default Write;