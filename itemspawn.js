var itemTimeSpawn = 0;
var itemType;
var item;
var nh;
var nw;
var chance;
var currentRoom=1;
var timer=0;



itemSpawnPlay();
function itemSpawnPlay(){

	 itemTimeSpawn = setTimeout(function(){itemSpawnPlay()}, 5000);
		timer+=5;

	 if(timer%10==0){
	 	itemTimeSpawn=1;
	 	
	 }
	 if(itemTimeSpawn==1 && currentRoom==1){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map1").append("<div class='obs item kayu01'></div");
		 	$('.kayu01').css("top", newq[0]);
		 	$('.kayu01').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map1").append("<div class='obs item apple01'></div");
		 	$('.apple01').css("top", newq[0]);
		 	$('.apple01').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map1").append("<div class='obs item liat01'></div");
		 	$('.liat01').css("top", newq[0]);
		 	$('.liat01').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==2){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map2").append("<div class='obs item kayu02'></div");
		 	$('.kayu02').css("top", newq[0]);
		 	$('.kayu02').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map2").append("<div class='obs item apple02'></div");
		 	$('.apple02').css("top", newq[0]);
		 	$('.apple02').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map2").append("<div class='obs item liat02'></div");
		 	$('.liat02').css("top", newq[0]);
		 	$('.liat02').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==3){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map3").append("<div class='obs item kayu03'></div");
		 	$('.kayu03').css("top", newq[0]);
		 	$('.kayu03').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map3").append("<div class='obs item apple03'></div");
		 	$('.apple03').css("top", newq[0]);
		 	$('.apple03').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map3").append("<div class='obs item liat03'></div");
		 	$('.liat03').css("top", newq[0]);
		 	$('.liat03').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==4){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map4").append("<div class='obs item kayu04'></div");
		 	$('.kayu04').css("top", newq[0]);
		 	$('.kayu04').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map4").append("<div class='obs item apple04'></div");
		 	$('.apple04').css("top", newq[0]);
		 	$('.apple04').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map4").append("<div class='obs item liat04'></div");
		 	$('.liat04').css("top", newq[0]);
		 	$('.liat04').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==5){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map5").append("<div class='obs item kayu05'></div");
		 	$('.kayu05').css("top", newq[0]);
		 	$('.kayu05').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map5").append("<div class='obs item apple05'></div");
		 	$('.apple05').css("top", newq[0]);
		 	$('.apple05').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map5").append("<div class='obs item liat05'></div");
		 	$('.liat05').css("top", newq[0]);
		 	$('.liat05').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==6){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map6").append("<div class='obs item kayu06'></div");
		 	$('.kayu06').css("top", newq[0]);
		 	$('.kayu06').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map6").append("<div class='obs item apple06'></div");
		 	$('.apple06').css("top", newq[0]);
		 	$('.apple06').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map6").append("<div class='obs item liat06'></div");
		 	$('.liat06').css("top", newq[0]);
		 	$('.liat06').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==7){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map7").append("<div class='obs item kayu07'></div");
		 	$('.kayu07').css("top", newq[0]);
		 	$('.kayu07').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map7").append("<div class='obs item apple07'></div");
		 	$('.apple07').css("top", newq[0]);
		 	$('.apple07').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map7").append("<div class='obs item liat07'></div");
		 	$('.liat07').css("top", newq[0]);
		 	$('.liat07').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==8){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map8").append("<div class='obs item kayu08'></div");
		 	$('.kayu08').css("top", newq[0]);
		 	$('.kayu08').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map8").append("<div class='obs item apple08'></div");
		 	$('.apple08').css("top", newq[0]);
		 	$('.apple08').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map8").append("<div class='obs item liat08'></div");
		 	$('.liat08').css("top", newq[0]);
		 	$('.liat08').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==9){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map9").append("<div class='obs item kayu09'></div");
		 	$('.kayu09').css("top", newq[0]);
		 	$('.kayu09').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map9").append("<div class='obs item apple09'></div");
		 	$('.apple09').css("top", newq[0]);
		 	$('.apple09').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map9").append("<div class='obs item liat09'></div");
		 	$('.liat09').css("top", newq[0]);
		 	$('.liat09').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==10){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map10").append("<div class='obs item kayu10'></div");
		 	$('.kayu10').css("top", newq[0]);
		 	$('.kayu10').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map10").append("<div class='obs item apple10'></div");
		 	$('.apple10').css("top", newq[0]);
		 	$('.apple10').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map10").append("<div class='obs item liat10'></div");
		 	$('.liat10').css("top", newq[0]);
		 	$('.liat10').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==11){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 3) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map11").append("<div class='obs item kayu11'></div");
		 	$('.kayu11').css("top", newq[0]);
		 	$('.kayu11').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map11").append("<div class='obs item apple11'></div");
		 	$('.apple11').css("top", newq[0]);
		 	$('.apple11').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==3){ 
	 		$("#map11").append("<div class='obs item liat11'></div");
		 	$('.liat11').css("top", newq[0]);
		 	$('.liat11').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }


 console.log("timer" + timer + "currentRoom" + currentRoom);
}


function randomspawnloc(){
	var nh = Math.floor(Math.random() * 476) + 100;
     var nw = Math.floor(Math.random() * 876);
    return [nh,nw];
    

}

