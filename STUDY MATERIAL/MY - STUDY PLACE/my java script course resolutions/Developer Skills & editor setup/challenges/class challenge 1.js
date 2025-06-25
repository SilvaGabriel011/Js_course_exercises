const temperatures = [3, -2, -6, "error", 20, 123];
const temperatures2 = [3, -2, -6, -3, -54, 1, "error", 20, 123];
const calcMaxValue = function (arr) {
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else {
			continue;
		}
	}
	return max;
};
// console.log(calcMaxValue(temperatures));

const calcMinValue = function (arr) {
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < max) {
			max = arr[i];
		} else {
			continue;
		}
	}
	return max;
};
// console.log(calcMinValue(temperatures));

const checkType = function (arr) {
	let justValues = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "number") {
			justValues.push(arr[i]);
		}
	}
	return justValues;
};
// console.log(checkType(temperatures));

const checkAmplitude = function (arr) {
	const numberValues = checkType(arr);
	const maxValue = calcMaxValue(numberValues);
	const minValue = calcMinValue(numberValues);
	return maxValue - minValue;
};
// console.log(checkAmplitude(temperatures));

const mergeArray = function (arr1, arr2) {
	const mergedArray = [];
	for (let i = 0; i < arr1; i++) {
		mergedArray.push(arr1[i]);
	}
	for (let e = 0; e < arr2.length; e++) {
		mergedArray.push(arr2[e]);
	}
	return mergedArray;
};

console.log(checkAmplitude(mergeArray(temperatures, temperatures2)));
