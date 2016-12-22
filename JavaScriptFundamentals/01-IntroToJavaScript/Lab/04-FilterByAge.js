function minAge (input){
    let minimumAge = Number(input[0]);
    let firstName = input[1];
    let firstAge = Number(input[2]);
    let secondName = input[3];
    let secondAge = Number(input[4]);

    let firstPerson = { name : firstName, age : firstAge };
    let secondPerson = { name : secondName, age : secondAge  };

    for (let person of [firstPerson, secondPerson]){
        if (person.age >= minimumAge){
            console.log(person)
        }
    }
}

// minAge(['12', 'Ivan', '15', 'Asen', '9'])