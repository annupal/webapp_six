import logo from './logo-n.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Homepage } from './pages/homepage';
import { Aboutpage } from './pages/aboutpage';
import { Services } from './pages/services';
import JsonData from './data/data.json'


function App() {

const[Pagedata,Setpagedata] = useState({});
useEffect(  () =>{
  Setpagedata(JsonData)
},[]  )

  return (
    <div className="container">
<Router>
      <div className='App-header'>
        <img src={logo} className='App-logo'/>
        <nav className='navigation-menu'>
          <ul>
          <li><Link to={"/"}>Home</Link>  </li>
          <li><Link to={"/about"}>About</Link>  </li>
          <li><Link to={"/services"}>Services</Link>  </li>
          </ul>
        </nav>
      </div>

    <Routes>
<Route path='/' element={<Homepage data={Pagedata.Homepage}/>}></Route>
<Route path='/about' element={<Aboutpage data={Pagedata.Aboutpage}/>}></Route>
<Route path='/services' element={<Services data={Pagedata.Services}/>}></Route>
    </Routes>
      </Router>
      
    </div>
  );
}

export default App;
