//alert("Clicked");

gamePattern = [];
userClickedPattern = [];
buttonColors = ["red","blue","green","yellow"];
randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
//$("# + 'randomChosenColor'").
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
//var audio1 = new Audio("sounds/" + randomChosenColor + ".mp3");
//audio1.play();
playSound(randomChosenColor);
$(".btn").click(function(){
  //alert("clicked" );
  var userChosenColour = $(this).attr("id");
  var userChosenClass = $(this).attr("class");
//  var userChosenClass = $(this).attr("type");
  //alert(userChosenClass);
  //alert("clicked  " + userChosenColour );
  userClickedPattern.push(userChosenColour);
  //alert(userClickedPattern.length);
  playSound(userChosenColour);
  animatePress(userChosenClass);

  }

);


function nextSequence(){
  ran1  = Math.random();
  ran2 = ran1 * 4;
  randomNumber = Math.floor(ran2);
  return randomNumber;
}

function playSound(name){
  audio = new Audio("Sounds/"+ name + ".mp3");
audio.play();
//alert("audio1");
}

function animatePress(currentClass){
//$(button).last.addClass("pressed");
$(currentClass).select addClass("pressed");
//alert("animated");
alert(currentClass);
}
