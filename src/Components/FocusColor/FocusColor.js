import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <span className="top-bar">
        <Link to="/games" className="back-button">
          <h1>GAMES</h1>
        </Link>
        <h1>&nbsp;/&nbsp;FOCUS COLOR</h1>
      </span>
      {counter == 0 ? (
        <FocusColorElement scoreCard={scoreCard} setScoreCard={setScoreCard} />
      ) : (
        <p className="countdown-fc">Game Starts in: {counter} </p>
      )}
    </div>
  );
}

export default FocusColor;
