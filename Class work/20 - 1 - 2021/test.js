let a = 24
let b = 56
let c = 20
const result1 = a + b
const result2 = result1/c 
document.write(result2)

const name = prompt("Please enter your name")
document.write("<br>")
document.write("your name is " +name)

const age = parseFloat(prompt("PLease enter your age"))
if(age >= 18 ){
	document.write("<br>")
	document.write("You are eligible for voting")
}else{
	document.write("<br>")
	document.write(18 - age +" sal baad aana")
}
