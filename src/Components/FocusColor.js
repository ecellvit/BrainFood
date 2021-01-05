import React,{useState, useEffect} from "react";
import FocusColorElement from "./FocusColorElement";

function FocusColor(){

 const [counter, setCounter]=useState(5);
 const [colorNames,setColorNames]=useState([]);

 // useEffect(()=>{
 //   let myInterval= setInterval(()=>{
 //   setCount(count-1);
 //   if(count<=0){
 //    clearInterval(myInterval);
 //   }
 //  },1000)
 // })


 useEffect(() => {
   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
 }, [counter]);

  return (
    <div>
      <h1>1. Focus color </h1>
      <p >Game Starts in: {counter} </p>
      <FocusColorElement counter={counter} colorNames={colorNames} setColorNames={setColorNames} />
    </div>
  );
}



export default FocusColor;