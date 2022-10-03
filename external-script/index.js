const clockHolder = document.querySelector("span");
const btn2 = document.querySelector("#myBtn2");

btn2.addEventListener("click", playPauseClock);

let play=false;
var timeoutId;
function playPauseClock(){
  if(play==false){
   timeoutId= setInterval(getTime,10);
   play=true;

  }
  else{
    clearInterval(timeoutId);
    play=false;
  }


}



function getTime(){
  const now= Date();
  const time = now.toLocaleString();
  clockHolder.innerText=time;

}

