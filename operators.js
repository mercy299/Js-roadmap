// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let a = 1, b = 3;
alert( b - a ); // 2, binary minus subtracts values

// Note that if any of the operands is a string, then the other one is converted to a string too.

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

let j = prompt("First number?", 1);
let k = prompt("Second number?", 2);

alert(+j + +k); // 3


let f = +prompt("First number?", 1);
let g = +prompt("Second number?", 2);

alert(f + g); // 3
