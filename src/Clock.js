import React from 'react';
import { useState } from 'react';
import './Clock.css'


const Clock = () => {

  let newTime = new Date().toLocaleTimeString();


  const [ctime, setLtime] = useState(newTime);

  const UpdateTime =() =>{
    newTime = new Date().toLocaleTimeString();
      setLtime(newTime);
  };

  setInterval(UpdateTime,100);


  return (
    <>
      <h1 className='clock'>{ctime}</h1>
    </>
  );
}

export default Clock;
