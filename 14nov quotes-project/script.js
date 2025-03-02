const quotes = [
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" },
  { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" }
];


function generate() {
  const random = Math.floor(Math.random() * quotes.length);
  const select = quotes[random];
  document.getElementById('quoteDisplay').innerHTML = `${select.quote}`;
  document.getElementById('quoteAuthor').innerHTML = `-${select.author}`;
}

document.getElementById('newQuoteButton').addEventListener('click',generate);

generate();