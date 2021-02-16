let  ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
let tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninty"]

function num2WordUpto2Digit(n) {
	console.log(n)
	if(n===0){
		return ""
	}else if(n<20){
		return ones[n]
	}else if(n<100){
		let o = n%10
		let t = Math.floor(n/10)%10;
		return tens[t]+" "+ones[o]
	}else{
		return "Wrong Input"
	}
}

let num  = parseInt(prompt("ENTER A NUMBER A TWO DIGIT NUMBER"));

let h = Math.floor(num/100)%10
let th = Math.floor(num/1000)%100
let lk = Math.floor(num/100000)%100
let cr = Math.floor(num/10000000)%100

let res = 
	num2WordUpto2Digit(cr) + (cr===0?"":" crore ")
	+num2WordUpto2Digit(lk) + (lk===0?"":" lakh ")
	+num2WordUpto2Digit(th) + (th===0?"":" thousand ")
	+ones[h] + (h===0?"":" hundred ")
	+num2WordUpto2Digit(num%100)

alert(res)