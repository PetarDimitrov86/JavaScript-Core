function listBuilder(selector) {
    function createNewList() {
        $(selector).empty();
        $(selector).append($('<ul>'))
    }

    function addItem(text) {
        let li = $('<li>')
            .text(text)
            .append($('<button>').text('Up').click(moveUp))
            .append($('<button>').text('Down').click(moveDown));
        $(selector + ' ul').append(li);
    }

    function moveUp() {
        if ($(this).parent().prev() != undefined)
            $(this).parent().insertBefore($(this).parent().prev())
    }

    function moveDown() {
        $(this).parent().insertAfter($(this).parent().next())
    }

    return { createNewList, addItem }
}