let programRobot = (function(){
    let ingredients = { carbohydrate: 0, protein: 0, fat: 0, flavour: 0};
    let recipies = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function(parameters){
        let foodInfo = parameters.split(' ');
        let commandType = foodInfo[0];
        let ingredient, quantity;
        if (foodInfo.length > 1){
            ingredient = foodInfo[1];
            quantity = Number(foodInfo[2])
        }
        switch (commandType){
            case 'restock' : return restock(ingredient, quantity); break;
            case 'report' : return printReport(); break;
            case 'prepare' : return tryPrepare(ingredient, quantity); break;
        }
    };

    function restock(ingr, quan){
        ingredients[ingr] += quan;
        return 'Success'
    }

    function printReport(){
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
    }

    function tryPrepare(foodType, amount){
        for (let ingr of Object.keys(recipies[foodType])){
            if (ingredients[ingr] < recipies[foodType][ingr] * amount)
                return `Error: not enough ${ingr} in stock`
        }

        for (let ingr of Object.keys(recipies[foodType])){
            ingredients[ingr] -= recipies[foodType][ingr] * amount
        }
        return 'Success';
    }
})();


console.log(programRobot('restock flavour 50'));
console.log(programRobot('prepare coke 4'));
console.log(programRobot('restock carbohydrate 10'));
console.log(programRobot('restock flavour 10'));
console.log(programRobot('prepare apple 1'));
console.log(programRobot('restock fat 10'));
console.log(programRobot('prepare burger 1'));
console.log(programRobot('report'));