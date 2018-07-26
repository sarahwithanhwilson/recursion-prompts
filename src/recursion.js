/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n === 0) {
		return 1;
	} else if (n > 0) {
		return n * factorial(n-1);
	} else {
		return null;
	}
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	var newArr = array.slice();
	if (array.length === 0){
		return 0;
	} else {
		return newArr.pop() + sum(newArr);
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	if (array.length === 0) {
		return 0;
	} else if (Array.isArray(array)) {
		var newArr = array.slice();
		return +arraySum(newArr.pop()) + arraySum(newArr);
	} else {
		return array;
	}
};

// 4. Check if a number is even.
var isEven = function(n) {
	if (n === 0) { //base case: even
		return true;
	} else if (n === 1) { //base case: not even
		return false;
	} else if (n > 1) { //positive numbers
		return isEven(n - 2);
	} else {  // negative numbers
		return isEven(n + 2);
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n === 0) {
		return 0;
	} else if (n > 0) {
		return n + sumBelow(n - 1) - 1;
		//subtracting 1 each time will result in subtracting the value of the original n
	} else {
		return n + sumBelow(n + 1) + 1;
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if (x === y || x === y + 1 || x + 1 === y) { //empty array
			return [];
	}

	if (x < y) { //if x is smaller
		if (x === (y - 2)) { //base case
			return x + 1;
		} else {
			return [x + 1].concat(range(x + 1, y));
		}
	}

	if (y < x) { //if y is smaller
		if (y === x - 2) { //base case
			return x - 1;
		} else {
			return [x - 1].concat(range(x -1 , y));
		}
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	} else if (exp > 0) { //positive exponent
		return base * exponent(base, exp - 1);
	} else { //negative exponent
		return exponent(base, exp + 1) / base;
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true //(2 to the power of 0)
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 1) {
		return true;
	} else if (n <= 0) {
		return false;
	} else {
		return powerOfTwo(n / 2);
	}
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if (string.length === 1) {
		return string;
	} else {
		var stringArr = string.split("");
		return stringArr.pop() + reverse(stringArr.join(""));
	}
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	if (string.length === 1 || string.length === 0) {
		return true;
	}
	var newStr = string.toLowerCase().trim();
	if (newStr.charAt(0) === newStr.charAt(newStr.length - 1)) {
		return palindrome(string.slice(1, -1));
	} else {
		return false;
	}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if (y === 0) {
		return NaN;
	}
	if (y < 0) {
		return modulo(x, -y);
	}
	if (x < 0) {
		return -modulo(-x, y);
	}
	if (x < y) {
		return x;
	}
	return modulo(x - y, y);
};

var modulo2 = function(x, y) {
	var absX = x;
	var absY = y;
	var neg = false;
	if (y === 0) {
		return NaN;
	}

	if (x < 0 && Number.isInteger(x)) {
		absX = -x;
		neg = true;
	}
	if (y < 0 && Number.isInteger(y)) {
		absY = -y;
	}

	if (neg === false) {
		if (absX < absY) {
			return absX;
		}
		return modulo(absX - absY, absY);
	}

	if (neg === true) {
		if (absX < absY) {
			return -absX;
		}
		return -modulo(absX - absY, absY);
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if (y === 0) {
		return 0;
	} else if (y > 0) {
		return x + multiply(x, y - 1);
	} else {
		return - (x - multiply(x, y + 1));
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
	if (x < y || (x < 0 && y < 0 && x > y)) {
		return 0;
	} else if (x > 0) {
		return 1 + divide(x - y, y);
	} else if (x < 0) {
		return 1 - divide(x + y, y);
	}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if (x < 0 || y < 0) {
		return null;
	} else if (x === 0) {
		return y;
	} else if (y === 0) {
		return x;
	}

	return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1.length === 0 && str2.length === 0) { //base case
		return true;
	} else if (str1.charAt(0) === str2.charAt(0)) {
		return compareStr(str1.slice(1), str2.slice(1));
	} else {
		return false;
	}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if (str.length === 1) {
		return [str];
	} else {
		return [str.charAt(0)].concat(createArray(str.slice(1)));
	}
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	if(array.length === 0) {
		return [];
	} else {
		return [].concat(array.pop(), reverseArr(array));
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if (length === 0) {
		return [];
	} else if (Array.isArray(value)) {
		return [].push(value).push(buildList(value, length -1));
	} else {
		return [].concat(value, buildList(value, length -1));
	}
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	if (n === 0) {
		return[];
	} else if (n % 3 === 0 && n % 5 === 0) {
		return [].concat(fizzBuzz(n-1), 'FizzBuzz');
	} else if (n % 3 === 0) {
		return [].concat(fizzBuzz(n-1), 'Fizz');
	} else if (n % 5 === 0) {
		return [].concat(fizzBuzz(n-1), 'Buzz');
	} else {
		return [].concat(fizzBuzz(n-1), n.toString());
	}
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if (array.length === 0) {
		return 0;
	} else if (array[0] === value) {
		return 1 + countOccurrence(array.slice(1), value);
	} else {
		return 0 + countOccurrence(array.slice(1), value);
	}
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	if (array.length === 0) {
		return [];
	} else {
		return [callback(array[0])].concat(rMap(array.slice(1), callback));
	}
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var count = 0;
	for (var i in obj) {
		if (i === key) {
			count += 1;
		}
		if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
			count += countKeysInObj(obj[i], key);
		}
	}
	return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;
	for (var i in obj) {
		if (obj[i] === value) {
			count += 1;
		}
		if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
			count += countValuesInObj(obj[i], value);
		}
	}
	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for (var key in obj) {
		if (key === oldKey) {
			obj[newKey] = obj[key];
			//Object.defineProperty(obj, newKey, Object.getOwnPropertyDescriptor(obj, oldKey));
			delete obj[key];
		} else if (typeof obj[key] === 'object') {
			replaceKeysInObj(obj[key], oldKey, newKey);
		}
	}
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if (n <= 0) {
		return null;
	}
	if (n === 1) {
		return [0, 1];
	}

	var arr = fibonacci(n-1);
	return arr.concat(arr[n-1] + arr[n -2]);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) {
		return null;
	}
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	return nthFibo(n -1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	if (array.length === 0) {
		return [];
	}
	var word = array.shift().toUpperCase();
	return [].concat(word, capitalizeWords(array));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	if (array.length === 0) {
		return [];
	}
	var word = array.shift();
	word = word.charAt(0).toUpperCase() + word.slice(1);
	return [].concat(word, capitalizeFirst(array));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var sum = 0;
	for (var key in obj) {
		if (typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		} else if (obj[key] % 2 === 0) {
			sum += obj[key];
		}
	}
	return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	if (!Array.isArray(array) || array.length === 0) { //base case
		return array;
	}

	var arr = array.slice();
	if (!Array.isArray(array[0])) {
		return [].concat(array[0], flatten(arr.slice(1)));
	} else {
		return [].concat(flatten(arr.shift()), flatten(arr));
	}
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	if (str.length === 0) { //base case
		return obj;
	}

	var letter = str.charAt(0);
	if (arguments[1] === undefined) {
		var obj = {};
	}

	if (obj.hasOwnProperty(letter)) {
		obj[letter] += 1;
	} else {
		obj[letter] = 1;
	}
	return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	var arr = list.slice();
	if (arr.length === 0) {
		return [];
	}

	var first = arr.shift();
	if (arr[0] === undefined || first !== arr[0]) {
		return [].concat(first, compress(arr));
	} else {
		return [].concat(compress(arr));
	}
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	var result = [];
	if (array.length === 0) {
		return result;
	} else {
		result.push(array[0].concat(aug));
		return result.concat(augmentElements(array.slice(1), aug));
	}
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	var arr = array.slice();
	if (arr.length === 0) {
		return;
	} else if (arr.length === 1) {
		return arr[0];
	}

	if (arr[0] !== arr[1]) {
		return [].concat(arr[0], minimizeZeroes(arr.slice(1)));
	} else {
		return minimizeZeroes(arr.slice(1));
	}
};


// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	var arr = array.slice();
	if (arr.length === 0) {
		return [];
	}

	var x = Math.abs(arr[0]);
	if (arr.length % 2 === 0) {
		return [].concat(x, alternateSign(arr.slice(1)));
	} else {
		return [].concat(-x, alternateSign(arr.slice(1)));
	}
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var arr = str.split(" ");
	var word = arr[0];
	if (arr[0] === '0') {
		word = 'zero';
	} else if (arr[0] === '1') {
		word = 'one';
	} else if (arr[0] === '2') {
		word = 'two';
	} else if (arr[0] === '3') {
		word = 'three';
	} else if (arr[0] === '4') {
		word = 'four';
	} else if (arr[0] === '5') {
		word = 'five';
	} else if (arr[0] === '6') {
		word = 'six';
	} else if (arr[0] === '7') {
		word = 'seven';
	} else if (arr[0] === '8') {
		word = 'eight';
	} else if (arr[0] === '9') {
		word = 'nine';
	}

	if (arr.length === 1) { //base case
		return word;
	}

	var newStr = arr.slice(1);
	newStr = newStr.join(" ");
	var result = [].concat(word, numToText(newStr));
	return result.join(" ");
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
	// if (arguments[1] === undefined) {
	// 	var node = 'body';
	// }

	// var count = 0;

	// //if node has tag increase count
	// if ($(node).has(tag)) {
	// 	count +=1;
	// }
	// if ($(node).children().length > 0) {
	// 	$(node).children().each(function() {
	// 		//var $x = $(this).prop("nodeName");
	// 		count += tagCount(tag, $x);
	// 	});
	// }

	// return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
	var arr = array.slice();
	if (arr.length === 0) {
		return [];
	}
	var smallest = arr[0];
	var index = 0;
	arr.forEach(function(elem, i){
		if (elem < smallest) {
			smallest = elem;
			index = i;
		}
	});
	arr.splice(index, 1);
	return [].concat(smallest, mergeSort(arr));
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
	if (typeof input !== 'object') {
		return input;

	} else if (Array.isArray(input)){
		var arr = [];
		input.forEach(function(elem) {
			if (typeof elem !== 'object') {
				arr.push(elem);
			} else {
				arr.push(clone(elem));
			}
		});
		return arr;

	} else {
		var result = {};
		for (var key in input) {
			result[key] = clone(input[key]);
		}
		return result;
	}
};
