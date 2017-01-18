function search(){
    let searchPattern = $('#searchText').val();
    //let searchPattern = $('#searchText')[0].value; 
    let foundItems =  $('li:contains("' + searchPattern + '")');
    foundItems.css('font-weight', 'bold');
    $(':not(:contains(' + searchPattern + '))').css('font-weight', 'normal');
    $('#result').text(foundItems.length + " matches found.");
    $('#searchText').val("");
}

// Version 2 : Author Solution
// function search() {
//   let searchText = $('#searchText').val();
//   let matches = 0;
//   $("#towns li").each((index, item) => {
//     if (item.textContent.includes(searchText)) {
//       $(item).css("font-weight", "bold");
//       matches++;
//     } else
//       $(item).css("font-weight", "");
//   });
//   $('#result').text(matches + " matches found.");  }
