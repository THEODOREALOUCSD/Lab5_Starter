// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  const jsConfetti = new JSConfetti();
  // TODO
  var hornSelect = document.getElementById('horn-select');
  var imgSource = document.querySelector("img[src='assets/images/no-image.png']");
  var audioSelect = document.querySelector('audio[class=hidden]');
  var slider = document.querySelector('input[type=range]');
  var imgSourceSlider = document.querySelector("img[src='assets/icons/volume-level-2.svg']");

  hornSelect.addEventListener('change', (event) =>{
    imgSource.setAttribute("src", 'assets/images/' + hornSelect.value + '.svg');
    audioSelect.setAttribute("src", 'assets/audio/' + hornSelect.value + '.mp3');
  });

  slider.addEventListener('input', (event) =>{
    console.log(slider.value);
    if (slider.value == 0){
      imgSourceSlider.setAttribute("src", 'assets/icons/volume-level-0.svg');
    }
    if (slider.value >= 1 && slider.value < 33){
      imgSourceSlider.setAttribute("src", 'assets/icons/volume-level-1.svg');
    }
    if (slider.value >= 33 && slider.value < 67){
      imgSourceSlider.setAttribute("src", 'assets/icons/volume-level-2.svg');
    }
    if (slider.value >= 67){
      imgSourceSlider.setAttribute("src", 'assets/icons/volume-level-3.svg');
    }
    
  });
  
  var button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    audioSelect.volume = slider.value / 100;
    audioSelect.play();
    if(hornSelect.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  });
}