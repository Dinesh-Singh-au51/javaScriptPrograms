/*
Ramesh’s basic salary is input through the keyboard. His
dearness allowance is 40% of basic salary, and house rent
allowance is 20% of basic salary. Write a program to calculate
his gross salary. */

const prompt=require("prompt-sync")();
var bs
bs=parseInt(prompt("enter basic salary "))
console.log("total salary is "+(bs+((bs*40)/100)+((bs*20/100))))
