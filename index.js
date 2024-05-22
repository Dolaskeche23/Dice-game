// var randomNumber1 = Math.random() * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages = "dice" + randomNumber1 + ".png";
var ramdomImage1 = "images/" + randomDiceImages;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ramdomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Nupur WINS!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Dolas WINS!🚩";
} else {
  document.querySelector("h1").innerHTML = "_DRAW_";
}
