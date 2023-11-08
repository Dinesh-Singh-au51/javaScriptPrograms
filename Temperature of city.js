/*
Temperature of a city in Fahrenheit degrees is input through
the keyboard. Write a program to convert this temperature
into Centigrade degrees. 
*/

const prompt=require("prompt-sync")()
var f=Number(prompt("enter the Fahrenheit value "))
console.log( ((f-32)*5/9) )

