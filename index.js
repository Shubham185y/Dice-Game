var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "images/" + "dice" + randomnumber1 + ".png";

 var img1 = document.querySelectorAll("img")[0];

 img1.setAttribute("src", randomDiceImage);

 var randomnumber2 = Math.floor(Math.random()*6)+1;
 var randomdiceimg2 = "images/" + "dice" + randomnumber2 + ".png";
 var img2 = document.querySelectorAll("img")[1];
 img2.setAttribute("src", randomdiceimg2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}


