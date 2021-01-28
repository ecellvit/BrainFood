import React, { useEffect, useState } from "react";

function FocusColorElement({ scoreCard, setScoreCard }) {
  const [questionColor, setQuestionColor] = useState("");

  const colors = ["red", "blue", "green", "orange", "Pink", "Purple", "Brown"];
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
    randomTextGenerator7;
  var textGenerator;
  var arr_text = [];
  var arr_color = [];

  while (arr_text.length < 7) {
    var r = Math.floor(Math.random() * colors.length);
    if (arr_text.indexOf(r) === -1) arr_text.push(r);
  }
  while (arr_color.length < 7) {
    var r = Math.floor(Math.random() * colors.length);
    if (arr_color.indexOf(r) === -1) arr_color.push(r);
  }

  console.log(arr_text);
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

  textGenerator = [
    randomTextGenerator1,
    randomTextGenerator2,
    randomTextGenerator3,
    randomTextGenerator4,
    randomTextGenerator5,
    randomTextGenerator6,
    randomTextGenerator7,
  ];

  useEffect(() => {
    var q_color =
      textGenerator[Math.floor(Math.random() * textGenerator.length)];
    setQuestionColor(q_color);
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[Math.floor(Math.random() * voices.length)];
    msg.text = q_color;
    console.log(q_color);
    speechSynthesis.speak(msg);
  }, [scoreCard]);

  function handleClick(e) {
    if (e.target.innerText === questionColor) {
      setScoreCard(scoreCard + 1);
    } else {
      setScoreCard(0);
    }
  }

  return (
    <div>
      {/* {arr_text}
      {textGenerator}
      {questionColor} */}
      <button style={{ color: randomColorGenerator1 }} onClick={handleClick}>
        {randomTextGenerator1}
      </button>
      <button style={{ color: randomColorGenerator2 }} onClick={handleClick}>
        {randomTextGenerator2}
      </button>
      <button style={{ color: randomColorGenerator3 }} onClick={handleClick}>
        {randomTextGenerator3}
      </button>
      <button style={{ color: randomColorGenerator4 }} onClick={handleClick}>
        {randomTextGenerator4}
      </button>
      <button style={{ color: randomColorGenerator5 }} onClick={handleClick}>
        {randomTextGenerator5}
      </button>
      <button style={{ color: randomColorGenerator6 }} onClick={handleClick}>
        {randomTextGenerator6}
      </button>
      <button style={{ color: randomColorGenerator7 }} onClick={handleClick}>
        {randomTextGenerator7}
      </button>
      <br/>
      {scoreCard}
      <br/>
    </div>
  );
}

export default FocusColorElement;
