function getPersons(){
    class Person{
        constructor(firstName, lastName, age, email){
            [this.firstName, this.lastName, this.age, this.email] = [firstName, lastName, age, email];
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    let person1 = new Person("Maria", "Petrova", 22, "mp@yahoo.com");
    let person2 = new Person("SoftUni");
    let person3 = new Person("Stephan", "Nikolov", 25);
    let person4 = new Person("Peter", "Kolev", 24, "ptr@gmail.com");

    return [person1, person2, person3, person4];
}

console.log(getPersons().join(', '));