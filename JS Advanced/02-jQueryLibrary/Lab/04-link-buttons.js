function attachEvents() {
    $('a.button').on('click', selectButton)

    function selectButton(){
        $('.selected').removeClass('selected');
        $(this).addClass('selected')
    }
}