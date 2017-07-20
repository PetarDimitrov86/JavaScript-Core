function attachEvents() {
    $('#btnDelete').click(deleteTown);

    function deleteTown(){
        let selectedTown = $('#towns').val();
        if (selectedTown != '' && selectedTown != undefined){
            $('#towns>option:selected').remove()
        }
    }

    $('#btnAdd').click(addNewTown);

    function addNewTown(){
        let newItemText = $('#newItem').val();
        if (newItemText != '' && newItemText != undefined){
            $('#towns')
                .append($('<option>')
                    .text(newItemText));
            $('#newItem').val('')
        }
    }
}