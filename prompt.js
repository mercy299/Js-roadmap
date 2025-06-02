let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

let uname = prompt("What's your name?", "Guest");
alert( `Hello, ${uname}!` ); // Hello, Guest! (if the user pressed Cancel, uname is an empty string)

let color = prompt("What's your favorite color?", "blue");
if (color === "blue")  {
  alert(`Your favorite color is ${color}.`);
} else {
  alert("Your color isn't blue.");
}