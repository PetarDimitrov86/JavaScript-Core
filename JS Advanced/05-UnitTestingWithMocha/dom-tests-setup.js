let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe("DOM testing",function(){
    it('DOM test to see if element exists', function(){
        let nameTextbox = $('#name');
        expect(nameTextbox).to.exist;
    });

    it('DOM test to change element value', function(){
        let nameTextbox = $('#name');
        nameTextbox.val("Pesho");
        expect(nameTextbox.val()).to.be.equal("Pesho");
    });
});