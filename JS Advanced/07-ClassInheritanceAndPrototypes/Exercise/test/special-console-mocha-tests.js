let expect = require('chai').expect;
let Console = require('../05-SpecialConsole').Console;

describe("Console() - let you use placeholders like in C#",function(){
    describe("passing only one valid parameter", function(){
        it('should return the same string if only one parameter is passed)', function(){
            expect(Console.writeLine('abcd')).to.be.equal('abcd')
        });

        it('should stringify if only a single object is passed as parameter)', function(){
            expect(Console.writeLine( {name: "Pesho"})).to.be.equal('{"name":"Pesho"}')
        });
    });

    describe("passing one or zero invalid parameters", function () {
        it('should return empty string if an empty string is passed)', function(){
            expect(Console.writeLine('')).to.be.equal('')
        });

        it('should return undefined if another type of variable is passed)', function(){
            expect(Console.writeLine(5)).to.be.undefined;
        });

        it("should return TypeError with an empty param", function () {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });
    });

    describe("passing multiple invalid parameters", function(){
        it('should throw error if first parameter is not a string)', function(){
            let func = function(){
                Console.writeLine(1, 'replacement', 'anoterone');
            };
            expect(func).to.throw(TypeError)
        });

        it('should throw error if the number of placeholders are less than the arguments passed)', function(){
            let func = function(){
                Console.writeLine('valid placeholder {0} replace', 'what', 'who')
            };
            expect(func).to.throw(RangeError)
        });

        it('should throw error if the number of placeholders are more than the arguments passed)', function(){
            let func = function(){
                Console.writeLine('valid placeholder {0} replace {1}', 'who')
            };
            expect(func).to.throw(RangeError)
        });

        it('should throw error if the placeholder numbers are no one after the other)', function(){
            let func = function(){
                Console.writeLine('valid placeholder {0} replace {3}', 'who', 'where')
            };
            expect(func).to.throw(RangeError)
        });

        it('should throw error if the indexes dont match', function(){
            let func = function(){
                Console.writeLine('valid placeholder {1} replace', 'who')
            };
            expect(func).to.throw(RangeError)
        });

        it("should return RangeError with invalid placeholder index (index > upper boundary)", function () {
            expect(() => Console.writeLine('valid placeholder {30} replace', 'somerandomstring')).to.throw(RangeError);
        });
    });

    describe("passing multiple valid parameters", function () {
        it('should return a properly replaced string with 1 placeholder', function(){
            expect(Console.writeLine('This is number {0}', 'one')).to.be.equal('This is number one')
        });

        it('should return a properly replaced string with 2 placeholders', function(){
            expect(Console.writeLine('This is number {0}, followed by number {1}', 'one', 'two')).to.be.equal('This is number one, followed by number two')
        });

        it('should return a properly replaced string with 3 placeholders', function(){
            expect(Console.writeLine('This is number {0}, followed by number {1}. Then comes number {2}', 'one', 'two', 'three')).to.be.equal('This is number one, followed by number two. Then comes number three')
        });
    });
});