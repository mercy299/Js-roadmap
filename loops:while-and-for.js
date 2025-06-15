while (condition) {
  // code
  // so-called "loop body"
}

let i = 1;
while (i < 3) {
  alert(i);
  i++;
}

// While the condition is truthy, the code from the loop body is executed.

// Curly braces are not required for a single-line body
// If the loop body has a single statement, we can omit the curly braces {…}:

let j = 3;
while (j) alert(j--);

// The “do…while” loop
do {
  // loop body
} while (condition);

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

let m = 0;
do {
  alert(m);
  m++;
} while (m < 3);

// for loop

for (begin; condition; step) {
  // ... loop body ...
}

for (let w = 0; w < 3; w++) {
  alert(w++);
}

for (;;) {
  // repeats without limits
}

// Normally, a loop exits when its condition becomes falsy.

//

// break label; // jump to the label below (doesn't work)

// label: for (...)

// break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

label: {
  // ...
  break label; // works
  // ...
}

// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.

for (d = 2; d <= 10; d++) {
  if (d % 2 == 0) {
    alert(d);
  }
}

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0
// while (i < 3 ){
//     alert ( `number ${i}!` )
//     i++
// }
