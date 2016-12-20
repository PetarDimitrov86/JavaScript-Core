function roundUp (input){
    let number = Number(input[0]) * 1;
    let precision = Number(input[1]);
    if (precision > 15)
        precision = 15;
    let result = number * 1; // need this so that we can have a variable as number, to use the toFixed method
    result = result.toFixed(precision)
    while (result.endsWith('0'))
        result = result.substring(0, result.length - 1);
    return result;
}

// console.log(roundUp([10.5, 3]))