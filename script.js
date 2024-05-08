function volume_sphere() {
    //Write your code here
	let radius = document.getElementById('radius').value;
   let volume;

	if (radius < 0 || isNaN(radius)) {
		volume ='NaN';
	} else {
		volume = (4/3) * Math.PI * Math.pow(radius, 3);
		volume = volume.toFixed(4);
	}

	document.getElementById('volume').value = volume;
  
} 

	let btn = document.getElementById("submit");
	btn.addEventListener("click",volume_sphere );
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
