function attachEvents(selector){
    $(selector).on('click', extractText);

    function extractText(){
        let textToDisplay = $('#content strong').text();
        let container =
            $('<div>')
                .attr('id', 'summary')
                .append($('<h2>').text("Summary"))
                .append($('<p>').text(textToDisplay));
        $('#content').parent().append(container);
    }
}