let year = prompt("What year is it?", 2023);
if (year < 2023) {
  alert("It's in the past.");
} else if (year > 2023) {
  alert("It is in the future.");
}

let age = Number(prompt("age?", 25));
if (age <= 3) {
  alert("You are a baby");
} else if (age <= 11) {
  alert("You are a child");
} else if (age <= 19) {
  alert("You are a teenager");
} else if (age <= 70) {
  alert("You are an adult");
} else {
  alert("You be senior man");
}

let color = prompt("What color is the sky?", "blue");
let message2 =
  color === "blue" ? "The sky is blue." : "That is the wrong color.";
alert(message2);

// question mark are one liners
// Sometimes the question mark ? is used as a replacement for if:

if ("0") {
  alert("Hello");
}

let question = prompt(
  "What is the “official” name of JavaScript?",
  "Answer here"
);
if (question === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? “ECMAScript”!");
}

let nuumber = Number(prompt("what is the number?", here));
if (nuumber > 0) {
  alert("1");
} else if (nuumber < 0) {
  alert("-1");
} else {
  alert("0");
}

let result = a + b < 4 ? "Below" : "Over";
