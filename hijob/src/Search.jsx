import React from 'react'
import './Home.css';
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import MenuBar from "./components/MenuBar";

function Search() {
  return (
    <div className="body">
        <div className="search">
            <SearchBar></SearchBar>
        </div>
        <List title={"영상제작 크루 팀원 모집"} author={"익명"} time={"15:43"} count={3} like={19} />
        <div className="menu_bar">
            <MenuBar></MenuBar>
        </div>
    </div>
  )
}
export default Search;