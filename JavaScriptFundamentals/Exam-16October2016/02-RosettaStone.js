function solve(dataRows){
    let length = Number(dataRows.shift());
    let rowsDecodingMatrix = [];
    for (let i = 0; i < length; i ++){
        rowsDecodingMatrix.push(dataRows.shift().split(' ').map(Number))
    }

    let letters = ' abcdefghijklmnopqrstuvwxyz';

    let matrix = dataRows.map(r => r.split(' ').map(Number));
    for (let row = 0; row < matrix.length; row+= length) {
        for (let col = 0; col < matrix[row].length; col+= rowsDecodingMatrix[0].length) {
            let decodingNumbers = rowsDecodingMatrix.join(' ').split(/[,\s]/g);
            for (let i = row; i < length + row; i++){
                for (let j = col; j < rowsDecodingMatrix[0].length + col; j++){
                    if (j >= matrix[row].length || i >= matrix.length){
                        decodingNumbers.shift();
                        continue;
                    }
                    matrix[i][j] += Number(decodingNumbers.shift());
                    matrix[i][j] = letters[matrix[i][j] % letters.length];
                }
            }
        }
    }
    let finalResult = matrix.join(',').split(/[,]/g).join('').toUpperCase();
    console.log(finalResult);
}

solve(
    [ '2',
        '59 36',
        '82 52',
        '4 18 25 19 8',
        '4 2 8 2 18',
        '23 14 22 0 22',
        '2 17 13 19 20',
        '0 9 0 22 22' ]

);