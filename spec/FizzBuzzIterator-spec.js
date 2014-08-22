function NumberOutputGenerator(outputStrategy)
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

function FizzOutputStrategyDecorator(outputStrategy)
{
	this.outputStrategy = outputStrategy;

	this.output = function(number)
	{
		return number % 3 == 0 ? "fizz" : this.outputStrategy.output(number);
	}
}

function BuzzOutputStrategyDecorator(outputStrategy)
{
	this.outputStrategy = outputStrategy;

	this.output = function(number)
	{
		return number % 5 == 0 ? "buzz" : this.outputStrategy.output(number);
	}
}

function FizzBuzzOutputStrategyDecorator(outputStrategy)
{
	this.outputStrategy = outputStrategy;

	this.output = function(number)
	{
		return (number % 5 == 0) && (number % 3 == 0) ?
			"fizzbuzz" : this.outputStrategy.output(number);
	}
}

function FizzBuzzOutputStrategyBuilder()
{
	this.outputStrategy = function() 
	{
		return new FizzBuzzOutputStrategyDecorator
		(
			new BuzzOutputStrategyDecorator
			(
				new FizzOutputStrategyDecorator
				(
					new NumberOutputStrategy()
				)
			)
		);
	}
}

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