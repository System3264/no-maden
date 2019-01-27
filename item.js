function pickItem(){
      var mapping = $("#map"+currentRoom+"");
      if(mapping.hasClass("kayu"))
      {
      var hitKayu = parent.getElementsByClassName("kayu").length;
      for (i = 0; i < hitKayu; i++) {
        var kayu =+ 1;
        console.log("kayu +"+kayu+"");
        $(".kayu:nth-child"+i+"").remove();
        }
      }
      else if (mapping.hasClass("batu"))
      {
      var hitBatu = parent.getElementsByClassName("batu").length;
      for (i = 0; i < hitBatu; i++) {
        var batu =+ 1;
        console.log("batu +1");
        $(".batu:nth-child"+i+"").remove();
      }
      }
      else if (mapping.hasClass("liat"))
      {
      var hitLiat = parent.getElementsByClassName("liat").length;
      for (i = 0; i < hitLiat; i++) {
        var liat =+ 1;
        console.log("liat +1");
        $(".liat:nth-child"+i+"").remove();
      }
      }
      else if (mapping.hasClass("vine"))
      {
      var hitVine = parent.getElementsByClassName("vine").length;
      for (i = 0; i < hitVine; i++) {
        var vine =+ 1;
        console.log("vine +1");
        $(".vine:nth-child"+i+"").remove();
      }
      }
    }