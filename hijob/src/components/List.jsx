import React from "react";
import "./CummunitySimplePost.css";
import "./List.css";
import { Link } from "react-router-dom";

function List({title,author,time,count,like}){
    return(
        <>
        <Link to="/cummunity_post" state={{title,author,time,count,like}} style={{textDecoration:"none", color:"black"}}>
            <div className="list_container">
                <div id="list_box">
                    <h2>{title}</h2>
                    <div><span id="list_author">{author}</span> <span id="list_time">{time} </span></div>
                    <div><span id="list_count">조회수 {count} </span><span id="list_like">추천수 {like}</span></div>
                </div>
            </div> 
        </Link>
            <hr className="mainline"/>
       
        </>
    );
}

export default List;