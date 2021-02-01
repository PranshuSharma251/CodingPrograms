let ab = prompt("Please enter a number");
let i = "Table of "+ab+"<br>";
function rec(ab , i) {
	if(i < 0 , i = 1){
		return;
	}
	i += i*ab +"<br>";
}
rec(ab,i);
document.write(i);
