const a = parseFloat(prompt("Please enter your first number for the Operations"));
const b = parseFloat(prompt("Please enter your second number for the Operations"));
let sum, sub, mul, rem, quo;

sum = a + b;
sub = a - b;
mul = a * b;
quo = a / b;
rem = a % b;

document.write("The sum of the numbers is :"+sum);
document.write("<br>");
document.write("The subtraction answer for the numbers is :"+sub);
document.write("<br>");
document.write("The answer after multiplication is :"+mul);
document.write("<br>");
document.write("The questiont for the numbers is"+quo);
document.write("<br>");
document.write("The remainder after division is"+rem);
document.write("<br>");

document.write("a and b are equal:"+(a===b));
document.write("a and b are not equal"+(a!==b));