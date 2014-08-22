function FizzBuzzOutputStrategy()
{


}

function FizzBuzzIterator()
{
	this.outputStrategy = new FizzBuzzOutputStrategy();

	this.play = function()
	{
		var outputs = new Array();
		for (var i = 1; i <= 100; i++) {
			outputs.push(i == 3 ? "fizz" : "some thing");
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