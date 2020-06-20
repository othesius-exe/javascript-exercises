function add (a, b) {
	let sum;
	if(isNaN(a) || isNaN(b)) {
		return 'Error';
	} else {
		sum = a + b;
	}
	return sum;
}

function subtract (a, b) {
	let difference;
	if(isNaN(a) || isNaN(b)) {
		return 'Error';
	} else {
		difference = a - b;
	}
	return difference;
}

function sum (array) {
	let sumOfArray = 0;
	if (Array.isArray(array)) {
		array.forEach(function(element){
			sumOfArray += element;
		})
	} 
	return sumOfArray;
}

function multiply (...args) {
	let array = args[0];
	let product = 1;
	array.forEach(function(element) {
		product *= element;
	})
	return product;
}

function power(a, b) {
	let exponential = 0;
	if(isNaN(a) || isNaN(b)) {
		return 'Error';
	} else {
		exponential = a ** b;
	}
	return exponential;
}

function factorial(a) {
	let result = a;
	if (a === 0 || a === 1) {
		return 1;
	} 

	while (a > 1)  {
		a--;
		result = result * a;
	}

	return result;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}