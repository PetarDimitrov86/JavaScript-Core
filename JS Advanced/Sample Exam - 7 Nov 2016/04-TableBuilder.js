function tableBuilder(selector) {
    function createTable(columnNames) {
        let table = $('<table>');
        let tableRow = $('<tr>');
        for (let column of columnNames){
            tableRow.append($('<th>')
                .text(column))
        }
        tableRow.append($('<th>Action</th>'));
        table.append(tableRow);
        $(selector).html(table)
    }

    function fillData(dataRows) {
        for (let row of dataRows){
            let tableRow = $('<tr>');
            for (let columnData of row){
                tableRow.append($('<td>')
                    .text(columnData))
            }
            tableRow.append($('<td>')
                .append($('<button>')
                    .text('Delete')
                    .click(deleteRow)));
            $(selector + '>table').append(tableRow)
        }
    }

    function deleteRow(){
        $(this).parent().parent().remove();
    }

    return { createTable, fillData }
}