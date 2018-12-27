// duplicate cards to have 2 sets of 12
// randomzie card display
// add selected syle for selected cards
// only allow 2 cards to be selected at a time
// reset guess count after 2
// add delay to selections
// show back of card initially and flip on select
// finished game
// end-of-game stats?
// reset button?

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