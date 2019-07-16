import React from 'react';
import logo from './logo.svg';
import './App.css';
import style from "./style.css";
import image1 from "./image1.gif"   
import image2 from "./image2.jpg"
function App() {
  return (
    <div style={{border:'solid 1px black;maxWidth:100vw'}}>
 
      <h1 className="red">My title</h1>
      <img src={image1} />
      <br>
      
      
      </br>
      <img src={image2} />
  
      
    </div>
  );
}

export default App;
