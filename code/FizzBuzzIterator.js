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

module.exports.FizzBuzzOutputStrategyBuilder 		= FizzBuzzOutputStrategyBuilder;
module.exports.NumberOutputGenerator 				 		= NumberOutputGenerator;
module.exports.NumberOutputStrategy 				 		= NumberOutputStrategy;
module.exports.FizzOutputStrategyDecorator   		= FizzOutputStrategyDecorator;
module.exports.BuzzOutputStrategyDecorator   		= BuzzOutputStrategyDecorator;
module.exports.FizzBuzzOutputStrategyDecorator  = FizzBuzzOutputStrategyDecorator;
