import React from "react";


  

function FocusColorElement({ counter, scoreCard, setScoreCard }) {
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "Pink",
    "Turquoise",
    "Purple",
    "Navy",
    "Lime",
    "Maroon",
    "Indigo",
    "DeepSkyBlue",
    "Salmon",
  ];

  function handleClick(e) {
    if(e.target.innerText==questionColor){
      setScoreCard(scoreCard+1);
    }
  }

  if (counter == 0) {
    var randomColorGenerator1 =
      colors[Math.floor(Math.random() * colors.length)];
    var randomTextGenerator1 =
      colors[Math.floor(Math.random() * colors.length)];
    var randomColorGenerator2 =
      colors[Math.floor(Math.random() * colors.length)];
    var randomTextGenerator2 =
      colors[Math.floor(Math.random() * colors.length)];
    var randomColorGenerator3 =
      colors[Math.floor(Math.random() * colors.length)];
    var randomTextGenerator3 =
      colors[Math.floor(Math.random() * colors.length)];
    var randomColorGenerator4 =
      colors[Math.floor(Math.random() * colors.length)];
    var randomTextGenerator4 =
      colors[Math.floor(Math.random() * colors.length)];

    var textGenerator = [
      randomTextGenerator1,
      randomTextGenerator2,
      randomTextGenerator3,
      randomTextGenerator4,
    ];

    var questionColor =
      textGenerator[Math.floor(Math.random() * textGenerator.length)];

      
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[Math.floor(Math.random() * voices.length)];
        msg.text = questionColor;
        var AudioPlay=speechSynthesis.speak(msg);
      

  }
  return (
    <div>
      {AudioPlay}
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
      {scoreCard}
    </div>
  );
}


export default FocusColorElement;
