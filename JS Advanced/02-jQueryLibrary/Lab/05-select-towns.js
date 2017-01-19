function attachEvents() {
    // Attach the items select/deselect Event
    $('ul').on('click', 'li', selectDeselect);

    function selectDeselect(){
        if ($(this).attr('data-selected'))
            $(this).removeAttr('data-selected')
                .css('background', '');
        else
            $(this).attr('data-selected', true)
                .css('background', '#DDD');
    }

    // Attach the Show Towns button click event
    $('#showTownsButton').on('click', showTowns);

    function showTowns(){
        let selectedTowns = $('[data-selected = true]');
        let resultTownsArray = [];
        selectedTowns.each((index, item) =>{
            resultTownsArray.push(item.textContent);
        });
        $('#selectedTowns').text(resultTownsArray.join(', '))
    }
}