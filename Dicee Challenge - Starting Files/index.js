randomNumber1 = ran();
randomNumber2 = ran();
alert(randomNumber1);
alert(randomNumber2)
document.querySelector("img").removeAttribute("src");
alert("hi");
document.querySelectorAll("img")[0].setAttribute("src", 'images/' + "dice" + randomNumber1 + '.png');
document.querySelectorAll("img")[1].setAttribute("src", 'images/' + "dice" + randomNumber2 + '.png')
if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML= "You Win";
}


function ran() {
  var number = Math.random();
  ramdomNumber = number * 7;
  randomNumber = Math.round(ramdomNumber);
  return randomNumber
}
