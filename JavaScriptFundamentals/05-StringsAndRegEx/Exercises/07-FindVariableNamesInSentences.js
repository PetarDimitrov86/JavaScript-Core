function findNames([text]){
    let pattern = /_([A-Za-z0-9]+)/g;
    let match;
    let result = [];
    while (match = pattern.exec(text))
        result.push(match[1]);
    return result.join(',')
}

console.log(findNames(['The _id and _age variables are both integers.']));
