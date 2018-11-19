let assert = require('chai').assert;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("rgbToHexColor(red, green, blue)",()=>{
    it("should return undefined if less parameters are provided", ()=>{
        let result = rgbToHexColor( 255, 255);
        assert.isUndefined(result);
    });
    it("should return undefined if red is more then 255", ()=>{
        let red =256;
        let green =255;
        let blue = 255;
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });

    it("should return undefined if green is more then 255", ()=>{
        let red =255;
        let green =256;
        let blue = 255;
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });

    it("should return undefined if blue is more then 255", ()=>{
        let red =255;
        let green =255;
        let blue = 256;
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });

    it("should return #fffff if all params are 255", ()=>{
        let red =255;
        let green =255;
        let blue = 255;
        let result = rgbToHexColor( red, green , blue).toLowerCase();
        assert.equal(result, "#ffffff");
    });

    it("should return undefined if red is less then 0", ()=>{
        let red =-1;
        let green =255;
        let blue = 255;
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });

    it("should return undefined if green is less then 0", ()=>{
        let red =255;
        let green =-1;
        let blue = 255;
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });

    it("should return undefined if blue is less then 0", ()=>{
        let red =255;
        let green =255;
        let blue = -1;
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });

    it("should return #000000 if all params are 0", ()=>{
        let red =0;
        let green =0;
        let blue = 0;
        let result = rgbToHexColor( red, green , blue).toLowerCase();
        assert.equal(result, "#000000");
    });

    it("should return undefined if red is string", ()=>{
        let red ="255";
        let green =0;
        let blue = 0;
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });
    it("should return undefined if green is string", ()=>{
        let red =0;
        let green ="255;"
        let blue = 0;
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });
    it("should return undefined if blue is string", ()=>{
        let red =0;
        let green = 0;
        let blue = "255";
        let result = rgbToHexColor( red, green , blue);
        assert.isUndefined(result);
    });

    it("should return correct color in hex", ()=>{
        let result = rgbToHexColor( 178,34,34).toLowerCase();
        assert.equal(result, "#b22222");
    });
});