var kayu=0;
var liat=0;
var apple=0;
var batu=0;
var currentRoom=1;
var kayustore;
var liatstore;
var batustore;
var storemode=0;
var tempbatu=0;
var tempkayu=0;
var templiat=0;



itemstatusPlay();
function itemstatusPlay(){
  pickItem();  
  storeitem();
  takeoutitem();
}



function pickItem(){
var top = $("#character").css("top");
var left = $("#character").css("left");
    top = parseInt(top);
    left = parseInt(left);

      if($("div").hasClass("kayu"))
      {
      kayu = kayu + 1;
        console.log("kayu = " + kayu);
        $(".kayu").remove();
  
      }
      if ($("div").hasClass("batu"))
      {
         batu = batu + 1;
        console.log("batu = " + batu);
        $(".batu").remove();
     
      }
      if ($("div").hasClass("liat"))
      {
      liat = liat + 1;
        console.log("liat = " + liat);
        $(".liat").remove();

      }
      if ($("div").hasClass("vine"))
      {
      var hitVine = $(".vine").length;
        var vine =+ hitVine;
        console.log("vine" + hitVine);
        $(".vine").remove();
      }  
      if($("div").hasClass("apple"))
      { console.log("top" + top);
        if(currentRoom==1 && (top>=62 && top<=96 && left>=107 && left<=151)){
      apple = apple + 1;
      hg = hg + 30;
        console.log("apple = " + apple);
        $(".apple").remove();
        }
      }
      document.getElementById("kayuCheck").innerHTML = "<img src=items/kayu.png></img> : " + kayu;
       document.getElementById("liatCheck").innerHTML = "<img src=items/liat.png></img> : " + liat;
    document.getElementById("batuCheck").innerHTML = "<img src=items/batu.png></img> : " + batu;
    

    }

  function storeitem(){
    var top = $("#character").css("top");
    var left = $("#character").css("left");
    top = parseInt(top);
    left = parseInt(left);


    if($("div").hasClass("storage")){
    if(currentRoom==1 && (top>=160 && top<=260 && left>=400 && left<500)&&storemode==0){
      tempkayu = kayu;
      kayustore =+ kayu;
      kayu= kayu - tempkayu;

      tempbatu = batu;
      batustore =+ batu;
      batu= batu - tempbatu;

      templiat = liat;
      liatstore =+ liat;
      liat= liat -  templiat;
      storemode=1;
    }
    document.getElementById("kayuCheck").innerHTML = "<img src=items/kayu.png></img> : " + kayu;
       document.getElementById("liatCheck").innerHTML = "<img src=items/liat.png></img> : " + liat;
    document.getElementById("batuCheck").innerHTML = "<img src=items/batu.png></img> : " + batu;

    }
  }

  function takeoutitem(){
    var top = $("#character").css("top");
    var left = $("#character").css("left");
    top = parseInt(top);
    left = parseInt(left);

    if($("div").hasClass("storage")){
    if(currentRoom==1 && (top>=160 && top<=260 && left>=400 && left<500) && storemode==1){
      kayu = kayustore;
      kayustore=- kayu;
      batu = batustore;
      batustore=- batu;
      liat = liatstore;
      liatstore=- liat;
      storemode=0;
    }
    document.getElementById("kayuCheck").innerHTML = "<img src=items/kayu.png></img> : " + kayu;
    document.getElementById("liatCheck").innerHTML = "<img src=items/liat.png></img> : " + liat;
    document.getElementById("batuCheck").innerHTML = "<img src=items/batu.png></img> : " + batu;

    }
  }

