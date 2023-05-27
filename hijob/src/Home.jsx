import React, { useDeferredValue } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Router } from "react-router-dom";
import { firestore } from './firebase';
import { useEffect } from 'react';

import List from "./components/List";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0} //슬라이스 간격
                    slidesPerView={1} //슬라이스 개수
                    //navigation
                    pagination={{ clickable: false }}
                    //</div>scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide> <img src={testimg} alt="메인이미지" className="main_img"/> </SwiperSlide>
                    <SwiperSlide> <img src={jjang} alt="메인이미지" className="main_img"/> </SwiperSlide>
                    <SwiperSlide> <img src={testimg} alt="메인이미지" className="main_img"/> </SwiperSlide>
                </Swiper>
                
                <h1>추천공고</h1>
                <hr className="mainline"/>
                <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />
                <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />
                <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />
                <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />
            </div>

            <img src={jjang} alt="광고이미지" className="ad_img"/> 
            <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />
            <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />
            <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />
            <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />

            <div className="menu_bar">
                <MenuBar></MenuBar>
            </div>
         
            <div className="lastblock"></div>
        </div>
    );
}

export default Home;