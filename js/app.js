// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>')
// Append to webpage
$('.spoiler').append($button);




const spoiler = $('.spoiler span');
const revealButton = $('.spoiler button');
// Hide the spoler text
$(spoiler).hide();
// When button is pressed
$(revealButton).click(function(){
  // show spoiler text
  $(spoiler).show()
  // Hide the reveal spoiler text
  $(revealButton).hide();;
});
