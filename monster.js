var currentRoom = 1; 
var nh;
var nw;


$(document).ready(function() {

animateDiv();

});

function makeNewPosition(){
    var h = 50;
    var w = 50;
    var nh = Math.floor(Math.random() * h) + 450;
    var nw = Math.floor(Math.random() * w) +100;
    return [nh,nw];
}

function animateDiv(){
    var newq = makeNewPosition();

var top = $("#character").css("top");
var left = $("#character").css("left");
    top = parseInt(top);
    left = parseInt(left);

    $('.monster').animate({top: newq[0], left: newq[1]},1000, function(){
        animateDiv();
        if (currentRoom==1 && (top < (newq[0] + 60) && (top + 32) > newq[0]) && (left < (newq[1] + 60) && (left+ 32) > newq[1])) 
{
    // collision detected!
    hp -= 10;
    $('.monster').css("background", "url(monster/monsterhit.png)");
    console.log("berahsil");
}
else{
    $('.monster').css("background", "url(monster/monster.png)");
}


console.log("top" + top + "left" + left);
console.log("newq[0]" + newq[0] + "newq[1]" + newq[1]);


    });
};

