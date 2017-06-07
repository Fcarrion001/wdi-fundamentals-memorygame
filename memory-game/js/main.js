
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queenof-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queenof-diamonmds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/kingof-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/kingof-diamonds.png'
}
];

var cardsInPlay = [];

checkForMatch = function() {

	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
} 
}
	else {
		alert("Sorry, try again");
		}
};


flipCard = function(cardId){


	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit)

	cardsInPlay.push(cards[cardId].rank);

checkForMatch();
	
};

flipCard(0);
flipCard(2);