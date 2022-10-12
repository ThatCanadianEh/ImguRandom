/* Collapsible element functionality */
/* Shamelessly taken from Google */
var collapsible = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsible.length; i++)
{
	collapsible[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;

		// experimental ternary change
		content.style.display = (content.style.display === "block") ? "none" : "block";

		// original code, if the ternary doesn't work
		/* if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		} */
	});
}
