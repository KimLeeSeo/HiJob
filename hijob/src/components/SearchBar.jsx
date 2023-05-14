import React from "react";
import "./SearchBar.css";
import menu_b from "../APP/menu_black.png";
import bell from "../APP/bell_black.png"; 
import search from "../APP/search.png"; 

function SearchBar(){
    return( 
        <div className="Sbar">
            <img src={menu_b} alt="메뉴" className="top_icon_1"/>
            <img src={bell} alt="알림" className="top_icon_2"/>
            
            <div className="searchbox">
                <img src={search} alt="검색" className="search_icon"/>
                <input/>
            </div> 
        </div>
    )
}

export default SearchBar;