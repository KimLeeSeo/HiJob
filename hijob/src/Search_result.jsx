import React from 'react'
import './Search_result.css'
import heart from "./APP/heart.png";
import redheart from "./APP/redheart.png";
import whbell from "./APP/bell.png";
import { useLocation } from 'react-router-dom';

import { useState } from "react";


export default function Search_result() {
  const [imgSrc,setimgSrc]=useState(heart);
  const [isClick,setisClick]=useState(false);
 const location = useLocation();
  const ChangeColor=()=>{
        if(isClick){
            setimgSrc(redheart);
            setisClick(false);
        }else{
            setimgSrc(heart);
            setisClick(true);
        }
    }

    const title = location.state.title;
    const content = location.state.content;
    const [htmlString, setHtmlString] = useState(content);

    return (
    <div className='search_body'>
      <div className='result_header'>
        <img src={whbell} className='bell_icon' id="bell_button"/>
      </div>
      <div className='result_content'>
        <h1>
          {title}
        </h1>
        <hr/>
        
        <h2>
          공고일
        </h2>
        <h3>
          2023. 05.06.
        </h3>

        <h2>
          작성자명
        </h2>
        <h3>
          서은서
        </h3>
        
        <h2>
          [모집요강]
        </h2>
        <h3 dangerouslySetInnerHTML={{ __html: htmlString }} id="search_result_content"></h3>
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
