/*CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.*/

// const bmi = mass / height ** 2;

const markWeighs = 78;
const markTall = 1.69;
const johnWeihgs = 92;
const johnTall = 1.95;

const bmiMark = markWeighs / (markTall * markTall);
const bmiJohn = johnWeihgs / (johnTall * johnTall);

let isMarkHigherBmi = bmiMark > bmiJohn;

console.log(bmiMark);
console.log(bmiJohn);
console.log(isMarkHigherBmi);

// right, one try
// good block of coding making 