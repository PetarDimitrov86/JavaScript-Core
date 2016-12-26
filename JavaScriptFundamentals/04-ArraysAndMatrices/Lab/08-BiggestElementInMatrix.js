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
