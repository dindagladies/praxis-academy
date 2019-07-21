//MINIMUM
const min = function(a,b){
	if (a<b){
	return a;
	}
	else if (a>b){
		return b;
	}
}
console.log(min(0,10))

//RECURSION
const isEven = function(angka){
	if (angka >= 0){
		return true;
	}
	else{
		return false;
	}
}
console.log(isEven(50));

//BEAN COUNTING (not yet)
const countChar(str, char){
	var count = 0;
	for (var i = 0 , i < str.length; i++){
		if (str.chartAt(i) === char){
			count++;
		}
		return (count);
	}
}
console.log(countChar("BBC))
