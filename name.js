let  ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
let tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninty"]
let hundreths = ["","one hundred","two hundred","three hundred","four hundred","five hundred","six hundred","seven hundred","eight hundred","nine hundred"]
let thousand = ["","one thousand","two thousand","three thousand","four thousand","five thousand","six thousand","seven thousand","eight thousand","nine thousand"]
let num  = parseInt(prompt("ENTER A NUMBER A TWO DIGIT NUMBER"));
if(num>1000000){
	alert("Enter a number a less than 10000 noob")
}


if(num < 20){
alert(ones[num])
}else if(num < 100){
	let t = Math.floor(num/10);
	let o = num%10;
alert(tens[t]+" "+	ones[o]);
}else if(num < 1000){
	let h = Math.floor(num/100);
	let o = num%10;
	let t = Math.floor(Math.floor(num/10)%10);
	console.log(h)
	console.log(t)
	console.log(o)
alert(hundreths[h]+" "+tens[t]+" "+ones[o])
}else if(num < 10000){
	// 2536 2 * 1000 + 5 * 100 + 3 * 10 + 2 

	let o = num%10
	let t = Math.floor(num/10)%10;
	let h = Math.floor(num/100)%10;
	let th = Math.floor(num/1000)%10;
	console.log(th)
	console.log(h)
	console.log(t)
	console.log(o)
	alert(ones[th]+" thousand " +ones[h]+ (h===0?"":" hundred ")+tens[t]+" "+ones[o])
}else if(num < 100000){

	let o = num%10
	let t = Math.floor(num/10)%10;
	let h = Math.floor(num/100)%10;
	let th = Math.floor(num/1000)%10;
	let l = Math.floor(num/10000)%10;
	console.log(l)
	console.log(th)
	console.log(h)
	console.log(t)
	console.log(o)
	alert(ones[l]+" lakh "+ones[th]+ (th===0?"":" thousand ")+ones[h]+ (h===0?"":" hundred ")+tens[t]+" "+ones[o])
}else if(num < 1000000){
	let o = num%10
	let t = Math.floor(num/10)%10;
	let h = Math.floor(num/100)%10;
	let th = Math.floor(num/1000)%10;
	let l = Math.floor(num/10000)%10;
	let cr = Math.floor(num/100000)%10;
	alert(ones[cr]+" crore "+ ones[l]+(l===0?"":" lakh " )+ones[th]+ (th===0?"":" thousand ")+ones[h]+ (h===0?"":" hundred ")+tens[t]+" "+ones[o])

}alert("hello i am very beautiful");