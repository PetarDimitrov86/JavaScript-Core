let expect = require('chai').expect;
let rgbToHexColor = require("../03-RGBtoHex").rgbToHexColor;

describe("rgbToHexColor(r, g, b) - conversion from rgb to hex colors",function(){
    it('should return #7D7D7D for (125, 125, 125)', function(){
        expect(rgbToHexColor(125, 125, 125)).to.be.equal('#7D7D7D')
    });

    it('should return #FFFFFF for (255, 255, 255)', function(){
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')
    });

    it('should return #FFFFFF for (0, 0, 0)', function(){
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
    });

    it('should return undefined for passing an array as parameter', function(){
        expect(rgbToHexColor([255, 255, 255])).to.be.undefined
    });

    it('should return undefined for passing a string as parameter', function(){
        expect(rgbToHexColor('pesho', 255, 255)).to.be.undefined
    });

    it('should return undefined for passing a negative number', function(){
        expect(rgbToHexColor(125, -3, 255)).to.be.undefined
    });

    it('should return undefined for passing a number bigger than 255', function(){
        expect(rgbToHexColor(125, 3, 256)).to.be.undefined
    });

    it('should return undefined for passing only two arguments', function(){
        expect(rgbToHexColor(125, 3)).to.be.undefined
    });

    it('should return undefined for passing numbers that are floating point', function(){
        expect(rgbToHexColor(10.5, 10.5, 20.8)).to.be.undefined
    });
});