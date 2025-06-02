// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
// So to say, all odd integers greater than (253-1) can’t be stored at all in the “number” type.
// A BigInt value is created by appending n to the end of an integer:

const bigIntValue = 9007199254740992n; // This is a BigInt
const anotherBigInt = BigInt(9007199254740992); // This is also a BigInt

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); 

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
alert( `the result is ${1 + 2}` ); // the result is 3 (backticks work)
// The backticks allow for multi-line strings as well
let multiLineString = `This is a string
that spans multiple lines.`;
alert(multiLineString); // This is a string\nthat spans multiple lines.

let uname = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${uname}` ); // hello Ilya