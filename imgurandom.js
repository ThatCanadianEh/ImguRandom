// taken from evilinternet(?), original source long gone
// then taken from newroman.net/imgur by TF2CutContentWiki
// and heavily modified by TF2CutContentWiki as well

//window.num_images = 104;
window.char_length = 5;
//window.char_length = 7;
/*window.addEventListener('change', save);

var boxes = document.getElementsByClassName('box').length; 

function save() {	
        for (let i = 1; i <= boxes; i++) {
	        var checkbox = document.getElementById(String(i));
                localStorage.setItem("checkbox" + String(i), checkbox.checked);	
        }
}

for (let i = 1; i <= boxes; i++) {
	if (localStorage.length > 0) {
                var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
                document.getElementById(String(i)).checked = checked;
        }
}*/

imgurcache = new Array();

jQuery(document).ready(function($) {
        var numImages = document.getElementById("numImages");
	if (numImages.value > 200) numImages.value = 200;
	else if (numImages.value < 1) numImages.value = 1;

//      var prevImages = new Array();

	var info_el = $("#info"),
		images_el = $("#images"),
		filteredimages_el = $("#filteredimages");

	var Imgur = {
		fetch: function(num) {
			var self = this;
			var hideonload = document.getElementsByClassName("hideonload");
			var hideonload2 = document.getElementsByClassName("hideonload-filtered");
			var showFiltered = document.getElementById("1").checked;
			
			// Reset image counters
			self.total = num;
			self.done = 0;
			self.failures = 0;
			
			// Clear images & filtered images sections
			$(images_el).empty();
			$(filteredimages_el).empty();

			// Hide on load for the 2nd "Load Images" button
			for (let i = 0; i < hideonload.length; i++) {
				hideonload[i].style.display = "block";
			}
			// Hide on load for the Filtered Images section
			// Ternary-ized to toggle the section on/off based on your selection
			for (let i = 0; i < hideonload2.length; i++) {
				hideonload2[i].style.display = (showFiltered == true) ? "block" : "none";
			}

			for (let i = 0; i < num; i++) {
				self.hunt(function(id) {
					self.done++;

					$(images_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");

					self.update();
				});
			}
		},
		update: function() {
			$(info_el).html(((this.done < this.total) ? "Loading... " + this.done + "/" + this.total + " (" + this.failures + " failures" + ") " : "Done. "));
		},

		hunt: function(cb) {
                        var showFiltered = document.getElementById("1").checked;
			var tiny = document.getElementById("2").checked;
                        var monopoly = document.getElementById("3").checked;
			var cellphone = document.getElementById("4").checked;
			var facebook = document.getElementById("5").checked;
			var youtube = document.getElementById("6").checked;
			var monster = document.getElementById("7").checked;
			var yugioh = document.getElementById("8").checked;
			var self = this,
				id = self.random(window.char_length),
				img = new Image;

                        // Sub-function: Failed to get a proper image
			function fail() {
                                // Increase failure count
				self.failures++;

                                // Update the info for how many images have been loaded
				self.update();

                                // Hunt for a new image
				self.hunt(cb);
			}

                        // Update the info for how many IMGs have been loaded
			self.update();

                        // Put together the src url for the image we want to check
			img.src = "http://i.imgur.com/" + id + "_d.webp?maxwidth=1001&fidelity=low";

                        // Load the image
			img.onload = function() {
				// Time to check the image's height and width
				// Then we can filter out some of the more repetitive images
				// There's quite a few types of images that keep popping up
				if (((img.width == 198) && (img.height == 160)) || ((img.width == 161) && (img.height == 81))) {
					// We're going to assume images of these sizes are an imgur error images.
					// Not going to log these in the filtered images section though.
					fail();
				} else if (tiny == true && (img.naturalWidth <= 32) || (img.naturalHeight <= 32)) {
					// Filter out tiny images whose width or height is equal to or below 32px.
					if (showFiltered == true)
				        {
					    $(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
				        }
					fail();
				} else if (monopoly == true && ((img.naturalWidth == 298) && (img.naturalHeight == 256))) {
					// Filter out repetitive Monopoly Man credit card images.
					if (showFiltered == true)
				        {
					    $(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
				        }
					fail();
				} else if (cellphone == true && (((img.naturalWidth == 652) && (img.naturalHeight == 470)) || ((img.naturalWidth == 225) && (img.naturalHeight == 225)) || ((img.naturalWidth == 399) && (img.naturalHeight == 344)) || ((img.naturalWidth == 760) && (img.naturalHeight == 756)) || ((img.naturalWidth == 500) && (img.naturalHeight == 388)) || ((img.naturalWidth == 90) && (img.naturalHeight == 69)) || ((img.naturalWidth == 449) && (img.naturalHeight == 450)) || ((img.naturalWidth == 540) && (img.naturalHeight == 335)))) {
					// Filter out repetitive cellphone images.
					if (showFiltered == true)
				        {
					    $(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
				        }
					fail();
				} else if (facebook == true && ((img.naturalWidth == 128) && (img.naturalHeight == 128))) {
					// Filter out tricolor Facebook logo images
					if (showFiltered == true)
				        {
					    $(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
				        }
					fail();
				} else if (youtube == true && (((img.naturalWidth == 643) && (img.naturalHeight == 86)) || ((img.naturalWidth == 643) && (img.naturalHeight == 88)) || ((img.naturalWidth == 642) && (img.naturalHeight == 89)) || ((img.naturalWidth == 640) && (img.naturalHeight == 54)) || ((img.naturalWidth == 646) && (img.naturalHeight == 88)) || ((img.naturalWidth == 650) && (img.naturalHeight == 60)))) {
					// Filter out wide YouTube header images
					if (showFiltered == true)
				        {
					    $(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
				        }
					fail();
				} else if (yugioh == true && ((img.naturalWidth == 760) && (img.naturalHeight == 475))) {
					// Filter out Yu-Gi-Oh online game images
					if (showFiltered == true)
				        {
					    $(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
				        }
					fail();
				} else if (monster == true && (((img.naturalWidth == 100) && (img.naturalHeight == 75)) || ((img.naturalWidth == 110) && (img.naturalHeight == 128)))) {
					// Filter out those weird monster game "land" images
					if (showFiltered == true)
				        {
					    $(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
				        }
					fail();
				} else {
					// We got a good image, send it!
					cb(id);
				}
			}

			img.onerror = fail;
		},
		random: function(len) {
			var text = new Array();
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			for (let i = 0; i < len; i++) {
				imgurchar = possible.charAt(Math.floor((Math.random() * possible.length)));

				if (-1 == text.indexOf(imgurchar)) {
					text.push(imgurchar);
				} else {
					i--;
				}
			}

			text = text.join("");

			if (-1 == imgurcache.indexOf(text)) {
				imgurcache.push(text);

				return text;
			} else {
				self.random(window.char_length);

				return false;
			}
		}
	};

	$("#random").on('click', function() {
		Imgur.fetch(numImages.value);
	});
	
	// hacky workaround for a 2nd load images button at the bottom 
	$("#random2").on('click', function() {
		Imgur.fetch(numImages.value);
	});
});
