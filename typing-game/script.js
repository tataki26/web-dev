//
// Add the constants
//

// all of our quotes
// avoid typos with string literals by using constants
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'Life is like riding a bicycle. To keep your balance, you must keep moving. ',
    'For every minute you are angry, you lose sixty seconds of happiness. ',
    'Be yourself; everyone else is already taken. ',
    'In three words I can sum up everything I\'ve learned about life: it goes on. ',
];

// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;

// the starting time
let startTime = Date.now();

// page elements
// retrieve the elements by using document.getElementId
// refer to these elements on a regular basis
// getElementById(id)
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


//
// Add start logic
//

// event listener
// listen for something to occur(an event) and execute code in response
// click --> select quote, setup the user interface, setup tracking for the current word and timing
// addEventListener(type, listner)
document.getElementById('start').addEventListener('click', () => {
    /* Setup the word tracking */
    // get a quote
    // randomly select a quote from the quotes array
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    
    // Put the quote into an array of words
    // convert the quote into an array of words
    // --> track the word the player is currently typing
    words = quote.split(' ');
    // reset the word index for tracking
    // --> the player will start on the first word
    wordIndex = 0;
  
    /* Setup the UI */
    // Create an array of span elements(which contains each word) so we can set a class
    // --> highlight the word on the display
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // Convert into string and set as innerHTML on quote display
    // --> display the quote to the player
    quoteElement.innerHTML = spanWords.join('');
    // Highlight the first word as yellow
    // set the className of the first span element to 'highlight'
    quoteElement.childNodes[0].className = 'highlight';
    // Clear any prior messages
    messageElement.innerText = '';
  
    /* Setup the textbox */
    // Clear the textbox(current value on typedValueElement)
    typedValueElement.value = '';
    // set focus to typedValueElement
    typedValueElement.focus();
    // set the event handler
  
    // Start the timer
    startTime = new Date().getTime();
  });