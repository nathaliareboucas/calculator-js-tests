module.exports = {
	sum: function(numberOne, numberTwo) {
		return numberOne + numberTwo;
	},

	sub: function(numberOne, numberTwo) {
		return numberOne - numberTwo;
	},

	mult: function(numberOne, numberTwo) {
		return numberOne * numberTwo;
	},

	div: function(numberOne, numberTwo) {
		return numberTwo === 0 ? 'Não é possível divisão por zero' : numberOne / numberTwo;
	},
};
