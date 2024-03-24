document.onkeypress = function (e) {
    e = e || window.event;
	render_bpm(calc_bpm());
};

var last_click = null;
var hist = [];

function calc_bpm(){
	curdate = new Date()
	if(last_click == null ){
		last_click = curdate.getTime();
		return "One more!";
	} else {
		curr_time = curdate.getTime() - last_click;
		last_click = curdate.getTime();
		outval = Math.round(60000/curr_time);
		hist.push(outval);
		return outval;
	}
}

function render_bpm(num){
	document.getElementById("bpm-here").innerText=num;
	document.getElementById("history-display").innerText=hist.join("\n");
	return null;
}