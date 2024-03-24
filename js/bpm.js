document.onkeypress = function (e) {
    e = e || window.event;
    //alert("key Pressed")
	render_bpm(calc_bpm());
};

var last_click = null;

function calc_bpm(){
	curdate = new Date()
	if(last_click == null ){
		last_click = curdate.getTime();
		return 1;
	} else {
		curr_time = curdate.getTime() - last_click;
		last_click = curdate.getTime();
		return Math.round(60000/curr_time);
	}
}

function render_bpm(num){
	document.getElementById("bpm-here").innerText=num;
	return null;
}