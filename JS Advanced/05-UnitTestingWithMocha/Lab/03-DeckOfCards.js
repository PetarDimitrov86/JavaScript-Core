function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face))
            throw new Error('Error');
        if (!validSuits.includes(suit))
            throw new Error('Error');

        let suitToChar = {
            'S': "\u2660", 'H': "\u2665", 'D': "\u2666", 'C': "\u2663"
        };

        return card = {
            face: face,
            suit: suit,
            toString: () => face + suitToChar[suit]
        };
    }
    let allCards = [];
    for (let card of cards){
        let cardSuit = card.slice(-1);
        let cardFace = card.slice(0, card.length - 1);
        try {
            allCards.push(makeCard(cardFace, cardSuit))
        }
        catch(err) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(allCards.join(' '))
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);