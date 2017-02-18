class Record{
    constructor(temperature, humidity, pressure, windSpeed){
        this.id = Record.counter();
        this.temperature = Number(temperature);
        this.humidity = Number(humidity);
        this.pressure = Number(pressure);
        this.windSpeed = Number(windSpeed);
    }

    static counter() {
        if (!Record.currentId)
            Record.currentId = 0;
        return Record.currentId++;
    }

    toString(){                                                                 // Using `` only automaticly adds new lines if the text is on a new line
        return `Reading ID: ${this.id}\n` +
                `Temperature: ${this.temperature}*C\n` +
                `Relative Humidity: ${this.humidity}%\n` +
                `Pressure: ${this.pressure}hpa\n` +
                `Wind Speed: ${this.windSpeed}m/s\n` +
                `Weather: ${this.weatherCondition()}`;
    }

    weatherCondition(){
        if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25)
            return `Stormy`;
        return 'Not stormy'
    }
}

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
