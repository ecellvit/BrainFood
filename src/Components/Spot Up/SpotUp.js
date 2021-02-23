import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SpotUp.css";
function SpotUp() {
  const [countChecker, setCountChecker] = useState(0);
  const [timer, setTimer] = useState(5);

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

  const handleClick = (e) => {
    let audio = new Audio("../audios/clicksound.mp3");
    audio.play();
    if (e.target.innerText == countChecker) {
      if (countChecker < 24) {
        setCountChecker((prev) => prev + 1);
      } else {
        let vict = new Audio("../audios/victory.mp3");
        vict.play();
        setCountChecker((prev) => prev + 1);
      }
      setTimer(5);
    } else {
      setCountChecker(0);
      setTimer(0);
    }
  };

  function refreshPage() {
    window.location.reload();
  }

  const [a, seta] = useState([0, 0, 0, 0, 0]);
  const [b, setb] = useState([0, 0, 0, 0, 0]);
  const [c, setc] = useState([0, 0, 0, 0, 0]);
  const [d, setd] = useState([0, 0, 0, 0, 0]);
  const [e, sete] = useState([0, 0, 0, 0, 0]);

  const countDn = () => {
    setInterval(
      () =>
        setTimer((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return prev;
          }
        }),
      1000
    );
  };

  useEffect(() => {
    while (arr.length < 25) {
      var r = Math.floor(Math.random() * numbers.length);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    seta([...arr.slice(0, 5)]);
    setb([...arr.slice(5, 10)]);
    setc([...arr.slice(10, 15)]);
    setd([...arr.slice(15, 20)]);
    sete([...arr.slice(20, 25)]);
  }, [countChecker]);

  useEffect(() => {
    countDn();
  }, []);

  return (
    <div className="container">
      <span className="top-bar">
        <Link to="/games" className="back-button">
          <h1>GAMES</h1>
        </Link>
        <h1>&nbsp;/&nbsp;SPOT UP</h1>
      </span>
      {countChecker <= 24 ? (
        timer != 0 ? (
          <div className="to-press">Timer : {timer}</div>
        ) : (
          <p className="to-press">Time's Up</p>
        )
      ) : (
        <p></p>
      )}
      <p className="to-press">
        {countChecker <= 24 ? <p>Find {countChecker}</p> : <p>Congratulations!</p>}
      </p>
      {timer != 0 ? (
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
      ) : (
        <p className="to-press">GAME OVER!</p>
      )}
      {/* <span>{timer == 0 ? <p>GAME OVER! </p> : <p></p>}</span> */}
      <div className="play-su">
        <button className="play-now-su" onClick={refreshPage}>
          <p className="play-now-text-su">Play Again</p>
        </button>
      </div>
    </div>
  );
}

export default SpotUp;
