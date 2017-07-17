let expect = require('../../node_modules/chai/chai').expect;
let makeList = require('../02-AddLeftAddRightClear').makeList;

describe("list to add items to left and right like stack and queue",function(){
    let list;
    beforeEach(function() {
        list = makeList();
    });

    it("should contain all properties", function () {
        expect(myList.addLeft).to.exist;
        expect(myList.addRight).to.exist;
        expect(myList.clear).to.exist;
        expect(myList.toString).to.exist;
    });

    it('should have 3 items when 3 items are added to left', function () {
        list.addLeft(5);
        list.addLeft(6);
        list.addLeft(7);
        expect(list.toString()).to.be.equal('7, 6, 5')
    });
    it('last item added should be first', function () {
        list.addLeft(15);
        list.addLeft(53);
        list.addLeft(27);
        expect(list.toString().startsWith('27, ')).to.be.true
    });

    it('should have 3 items when 3 items are added to right', function () {
        list.addRight(5);
        list.addRight(6);
        list.addRight(7);
        expect(list.toString()).to.be.equal('5, 6, 7')
    });
    it('last item added should be first', function () {
        list.addRight(15);
        list.addRight(53);
        list.addRight(27);
        expect(list.toString().startsWith('15, ')).to.be.true
    });

    it('should have 3 items when 3 items are added to right', function () {
        list.addRight(5);
        list.addRight(6);
        list.addRight(7);
        list.addLeft(15);
        list.addLeft(16);
        list.clear();
        expect('').to.be.equal(list.toString())
    });
    it('should have 1 item after adding 3, and then removing all and adding 1', function () {
        list.addRight(5);
        list.addRight(6);
        list.addRight(7);
        list.addLeft(15);
        list.clear();
        list.addLeft(16);
        expect('16').to.be.equal(list.toString())
    });
});