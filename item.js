
$(".kayu").keydown(function(e){

  if((left >= 130 && left <= 180) && (top >=280 && top <=330) && $(this).keypress(!currentKey)){
    currentKey = e.keyCode;

    switch(e.keyCode) {
      case 32: 
      var jmlhkayu =+ 1;
      console.log("kayu +1");
      $(".kayu").remove();
      break;
    } 
  }else{
   // alert("Belum sampe.");
   console.log("belum sampe");
  }
});

$(document).keyup(function(e) {

  //don't stop the walk if the player is pushing other buttons
  //only stop the walk if the key that started the walk is released
  if (e.keyCode == currentKey) {

    //set the currentKey to false, this will enable a new key to be pressed
    currentKey = false;

    //clear the walk timer
    clearInterval(TimerWalk);

    //finish the character's movement
    $('#character').stop(true, false);
  }
});

