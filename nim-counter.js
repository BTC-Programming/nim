// initialization
var count=0;
var steps=0;
var game=[];
var player="";

while (count<21) {// end at 21
	// call continug function for user
  player="you";
  steps=prompt("Starting at "+count+", how many steps do you count (1-3)");
  count=counting(player,count,steps);
  // call counting function for computer, at 2 steps each time
  player="me";
  steps=Math.floor(Math.random()*3)+1;
  console.log(steps);
  count=counting(player,count,steps);
}
alert ("You win!"); // temporary

// count and display function
function counting(player,current,steps){
	game=[];
	for (index=0;index<steps;index++) {
		game[index]=current+index+1;
		if (game[index]>20) {
			game[index]="oops!";
		}
	}
	alert(player+": "+game);
	current=parseInt(current)+parseInt(steps);
	return current;
}
