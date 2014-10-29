var module = require('../code/someModule.js');

var SomeClass = module.SomeClass;

describe("Some class", function() {
  
  var someObject;

  beforeEach(function(){
    someObject = new SomeClass();
  });

  it("can be instantiated", function() {
    
    expect(someObject).toBeDefined();
  });
});
