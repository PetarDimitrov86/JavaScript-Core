class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date) {
        this.topics.push( { "title": title, "date":date} );
        this.topics = this.topics.sort((t1, t2) => t1.date - t2.date);
        return this;
    }

    get firstTopic(){
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    toString(){
        let topicsStr = this.topics.map(m =>
        ' * ' + m.title + ' - ' + m.date)
            .join("\n");
        return 'Course "' + this.title + '" by ' +
            this.trainer + '\n' + topicsStr;
    }
}

let test = new TrainingCourse("PHP", "Royal");
test.addTopic('Syntax', new Date(2017, 10, 12, 18, 0));
test.addTopic('Exam prep', new Date(2017, 10, 14, 18, 0));
test.addTopic('Intro', new Date(2017, 10, 10, 18, 0));
console.log(test.toString());