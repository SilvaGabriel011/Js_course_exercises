const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
	let finalText = "";
	for (let i = 0; i < arr.length; i++) {
		// let temp = arr[i];
		// " ... " + arr[i] + "ºC in " + (i + 1) + " days`
		finalText += ` ... ${arr[i]}ºC in ${i + 1} days`;
	}
	// finalText + "..."
	return `${finalText} ...`;
};

console.log(printForecast(data1));
console.log(printForecast(data2));
