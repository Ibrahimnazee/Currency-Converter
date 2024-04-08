#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n \t WELCOME TO CURRENCY CONVERTER\n "));

let currency_rate: any = {
  USD: 1,
  EUR: 0.92,
  INR: 83,
  JPY: 151,
  CAD: 1.3,
  PKR: 278,
};

let answer_user = await inquirer.prompt([
  {
    name: "from_currency",
    type: "list",
    message: " Enter Your From Currency",
    choices: ["USD", "EUR", "INR", "JPY", "CAD", "PKR"],
  },
  {
    name: "to_currency",
    type: "list",
    message: " Enter Your To Currency",
    choices: ["USD", "EUR", "INR", "JPY", "CAD", "PKR"],
  },
  {
    name: "amount",
    type: "number",
    message: " Enter Your Amount",
  },
]);

// perfum currency conversion by using formula
let fromcurrency = currency_rate[answer_user.from_currency];
let tocurrency = currency_rate[answer_user.to_currency];
let amount = answer_user.amount;

// formula of conversion
let baseAmount = amount / fromcurrency;
let convertedAmount = baseAmount * tocurrency;

// display the converted amountnn
console.log(convertedAmount.toFixed(2));
