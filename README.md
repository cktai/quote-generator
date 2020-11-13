# Random Quote Generator

- The btn class. "quote-btn", will apply night mode classs when we toggle the button by triggering a "night-mode-js" function 

- The container is set to be responsive and it is set to be max-width of 700 pixels and a min-width of 350 pixels. 

- We use jQuery for interaction. the toggleClass event is to toggle between adding or emoving the class to the components specified. 

- We also use if-else statement and hasClass()event to switch the text inside the button between "dat-mode" and "night-mode".

- Variable "quote" creates an array of quotes.

- We apply a onclick event for the quoteBtn to trigger a function called randomQuote which will create a variable called rand. Rand is the result of random variable times the length of the quotes array. this rand variable will display in the "quote" variable in the HTML.
