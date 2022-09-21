# randomimgur-modified
A modified version of the random Imgur image loader from newroman.net/imgur

# Tweaks
- Added some hardcoded width/height filters to filter out various images that were uploaded to Imgur by the thousands and often flood the results.
- Modified how the hunt function's check works
- Modified the resulting img's external link so it opens up the highest resolution/fidelity version of the image, whereas the newroman.net version of the page loads up a version where the maxwidth is set to 640 and the fidelity is set to medium.
