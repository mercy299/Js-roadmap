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
