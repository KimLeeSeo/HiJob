import React from "react";
import MenuBar from "./components/MenuBar";
import "./MyPage.css";
import bell from "./APP/bell.png";
import usericon from "./APP/userIcon.png";
import setting from "./APP/setting.png";
import mypage1 from "./APP/mypage1.png";
import mypage2 from "./APP/mypage2.png";
import mypage3 from "./APP/mypage3.png";
import mypage4 from "./APP/mypage4.png";
import mypage5 from "./APP/mypage5.png";
import mypage6 from "./APP/mypage6.png";
import mypage7 from "./APP/mypage7.png";
import mypage8 from "./APP/mypage8.png";

export default function MyPage() {
  return (
    <div id="container_mypage">
      <header id="header_bar_mypage">
        <img src={bell} id="bell" alt="bell" />
      </header>
      <div className="block_1">
        <div className="block_1_1">
          <img src={usericon} alt="userIcon" className="userIconPNG_mypage" />
          <div className="block_1_text">안녕하세요 익명님</div>
          <div className="setting_block1">
            <div className="block_1_setting">
              <img src={setting} alt="setting" className="setting-icon" />
            </div>
          </div>
        </div>
        <div className="block_1_2">
          <div className="btn_block">
            <img src={mypage1} alt="mypage1" className="btn_block_img_1" />
            <div className="btn_block_div_1">이력서</div>
          </div>
          <div className="btn_block">
            <img src={mypage2} alt="mypage2" className="btn_block_img_2" />
            <div className="btn_block_div_1">지원현황</div>
          </div>
          <div className="btn_block">
            <img src={mypage3} alt="mypage3" className="btn_block_img_3" />
            <div className="btn_block_div_1">문의하기</div>
          </div>
        </div>
        <div className="line_mypage"></div>
        <div className="block_2">
          <div className="block_2_text_1">커뮤니티</div>
          <div className="block_2_text_2">
            <div className="text_2_div1">내가 쓴 글</div>
            <div className="text_2_div2">0</div>
          </div>
          <div className="block_2_text_2">
            <div className="text_2_div1">내가 쓴 댓글</div>
            <div className="text_2_div2">0</div>
          </div>
        </div>
        <div className="line_mypage"></div>
        <div className="block_3">
          <div className="block_3_div">
            <img src={mypage4} alt="mypage4" className="block3_img1" />
            <div className="block3_text">공지사항</div>
          </div>
          <div className="block_3_div">
            <img src={mypage5} alt="mypage4" className="block3_img1" />
            <div className="block3_text">개인정보처리방침</div>
          </div>
          <div className="block_3_div">
            <img src={mypage6} alt="mypage4" className="block3_img1" />
            <div className="block3_text">서비스 이용 약관</div>
          </div>
          <div className="block_3_div">
            <img src={mypage7} alt="mypage4" className="block3_img1" />
            <div className="block3_text">환경설정</div>
          </div>
          <div className="block_3_div">
            <img src={mypage8} alt="mypage4" className="block3_img1" />
            <div className="block3_text">버전 정보 v.2.12</div>
          </div>
        </div>
      </div>
      <div className="menu_bar">
        <MenuBar />
      </div>
    </div>
  );
}
