let boxes = document.getElementsByClassName('box').length;

function save() {	
  for (let i = 1; i <= boxes; i++) {
	  var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked);	
  }
}

window.addEventListener('change', save);
