function makeCard(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face))
        throw new Error('Error');
    if (!validSuits.includes(suit))
        throw new Error('Error');

    let suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    return card = {
        face: face,
        suit: suit,
        toString: () => face + suitToChar[suit]
    };
}

console.log('' + makeCard('A', 'S'));