class CheckingAccount {
    constructor (clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() { return this._clientId }
    get email() { return this._email }
    get firstName() { return this._firstName }
    get lastName() { return this._lastName }

    set clientId(value) {
        if (value.length !== 6)
            throw new TypeError('Client ID must be a 6-digit number');
        this._clientId = value;
    }

    set email(value) {
        let pattern = /[A-Za-z0-9]+@[A-Za-z.]+/g;
        if (!pattern.test(value))
            throw new TypeError('Invalid e-mail');
        this._email = value;
    }

    set firstName(value) {
        if (value.length < 3 || value.length > 20)
            throw new TypeError('First name must be between 3 and 20 characters long');
        let pattern = /[^A-Za-z]/g;
        if (pattern.test(value))
            throw new TypeError('First name must contain only Latin characters');
        this._firstName = value;
    }

    set lastName(value) {
        if (value.length < 3 || value.length > 20)
            throw new TypeError('Last name must be between 3 and 20 characters long');
        let pattern = /[^A-Za-z]/g;
        if (pattern.test(value))
            throw new TypeError('Last name must contain only Latin characters');
        this._lastName = value;
    }
}

//let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
//let acc4 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');