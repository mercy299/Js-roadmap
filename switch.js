// A switch statement can replace multiple if checks.

let a = 2 + 2;

switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}

// If there is no break then the execution continues with the next case without any checks.

// if statements evaluate boolean expressions, allowing for flexible comparisons using logical and relational operators. switch statements, on the other hand, evaluate a single expression against multiple possible case values, typically for equality comparisons.
if (browser == "Edge") {
  alert("You've got the edge");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari") {
  alert(" Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// For example: when you enter 2 in the prompt, the return value would be string "2". So if you apply + in front of prompt it will convert the string to number. So string "2" would be converted to number 2.
// Also we use parseInt instead of '+'
