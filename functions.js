function nameOfFunction(parameters) {
  body;
}
nameOfFunction(parameters);

function showMessage() {
  let message = "Hello, I'm local!"; // local variable

  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function

// no matter how the function is created, a function is a value.

// A function is a value representing an “action”

// Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function (a, b) {
  return a + b;
};
