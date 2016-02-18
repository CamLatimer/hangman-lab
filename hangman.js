console.log("welcome to hangman");

game = {
  word: [],
  hiddenWord: [],
  displayWord: [],
  guesses: [],
  incorrectGuesses: 0,
  getWord: function() {
    var usrWord = prompt('gimme a word');
    this.hiddenWord= usrWord;
    this.word = usrWord.split('');
    return usrWord;
  },
  showWord: function () {
    //take game word and make an array / string with -'s
    //this.word --> displayWord;
    this.displayWord = this.word;
    this.displayWord = this.displayWord.fill('-', 0, this.word.length);
    this.displayWord = this.displayWord.join('');
  },
  getGuesses: function() {
    var usrL = prompt('gimme a letter');
    this.guesses.push(usrL);
    var check = this.word.indexOf(usrL);
    return check;
  },
  checkGuesses: function() {

  },
  playGame: function() {
  }
};

game.playGame();



/*
make an object
  game = {};
  game.word = [];
  game.guesses = [];
  game.incorrectGuesses = 0;

  prompt user for a word
    this.getWord = function() {
    var word = prompt('gimme a word');
  }
  prompt user for a guess
    this.getGuess = function() {
    var guess = prompt('gimme a letter');
    this.guesses = this.guesses.push(guess);
  }

  method to display the word to the user. represent unguessed letters with a '-'
  represent correclty guessed letters with a letter that the the user guessed
  this.showWord = function display() {
    take word from user and make an array / string with -'s
    this.word --> displayWord;
  }

  method to check if guess is inside guesses
    this.checkGuesses = function() {
    prompt user for a guess
      this.getGuess = function() {
      var guess = prompt('gimme a letter');
    }
  }
*/


/*
VERSION1 CODE
var word = prompt('gimme a word:');
var guesses = [];
var attempts = word.length + 4;
var attemptsLeft = attempts;
var display = '';

myl = 'a';
place = word.indexOf(myl);

function showDisplay() {
  for(i = 0; i < word.length; i++) {
    display += '-';
  }
  display;
}
function getGuess() {
  if(display === word) {
    attemptsLeft = 0;
    win();
  } else {
    while (attemptsLeft > 0) {
      var guess = prompt('You have ' + attemptsLeft + ' attempts. ' + 'guess a letter:\n' + display);
      var place = word.indexOf(guess);
      if (place > -1) {
          attemptsLeft--;
          display = display.replace(display[place], guess);
          getGuess();

      } else if (place < 0) {
        attemptsLeft--;
        if(attemtps == 0) {
          lose();
        }
        }
        getGuess();
      }
    }
}

function win() {
    var playAgain = prompt('you win! play again? (y/n)');
    if (playAgain == 'y') {
    gameOn();
    } else if (playAgain == 'n') {
      alert('thanks for playing!');
      return;
    }
}
  function lose() {
    var playAgain = prompt('you have no guesses left. play again? (y/n)');
    if (playAgain == 'y') {
      attemptsLeft = attempts;
      gameOn();
    } else if (playAgain == 'n') {
      alert('thanks for playing!');
      return;
    }
  }


function gameOn() {
  showDisplay();
  getGuess();
}
*/
