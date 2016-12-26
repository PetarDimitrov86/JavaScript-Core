function printArray(input){
    let delimiter = input[input.length - 1];
    return input.slice(0, input.length - 1).join(delimiter);
}

console.log(printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']));