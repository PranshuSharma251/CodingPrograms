let msg="";
const a = parseFloat(prompt('Enter the first number for addition'));
const b = parseFloat(prompt('Enter the second number for addition'));
const c = a + b
document.write(a+ "+" +b+ "=" + c)
document.write("<br>")
const a1 = parseFloat(prompt('Enter the first number for subtraction'));
const b1 = parseFloat(prompt('Enter the second number for subtraction'));
const c1 = a1 - b1
document.write(a1+ "-" +b1+ "=" + c1)
document.write("<br>")
const a2 = parseFloat(prompt('Enter the first number for multiplication'));
const b2 = parseFloat(prompt('Enter the second number for multiplication'));
const c2 = a2 * b2                                        
document.write(a2+ "x" +b2+ "=" + c2)
document.write("<br>")
const a3 = parseFloat(prompt('Enter the first number for division'));
const b3 = parseFloat(prompt('Enter the second number for division'));
const c3 = a3 / b3                                        
document.write(a3+ "/" +b3+ "=" + c3)
document.write("<br>")
const z = parseFloat(prompt('Memory check time!................ Enter a number'));
const z1 = parseFloat(prompt('Try remembering and entering the same number'));
const m = z===z1
msg += m?"You got a really nice memory":"Do you remember your name??";
document.write(msg);
document.write("<br>")
const v = parseFloat(prompt("print the number for which you need the table of"));
document.write("The table of  "+v+" is");
document.write("<br>");
for(let i=1; i<=10; i++){
document.write(v+"x"+i+"="+i*v)
 document.write("<br>");
}
const e = parseFloat(prompt("Enter the week day number"));
switch(e){
			case 1 : msg+="<br> Today is Sunday";break;
			case 2 : msg+="<br> Today is Monday";break;
			case 3 : msg+="<br> Today is Tuesday";break;
			case 4 : msg+="<br> Today is Wednesday";break;	
			case 5 : msg+="<br> Today is Thursday";break;	
			case 6 : msg+="<br> Today is Friday";break;	
			case 7 : msg+="<br> Today is Saturday";break;
			default:msg+="<br>Arey bhai there are only 7 days in a week";
}
document.write(msg)
 document.write("<br>");
const letter = "";
let p = parseFloat(prompt("Enter the number from which you need the counting of"));
let s = parseFloat(prompt("Enter the number till which you need the counting of"));
while (p<s+1){
	document.write(p)
	document.write("<br>");
	p++;
}
