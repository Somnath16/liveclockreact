import React from 'react';
import { useState } from 'react';
//import './App.css';

const GetTime = () => {

  let newTime = new Date().toLocaleTimeString();
  const [ctime, setLtime] = useState(newTime);
  
  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setLtime(newTime);
  }


  return (
    <>
    <div>
      <h1>{ctime}</h1>
      
      <button onClick = {UpdateTime}>Get Time</button>
      </div>
    </>
  );
}

export default GetTime;
