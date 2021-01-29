import React, { useState, useEffect } from "react";
import FocusColorElement from "./FocusColorElement";
import "./FocusColor.css";

function FocusColor() {
  const [counter, setCounter] = useState(5);
  const [scoreCard, setScoreCard] = useState(0);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      <h1 className="title-fc"> FOCUS COLOR </h1>
      {counter == 0 ? (
        <FocusColorElement scoreCard={scoreCard} setScoreCard={setScoreCard} />
      ) : (
        <p className="countdown-fc" >Game Starts in: {counter} </p>
      )}
    </div>
  );
}

export default FocusColor;
