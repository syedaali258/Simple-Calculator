#! /usr/bin/env node

import inquirer from "inquirer";


//Asking questions from users through inquirer

let answers =  await inquirer.prompt([
    {message: "Enter First Number", type: "number" , name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumner"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substractions", "Multiplication", "Division"],
    },
]);

//conditional statements IF-ELSE

if (answers.operator === "Addition"){
  console.log(answers.firstNumber + answers.secondNumner)
}
else if (answers.operator === "Substractions"){
    console.log(answers.firstNumber - answers.secondNumner)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumner)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumner)
}
else{
    console.log("invalid input")
}