import './App.css';
import {BrowserRouter, Route,Routes } from "react-router-dom";
import FirstPage from './FirstPage';
import Cummunity from './Cummunity';
import Home from './Home';
import MyPage from './MyPage';
import Menu from './Menu';
import Resume from './Resume';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={FirstPage}/>
      <Route path="/menu" Component={Menu}/>
      <Route path="/cummunity" Component={Cummunity}/>
      <Route path="/home" Component={Home}/>
      <Route path="/resume" Component={Resume} />
      <Route path="/mypage" Component={MyPage}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
