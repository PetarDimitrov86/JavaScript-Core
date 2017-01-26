function reducer(numbers){
    numbers = numbers.map(Number);
    let funcSum = function(){
        let sum = 0;
        for (let num of numbers)
            sum += num;
        return sum
    };
    let funcMin = function(){
        let min = numbers[0];
        for (let i = 0; i < numbers.length; i++)
            if (numbers[i] < min)
                min = numbers[i];
        return min;
    };
    let funcMax = function(){
        let max = numbers[0];
        for (let i = 0; i < numbers.length; i++)
            if (numbers[i] > max)
                max = numbers[i];
        return max;
    };
    let funcProduct = function(){
        let product = 1;
        for (let num of numbers)
            product *= num;
        return product;
    };
    let funcJoin = function(){
        let result = '';
        for (let num of numbers)
            result += num;
        return result;
    };
    console.log(`Sum = ${funcSum()}`);
    console.log(`Min = ${funcMin()}`);
    console.log(`Max = ${funcMax()}`);
    console.log(`Product = ${funcProduct()}`);
    console.log(`Join = ${funcJoin()}`);
}

reducer([2,3,10,5]);