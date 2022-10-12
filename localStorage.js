let boxes = document.getElementsByClassName('box').length;

function save() {	
	for (let i = 1; i <= boxes; i++) {
		var checkbox = document.getElementById(String(i));
		localStorage.setItem("checkbox" + String(i), checkbox.checked);	
  	}
//	var numImages = document.getElementById("numImages");
//	localStorage.setItem("localNumImages", numImages.value);
}

window.addEventListener('change', save);
