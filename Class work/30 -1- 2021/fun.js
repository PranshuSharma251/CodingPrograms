function doSomething	() {
	const name = prompt("Naam likh")
	alert("Hume ye naam pasand aya")
	const KYA = prompt("Kya karna chahta h\nChoose kr Number likhio bas\n 1 - multiply \n 2 - Divide  \n 3 - Addition \n 4.Subtract \n 5.Factorial  ")
 	if(KYA==="1"){
 		const mul1 = prompt("Pehla number dal ")
 		const mul2 = prompt("Dusra number dal")
 		document.write(mul1+"x "+mul2+"= "+mul1*mul2)

 	}
 	if(KYA==="2"){
 		const div1 = prompt("Pehla number dal ")
 		const div2 = prompt("Dusra number dal")
 		document.write(div1+"/ "+div2+"= "+div1/div2)
 	}
 	if(KYA==="3"){
 		const add1 = prompt("Pehla number dal ")
 		const add2 = prompt("Dusra number dal")
 		let a = parseInt(add1)
 		let b = parseInt(add2)
 		let c = a+b
 		document.write(add1+"+ "+add2+"= "+c)
 	}

 	if(KYA==="4"){
 		const sub1 = prompt("Pehla number dal ")
 		const sub2 = prompt("Dusra number dal")
 		let d = parseInt(sub1)
 		let e = parseInt(sub2)
 		let f = d - e
 		document.write(sub1+"- "+sub2+"= "+f)
 	}
 	if(KYA==="5"){
 		const fa1 = prompt("Pehla number dal ")
 		function fact(fa1){
			console.log(fa1);
			if(fa1===1){
				return 1;
			}
			return fa1 * fact(fa1-1);
		}
 		document.write(fact(fa1))
 	}

 	
}
doSomething()