function storeSequences(dataRows){
    let sequences = new Set();
    let sequencesStrings = new Set();
    for (let dataRow of dataRows){
        let numsArr = dataRow.split(/[\s*,\[\]]/).filter(n => n != '').map(n => Number(n));
        let sortedNums = numsArr.sort((a, b) => b - a);

        let oldSeqLength = sequencesStrings.size;
        sequencesStrings.add(sortedNums.toString());
        if (oldSeqLength != sequencesStrings.size)
            sequences.add(sortedNums);
    }

    let orderedSequences = Array.from(sequences).sort((a, b) => sortSequences(a, b));
    for (let seq of orderedSequences){
        console.log(`[${seq.join(', ')}]`);
    }

    function sortSequences(s1, s2){
        if (s1.length < s2.length)                            // ASCENDING
            return -1;
        if (s1.length > s2.length)
            return 1;
        return 0;
    }
}

storeSequences(['[-3, -2, -1, 0, 1, 2, 3, 4]',
                '[10, 1, -17, 0, 2, 13]',
                '[4, -3, 3, -2, 2, -1, 1, 0]']);