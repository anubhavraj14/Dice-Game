var rn1 = Math.floor(Math.random() * 6) + 1;
var rdice1 = "images/dic" + rn1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", rdice1);

var rn2 = Math.floor(Math.random()*6) + 1;
var rdice2 = "images/dic" + rn2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", rdice2);

if(rn1>rn2) document.querySelector("h1").innerHTML  = "PLAYER 1 WINS!🏆";
else if(rn2>rn1) document.querySelector("h1").innerHTML = "PLAYER 2 WINS!🏆";
else document.querySelector("h1").innerHTML = "DRAW";