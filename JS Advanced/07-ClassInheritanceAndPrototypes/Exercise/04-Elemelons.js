function solve(){
    class Melon{
        constructor(weight, melonSort){
            if (new.target === Melon){
                throw new TypeError("Cannot create instance of Melon")
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
            this._elementIndex = weight * melonSort.length;
        }
        get elementIndex() { return this._elementIndex; }

        toString(){
            let indexOfMelon = this.constructor.name.indexOf('melon');
            return `Element: ${this.constructor.name.substr(0, indexOfMelon)}\n` +
                `Sort: ${this.melonSort}\n` +
                `Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }
    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }
    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }
    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Earthmelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = "Watermelon";
            this.elementsArr = ['Firemelon', 'Earthmelon', 'Airmelon', 'Watermelon'];
            this.elInd = 0;
        }
        morph(){
            this.element = this.elementsArr[this.elInd++ % 4]
        }

        toString(){
            let indexOfMelon = this.element.indexOf('melon');
            return `Element: ${this.element.substr(0, indexOfMelon)}\n` +
                `Sort: ${this.melonSort}\n` +
                `Element Index: ${this.elementIndex}`;
        }
    }

    return { Melon, Watermelon, Firemelon, Airmelon, Earthmelon, Melolemonmelon }
}
let melons = solve();


//let test = new Melon(100, "Test");
//Throws error

let watermelon = new melons.Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

let lemonmelon = new melons.Melolemonmelon(14, 'whatwhat');
console.log(lemonmelon.toString());
lemonmelon.morph();
console.log(lemonmelon.toString());
lemonmelon.morph();
console.log(lemonmelon.toString());
lemonmelon.morph();
console.log(lemonmelon.toString());
lemonmelon.morph();
// Element: Water
// Sort: Kingsize
// Element Index: 100
