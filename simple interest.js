const prompt = require ("prompt-sync")();
var p,r,t;
p=parseInt(prompt("enter principal "))
r=parseInt(prompt("enter rate of interest "))
t=parseInt(prompt("enter time "))
console.log ((p*r*t)/100)

