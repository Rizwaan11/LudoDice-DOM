document.querySelector(".img1").src="images/dice6.png";
document.querySelector(".img2").src="images/dice6.png";

var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;
randomSrc1 = "images/dice" + randomNumber1 + ".png";
randomSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",randomSrc1)
document.querySelector(".img2").setAttribute("src",randomSrc2)


// 🚩
if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!"
}
if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!"
}
if (randomNumber1===randomNumber2){
    document.querySelector("h1").textContent = "Draw"
}