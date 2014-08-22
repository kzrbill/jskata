

function FizzBuzzNumberOutputStrategyDecorator(numberStrategy)
{
	this.numberStrategy = numberStrategy;

	this.output = function(number)
	{
		var output = this.numberStrategy.output(number);

		return ((output % 5) == 0) && ((output % 3) == 0) ? "fizzbuzz" : output;
	}
}

function FizzNumberOutputStrategyDecorator(numberStrategy)
{
	this.numberStrategy = numberStrategy;

	this.output = function(number)
	{
		var output = this.numberStrategy.output(number);

		return (number % 3) == 0 ? "fizz" : output;
	}
}

function BuzzNumberOutputStrategyDecorator(numberStrategy)
{
	this.numberStrategy = numberStrategy;

	this.output = function(number)
	{
		var output = this.numberStrategy.output(number);

		return (output % 5) == 0 ? "buzz" : output;
	}
}

function NumberOutputStrategy()
{
	this.output = function(number)
	{
		return number;
	}
}

function FizzBuzzGenerator(outputStrategy)
{
	this.outputStrategy = outputStrategy;

	this.generate = function()
	{
		var outputs = new Array();
		for (var i = 1; i <= 100; i++)
		{
			outputs.push(this.outputStrategy.output(i));
		}

		return outputs;
	}
}

function NumberOutputStrategyBuilder()
{
	this.numberOutputStrategy = function() 
	{
		return new FizzNumberOutputStrategyDecorator
		(
			new BuzzNumberOutputStrategyDecorator
			(
				new FizzBuzzNumberOutputStrategyDecorator
				(
					new NumberOutputStrategy()
				)
			)
		);
	}
}

describe("FizzBuzzGenerator", function() {
	
	
	var iterator = null;
	beforeEach(function(){

		var strategy = new NumberOutputStrategyBuilder().numberOutputStrategy();
		iterator = new FizzBuzzGenerator(strategy);
	});

	it("should create a new iterator", function() {
		
		expect(iterator).toNotBe(null);
	});

	it("should return an array of length 100", function() {

		var expected = iterator.generate();

		expect(expected.length).toBe(100);
	});

	it("should return fizz when we get the 3rd item", function() {
		
		var expected = iterator.generate();

		expect(expected[2]).toBe("fizz");
	});

	it("should return buzz when we get the 5th item", function() {

		var expected = iterator.generate();

		expect(expected[4]).toBe("buzz");
	});

	it("should return fizzbuzz when we get the 15th item", function() {

		var expected = iterator.generate();

		expect(expected[14]).toBe("fizzbuzz");
	});
});