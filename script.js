var quote = document.getElementById("quote-js");
var quoteBtn = document.getElementById("quote-btn");

// Nightmode/Daymode feauture

$(document).ready(function () {
  $("#night-mode-js").click(function () {
    $(".quote-container, .quote, .btn").toggleClass("night-mode");
    if ($('#night-mode-js').hasClass('night-mode')) {
      $('#night-mode-js').html('Night-mode');
    } else {
      $('#night-mode-js').html('Day-mode');
    }
  });
});


//Random quote machine
var quotes = [
  '"Hello, gorgeous" - FUNNY GIRL(1968)',

  '"Yo, Adrian!" - ROCKY (1976)',

  '"Here’s Johnny!" - SHINING, THE (1980)',


  '"Frankly, my dear, I don’t give a damn." - GONE WITH THE WIND (1939)',
  '"Attica! Attica!" - DOG DAY AFTERNOON(1975)',
  '"Tell ’em to go out there with all they got and win just one for the Gipper." - KNUTE ROCKNE ALL AMERICAN(1940)',
  '"A martini. Shaken, not stirred" — GOLDFINGER(1964)',
  '"Who’s on first." — NAUGHTY NINETIES,THE(1945).',
  '"Life is a banquet, and most poor suckers are starving to death! A" - AUNTIE MAME (1958)',
  '"I feel the need — the need for speed!" - TOP GUN(1986)',
  '"Carpe diem. Seize the day, boys. Make your lives extraordinary." - DEAD POETS SOCIETY(1989)',
  '"Snap out of it!" - MOONSTRUCK(1987)',
  '"My mother thanks you. My father thanks you. My sister thanks you. And I thank you." - YANKEE DOODLE DANDY(1942)',
  '"Nobody puts Baby in a corner" – DIRTY DANCING(1987)',
  '"I’ll get you, my pretty, and your little dog, too!" – WIZARD OF OZ, THE(1939)',
  '"I’m king of the world! " – TITANIC(1997)'
];

quoteBtn.onclick = function randomQuote() {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = rand;
};