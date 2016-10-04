var numb;
var deg;

function pow(numb, deg){

	var result = 1;

	if(deg <0)  {

		numb = 1 / numb;
		deg *= -1;
	}

	for(var i = 0; i < deg; i++)  {

		result = result * numb;
	}
	
	return result;
}

numb = prompt("Введите число");
deg = prompt("Введите степень");

result = pow(numb, deg);

console.log("result = ", result);