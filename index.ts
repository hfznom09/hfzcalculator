#! /usr/bin/env node

let answerconfirm = {calculate: "Yes"}

import inquirer from "inquirer";

while(answerconfirm.calculate == "Yes"){

  const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
      message: "select one of the opretor to perfom action",
      type: "list",
      name: "operator",
      choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
  ]);
  
  if (answer.operator === "Addition")
  {
    console.log(answer.firstNumber + answer.secondNumber);
  } else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  } else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  } else if (answer.operator === "Division") {
    if (answer.secondNumber === 0) {
      console.log("it is not dividable");
    }
    else{
      console.log(answer.firstNumber / answer.secondNumber);
    }
  } else {
    console.log("please select valid operator");
  }
  
  answerconfirm = await inquirer.prompt([
    {
      message: "\n Do you want to more calculation?",
      type: "list",
      name: "calculate",
      choices: ["Yes", "No"],
  
  }])

}