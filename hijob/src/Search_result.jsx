import React from 'react'
import './Search_result.css'
import heart from "./APP/heart.png";
import redheart from "./APP/redheart.png";

import { useState } from "react";


export default function Search_result() {
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

  return (
    <div className='search_body'>
      <div className='result_header'>

      </div>
      <div className='result_content'>
        <h1>
          [네이버 웹툰] 웹툰작가 모집
        </h1>
        <hr/>
        <h2>
          모집요강
        </h2>
        <h3>
        Unforgiven I'm a villain I'm a Unforgiven 난 그 길을 걸어 Unforgiven I'm a villain I'm a 새 시대로 기억될 unforgiven Yeah what you want? 불편함이 깃든 face, wanna shut me up 사냥감을 거듭해 찾는 워리어S 너의 game에 난 문제아 such a freak 골칫거리 Let me tell you 'bout LE SSERAFIM 내가 제일 싫은 건 낡은 대물림 어둠 속 불을 켜 마치 rebellion We gonna kick it break it rules gon' give up Unforgiven yes I was bleeding 힘없이 늘 져야만 했던 싸움 but I ride 바란 적도 없어 용서 따위는 난 금기를 겨눠 watch me now Now now now ...
        </h3>
      </div>
      
      <div className="bar_body">
          <div className='like_bar'>
          <img src={imgSrc} className='like_icon' id="like_button" alt="좋아요" onClick={ChangeColor}/>
            <div className='bar_txt'>좋아요</div>
            </div>
          <div className='accept_bar'>
            <div className='bar_txt'>지원하기</div>
          </div>
      </div>
    </div>
  )
}
