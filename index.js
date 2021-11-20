
randomnumber1= Math.floor(Math.random()*6) +1;
var randomDiceImage = "dice"+ randomnumber1 + ".png";
var randomImageSource = "images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2= "dice"+ randomnumber2 + ".png";
var randomImageSource2= "images/"+ randomDiceImage2;

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
// 
var heading= document.querySelector(".heading");
if(randomnumber1===randomnumber2){
  heading.innerHTML= "Draw";
}
else if (randomnumber1>randomnumber2) {
  heading.innerHTML="🥇Player 1 Wins";

}
else {
  heading.innerHTML="Player 2 Wins🥇";
}
