import React from "react";
import MenuBar from "./components/MenuBar";
import SimplePost from "./components/CummunitySimplePost";
import bell from "./APP/bell.png";
import write from"./APP/write.png";
import "./Cummunity.css";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";

import { firestore } from './firebase';
import firebase from "firebase/compat/app"

function Cummunity(){
    const SelectMenu=()=>{
        
    }

    const [user, setUser] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          //ID 가져오기
          const snapshot = await firebase.firestore().collection('Community').get();
          const newId = snapshot.docs.map(doc => doc.id);
          setId(newId);
          console.log(id);

          //Data 가져오기
          const newData = snapshot.docs.map(doc => doc.data());
          setUser(newData);
          
          console.log(user);
        };
    
        fetchData();
      }, []);
    
    return(
        <>
        <div id="container">
             <header id="header_bar">
                <img src={bell} id="bell"></img>
             </header>
            <div id="main_post_header">
                <ul id="main_post_list">
                    <Link to="/cummunity" className="link"><li className="bold" onClick={SelectMenu}>전체글</li></Link>
                    <Link to="/most_post" className="link"><li className =""  onClick={SelectMenu}>인기글</li></Link>
                    <Link to="/notice" className="link"><li className ="" onClick={SelectMenu}>공지</li></Link>
                </ul>
                <Link to="/new_post"><img src={write} id="write"/></Link>
            </div>
            <div id="cummunity_main_post">
                <div id="cummunity_post_box">
                    {user.map((item) => (
                        <SimplePost 
                            title= {item.name}
                            author={item.writer}
                            time={"15:43"}
                            count={item.count}
                            like={item.like}
                            reply={item.reply}
                            content={item.content}
                     />
                ))}
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
