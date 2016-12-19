function multiply(input) {
    let result = 1;
    for (let num of input){
        result *= Number(num);
    }
    return result;
}