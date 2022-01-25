import React from "react";

let currDate = new Date();
currDate = currDate.getHours();
let msg = '';

if(currDate >=1 && currDate <12){
    msg = 'Good Morning!';
}else if(currDate>=12 && currDate <18){
    msg = 'Good Afternoon!';
}else if(currDate>=18 && currDate <21){
    msg = 'Good Evening!';
}
else{
    msg= 'Good Night!';
}

const Welcome = () => {
    return (
    <h1 className="msg">Hi Somnath,  {msg} 😃 </h1>
    );
  }

  export default Welcome;