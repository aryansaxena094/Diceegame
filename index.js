num1 = Math.floor((Math.random()*6)+1);
num2 = Math.floor((Math.random()*6)+1);
dicenum1 = "images/dice" + num1 + ".png";
dicenum2 = "images/dice" + num2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",dicenum1);
document.querySelectorAll("img")[1].setAttribute("src",dicenum2);

if(num1>num2){
    document.querySelector("h1").innerText ="Player 1 wins 🚩";
}
else if(num2<num1){
    document.querySelector("h1").innerText = "🚩 Player 2 wins";
}
else{
    document.querySelector("h1").innerText = "Tie";
}