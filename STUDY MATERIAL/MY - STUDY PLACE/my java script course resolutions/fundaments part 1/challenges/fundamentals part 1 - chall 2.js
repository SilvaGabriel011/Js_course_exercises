/*
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

const markWeighs = 78;
const markTall = 1.69;
const johnWeihgs = 92;
const johnTall = 1.95;

const bmiMark = markWeighs / (markTall * markTall);
const bmiJohn = johnWeihgs / (johnTall * johnTall);

let isMarkHigherBmi = bmiMark > bmiJohn;

// console.log(bmiMark);
// console.log(bmiJohn);
// console.log(isMarkHigherBmi);

if (!isMarkHigherBmi) {
	console.log(`johns's BMI ${bmiMark} is higher than mark's ${bmiJohn}!`);
} else {
	console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`);
}

// good code making, but nothing special yet
