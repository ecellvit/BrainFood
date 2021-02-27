import React, { useEffect, useState } from "react";
import "./FocusColor.css";
function FocusColorElement({ scoreCard, setScoreCard }) {
  const [questionColor, setQuestionColor] = useState("");
  const [maxScore,setMaxScore] = useState(0);
  const colors = [
    "RED",
    "BLUE",
    "GREEN",
    "ORANGE",
    "PINK",
    "PURPLE",
    "BROWN",
    "YELLOW",
    "WHITE",
    "CYAN",
  ];
  var randomColorGenerator1,
    randomTextGenerator1,
    randomColorGenerator2,
    randomTextGenerator2,
    randomColorGenerator3,
    randomTextGenerator3,
    randomColorGenerator4,
    randomTextGenerator4,
    randomColorGenerator5,
    randomTextGenerator5,
    randomColorGenerator6,
    randomTextGenerator6,
    randomColorGenerator7,
    randomTextGenerator7,
    randomColorGenerator8,
    randomTextGenerator8,
    randomColorGenerator9,
    randomTextGenerator9,
    randomColorGenerator10,
    randomTextGenerator10;

  var textGenerator;
  var arr_text = [];
  var arr_color = [];

  while (arr_text.length < 10) {
    var r = Math.floor(Math.random() * colors.length);
    if (arr_text.indexOf(r) === -1) arr_text.push(r);
  }
  while (arr_color.length < 10) {
    var r = Math.floor(Math.random() * colors.length);
    if (arr_color.indexOf(r) === -1) arr_color.push(r);
  }

  randomColorGenerator1 = colors[arr_color[0]];
  randomTextGenerator1 = colors[arr_text[0]];
  randomColorGenerator2 = colors[arr_color[1]];
  randomTextGenerator2 = colors[arr_text[1]];
  randomColorGenerator3 = colors[arr_color[2]];
  randomTextGenerator3 = colors[arr_text[2]];
  randomColorGenerator4 = colors[arr_color[3]];
  randomTextGenerator4 = colors[arr_text[3]];
  randomColorGenerator5 = colors[arr_color[4]];
  randomTextGenerator5 = colors[arr_text[4]];
  randomColorGenerator6 = colors[arr_color[5]];
  randomTextGenerator6 = colors[arr_text[5]];
  randomColorGenerator7 = colors[arr_color[6]];
  randomTextGenerator7 = colors[arr_text[6]];
  randomColorGenerator8 = colors[arr_color[7]];
  randomTextGenerator8 = colors[arr_text[7]];
  randomColorGenerator9 = colors[arr_color[8]];
  randomTextGenerator9 = colors[arr_text[8]];
  randomColorGenerator10 = colors[arr_color[9]];
  randomTextGenerator10 = colors[arr_text[9]];

  textGenerator = [
    randomTextGenerator1,
    randomTextGenerator2,
    randomTextGenerator3,
    randomTextGenerator4,
    randomTextGenerator5,
    randomTextGenerator6,
    randomTextGenerator7,
    randomTextGenerator8,
    randomTextGenerator9,
    randomTextGenerator10,
  ];

  function refreshPage() {
    window.location.reload();
  }

  useEffect(() => {
    var q_color =
      textGenerator[Math.floor(Math.random() * textGenerator.length)];
    setQuestionColor(q_color);
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[Math.floor(Math.random() * voices.length)];
    msg.text = q_color;
    if(scoreCard!=-1)
    speechSynthesis.speak(msg);
  }, [scoreCard]);

  function handleClick(e) {
    if (e.target.innerText === questionColor) {
      setScoreCard(scoreCard + 1);
    } else {
      setMaxScore(scoreCard);
      setScoreCard(-1);
      
    }
  }

  return (
    <div>
      {scoreCard != -1 ? (
        <>
          <br />
          <div className="button-fc">
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator1,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator1}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator2,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator2}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator3,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator3}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator4,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator4}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator5,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator5}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator6,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator6}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator7,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator7}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator8,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator8}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator9,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator9}</p>
              </button>
            </div>
            <div className="play-fc">
              <button
                className="play-now-fc"
                style={{
                  color: randomColorGenerator10,
                  backgroundColor:
                    textGenerator[
                      Math.floor(Math.random() * textGenerator.length)
                    ],
                }}
                onClick={handleClick}
              >
                <p className="play-now-text-fc">{randomTextGenerator10}</p>
              </button>
            </div>
            <br />
            <br />
          </div>
          <p className="score-fc">Your score is: {scoreCard}</p>
        </>
      ) : (
        <>
          <p className="to-press">Game Over!</p>
          <p className="score-fc">Your score was: {maxScore}</p>
        </>
      )}
      <div className="play-su">
        <button className="play-now-su" onClick={refreshPage}>
          <p className="play-now-text-su">Play Again</p>
        </button>
      </div>
    </div>
  );
}

export default FocusColorElement;
