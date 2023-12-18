// // Basic Salary  and benefits Prompt 
// const basicSalary = Number(prompt("What is your basic salary ? "));
// const benefits = Number(prompt(" What is the total amount of benefits? "));

// Gross Salary 
const grossSalary = basicSalary + benefits;


function tax(grossPay){
    let tax = 0;
    // Tax deductible upto 24000
    if(grossPay<= 24000){   tax = grossPay * 0.1;}
    // Tax deductible between 24,001 and 32,333
    else if(grossPay > 24000 && grossPay <= 32333){    tax = grossPay * 0.25}
    // Tax deductible between 32,334 and 500,000
    else if(grossPay > 32333 && grossPay <= 500000){   tax = grossPay * 0.25}
    // Tax deductible between 500,001 and 800,000
    else if(grossPay > 500000 && grossPay <= 800000){  tax = grossPay * 0.25}
    // Tax deductible above 800,000
    else{ tax = grossPay * 0.35}

    return tax;
}

