var module = require('../code/FizzBuzzIterator.js');

var FizzBuzzOutputStrategyBuilder = module.FizzBuzzOutputStrategyBuilder;
var NumberOutputGenerator 				= module.NumberOutputGenerator;
var NumberOutputStrategy          = module.NumberOutputStrategy;

describe("NumberOutputGenerator", function() {
	
	var generator = null;
	beforeEach(function(){

		var strategy = new FizzBuzzOutputStrategyBuilder().outputStrategy();
		generator = new NumberOutputGenerator(strategy);
	});

	it("should create a new generator", function() {
		
		expect(generator).toNotBe(null);
	});

	it("should return an array of length 100", function() {

		var items = generator.generate();

		expect(items.length).toBe(100);
	});

	it("should return fizz when we get the 3rd item", function() {
		
		var items = generator.generate();

		expect(items[2]).toBe("fizz");
	});

	it("should return buzz when we get the 5th item", function() {

		var items = generator.generate();

		expect(items[4]).toBe("buzz");
	});

	it("should return fizzbuzz when we get the 15th item", function() {

		var items = generator.generate();

		expect(items[14]).toBe("fizzbuzz");
	});

	it("should return 15 when we get the 15th item, and we give the generator a number only strategy", function() {

		generator = new NumberOutputGenerator(new NumberOutputStrategy());
		var items = generator.generate();

		expect(items[14]).toBe(15);
	});

});