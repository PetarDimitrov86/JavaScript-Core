function biggestElement(matrixRows){
    let matrix = matrixRows.map(row => row.split(' ').map(Number))
    let biggestNum = Number(matrix[0][0]);

    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++ ){
            let currentNum = matrix[row][col];
            if (biggestNum < matrix[row][col])
                biggestNum = matrix[row][col];
        }
    }
    return biggestNum
}

// console.log(biggestElement(['20 50 10', '8 33 145']))

// Version 2 with for-in
// for (let row in matrix){
//      for (let col in matrix[row]){
//          let currentNum = matrix[row][col];
//          if (biggestNum < matrix[row][col])
//              biggestNum = matrix[row][col];
//      }
//  }

// Version 3 : Author Solution
// function biggestElement(matrixRows) {
//     let matrix = matrixRows.map(row => row.split(' ').map(Number));
//     let biggestNum = Number.NEGATIVE_INFINITY;
// 
//     matrix.forEach(
//         r => r.forEach(
//             c => biggestNum = Math.max(biggestNum, c)));
// 
//     return biggestNum;
// }
