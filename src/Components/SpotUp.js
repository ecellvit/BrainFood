import React, { useState, useEffect } from "react";
import "./SpotUp.css";

function SpotUp() {
  const [countChecker, setCountChecker] = useState(0);

  const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
  ];
  var arr = [];
  while (arr.length < 25) {
    var r = Math.floor(Math.random() * numbers.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  var a = arr.slice(0, 5);
  var b = arr.slice(5, 10);
  var c = arr.slice(10, 15);
  var d = arr.slice(15, 20);
  var e = arr.slice(20, 25);

  function handleClick(e) {
    let audio = new Audio("../clicksound.mp3");
    audio.play();
    if (e.target.innerText == countChecker) {
      if (countChecker != 24) {
        setCountChecker(countChecker + 1);
      } else setCountChecker("Bravo");
    } else {
      setCountChecker(0);
    }
  }

  return (
    <div>
      <h1 className="title-su">SPOT UP</h1>
      <p className="to-press">Number to press: {countChecker}</p>
      <div className="status">
        <div className="board-row">
          {a.map((ele) => {
            return (
              <button className="square" onClick={handleClick}>
                {ele}
              </button>
            );
          })}
        </div>
        <div className="board-row">
          {b.map((ele) => {
            return (
              <button className="square" onClick={handleClick}>
                {ele}
              </button>
            );
          })}
        </div>
        <div className="board-row">
          {c.map((ele) => {
            return (
              <button className="square" onClick={handleClick}>
                {ele}
              </button>
            );
          })}
        </div>
        <div className="board-row">
          {d.map((ele) => {
            return (
              <button className="square" onClick={handleClick}>
                {ele}
              </button>
            );
          })}
        </div>
        <div className="board-row">
          {e.map((ele) => {
            return (
              <button className="square" onClick={handleClick}>
                {ele}
              </button>
            );
          })}
        </div>
      </div>
      {/* <button className="play-now-1" onClick={handleClick}>
        RESET
      </button> */}
      <div className="play-su">
        <button className="play-now-su" onClick={handleClick}>
          <p className="play-now-text-su">RESET</p>
        </button>
      </div>
    </div>
  );
}

export default SpotUp;
