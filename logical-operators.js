// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
// If an operand is not a boolean, it’s converted to a boolean for the evaluation.

// In classical programming, AND returns true if both operands are truthy and false otherwise:

// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// In other words, AND returns the first falsy value or the last value if none were found.

// The difference is that AND returns the first falsy value while OR returns the first truthy one.

// A double NOT !! is sometimes used for converting a value to boolean type:

// The precedence of AND && is higher than ||, so it executes first.
