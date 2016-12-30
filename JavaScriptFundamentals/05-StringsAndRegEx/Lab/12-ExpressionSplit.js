function splitExpr([expression]){
    let pattern = /[(),\s;\.]+/g;
    let elements = expression.split(pattern);
    for (let el of elements){
        console.log(el);
    }
}

splitExpr(['let sum = 4 * 4,b = "wow";'])