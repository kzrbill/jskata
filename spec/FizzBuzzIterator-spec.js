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

function NumberOutputStrategy()
{
	this.output = function(number)
	{
		return number;
	}
}

function FizzNumberOutputStrategyDecorator(numberStrategy)
{
	this.numberStrategy = numberStrategy;

	this.output = function(number)
	{
		return number % 3 == 0 ? "fizz" : this.numberStrategy.output(number);
	}
}

function BuzzNumberOutputStrategyDecorator(numberStrategy)
{
	this.numberStrategy = numberStrategy;

	this.output = function(number)
	{
		return number % 5 == 0 ? "buzz" : this.numberStrategy.output(number);
	}
}

function FizzBuzzNumberOutputStrategyDecorator(numberStrategy)
{
	this.numberStrategy = numberStrategy;

	this.output = function(number)
	{
		return (number % 5 == 0) && (number % 3 == 0) ?
			"fizzbuzz" : this.numberStrategy.output(number);
	}
}

function NumberOutputStrategyBuilder()
{
	this.numberOutputStrategy = function() 
	{
		return new FizzBuzzNumberOutputStrategyDecorator
		(
			new BuzzNumberOutputStrategyDecorator
			(
				new FizzNumberOutputStrategyDecorator
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