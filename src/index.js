module.exports = function multiply(first, second) {
    
    let sum = [];

	//перемножаем единицы, десятки и тд... вероятно это можно сделать проще) 
	for (let k = 0, i = first.length - 1; i >= 0; i--, k++) {

		for (let z = 0, j = second.length -1; j >= 0; j--, z++) {

			let mul = Number(first[i]) * Number(second[j])
			mul += "";
			
			if (mul.length == 1) {

				if (sum[k + z] == undefined) {

					sum[k + z] = 0
				}
				
				if (Number(sum[k + z]) + Number(mul[0]) >= 10){

					if (sum[k + z + 1] == undefined) {

						sum[k + z + 1] = 0;
					}

					sum[k + z] = Number(sum[k + z]) + Number(mul[0]) - 10;
					sum[k + z + 1] = Number(sum[k + z + 1]) + 1
				}
				else {

					sum[k + z] = Number(sum[k + z]) + Number(mul[0]);
				}
			}
			else if (mul.length == 2) {

				if (sum[k + z] == undefined) {

					sum[k + z] = 0;
				}
				if (sum[k + z + 1] == undefined) {

					sum[k + z + 1] = 0;
				}

				if (Number(sum[k + z]) + Number(mul[1]) >= 10){

					sum[k + z] = Number(sum[k + z]) + Number(mul[1]) - 10;
					sum[k + z + 1] = Number(sum[k + z + 1]) + 1;
				}
				else {

					sum[k + z] = Number(sum[k + z]) + Number(mul[1]);
				}

				if (Number(sum[k + z + 1]) + Number(mul[0]) >= 10) {

					if (sum[k + z + 2] == undefined) {

						sum[k + z + 2] = 0;
					}

					sum[k + z + 1] = Number(sum[k + z + 1]) + Number(mul[0]) - 10;
					sum[k + z + 2] = Number(sum[k + z + 2]) + 1;
				}
				else {

					sum[k + z + 1] = Number(sum[k + z + 1]) + Number(mul[0]);
				}
			}
		}
	}

	//разворачиваем sum получаем строку
	sum = sum.reverse();
	sum = sum.join("");
	
	return (sum);
}
