//alert("hi");
//document.querySelector("button").addEventListener("click", clickHandler);

num = document.querySelectorAll(".drum").length;
//alert(num);
for (i = 0; i < num; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var a = this.innerHTML;
    clickHandler(a);
   } );
}
document.addEventListener("keypress", function(event){var a = event.key;
clickHandler(a);
animation(a);

});

function clickHandler(a) {
  //alert(i);
  //var a = this.innerHTML;
  //var b = this.event.key;
  // alert(a);
  switch (a) {
    case 'w':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

      case 'l':
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

    default:
        alert ("Incorrect Key Pressed");
}

function animation(currentKey){
      temp = document.querySelector().("."currentKey);
      alert(temp);

}


}
