const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const port = 3000;
const cors = require("cors");
var path = require("path");

const quotes = [
  "",
  '"PERFECT IS THE ENEMY OF GOOD." –VOLTAIRE',
  '"I’M STILL LEARNING." –MICHELANGELO',
  '"LIFE IS A JOURNEY, NOT A DESTINATION." –RALPH WALDO EMERSON',
  '"LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE." ―ABIGAIL ADAMS',
  '"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF." –RUMI',
  '"BE CURIOUS, NOT JUDGMENTAL." –WALT WHITMAN',
  '"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT." –ZIG ZIGLAR',
  '"BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS." –UNKNOWN',
  '"NOTHING WILL WORK UNLESS YOU DO." –MAYA ANGELOU',
  '"NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY." –EARL NIGHTINGALE',
  '"ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY." —HENRY FORD',
  '"TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN." –BENJAMIN FRANKLIN',
  '"CHANGE IS THE END RESULT OF ALL TRUE LEARNING." ―LEO BUSCAGLIA',
  '"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER." ―MAHATMA GANDHI',
  '"A LEARNING CURVE IS ESSENTIAL TO GROWTH." –TAMMY BJELLAND',
];

app.use(bodyParser.json());
app.use(cors());

function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}

// Come back to this
app.get("/", (req, res) => {
  res.send("Hello Michael!");
  // here I was trying to retrieve my index.html file but was not sure what the appropriate directory name was
  // res.sendFile(path.join(__dirname + index.html);
});

//  405 error
app.post("/", (req, res) => {
  res.status(405).send("Nope!");
});

// Create a route for retrieving all quotes
app.get("/quotes", (req, res) => {
  res.send(quotes);
});

// Create a route for retrieving a random quote
app.get("/quotes/random", (req, res) => {
  res.send(getRandomQuote());
});

// What happens if index is out of range? See mockups/app-routes.gif for desired behaviour
app.get("/quotes/:index", (req, res) => {
  try {
    const quoteIndex = quotes[req.params.index];
    const selectedQuote = quotes.find((q) => q === quoteIndex);
    if (!selectedQuote) {
      throw "Error: Choose a number between 1 and 15!";
    }
    res.send(selectedQuote);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

// Get the server running
module.exports = app;
