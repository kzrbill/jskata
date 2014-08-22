function FizzBuzzIterator()
{

	this.play = function()
	{
		var outputs = new Array();
		for (var i = 1; i <= 100; i++) {
			outputs.push("some thing");
		};

		return outputs;
	}



}


describe("FizzBuzzIterator", function() {
	
	it("should create a new iterator", function() {
		
		var iterator = new FizzBuzzIterator();
		expect(iterator).toNotBe(null);

	});

	it("should return an array of 1 to 100", function() {
		var iterator = new FizzBuzzIterator();
		var expected = iterator.play();

		expect(expected.length).toBe(100);
	});

});