# randomimgur-modified
A modified version of the random Imgur image loader from newroman.net/imgur

**Have an idea for a new feature that you think would be useful? Or perhaps you've found a bug? Either way, submit an Issue report and I'll take a look at it!**

# Want to try this?
[Click here!](https://tf2cutcontentwiki.github.io/randomimgur-modified/)

# Tweaks
- Added some hardcoded width/height filters to filter out various images that were uploaded to Imgur by the thousands and often flooded the results.
- Modified how the hunt function's check works
- Modified the resulting img's external link so it opens up the highest resolution/fidelity version of the image, whereas the newroman.net version of the page loads up a version where the maxwidth is set to 640 and the fidelity is set to medium.
- Added a direct link to Imgur's removal request page to the warning at the top of the page so viewers can report "highly illegal" pornographic images they may stumble across.
  - No, I'm not joking. Some real messed-up people have uploaded *that* kind of content to Imgur.

# Planned Features
- Checkboxes to toggle certain image filters to prevent certain repetitive images from showing up.
  - This feature is currently being worked on, and can be previewed [on the "New Features" version of the page](https://tf2cutcontentwiki.github.io/randomimgur-modified/index_newfeatures.html).
  - The "checked" state of the filter checkboxes is currently not saved between sessions (if you close and re-open the page). LocalStorage support to save the checked states between browser sessions is planned.
- A popout "favorites" panel where you can save images you find for future reference.
  - This feature will likely also use LocalStorage to save your favorites between browser sessions, but I may also add an "export" button to generate and save a TXT file containing a list of all your favorites that can then later be re-imported to your favorites.
