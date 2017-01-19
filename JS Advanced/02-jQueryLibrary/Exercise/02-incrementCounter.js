function increment(selector){
    let textAreaEl = $('<textarea>').addClass('counter').attr('disabled', 'disabled').val(0);
    let increment = $('<button>').addClass('btn').attr('id', 'incrementBtn').text("Increment");
    let add = $('<button>').addClass('btn').attr('id', 'addBtn').text("Add");
    let ul = $('<ul>').addClass('results');

    let fragment = document.createDocumentFragment();       //Adding multiple elements to the DOM can be expensive, instead of repeatedly adding to the DOM we can create a DocumentFragment
                                                            // and add the elements to it instead. When we have built our hierarchy we can append the DocumentFragment to the DOM, which will
                                                            // add all of the fragment’s elements to the specified selector.
    textAreaEl.appendTo(fragment);
    increment.appendTo(fragment);
    add.appendTo(fragment);
    ul.appendTo(fragment);
    $(selector).append(fragment);

    increment.on('click', increaseValueByOne);
    add.on('click', addValueToList);

    function increaseValueByOne(){
        let currentNumber = Number(textAreaEl.val());
        textAreaEl.val(currentNumber + 1);
    }

    function addValueToList(){
        let li = $('<li>').append(Number(textAreaEl.val()));
        ul.append(li);
    }
}