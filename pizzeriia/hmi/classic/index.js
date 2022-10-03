const body= document.querySelector("body");


body.addEventListener("click",playPauseSound);


function playPauseSound(){
  const myAudio = document.querySelector("#audioPlayer");

  if(myAudio.paused) myAudio.play();
  else myAudio.pause();
}