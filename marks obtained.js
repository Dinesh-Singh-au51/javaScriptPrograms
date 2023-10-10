/*
If the marks obtained by a student in five different subjects
are input through the keyboard, find out the aggregate marks
and percentage marks obtained by the student. Assume that
the maximum marks that can be obtained by a student in each
subject is 100. 
*/

const prompt=require("prompt-sync")()
var m1,m2,m3,m4,m5;
m1=parseInt(prompt("enter the marks of hindi "))
m2=parseInt(prompt("enter the marks of english "))
m3=parseInt(prompt("enter the marks of math "))
m4=parseInt(prompt("enter the marks of commerce "))
m5=parseInt(prompt("enter the marks of Science "))
console.log("aggregate marks is "+(m1+m2+m3+m4+m5))
console.log("percentage is "+((m1+m2+m3+m4+m5)/5))