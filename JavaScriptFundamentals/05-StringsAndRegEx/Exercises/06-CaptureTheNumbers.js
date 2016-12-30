function capNums(input){
    let nums = []
    let pattern = /\d+/g
    for (let line of input){
        let match;
        while (match = pattern.exec(line))
            nums.push(match[0]);
    }
    return nums.join(' ');
}

console.log(capNums(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']));

// Version 2 for match
// let match = pattern.exec(line);
// while (match){
// nums.push(match[0]);
// match = regex.exec(line);
