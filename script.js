//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;
setInterval(()=>{
	angle += 2;
	line.style.tranform = `rotate(${angle}deg)`;
} 20);