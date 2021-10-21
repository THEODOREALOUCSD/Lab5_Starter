// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var voiceSelect = document.getElementById("voice-select");
  speechSynthesis.addEventListener("voiceschanged", (event) =>{
    
    var options = speechSynthesis.getVoices();
    for (let i = 0; i < options.length; i++){
      var option = document.createElement('option');
      option.innerHTML = options[i].name + " " + "(" + options[i].lang + ")";
      option.value = i;
      voiceSelect.appendChild(option);
    }
  });
  
  var talk = document.querySelector("button");
  var utter = new SpeechSynthesisUtterance();
  talk.addEventListener("click", (event) => {
    var text = document.getElementById("text-to-speak").value;
    utter.text = text;
    var options = speechSynthesis.getVoices();
    var currentVoice = voiceSelect.options[voiceSelect.selectedIndex].value;
    utter.voice = options[currentVoice];
    speechSynthesis.speak(utter);

    
    
    img.setAttribute('src', 'assets/images/smiling-open.png');
    
  });
  var img = document.querySelector('img');
  utter.addEventListener('end', (event) =>{
    img.setAttribute('src', 'assets/images/smiling.png');
  })
  

}