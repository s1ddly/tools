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
		hist.push(last_click)
		return "One more!";
	} else {
		curr_time = curdate.getTime() - last_click;
		last_click = curdate.getTime();
		hist.push(last_click)
		return Math.round(60000/curr_time);
	}
}

function render_bpm(num){
	document.getElementById("bpm-here").innerText=num;
	return null;
}