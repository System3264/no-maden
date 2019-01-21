var hp = 100; //Health Point
var st = 100; //Stamina
var hg = 100; //Hunger point
var status = "normal";
var charaTime;
var Time;
var character = $('#character');

function charaStatusPlay()
{
	timePlay();
	status();
}

function gameOver(){
	clearTimeout();
	clearTimeout(character);

}

function status() {
	charaTime = Time;
	document.getElementById("hp").innerHTML = hp;
	document.getElementById("hg").innerHTML = hg;
	document.getElementById("st").innerHTML = st;
}

function timePlay() {
	Time = setTimeOut(function(){})
}