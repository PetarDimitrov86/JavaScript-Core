function attachEvents(){
    const baseUrl = `https://baas.kinvey.com/appdata/kid_SyE_umw8W/books`;
    const kinveyUsername = 'peshata';
    const kinveyPassword = 'softuni';
    const authHeader = { "Authorization": `Basic ${btoa(kinveyUsername + ':' + kinveyPassword)}` };

    $('#addBook').click(addNewBook);
    loadAllBooks();

    function loadAllBooks(){
        $('#books').empty();
        $('#books')
            .append($('<tr>')
                .append($('<td>').text(`ISBN`))
                .append($('<td>').text('Title'))
                .append($('<td>').text('Action'))
                .append($('<td>').text('Action')));
        $.get({
            url: baseUrl,
            headers: authHeader
        })
            .then(populateBooksTable);
    }

    function populateBooksTable(data){
        for (let book of data){
            $('#books')
                .append($('<tr>')
                    .append($('<td>').text(book.isbn))
                    .append($('<td>').text(book.title))
                    .append($('<td>').text(book.author))
                    .append($('<td>')
                        .append($('<button>').addClass('btn btn-warning').text('Edit').click(editBookInfo))
                        .append($('<button>').addClass('btn btn-danger').text('Delete').click(() => deleteBook(book._id)))))
        }
    }

    function addNewBook() {
        let isbn = $('#isbn').val();
        let title = $('#title').val();
        let author = $('#author').val();

        let newBook = { isbn, title, author };

        $.post({
            url: baseUrl,
            contentType: 'application/json',
            data: JSON.stringify(newBook),
            headers: authHeader
        })
            .then(loadAllBooks)
    }

    function editBookInfo(){

    }

    function deleteBook(bookId) {
        $.ajax({
            method: "DELETE",
            url: baseUrl + `/${bookId}`,
            headers: authHeader
        })
            .then(() => {
                $(this).parent().parent().remove();
                loadAllBooks();
            })
    }
}