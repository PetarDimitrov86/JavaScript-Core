function extractWords([input]){
    let myRe = new RegExp("[a-zA-Z0-9]+", "g");
    let myArray = input.match(myRe);
    var result = myArray.join(', ').toUpperCase();
    console.log(result)
}

extractWords(['          hel        lo     ASDSADASDA   ASDASD']);