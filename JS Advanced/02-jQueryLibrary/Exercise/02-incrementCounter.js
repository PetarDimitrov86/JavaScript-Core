function increment(selector){
    let textAreaEl = $('<textarea>').addClass('counter').attr('disabled', 'disabled').text('0');
    let increment = $('<button>').addClass('btn').attr('id', 'incrementBtn').text("Increment");
    let add = $('<button>').addClass('btn').attr('id', 'addBtn').text("Add");
    let ul = $('<ul>').addClass('results');

    let elementToAddTo = $(selector);
    elementToAddTo.append(textAreaEl);
    elementToAddTo.append(increment);
    elementToAddTo.append(add);
    elementToAddTo.append(ul);

    increment.on('click', increaseValueByOne);
    add.on('click', addValueToList);

    function increaseValueByOne(){
        let currentNumber = Number(textAreaEl.text());
        textAreaEl.text(currentNumber + 1);
    }

    function addValueToList(){
        let li = $('<li>').append(Number(textAreaEl.text()));
        ul.append(li);
    }
}