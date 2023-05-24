import React, { useState } from "react";
import "./SearchBar.css";
import bell from "../APP/bell_black.png"; 
import search from "../APP/search.png";


function SearchBar(){
    const [search_data, setSearch] = useState("");
    
    /*const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };  onChange={{onChangeSearch}}*/
    
    console.log(search);

    return( 
        <div className="Sbar">
            <img src={bell} alt="알림" className="top_icon_2"/>
            
            <div className="searchbox">
                <img src={search} alt="검색" className="search_icon"/>
                <input type="text" value={search_data} placeholder="검색어를 입력하세요." />
            </div> 
        </div>
    )
}

export default SearchBar;