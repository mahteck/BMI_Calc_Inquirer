// let weightInKg = 70;
// let heightInMeters = 1.75;
// let bmi = weightInKg / (heightInMeters * heightInMeters);
import inquirer from "inquirer";

const numb1 = await inquirer.prompt({
    name: "weightInKg",
    type: "number",
    message: "Enter Weight In Kg"
});
const numb2 = await inquirer.prompt({
    name: "heightInMeters",
    type: "number",
    message: "enter height in meters"
});
let result: number = numb1.weightInKg / (numb2.heightInMeters * numb2.heightInMeters);
console.log(`your bmi result is ${result}`);