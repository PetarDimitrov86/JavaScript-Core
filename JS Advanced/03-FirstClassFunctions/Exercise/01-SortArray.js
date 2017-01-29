function solve(arr, orderType){

    if (orderType == 'asc')
        return arr.sort(ascending);
    else
        return arr.sort(descending);
    function ascending(a, b){
        return a - b;
    }

    function descending(a, b){
        return b - a;
    }
}

console.log(solve([14, 7, 17, 6, 8], 'desc'))