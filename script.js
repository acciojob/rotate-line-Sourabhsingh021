//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;

setInterval(()=>{
	angle++;
	line.style.tranform = `rotate({angle}deg)`;
} 20);