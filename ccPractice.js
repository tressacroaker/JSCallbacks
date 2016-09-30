var add, subtract, multiply, divide, calculate, reverseOrder, userHelp, splitter;

// Callbacks

//1. We are going to create a simple calculator. Go ahead and create four functions called add, subtract, multiply, and divide that take in two numbers that add, subtract, multiply, and divide the two inputted values. In each function return the result.

var add = function (n1,n2) {
  return n1+n2;
};

var subtract = function (n1,n2) {
  return n1-n2;
};

var divide = function (n1,n2) {
  return n1/n2;
};

var multiply = function (n1,n2) {
  return n1*n2;
};


// Next, you will want to create a function called calculate that takes in two numbers and a callback function. Return the result of the callback with the two numbers as its arguments.

var calculate = function (n1, n2, cb) {
  return cb(n1,n2);
};


// 2. Create a function called reverseOrder that takes in a string and reverses the order of the characters. Return the result.

var reverseOrder = function (string) {
  return string.split("").reverse().join("");
};

// Create a function called userHelp that takes in a callback function and a quote. Invoke the callback function using the quote as an argument. Return the result of the callback. This should take a user defined quote and reverse the order of the quote.

var userHelp = function(cb, quote){
  return cb(quote);
};

// 3. Create a function called splitter that takes in a string and a callback function. Have the function return the invocation of the callback function with the string as its argument.

var splitter = function (string, cb) {
  return cb(string);
};

//As the user, call the splitter function with a string and an anonymous function as arguments. In the anonymous callback function, split the string into an array of characters and return that array. This syntax will be used often, especially when we get into Angular and Node.

splitter("string", function(string){return string.split("")});


module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  calculate: calculate,
  reverseOrder: reverseOrder,
  userHelp: userHelp,
  splitter: splitter
};
