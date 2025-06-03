5 > 4 // true
"apple" > "pineapple" // false, because "a" < "p"
"2" > "12" // true, because "2" > "1" in the first position 
undefined == null // true, because they are equal in non-strict comparison
undefined === null // false, because they are different in strict comparison
null == "\n0\n" // false, because null is not equal to anything except itself
null === +"\n0\n" // false, because null is not equal to anything except itself

// undefined only equals null, undefined, and no other value.

// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.



