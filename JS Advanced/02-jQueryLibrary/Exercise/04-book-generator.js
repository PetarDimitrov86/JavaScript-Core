let createBook = (function generateBooks(){
    let id = 1;
    return function(selector, title, author, ISBN){
        let titlePar = $('<p>').addClass('title').text(title);
        let authorPar = $('<p>').addClass('author').text(author);
        let isbnPar = $('<p>').addClass('isbn').text(ISBN);

        let selectButton = $('<button>').css('padding', '5px').css('margin', '2px').text('Select');
        let deselectButton = $('<button>').css('padding', '5px').css('margin', '2px').text('Deselect');
        selectButton.on('click', selectBook);
        deselectButton.on('click', deselectBook);

        let fragment = document.createDocumentFragment();
        titlePar.appendTo(fragment);
        authorPar.appendTo(fragment);
        isbnPar.appendTo(fragment);
        selectButton.appendTo(fragment);
        deselectButton.appendTo(fragment);
        $(selector).append(fragment);

        let bookContainer = $(selector);
        bookContainer.attr('id', id++);

        function selectBook(){
            if (!bookContainer.attr('data-selected')){
                bookContainer.attr('data-selected', true);
                bookContainer.css('border', '2px solid blue');
            }
        }

        function deselectBook(){
            if (bookContainer.attr('data-selected')){
                bookContainer.removeAttr('data-selected')
                bookContainer.css('border', '');
            }
        }
    }
}());

//function createBook(selector, title, author, ISBN){
//    let id = $('div[id*="book"]').toArray().length + 1;     // get the total ammount of divs with id attribute, which contains the string "book", CSS Selector *=

//    let titlePar = $('<p>').addClass('title').text(title);
//    let authorPar = $('<p>').addClass('author').text(author);
//    let isbnPar = $('<p>').addClass('isbn').text(ISBN);

//    let selectButton = $('<button>').css('padding', '5px').css('margin', '2px').text('Select');
//    let deselectButton = $('<button>').css('padding', '5px').css('margin', '2px').text('Deselect');
//    selectButton.on('click', selectBook);
//    deselectButton.on('click', deselectBook);

//    let divContainer = $('<div>')               // append all the paragraphs and buttons, and finally append the div to the given id wrapper
//        .append(titlePar)
//        .append(authorPar)
//        .append(isbnPar)
//        .append(selectButton)
//        .append(deselectButton)
//        .attr('id', 'book' + id)
//        .appendTo($(selector));

//    function selectBook(){
//        divContainer.css('border', '2px solid blue');
//    }

//    function deselectBook(){
//        divContainer.css('border', 'none');
//    }
//}
