

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>')
// Append to webpage
$('.spoiler').append($button);

const spoiler = $('.spoiler span');
const revealButton = $('.spoiler button');
// Hide the spoler text
$(spoiler).hide();


// When button is pressed
$('.spoiler').on('click', 'button', function(e){
  // show spoiler text
  $(this).prev().show()
  // Hide the reveal spoiler text
  $(this).hide();
});
