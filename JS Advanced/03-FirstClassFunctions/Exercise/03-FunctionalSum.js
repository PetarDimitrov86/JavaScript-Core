let add = (function(){
    let sum = 0;
    return function SumNums(num) {
        sum += num;
        SumNums.toString = () => sum;
        return SumNums;
    }
})();

console.log('' + add(1)(6)(-3));