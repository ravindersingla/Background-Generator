var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("backgen");
body.appendChild(document.createElement("h3"));
var h3 = document.getElementsByTagName("h3")[0];
h3.className='try';



function backGenerator(){
	body.style.background = "linear-gradient(to right, "+ color1.value + ","+ color2.value + ")";
	h3.textContent=body.style.background;
	color1.style.value=color1;
}

color1.addEventListener("input",backGenerator);
color2.addEventListener("input",backGenerator); 