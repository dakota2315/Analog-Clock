var myTimer = setInterval(hands, 1000);
var s = 0;
var m = 0;
var h = 0;

function hands(){
	var time = new Date();
	second.style.transform += "rotate(6deg)";
	//minute.style.transform = "rotate(10deg)";
	s = s + 1;
	if (s == 60){
		s = 0;
		m = m + 1;
		minute.style.transform += "rotate(6deg)";
		if (m == 60){
			s = 0;
			m = 0;
			h = h + 1;
			hour.style.transform += "rotate(30deg)";	
		}
	}

	console.log(s, m, h);
}




