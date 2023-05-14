import React from "react";
import logo from './APP/logo.png';
import "./FirstPage.css";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";

function FirstPage(){
    return(
    <Link to="/home">
      <div className="App">
        <header className="header">
          <img src={logo} className='header-logo' alt='React' />
          <div className="header-txt">세계인의 구직정보를 모아</div>
        </header>
      </div>
    </Link>
    
    );
}

export default FirstPage;