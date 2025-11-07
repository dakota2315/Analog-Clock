/* set a variable 'myTimer' to specify how long to wait before applying changes at 1000 milliseconds
	this will calls the function hands every 1000 milliseconds
	then set the starting point or values for hours-minutes-seconds */ 
var myTimer = setInterval(hands, 1000);
var s = 0;
var m = 0;
var h = 0;
// Now lets manage the hands in the clock
function hands(){
	var time = new Date(); // creates an object Date (that represents the current date and time when the code is executed
	// and assign it to the variable time
	second.style.transform += "rotate(6deg)"; 
	// here I rotate the element second using the style associated by 6deg for every second passed
	// calculated as 360deg/60sec = 6deg per second
	s = s + 1;
	if (s == 60){
		s = 0;
		m = m + 1;
		minute.style.transform += "rotate(6deg)";
		if (m == 60){
			s = 0;
			m = 0;
			h = h + 1;
			hour.style.transform += "rotate(30deg)"; // calculated as 360deg/12hr = 30deg per hour	
		}
	}

	console.log(s, m, h);
}




