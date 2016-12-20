function calcLogarithm(nums){
    let numbers = nums.map(Number);
    let result = "";
    for (let number of numbers) {
        result += Math.log2(number) + '\n'
    }
    return result;
}

// console.log(calcLogarithm([1024, 1048576, 256, 1, 2, 50, 100]))