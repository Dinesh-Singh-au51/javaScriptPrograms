/*The distance between two cities (in km.) is input through the
keyboard. Write a program to convert and print this distance
in meters, feet, inches and centimeters. 
*/
const prompt=require ("prompt-sync")();
var dis=parseInt(prompt("enter the distance of cities in km "))
console.log("distance in meter will be " +(dis*1000))
console.log("distance in feet "+(dis*3280.84))
console.log("distance in inches "+(dis*39370.1))
console.log("distance in centimeters "+(dis*100000))
