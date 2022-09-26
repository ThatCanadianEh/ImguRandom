// taken from evilinternet(?), original source long gone
window.num_images = 104;
window.char_length = 5;
//window.char_length = 7;

imgurcache = new Array();

jQuery(document).ready(function($) {
	var info_el = $("#info"),
		images_el = $("#images"),
		filteredimages_el = $("#filteredimages");

	var Imgur = {
		fetch: function(num) {
			var self = this,
				x;

			self.total = num;
			self.done = 0;
			self.failures = 0;

			$(images_el).empty();
			$(filteredimages_el).empty();

			for (x = 0; x < num; x++) {
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
			var monopoly = document.getElementById("monopoly").checked;
			var tiny = document.getElementById("tiny").checked;
			var cellphone = document.getElementById("cellphone").checked;
			var facebook = document.getElementById("facebook").checked;
			var youtube = document.getElementById("youtube").checked;
			var monster = document.getElementById("monster").checked;
			var yugioh = document.getElementById("yugioh").checked;
			var showFiltered = document.getElementById("showFiltered").checked;

			var self = this,
				id = self.random(window.char_length),
				img = new Image;

			function fail() {
				self.failures++;
				self.update();
				self.hunt(cb);
			}

			self.update();

			img.src = "http://i.imgur.com/" + id + "_d.webp?maxwidth=1001&fidelity=low";

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
				} else if (cellphone == true && (((img.naturalWidth == 652) && (img.naturalHeight == 470)) || ((img.naturalWidth == 225) && (img.naturalHeight == 225)) || ((img.naturalWidth == 399) && (img.naturalHeight == 344)) || ((img.naturalWidth == 760) && (img.naturalHeight == 756)) || ((img.naturalWidth == 500) && (img.naturalHeight == 388)) || ((img.naturalWidth == 90) && (img.naturalHeight == 69)) || ((img.naturalWidth == 540) && (img.naturalHeight == 335)))) {
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
				} else if (youtube == true && (((img.naturalWidth == 643) && (img.naturalHeight == 88)) || ((img.naturalWidth == 642) && (img.naturalHeight == 89)) || ((img.naturalWidth == 640) && (img.naturalHeight == 54)) || ((img.naturalWidth == 646) && (img.naturalHeight == 88)) || ((img.naturalWidth == 650) && (img.naturalHeight == 60)))) {
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
			var text = new Array(),
				possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
				i;

			for (i = 0; i < len; i++) {
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
		Imgur.fetch(window.num_images);
	});
});
