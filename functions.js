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
