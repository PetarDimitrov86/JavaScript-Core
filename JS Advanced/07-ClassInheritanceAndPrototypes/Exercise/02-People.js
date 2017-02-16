function solve(){
    class Employee {
        constructor(name, age){
            if (new.target === Employee)
                throw new TypeError("Cannot create an instance of Employee");
            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
            this.currentTaskIndex = 0;
        }
        work() { console.log(this.tasks[(this.currentTaskIndex++) % this.tasks.length]); }
        collectSalary() { console.log(`${this.name} received ${this.getSalary()} this month.`); }
        getSalary() { return this.salary; }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a complicated task.`, `${this.name} is taking time off work.`, `${this.name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`];
            this.dividend = 0;
        }
        getSalary() { return this.salary + this.dividend; }
    }

    return {Employee, Junior, Senior, Manager}
}

let result = solve();
console.log(`========== GUY 1 =========`);
let guy1 = new result.Senior('Peter', 27);
guy1.salary = 1200;
guy1.work();
guy1.work();
guy1.work();
guy1.work();
guy1.work();
guy1.collectSalary();

console.log(`========== GUY 2 =========`);
let guy2 = new result.Manager("Peshata", 30);
guy2.salary = 500;
guy2.dividend = 200;
guy2.collectSalary();
guy2.work();
guy2.work();
guy2.work();
guy2.work();