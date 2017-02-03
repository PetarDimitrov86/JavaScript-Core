let fibNums = (function (){
    let fibNums = [1];
    let f1 = 0;
    let f2 = 1;
    return function(num){
        for (let i = 0; i < num - 1; i++){
            fibNums.push(f1 + f2);
            f1 = f2;
            f2 = fibNums[fibNums.length - 1]            // f2 = fibNums.slice(-1)[0];
        }
        return fibNums
    }
})();

console.log(fibNums(5));

// Modified version to properly use IIFE

// function getFibNums(num) {
//     let fibNum = (function () {
//         let f1 = 0;
//         let f2 = 1;
//         return () => {
//             let numToReturn = f1 + f2;
//             f1 = f2;
//             f2 = numToReturn;
//             return numToReturn
//         }
//     })();
//     let fibNumbers = [1];
//     for (let i = 0; i < num - 1; i++) {
//         fibNumbers.push(fibNum())
//     }
//     return fibNumbers
// }

// Author Solution:
// let fib = (() => {
//   let f0 = 0, f1 = 1;
//   return () => {
//     let oldf0 = f0, oldf1 = f1;
//     f0 = oldf1;
//     f1 = oldf0 + oldf1;
//     return oldf1;
//   }
// })();
// let fibNumbers = [];
// for (let i = 1; i <= n; i++)
//   fibNumbers.push(fib());
// return fibNumbers;
