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
	document.getElementById("rolling-3").innerText=Math.round((hist.slice(Math.max(hist.length - 3, 1)).reduce((partialSum, a) => partialSum + a, 0))/3);
	document.getElementById("rolling-5").innerText=Math.round((hist.slice(Math.max(hist.length - 5, 1)).reduce((partialSum, a) => partialSum + a, 0))/5);
	document.getElementById("rolling-7").innerText=Math.round((hist.slice(Math.max(hist.length - 7, 1)).reduce((partialSum, a) => partialSum + a, 0))/7);
	document.getElementById("average").innerText=Math.round((hist.reduce((partialSum, a) => partialSum + a, 0))/hist.length);
	return null;
}