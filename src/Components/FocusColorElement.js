import React from "react";

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


function FocusColorElement({counter,colorNames, setColorNames }){
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
  
  
   if (counter == 0) {
    setColorNames([...colorNames, {
      text: shuffle(colors),
      css: { color: shuffle(colors) },
    }]);
    console.log(colorNames);
    //  var randomColorGenerator = colorNames[Math.floor(Math.random() * colorNames.length)];
    //  var randomTextGenerator = colorNames[Math.floor(Math.random() * colorNames.length)];
    //  var msg = new SpeechSynthesisUtterance();
    //  var voices = window.speechSynthesis.getVoices();
    //  msg.voice = voices[Math.floor(Math.random() * voices.length)]; // Note: some voices don't support altering params
    //  msg.text = randomTextGenerator;
    //  speechSynthesis.speak(msg);
    //  const items = colorNames.map((i) => (
    //      <button style={{ color: randomColorGenerator }}>
    //        {randomTextGenerator}
    //      </button>
    //  ));
   }
 return (
  //  <button style={{ color: randomColorGenerator }}>
  //    {randomTextGenerator}
  //  </button>
  <h1>Dummy</h1>
 );
}

export default FocusColorElement;