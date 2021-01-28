import React,{useState, useEffect} from "react";
import FocusColorElement from "./FocusColorElement";

function FocusColor(){

 const [counter, setCounter]=useState(5);
 const [scoreCard, setScoreCard]=useState(0);

 useEffect(() => {
   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
 }, [counter]);

  return (
    <div>
      <h1>1. Focus color </h1>
      {counter == 0 ? (
        <FocusColorElement
          scoreCard={scoreCard}
          setScoreCard={setScoreCard}
        />
      ) : (
        <p>Game Starts in: {counter} </p>
      )}
    </div>
  );
}



export default FocusColor;