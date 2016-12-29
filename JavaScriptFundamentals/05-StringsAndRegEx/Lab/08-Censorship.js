function censor(input){
    let text = input[0];
    for (let i = 1; i < input.length; i++){
        let badWord = input[i];
        while (text.includes(badWord)){
            text = text.replace(badWord, '-'.repeat(badWord.length))
        }
    }
    return text;
}

// console.log(censor(['roses are red, violets are blue', ', violets are', 'red']));