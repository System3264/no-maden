function pickItem(){
      if($("div").hasClass("kayu"))
      {
      var hitKayu = $(".kayu").length;
        var kayu =+ hitKayu;
        console.log("kayu + " + hitKayu);
        $(".kayu").remove();
      }
      if ($("div").hasClass("batu"))
      {
      var hitBatu = $(".batu").length;
        var batu =+ batu;
        console.log("batu +1" + hitBatu);
        $(".batu").remove();
      }
      if ($("div").hasClass("liat"))
      {
      var hitLiat = $(".liat").length;
        var liat =+ hitLiat;
        console.log("liat + " + hitLiat);
        $(".liat").remove();
      }
      if ($("div").hasClass("vine"))
      {
      var hitVine = $(".vine").length;
        var vine =+ hitVine;
        console.log("vine" + hitVine);
        $(".vine").remove();
      }
    }