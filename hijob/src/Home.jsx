import React, { useDeferredValue } from "react";
import './Home.css';
import MenuBar from "./components/MenuBar";
import SearchBar from "./components/SearchBar";
import testimg from "./APP/testimage.png";
import jjang from "./APP/jjang.png";

function Home(){
    return(
        <div className="body">
            <div className="search">
                <SearchBar></SearchBar>
            </div>
    
            <div className="main_content">
                <img src={testimg} alt="메인이미지" className="main_img"/>
                <h1>추천공고</h1>
                <hr className="mainline"/>
                <div className="box">
                    <h2>영상제작 크루 모집</h2>
                    <h3>마감일 2023.05.12.<br/>조회수 1234</h3>
                </div>
                <hr className="mainline"/>
                <div className="box">
                    <h2>영상제작 크루 모집</h2>
                    <h3>마감일 2023.05.12.<br/>조회수 1234</h3>
                </div>
            </div>

            <img src={jjang} alt="광고이미지" className="ad_img"/> 

            <div className="main_content">
                <div className="box">
                    <h2>영상제작 크루 모집</h2>
                    <h3>마감일 2023.05.12.<br/>조회수 1234</h3>
                </div>
                <hr className="mainline"/>
                <div className="box">
                    <h2>영상제작 크루 모집</h2>
                    <h3>마감일 2023.05.12.<br/>조회수 1234</h3>
                </div>
            </div>

            <div className="menu_bar">
                <MenuBar></MenuBar>
            </div>
                
         

            <div className="lastblock"></div>
        </div>
    );
}

export default Home;