import './App.css';
import {BrowserRouter, Route,Routes } from "react-router-dom";
import FirstPage from './FirstPage';
import Cummunity from './Cummunity';
import Cummunity_post from './Cummnity_post';
import Home from './Home';
import MyPage from './MyPage';
import Menu from './Menu';
import Resume from './Resume';
import Write from './Write';
import {parseString} from 'xml2js';

function App() {
  const url = "http://openapi.seoul.go.kr:8088/4d635141516a656f3131337278414b77/xml/GlobalJobSearch/1/5/";
    fetch(url)
    .then((res)=> res.text())
    .then((resText)=>{
        parseString(resText,(err,result)=>{
            if(err !== null){
                console.log("fail get data.");
            }else{
                console.log(result);
            }
        });
    })
    .catch((e)=>{
        console.log("Error fetching the feed: ",e);
    })
    
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={FirstPage}/>
      <Route path="/menu" Component={Menu}/>
      <Route path="/cummunity" Component={Cummunity}/>
      <Route path="/cummunity_post" Component={Cummunity_post}/>
      <Route path="/new_post" Component={Write}/>
      <Route path="/home" Component={Home}/>
      <Route path="/resume" Component={Resume} />
      <Route path="/mypage" Component={MyPage}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
