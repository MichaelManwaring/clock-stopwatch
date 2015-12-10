$(document).ready(function() {
	
setInterval(function(){
	var date = new Date();
// initialize values
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var milliseconds = date.getMilliseconds();

// convert hours to 12-hour
	if (hours>12) {
		hours = hours -12
	};
// change variables to strings so they can be chacked for length
	var hours = hours.toString()
	var minutes = minutes.toString();
	var seconds = seconds.toString();
	var milliseconds = milliseconds.toString();


// ensure hours is 2 digit
		// if (hours.length == 1){
		// 	var hours = "0"+ hours;
		// };
// ensure minutes is 2 digit

		if (minutes.length == 1){
			var minutes = "0"+minutes;
		};
// ensure seconds is 2 digit

		if (seconds.length == 1){
			var seconds = "0"+seconds;
		};
// ensure milliseconds is 2 digit

		if (milliseconds.length == 1){
			var milliseconds = "0"+milliseconds;
		};
// apply variables to clock

	$("#hour").text(hours);
	$("#minute").text(minutes);
	$("#second").text(seconds);
	$("#millisecond").text(milliseconds);
}, 1000)



// STOPWATCH
// start function

var smilliseconds = 0
var sseconds = 0
var sminutes = 0
var shours = 0
var isPause = false
$("#start").one("click",function(){
	console.log(smilliseconds)
	// start counting
	setInterval(function(){
		if (!isPause) {
			smilliseconds = smilliseconds + 1
		};
		// rollover seconds
		if (smilliseconds == 10) {
			smilliseconds=0
			sseconds = sseconds+1
		}; 
		// rollover minutes
		if (sseconds==60) {
			sseconds=0
			sminutes =sminutes+1
		};
		// rollover hours
		if (sminutes==60) {
			sminutes=0
			shours = shours+1
		};
		
		// 2dig seconds
		if (sseconds<10) {
			ssecondst="0"+sseconds
		}else{
			ssecondst= sseconds
		};
		// 2dig minutes
		if (sminutes<10) {
			sminutest="0"+sminutes
		}else{
			sminutest = sminutes
		};
		// 2dig hours
		if (shours<10) {
			shourst="0"+shours
		}else{
			shourst=shours
		};

		$("#shour").text(shourst);
		$("#sminute").text(sminutest);
		$("#ssecond").text(ssecondst);
		$("#smillisecond").text(smilliseconds);

	}, 100);
	$("#stop").click(function(){
		isPause = !isPause
	})
	$("#reset").click(function(){
		console.log("reset")
		var smilliseconds = 0
		var sseconds = 0
		var sminutes = 0
		var shours = 0
	})
});








});
