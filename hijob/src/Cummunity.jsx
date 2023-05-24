import React from "react";
import MenuBar from "./components/MenuBar";
import SimplePost from "./components/CummunitySimplePost";
import bell from "./APP/bell.png";
import write from"./APP/write.png";
import "./Cummunity.css";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import {parseString} from 'xml2js';


function Cummunity(){
    const [isAllValid,setIsAllVaild] =useState();
    const SelectMenu=()=>{
        
    }

    const [global,setGlobal] = useState([]);
    useEffect(()=>{
      const url = "http://openapi.seoul.go.kr:8088/4d635141516a656f3131337278414b77/xml/GlobalJobSearch/1/5/";
      fetch(url)
      .then((res)=> res.text())
      .then((resText)=>{
          parseString(resText,(err,result)=>{
              if(err !== null){
                  console.log("fail get data.");
              }else{
                  setGlobal(result);
              }
          });
      })
      .catch((e)=>{
          console.log("Error fetching the feed: ",e);
      });
  },[]);

    console.log(global);

    return(
        <>
        <div id="container">
             <header id="header_bar">
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
            <div id="cummunity_main_post">
                <div id="cummunity_post_box">
                    <SimplePost title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} reply={2}/>
                    <SimplePost title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} reply={0}/>
                    <SimplePost title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} reply={0}/>
                    <SimplePost title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} reply={0}/>
                    <SimplePost title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} reply={0}/>
                    <SimplePost title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} reply={0}/>
                    <SimplePost title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} reply={0}/>
                    <SimplePost title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} reply={0}/>
                </div>
            </div>
            <div id="container_writing_button">
                <div id="writing_button">
                    <Link to="/new_post"><button id="writing">글쓰기</button></Link>
                </div>
            </div>
            <div className="menu_bar">
                <MenuBar></MenuBar>
            </div>
        </div>
        </>
        
    )
}

export default Cummunity;