
var hp = 100; //Health Point
var st = 100; //Stamina
var hg = 100; //Hunger point
var charaTime;
var Time = 0;
var Walk = 0;
var charStep = 2; 

charaStatusPlay();
function charaStatusPlay()
{
	timePlay();
	status();


}

//Game Over
function gameOver(){
  clearTimeout();
  clearTimeout(character);
  alert("Inallilahi");
}

function status(){
  charaTime = Time;
  if(hg >= 100){hg = 100;}
  if(st >= 100){st = 100;}
  if(hp >= 100){hp = 100;}
  if(hg <= 0){hg = 0;}
  if(st <= 0){st = 0;}
  if(hp <= 0){hp = 0;}

}

//Time for hunger & hp integration
function timePlay() {
  hg = hg;
  st += 2;
  status();
  Time = setTimeout(function(){timePlay()}, 3000);
  console.log("Time " + Time + " Hunger " + hg + " Health Point " + hp);
  
  document.getElementById("healthbar").innerHTML = hp;
	$("#healthbar").css("width", hp);
  document.getElementById("hungerbar").innerHTML = hg;
	$("#hungerbar").css("width", hg);
  document.getElementById("staminabar").innerHTML = st;
	$("#staminabar").css("width", st);


  hg = hg - 5;
  if(hg <= 0)
  {
    hg = 0;
    hp -= 5;
  }

  if (hp <= -10){

    gameOver();


  }
}

