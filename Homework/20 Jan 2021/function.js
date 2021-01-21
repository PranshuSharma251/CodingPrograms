let a = parseFloat(prompt("Enter a number for the table"));

function mul(a) {
	document.write("The table of"+a+"is");
	for (var i = 1; i <=10 ; i++){
	document.write(a+"X"+i+"="+a*i);
	document.write("<br>");
}
}
mul(a);