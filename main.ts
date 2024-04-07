#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcom to 'CodeWith Rabia' - Currency convertor\n"));

// Define the list of currencies and their exchange rate
let exchange_rate: { [key: string]: number } = {
 USD: 1, // Base Currency
 EUR: 0.9, // European Currency (Euro)
 JPY: 113, // Japanese Currency (yen)
 CAD: 1.3, // Canadian Dollar
 AUD: 1.65, // Australian Dollar
 PAK: 277.70, // Pakistan Rupees
 // Add more currencies and their exchange rates here
};

// Prompt the user to select currencies to convert from and to
let user_answer: any = await inquirer.prompt([
 {
 name: "from_currency",
 type: "list",
 message: chalk.bgGreenBright ("Select the currency to convert from:"),
 choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PAK"]
 },
 {
 name: "to_currency",
 type: "list",
 message: chalk.bgBlueBright ("Select the currency to convert into:"),
 choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PAK"]
 },
 {
 name: "amount",
 type: "input",
 message:chalk.bgBlackBright ("Enter the amount to convert:"),
 },
]);

// Perform currency conversion using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

// Display the converted Amount
console.log(chalk.red.bold(`converted Amount = ${converted_amount.toFixed(2)}`));