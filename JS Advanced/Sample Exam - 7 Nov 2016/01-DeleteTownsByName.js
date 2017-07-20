function attachEvents() {
    $('#btnDelete').click(deleteTowns);

    function deleteTowns(){
        let townToDelete = $('#townName').val();
        let result = `${townToDelete} not found.`;

        let allTowns = $('#towns>option').toArray();
        for (let town of allTowns){
            if ($(town).text() == townToDelete){
                $(town).remove();
                result = `${townToDelete} deleted.`
            }
        }

        $('#result').text(result)
    }
}