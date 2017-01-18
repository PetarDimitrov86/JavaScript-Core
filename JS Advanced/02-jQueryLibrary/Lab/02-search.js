function search(){
    $('#result').text('');
    let searchPattern = $('#searchText')[0].value;
    let foundItems =  $('li:contains("' + searchPattern + '")');
    foundItems.css('font-weight', 'bold');
    $(':not(:contains(' + searchPattern + '))').css('font-weight', 'normal');
    $('#result').append(foundItems.length + " matches found.")
}