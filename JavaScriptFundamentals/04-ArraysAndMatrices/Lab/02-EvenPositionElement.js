function findEvenPositionEl(input){
    let result = '';
    for (let i = 0; i < input.length; i+=2){
        result += input[i] + " ";
    }
    return result;
}

console.log(findEvenPositionEl(['20', '30', '40']))