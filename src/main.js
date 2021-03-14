const sum = (numberOne, numberTwo) => numberOne + numberTwo;
const sub = (numberOne, numberTwo) => numberOne - numberTwo;
const mult = (numberOne, numberTwo) => numberOne * numberTwo;
const div = (numberOne, numberTwo) => numberTwo === 0 ? 
	'Não é possível divisão por zero' : numberOne / numberTwo;

	export {sum, sub, mult, div};