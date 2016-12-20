function drawDollars(input){
    let bound = Number(input[0]);
    for (let i = 0; i < bound; i++) {
        let draw = '$'
        for (let j = 0; j < i; j++) {
            draw += '$'
        }
        console.log(draw);
    }
}

drawDollars([5]);