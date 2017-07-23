function cardDeckBuilder(selector) {
    let suits = {
        'C': '\u2663',
        'D': '\u2666',
        'H': '\u2665',
        'S': '\u2660'
    };
    function addCard(face, suit) {
        let card = $('<div>')
            .addClass('card')
            .text(`${face} ${suits[suit]}`)
            .click(reverseCards);
        $(selector).append(card)
    }

    function reverseCards(){
        let parent = $(selector);
        parent.children()
            .each(function(index,card){
                parent.prepend(card)
            })
    }

    return { addCard }
}