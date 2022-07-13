'use strict';

// comments

/*
    comments
*/ 

var a = 2;
var b = 7;
var A = 2;
var o = '1';

const $a = 4;
// const $A = "HELLO"; // "" '' ``
const $A = 33;
{
    let _a = 3;
    let _A = 3;
    // _A = "BAR";
}

console.log('a + $A = ', a + $A);


// _A = "BAR1";
console.log('type(A) = ', typeof(A));
A = 'FOO';

// a5 = 5

console.log('0.1 + 0.2 = ', 0.1 + 0.2);
console.log('0.15 + 0.25 = ', 0.15 + 0.25);

console.log('type(A) = ', typeof(A));

console.log('type(true) = ', typeof(true), typeof(false));

if (typeof($A) == "string") {
    console.log('a + $A = ', a + $A);
} else {
    console.log('a / $A = ', a / $A);
}

if (o == '+') {
    console.log('a + b = ', a + b);
} else if (o == '-') {
    console.log('a - b = ', a - b);
}else if (o == '*') {
    console.log('a * b = ', a * b);
}else  {
    console.log('Bad operation');
}

var x = parseFloat(prompt("Enter a = ", '...'));
var y = parseFloat(prompt("Enter b = ", '...'));
// console.log('x = ', x);
var op = prompt("Enter operation = ", '...');

// == != > < >= <= === !==
if (op == '+') {
    console.log('a + b = ', x + y);
    alert(x + y);
} else if (op == '-') {
    console.log('a - b = ', x - y);
    alert(x - y);
}else if (op == '*') {
    console.log('a * b = ', x * y);
    alert(x * y);
}else  {
    console.log('Bad operation');
    alert('Bad operation');
}