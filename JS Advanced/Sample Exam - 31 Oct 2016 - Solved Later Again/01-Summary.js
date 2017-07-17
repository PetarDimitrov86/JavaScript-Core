function sumarize(selector) {
    $(selector).click(findHighlighted);

    function findHighlighted(){
        let text = $('#content strong').text();
        let div = $('<div>').attr('id', 'summary')
            .append($('<h2>Summary</h2>'))
            .append($(`<p>${text}</p>`))
        $('#content').parent().append(div);
    }
}