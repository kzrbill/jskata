function FizzBuzzOutputStrategy()
{
	this.output = function(number)
	{
		return number % 3 == 0 ? "fizz" : "some thing";
	}
}

function FizzBuzzIterator()
{
	this.outputStrategy = new FizzBuzzOutputStrategy();

	this.play = function()
	{
		var outputs = new Array();
		for (var i = 1; i <= 100; i++) {
			outputs.push(this.outputStrategy.output(i));
		};

		return outputs;
	}
}

describe("FizzBuzzIterator", function() {
	
	it("should create a new iterator", function() {
		
		var iterator = new FizzBuzzIterator();
		expect(iterator).toNotBe(null);

	});

	it("should return an array of length 100", function() {
		var iterator = new FizzBuzzIterator();
		var expected = iterator.play();

		expect(expected.length).toBe(100);
	});

	it("should return fizz when we get the 3rd item", function() {
		var iterator = new FizzBuzzIterator();
		var expected = iterator.play();

		expect(expected[2]).toBe("fizz");
	});
});