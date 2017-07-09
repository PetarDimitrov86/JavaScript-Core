function calcSubSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr))
        return NaN;
    let sum = 0;
    if (startIndex < 0) startIndex = 0;
    if (endIndex >= arr.length) endIndex = arr.length - 1;
    for (let i = startIndex; i <= endIndex; i++){
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(calcSubSum([10, 20, 30, 40, 50, 60], 3, 300));