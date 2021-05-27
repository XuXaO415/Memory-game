const gameContainer = document.getElementById ('game');

let flippedCard = false;
let firstCard, secondCard;
let unClickedCard = false;

const COLORS = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'blue',
  'green',
  'orange',
  'purple',
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
//https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
function shuffle (array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor (Math.random () * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle (COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors (colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement ('div');

    // give it a class attribute for the value we are looping over
    newDiv.classList.add (color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener ('click', handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append (newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick (e) {
  console.dir (e.target);
  if (unClickedCard) return;
  // if card is clicked, nothing will happen
  if (e.target.classList.contains ('flip')) return;

  // change background color of card to class name
  const selectColor = e.target.className;
  console.dir ('e.target ');

  e.target.style.backgroundColor = selectColor;
  //add class name of flipped card to firstCard & secondCard's class
  e.target.classList.add ('flip');
  //create variable to hold/store the number of attempted card flips from user
  const countFlips = document.querySelectorAll ('.flip').length;
  /*  const countFlips = document.querySelector ('div .flip').length; */
  //define card variables
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    console.log ('first card ');
  } else {
    unClickedCard = false;
    secondCard = this;
    console.log ('second card');
  }
  if (countFlips < 2) return;
  /*   const fistCard = document.createElementById('firstCard');
        const secondCard = document.createElementById('secondCard'); */

  if (countFlips == 2 && firstCard.className === secondCard.className) {
    /*  if ((countFlips !== 2) & (firstCard.classList !== secondCard.classList)) { */
    console.log ('first card matches second card');
    function matchCards () {
      firstCard.classList.remove ('flip');
      secondCard.classList.remove ('flip');
      unClickedCard = false;
      flippedCard = false;
      console.log ('cards match!');
    }
    matchCards ();
  } else {
    unClickedCard = true;

    function resetCards () {
      firstCard.classList.remove ('flip');
      secondCard.classList.remove ('flip');
      firstCard.style.backgroundColor = '';
      secondCard.style.backgroundColor = '';
      unClickedCard = false;
      flippedCard = false;
      console.log ('Cards reset');
    }
    setTimeout (resetCards, 1000);
  }
}

createDivsForColors (shuffledColors);
