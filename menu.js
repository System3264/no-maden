
var done=1;

$(document).on("keypress", function (e) {
	if(done==1){
	$("#menuscreen").css("display","none");
	$("#map1").show();
	$("#status-box").show();
	charaStatusPlay();
	itemSpawnPlay();
	done++;
	}
  
});

