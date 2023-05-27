import React from "react";
import MenuBar from "./components/MenuBar";
import SimplePost from "./components/CummunitySimplePost";
import bell from "./APP/bell.png";
import write from"./APP/write.png";
import "./Cummunity.css";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";

import { firestore } from './firebase';

function Cummunity(){
    const [isAllValid,setIsAllVaild] =useState();
    const SelectMenu=()=>{
        
    }

    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userDoc = await firestore.collection('Community').doc("test").get();
            setUser(userDoc.data());

            console.log(user);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);


     



    
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
                    <SimplePost title={user.name} author={"익명"} time={"15:43"} count={user.count} like={user.like} reply={user.reply}/>
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