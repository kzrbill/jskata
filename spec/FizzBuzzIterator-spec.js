function NumberOutputStrategy()
{
	this.output = function(number)
	{
		return (number % 3 == 0) ? "fizz" : number;
	}
}


function BuzzNumberOutputStrategyDecorator(numberStrategy)
{
	this.numberStrategy = numberStrategy;

	this.output = function(number)
	{
		return this.numberStrategy.output(number);
	}
}


function FizzBuzzIterator(outputStrategy)
{
	this.outputStrategy = outputStrategy;

	this.play = function()
	{
		var outputs = new Array();
		for (var i = 1; i <= 100; i++){
			outputs.push(this.outputStrategy.output(i));
		};

		return outputs;
	}
}

describe("FizzBuzzIterator", function() {
	
	
	var iterator = null;
	beforeEach(function(){

		var strategy = new BuzzNumberOutputStrategyDecorator(new NumberOutputStrategy());
		iterator = new FizzBuzzIterator(strategy);

	});

	it("should create a new iterator", function() {
		
		expect(iterator).toNotBe(null);

	});

	it("should return an array of length 100", function() {

		var expected = iterator.play();

		expect(expected.length).toBe(100);
	
	});

	it("should return fizz when we get the 3rd item", function() {
		
		var expected = iterator.play();

		expect(expected[2]).toBe("fizz");
	});

	it("should return buzz when we get the 5th item", function() {

		var expected = iterator.play();

		expect(expected[4]).toBe("buzz");
	});
});