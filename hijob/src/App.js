import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./FirstPage";
import Cummunity from "./Cummunity";
import Cummunity_post from "./Cummnity_post";
import Home from "./Home";
import MyPage from "./MyPage";
import Menu from "./Menu";
import Resume from "./Resume";
import Write from "./Write";
import Login from "./Login";
import SignUp from "./SignUp";
import SignUp2 from "./SignUp_2";
import Search_result from "./Search_result";
import Search from "./Search";

import axios from "axios";
import {useState, useEffect } from "react";

function App() {
  const [jobdata,setJobdata] = useState([]);
  const [data,setData] = useState([]);
  const readJobdata = async() =>{
    const {data} = await axios.get("http://localhost:4000/api/jobdata");
    setJobdata(data);
    setData(data.GlobalJobSearch.row);
  };
  useEffect(()=>{
    (async()=>{
      await readJobdata();
    })();
  },[]);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={FirstPage} />
        <Route path="/menu" Component={Menu} />
        <Route
          path="/cummunity"
          Component={Cummunity}
          globalData={global.GlobalJobSerach}
        />
        <Route path="/cummunity_post" Component={Cummunity_post} />
        <Route path="/new_post" Component={Write} />
        <Route path="/home" Component={Home} data={data}/>
        <Route path="/resume" Component={Resume} />
        <Route path="/mypage" Component={MyPage} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/signup2" Component={SignUp2} />
        <Route path="/Search_result" Component={Search_result} />
        <Route path="/search" Component={Search}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
