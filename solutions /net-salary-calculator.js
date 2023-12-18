// Basic Salary  and benefits Prompt 
const basicSalary = Number(prompt("What is your basic salary ? "));
const benefits = Number(prompt(" What is the total amount of benefits? "));

// Gross Salary 
const grossSalary = basicSalary + benefits;


function taxDeduction (grossSalary){
    console.log(grossSalary);
}