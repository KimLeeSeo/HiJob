import './App.css';
import logo from './APP/logo.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className='header-logo' alt='React' />
        <div className="header-txt">세계인의 구직정보를 모아</div>
      </header>
    </div>
  );
}

export default App;
