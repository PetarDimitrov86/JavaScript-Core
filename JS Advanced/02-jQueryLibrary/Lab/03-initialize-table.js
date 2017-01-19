function initializeTable() {
    $("#createLink").click(createCountry);          // eqiuvalent to document.getElemenentById('createLink').addEventListener('click', createCountry)
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    fixRowLinks();

    function createCountry() {
        let country = $('#newCountryText').val();           // .val() <=> [0].textContent;
        let capital = $('#newCapitalText').val();
        addCountryToTable(country, capital, true);
        $('#newCountryText').val('');                       // Clear the fields for entering the text
        $('#newCapitalText').val('');
        fixRowLinks();
    }

    function addCountryToTable(country, capital) {
        let row = $('<tr>')
            .append($("<td>").text(country))            // if it's like this .append($(`<td>${country}</td>`)), you have to HTML Escape the html symbols
            .append($("<td>").text(capital))
            .append($("<td>")
                .append($("<a href='#'>[Up]</a>").click(moveRowUp))
                .append(" ")
                .append($("<a href='#'>[Down]</a>").click(moveRowDown))
                .append(" ")
                .append($("<a href='#'>[Delete]</a>").click(deleteRow)));
        row.css('display','none');
        $("#countriesTable").append(row);
        row.fadeIn();
    }
    function moveRowUp() {
        let row = $(this).parent().parent();        // this refers to the element that was used to activate the event.
        row.fadeOut(function() {                    // .fadeOut slowly removes the element from the page, while .remove instantly removes it.
            row.insertBefore(row.prev());
            row.fadeIn();
            fixRowLinks();
        });
    }
    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertAfter(row.next());
            row.fadeIn();
            fixRowLinks();
        });
    }
    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.remove();                   // JavaScript is by default asynhronous, by giving a function in the fadeOut(), this way the function will be executed while the element is removed.
            fixRowLinks();
        });
    }
    function fixRowLinks() {
        // Show all links in the table
        $('#countriesTable a').css('display', 'inline');

        // Hide [Up] link in first table data row
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')")
            .css('display', 'none');

        // Hide the [Down] link in the last table row
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
            .css('display', 'none');
    }
}
