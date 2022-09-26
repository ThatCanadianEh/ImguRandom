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
			self.start = +new Date;

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
			var iphone4 = document.getElementById("iphone4").checked;
			var iphone5 = document.getElementById("iphone5").checked;
			var cellphone1 = document.getElementById("cellphone1").checked;
			var cellphone2 = document.getElementById("cellphone2").checked;
			var cellphone3 = document.getElementById("cellphone3").checked;
			var facebook = document.getElementById("facebook").checked;
			var youtube = document.getElementById("youtube").checked;
			var monster1 = document.getElementById("monster1").checked;
			var monster2 = document.getElementById("monster2").checked;
			var yugioh = document.getElementById("yugioh").checked;
			var android = document.getElementById("android").checked;
			var banner1 = document.getElementById("banner1").checked;
			var banner2 = document.getElementById("banner2").checked;
			var taringa = document.getElementById("taringa").checked;
			var austra = document.getElementById("austra").checked;
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
				// Eventually I will add a popup control panel where you can toggle these filters on/off yourself
				if (((img.width == 198) && (img.height == 160)) || ((img.width == 161) && (img.height == 81))) {
					// We're going to assume images of these sizes are an imgur error images
					fail();
				} else if (tiny == true && (img.naturalWidth <= 32) || (img.naturalHeight <= 32)) {
					// Filter out tiny images whose width or height is equal to or below 32px
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					fail();
				} else if (monopoly == true && ((img.naturalWidth == 298) && (img.naturalHeight == 256))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out repetitive Monopoly Man credit card images
					fail();
				} else if (cellphone1 == true && ((img.naturalWidth == 652) && (img.naturalHeight == 470))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out repetitive cellphone images v1
					fail();
				} else if (cellphone2 == true && ((img.naturalWidth == 225) && (img.naturalHeight == 225))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out repetitive cellphone images v2
					fail();
				} else if (cellphone3 == true && ((img.naturalWidth == 399) && (img.naturalHeight == 344))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out repetitive cellphone images v3
					fail();
				} else if (iphone5 == true && ((img.naturalWidth == 760) && (img.naturalHeight == 756))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out repetitive iPhone 5 images
					fail();
				} else if (iphone4 == true && (((img.naturalWidth == 500) && (img.naturalHeight == 388)) || ((img.naturalWidth == 90) && (img.naturalHeight == 69)))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out repetitive iPhone 4 images
					fail();
				} else if (facebook == true && ((img.naturalWidth == 128) && (img.naturalHeight == 128))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out tricolor Facebook logo images
					fail();
				} else if (youtube == true && (((img.naturalWidth == 643) && (img.naturalHeight == 88)) || ((img.naturalWidth == 642) && (img.naturalHeight == 89)) || ((img.naturalWidth == 640) && (img.naturalHeight == 54)) || ((img.naturalWidth == 646) && (img.naturalHeight == 88)) || ((img.naturalWidth == 650) && (img.naturalHeight == 60)))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out wide YouTube header images
					fail();
				} else if (android == true && ((img.naturalWidth == 540) && (img.naturalHeight == 335))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out Android Authority images
					fail();
				} else if (yugioh == true && ((img.naturalWidth == 760) && (img.naturalHeight == 475))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out Yu-Gi-Oh online game images
					fail();
				} else if (monster1 == true && ((img.naturalWidth == 100) && (img.naturalHeight == 75))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out those weird monster game "land" images
					fail();
				} else if (monster2 == true && ((img.naturalWidth == 110) && (img.naturalHeight == 128))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out those weird monster game "creature" images
					fail();
				} else if (banner1 == true && ((img.naturalWidth == 728) && (img.naturalHeight == 90))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out Bannermaker images #1
					fail();
				} else if (banner2 == true && ((img.naturalWidth == 180) && (img.naturalHeight == 150))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out Bannermaker images #2
					fail();
				} else if (taringa == true && (((img.naturalWidth == 49) && (img.naturalHeight == 33)) || ((img.naturalWidth == 750) && (img.naturalHeight == 123)) || ((img.naturalWidth == 666) && (img.naturalHeight == 69)) || ((img.naturalWidth == 700) && (img.naturalHeight == 60)) || ((img.naturalWidth == 309) && (img.naturalHeight == 150)) || ((img.naturalWidth == 700) && (img.naturalHeight == 141)))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out repetitive Taringa images
					fail();
				} else if (austra == true && ((img.naturalWidth == 530) && (img.naturalHeight == 40))) {
					if (showFiltered == true) {
						$(filteredimages_el).append("<a href=\"https://i.imgur.com/" + id + "_d.webp?maxwidth=4000&fidelity=high\" target=\"_blank\" rel=\"noreferrer\"><img src=\"https://i.imgur.com/" + id + "s.png\" height=\"110\" width=\"110\" /></a>");
					}
					// Filter out repetitive Austra images
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