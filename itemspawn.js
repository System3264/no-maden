var itemTimeSpawn = 0;
var itemType;
var item;
var nh;
var nw;
var chance;
var currentRoom=1;
var timer=0;




function itemSpawnPlay(){

	 itemTimeSpawn = setTimeout(function(){itemSpawnPlay()}, 5000);
		timer+=5;

	 if(timer%10==0){
	 	itemTimeSpawn=1;
	 	
	 }
	 if(itemTimeSpawn==1 && currentRoom==1){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map1").append("<div class='obs item kayu kayu01'></div");
		 	$('.kayu01').css("top", newq[0]);
		 	$('.kayu01').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){  
	 		$("#map1").append("<div class='obs item apple apple01'></div");

	 	
	 	}
	 	if(chance==3){ 
	 		$("#map1").append("<div class='obs item liat liat01'></div");
		 	$('.liat01').css("top", newq[0]);
		 	$('.liat01').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map1").append("<div class='obs item batu batu01'></div");
		 	$('.batu01').css("top", newq[0]);
		 	$('.batu01').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==2){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map2").append("<div class='obs item kayu kayu02'></div");
		 	$('.kayu02').css("top", newq[0]);
		 	$('.kayu02').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map2").append("<div class='obs item  apple apple02'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map2").append("<div class='obs item liat liat02'></div");
		 	$('.liat02').css("top", newq[0]);
		 	$('.liat02').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map2").append("<div class='obs item batu batu02'></div");
		 	$('.batu02').css("top", newq[0]);
		 	$('.batu02').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==3){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map3").append("<div class='obs item kayu kayu03'></div");
		 	$('.kayu03').css("top", newq[0]);
		 	$('.kayu03').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map3").append("<div class='obs item apple apple03'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map3").append("<div class='obs item liat liat03'></div");
		 	$('.liat03').css("top", newq[0]);
		 	$('.liat03').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map3").append("<div class='obs item batu batu03'></div");
		 	$('.batu03').css("top", newq[0]);
		 	$('.batu03').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==4){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map4").append("<div class='obs item kayu kayu04'></div");
		 	$('.kayu04').css("top", newq[0]);
		 	$('.kayu04').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map4").append("<div class='obs item apple apple04'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map4").append("<div class='obs item liat liat04'></div");
		 	$('.liat04').css("top", newq[0]);
		 	$('.liat04').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map4").append("<div class='obs item batu batu04'></div");
		 	$('.batu04').css("top", newq[0]);
		 	$('.batu04').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==5){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map5").append("<div class='obs item kayu kayu05'></div");
		 	$('.kayu05').css("top", newq[0]);
		 	$('.kayu05').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map5").append("<div class='obs item apple apple05'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map5").append("<div class='obs item liat liat05'></div");
		 	$('.liat05').css("top", newq[0]);
		 	$('.liat05').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map5").append("<div class='obs item batu batu05'></div");
		 	$('.batu05').css("top", newq[0]);
		 	$('.batu05').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==6){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map6").append("<div class='obs item kayu kayu06'></div");
		 	$('.kayu06').css("top", newq[0]);
		 	$('.kayu06').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map6").append("<div class='obs item apple apple06'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map6").append("<div class='obs item liat liat06'></div");
		 	$('.liat06').css("top", newq[0]);
		 	$('.liat06').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map6").append("<div class='obs item batu batu06'></div");
		 	$('.batu06').css("top", newq[0]);
		 	$('.batu06').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==7){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map7").append("<div class='obs item kayu kayu07'></div");
		 	$('.kayu07').css("top", newq[0]);
		 	$('.kayu07').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map7").append("<div class='obs item apple apple07'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map7").append("<div class='obs item liat liat07'></div");
		 	$('.liat07').css("top", newq[0]);
		 	$('.liat07').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map7").append("<div class='obs item batu batu07'></div");
		 	$('.batu07').css("top", newq[0]);
		 	$('.batu07').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==8){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map8").append("<div class='obs item kayu kayu08'></div");
		 	$('.kayu08').css("top", newq[0]);
		 	$('.kayu08').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map8").append("<div class='obs item apple apple08'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map8").append("<div class='obs item liat liat08'></div");
		 	$('.liat08').css("top", newq[0]);
		 	$('.liat08').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map8").append("<div class='obs item batu batu08'></div");
		 	$('.batu08').css("top", newq[0]);
		 	$('.batu08').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==9){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map9").append("<div class='obs item kayu kayu09'></div");
		 	$('.kayu09').css("top", newq[0]);
		 	$('.kayu09').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map9").append("<div class='obs item apple apple09'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map9").append("<div class='obs item liat liat09'></div");
		 	$('.liat09').css("top", newq[0]);
		 	$('.liat09').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map9").append("<div class='obs item batu batu09'></div");
		 	$('.batu09').css("top", newq[0]);
		 	$('.batu09').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==10){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map10").append("<div class='obs item kayu kayu10'></div");
		 	$('.kayu10').css("top", newq[0]);
		 	$('.kayu10').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map10").append("<div class='obs item apple apple10'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map10").append("<div class='obs item liat liat10'></div");
		 	$('.liat10').css("top", newq[0]);
		 	$('.liat10').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map10").append("<div class='obs item batu batu010'></div");
		 	$('.batu10').css("top", newq[0]);
		 	$('.batu10').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 }

	 if(itemTimeSpawn==1 && currentRoom==11){
	 	var newq = randomspawnloc();
	 	var chance = Math.floor(Math.random() * 4) + 1;
	 	console.log("chance" + chance);
	 	if(chance==1){ 
	 		$("#map11").append("<div class='obs item kayu kayu11'></div");
		 	$('.kayu11').css("top", newq[0]);
		 	$('.kayu11').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==2){ 
	 		$("#map11").append("<div class='obs item apple apple11'></div");

	 	}
	 	if(chance==3){ 
	 		$("#map11").append("<div class='obs item liat liat11'></div");
		 	$('.liat11').css("top", newq[0]);
		 	$('.liat11').css("left", newq[1]);
	 	console.log("nh" + newq[0] + "nw" + newq[1]);
	 	}
	 	if(chance==4){ 
	 		$("#map11").append("<div class='obs item batu batu11'></div");
		 	$('.batu11').css("top", newq[0]);
		 	$('.batu11').css("left", newq[1]);
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

