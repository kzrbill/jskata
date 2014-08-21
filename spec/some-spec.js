var calculator = require("../code/some-code");
 
describe("multiplication", function () {
  
  it("should multiply 2 and 3", function () {
    var product = calculator.multiply(2, 3);
    expect(product).toBe(6);
  });

  it("should multiply 3 and 5", function () {
    var product = calculator.multiply(3, 5);
    expect(product).toBe(15);
  });

});  