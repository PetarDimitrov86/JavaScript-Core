let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = require('../04-SharedObject').sharedObject;

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe("sharedObject DOM testing",function(){
    it('check if initial name value is null', function(){
        expect(sharedObject.name).to.be.null;
    });

    it('check if initial income value is null', function(){
        expect(sharedObject.income).to.be.null;
    });

    describe('changeName', function(){
        it('changeName should not change the name property if an invalid value is passed', function(){
            sharedObject.name = null;
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });

        it('changeName should not change the name property if an invalid value is passed, with preexisting value', function(){
            sharedObject.name = "randomValue";
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal("randomValue");
        });

        it('changeName should not change the textbox value if an invalid value is passed, with preexisting value', function(){
            $('#name').val("ivaN");
            sharedObject.changeName('');
            expect( $('#name').val()).to.be.equal("ivaN");
        });

        it('changeName should change the inner name value correctly', function(){
            sharedObject.changeName("PeShO");
            expect(sharedObject.name).to.be.equal("PeShO");
        });

        it('changeName should change the value of the element with id "name" correctly', function(){
            sharedObject.changeName("stAmaAt");
            expect($('#name').val()).to.be.equal("stAmaAt");
        });
    });

    describe('changeIncome', function(){
        it('changeIncome should return undefined if the entered number is <= 0', function(){
            sharedObject.income = 20;
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.be.equal(20);
        });

        it('changeIncome should return undefined if the entered number is a string', function(){
            sharedObject.income = 130;
            sharedObject.changeIncome('pesho');
            expect(sharedObject.income).to.be.equal(130);
        });

        it('changeIncome should return undefined if the entered number is a floating-point number', function(){
            sharedObject.income = 20;
            sharedObject.changeIncome(2.15);
            expect(sharedObject.income).to.be.equal(20);
        });

        it('changeIncome should return undefined if the entered number is 0', function(){
            sharedObject.income = 130;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(130);
        });

        it('changeIncome should return undefined if the entered number is <= 0', function(){
            $('#income').val('20');
            sharedObject.changeIncome(-10);
            expect($('#income').val()).to.be.equal('20');
        });

        it('changeIncome should return undefined if the entered number is a string', function(){
            $('#income').val('240');
            sharedObject.changeIncome('pesho');
            expect($('#income').val()).to.be.equal('240');
        });

        it('changeIncome should return undefined if the entered number is a floating-point number', function(){
            $('#income').val('201');
            sharedObject.changeIncome(4.56);
            expect($('#income').val()).to.be.equal('201');
        });

        it('changeIncome should return undefined if the entered number is 0', function(){
            $('#income').val('122');
            sharedObject.changeIncome(0);
            expect($('#income').val()).to.be.equal('122');
        });

        it('changeIncome should change the inner income value correctly', function(){
            sharedObject.income = 5;
            sharedObject.changeIncome(43);
            expect(sharedObject.income).to.be.equal(43);
        });

        it('changeIncome should change the income element value correctly', function(){
            $('#income').val(5);
            sharedObject.changeIncome(10);
            expect($('#income').val()).to.be.equal('10');
        });
    });

    describe('updateName', function(){
        it('updateName should return not change name property if input value is invalid', function(){
            sharedObject.name = "Kircho";
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kircho');
        });

        it('updateName should change the inner name value', function(){
            sharedObject.name = "Sasheto";
            $('#name').val("Goshko");
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("Goshko");
        });
    });

    describe('updateIncome',function(){
        it('updateIncome should not change the income property if the textbox value is <= 0', function(){
            sharedObject.income = 150;
            $('#income').val('-10');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(150);
        });

        it('updateIncome should not change the income property if the textbox value is a floating-point number', function(){
            sharedObject.income = 120;
            $('#income').val('34.25');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(120);
        });

        it('updateIncome should not change the income property if the textbox value is not a number', function(){
            sharedObject.income = 110;
            $('#income').val('notANumber');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(110);
        });

        it('updateIncome should not change the income property if the textbox value is an empty string', function(){
            sharedObject.income = 153;
            $('#income').val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(153);
        });

        it('updateIncome should change the inner income value with valid input', function(){
            sharedObject.income = 1520;
            $('#income').val("5");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
    });
});