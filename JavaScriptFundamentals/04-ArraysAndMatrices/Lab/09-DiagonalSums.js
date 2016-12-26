function calcSum(input){
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let matrix = input.map(r => r.split(' ').map(Number));

    for (let row in matrix){
        for (let col in matrix[row]){
            if (row == col)
                mainDiagonalSum += matrix[row][col];
            if (Number(row) + Number(col) == matrix.length - 1)
                secondaryDiagonalSum += matrix[row][col];
        }
    }

    return mainDiagonalSum + ' ' + secondaryDiagonalSum;
}

// console.log(calcSum(['3 5 17', '-1 7 14', '1 -8 89']));