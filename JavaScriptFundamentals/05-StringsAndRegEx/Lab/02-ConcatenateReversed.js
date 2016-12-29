function concatReverse(input){
    let result = '';
    for (let str of input)
        result += str;
    let concatResult = '';
    for (let i = result.length - 1; i>= 0; i--)
        concatResult += result[i];
    console.log(concatResult)
}

concatReverse(['I', 'am', 'student'])