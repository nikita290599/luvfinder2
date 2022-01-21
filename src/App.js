import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useEffect,useState} from "react";
import axios from 'axios';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';

function App() {
  const [respData, updateResponse] = useState(null);
  const [url,seturl]=useState("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&category=meme-token&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d")
  const [currency,setCurrency]=useState("INR")
  const [index,setIndex]=useState(0);
  
  async function onSearchSubmit() {
    const response =await axios.get(url);
    updateResponse(response.data);
   
  }
  useEffect(()=>{
    setInterval(onSearchSubmit, 1000*60);
  },[])

  
  

  useEffect(() => {
    async function onSubmit() {
      seturl(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&category=meme-token&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
      const response =await axios.get(url);
      updateResponse(response.data);

    }
    onSubmit();
  }, [currency,url]); 
  return (
    <Router>
    <div className="container-fluid">
      <Navbar currency={currency} setCurrency={setCurrency} index={index} setIndex={setIndex} ></Navbar>
      <Routes>
        <Route path="/" element={<Body response={respData} index={index}/>} />
        
        
      </Routes>
      <footer>
       <div className='d-flex justify-content-center align-items-center' style={{color:"lightgrey" ,margin:"5vw 10vw 1vw 10vw"}}><div>© 2021 <a href="https://luvinu.io/">LUVFINDER</a> All Right Reserved</div>  <div style={{color:"#1DA1F2", fontSize:"20px", width:"10%"}}><a href="https://twitter.com/LuvInuCoin"><i className="fab fa-telegram-plane " style={{marginLeft:"10px"}}></i></a></div></div>
     </footer>
    </div>
  </Router>
    
    
  );
}

export default App;
