// add delay to selections
// show back of card initially and flip on select
// finished game
// end-of-game stats?
// reset button?

// store guess counter
let count = 0;

// store guesses
let firstGuess = "";
let secondGuess = "";

// previous guess
let previousTarget = null;

// delay for card flipping
let delay = 1200;

// Card Data
const cardsArray = [
	{
		"name": "shell",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/blueshell.png",
	},
	{
		"name": "star",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/star.png",
	},
	{
		"name": "bobomb",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/bobomb.png",
	},
	{
		"name": "mario",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/mario.png",
	},
	{
		"name": "luigi",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/luigi.png",
	},
	{
		"name": "peach",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/peach.png",
	},
	{
		"name": "1up",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/1up.png",
	},
	{
		"name": "mushroom",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/mushroom.png",
	},
	{
		"name": "thwomp",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/thwomp.png",
	},
	{
		"name": "bulletbill",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/bulletbill.png",
	},
	{
		"name": "coin",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/coin.png",
	},
	{
		"name": "goomba",
		"img": "https://raw.githubusercontent.com/taniarascia/memory/master/img/goomba.png",
	},
];

// duplicate cardsArray by using .concat()
let gameGrid = cardsArray.concat(cardsArray);

// shuffle gameGrid
gameGrid.sort(() => 0.5 - Math.random());

// Grab root div
const game = document.getElementById("game");

// Create section with class of grid
const grid = document.createElement("section");
grid.setAttribute("class", "grid");

// Append grid section to game div
game.appendChild(grid);

// loop through gameGrid and create new card div for each object
gameGrid.forEach(item => {
	const card = document.createElement("div");
	// apply card class to that div
	card.classList.add("card");
	// set data-name attr of div to cardsArray name
	card.dataset.name = item.name;
	// apply background img of div to the cardsArray image
	card.style.backgroundImage = `url(${item.img})`
	// append card div to grid section
	grid.appendChild(card);
});

// add event listener to grid
grid.addEventListener('click', function(event) {
	// event target is clicked item
	let clicked = event.target;

	// don't allow grid section itself or same card to be selected
	if(clicked.nodeName === "SECTION" || clicked === previousTarget) {
		return;
	}

	// only allow 2 cards to be selected
	if(count < 2) {
		count++;
		if(count === 1) {
			// assign first guess and .selected
			firstGuess = clicked.dataset.name;
			clicked.classList.add("selected");
		} else {
			// assign second guess and .selected
			secondGuess = clicked.dataset.name;
			clicked.classList.add("selected");
		}
		// if both guesses aren't empty
		if(firstGuess != "" && secondGuess != "") {
			// and firstGuess matches secondGuess
			if(firstGuess === secondGuess) {
				// run match() & resetGuesses(), on a delay
				setTimeout(match, delay);
				setTimeout(resetGuesses, delay);
			} else {
				setTimeout(resetGuesses, delay);
			}
		}	
		// set previous target to clicked
		previousTarget = clicked;
	}
});

// check for match and add CSS .match
const match = () => {
	var selected = document.querySelectorAll(".selected");
	selected.forEach(card => {
		card.classList.add("match");
	});
}

// reset guesses after second guess
const resetGuesses = () => {
	// reset variables to default values
	firstGuess = "";
	secondGuess = "";
	count = 0;

	// reset selection markers
	var selected = document.querySelectorAll(".selected");
	selected.forEach(card => {
		card.classList.remove("selected");
	});
}