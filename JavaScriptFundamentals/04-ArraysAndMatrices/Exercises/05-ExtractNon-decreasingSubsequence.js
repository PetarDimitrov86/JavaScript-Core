function extractSeq(input){
    let arr = input.map(Number);
    let result = [arr.shift()];
    let currentMaxEl = result[0];
    for (let i=0; i < arr.length; i++){
        if (currentMaxEl > arr[i])
            continue;

        result.push(arr[i]);
        currentMaxEl = arr[i];
    }
    return result.join('\n');
}

console.log(extractSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]));