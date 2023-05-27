import React from "react";
import "./CummunitySimplePost.css";
import "./List.css";
import { Link } from "react-router-dom";

function List({title,author,time,count,like,content}){
    return(
        <>
        <Link to="/Search_result" state={{title,author,time,count,like,content}} style={{textDecoration:"none", color:"black"}}>
            <div className="list_container">
                <div id="list_box">
                    <div id="title">{title}</div>
                    <div id="small_box1"><span id="list_author">작성자:{author}</span> <span id="list_time">마감기한:{time} </span></div>
                    <div id="small_box2"><span id="list_count">조회수:{count} </span><span id="list_like">추천수:{like}</span></div>
                </div>
            </div> 
        </Link>
            <hr className="mainline"/>
       
        </>
    );
}

export default List;