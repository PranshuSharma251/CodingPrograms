let a = prompt("Enter a number for factorial numbers");
function Fac(a) {
	console.log(a);
	if(a===1){
		return 1;
	}
	return a * Fac(a-1);
}

document.write(Fac(a));