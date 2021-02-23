import React, { useState,useEffect } from "react";

function Timer({countChecker}) {
 const [timer,setTimer] = useState(5);
 useEffect(()=>{
  handleEvent();
 },[countChecker])
 function handleEvent(){
   timer>0 && setTimeout(() => setTimer(timer - 1), 1000);
 }
 return (
  <div>{timer}</div>
 );
}
export default Timer;