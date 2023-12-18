// // Basic Salary  and benefits Prompt 
const basicSalary = Number(prompt("What is your basic salary ? "));
const benefits = Number(prompt(" What is the total amount of benefits? "));

// Gross Salary 
const grossSalary = basicSalary + benefits;


/****** DEDUCTIONS ******/
/*

1.Tax
2.NSSF
3.NHIF

*/



// NSSF 
const NSSFDeduction = 6000 * 0.6;



// Tax calculation function 
function taxCalculation(grossPay) {
    let tax = 0;
    // Tax deductible upto 24000
    if (grossPay <= 24000) {
        tax = grossPay * 0.1;
    }
    // Tax deductible between 24,001 and 32,333
    else if (grossPay > 24000 && grossPay <= 32333) {
        tax = grossPay * 0.25
    }
    // Tax deductible between 32,334 and 500,000
    else if (grossPay > 32333 && grossPay <= 500000) {
        tax = grossPay * 0.25
    }
    // Tax deductible between 500,001 and 800,000
    else if (grossPay > 500000 && grossPay <= 800000) {
        tax = grossPay * 0.25
    }
    // Tax deductible above 800,000
    else {
        tax = grossPay * 0.35
    }

    return tax;
}



// NHIF calculation function 

function NHIFCalculation(grossPay) {
    let deduction = 0;
    // Deduction up to 5999
    if (grossPay <= 5999) {
        deduction = 150;
    }


    // Deduction for gross pay between 6,000 and 7,999
    else if (grossPay > 5999 && grossPay <= 7999) {
        deduction = 300;
    }


    // Deduction for gross pay between 8,000 and 11,999
    else if (grossPay > 7999 && grossPay <= 11999) {
        deduction = 400;
    }


    // Deduction for gross pay between 12,000 and 14,999
    else if (grossPay > 11999 && grossPay <= 14999) {
        deduction = 500;
    }


    // Deduction for gross pay between 15,000 and 19,999
    else if (grossPay > 14999 && grossPay <= 19999) {
        deduction = 600;
    }


    // Deduction for gross pay between 20,000 and 24,999
    else if (grossPay > 19999 && grossPay <= 24999) {
        deduction = 750;
    }


    // Deduction for gross pay between 25,000 and 29,999
    else if (grossPay > 24999 && grossPay <= 29999) {
        deduction = 850;
    }


    // Deduction for gross pay between 30,000 and 34,999
    else if (grossPay > 29999 && grossPay <= 34999) {
        deduction = 900;
    }


    // Deduction for gross pay between 35,000 and 39,999
    else if (grossPay > 34999 && grossPay <= 39999) {
        deduction = 950;
    }


    // Deduction for gross pay between 40,000 and 44,999
    else if (grossPay > 39999 && grossPay <= 44999) {
        deduction = 1000;
    }


    // Deduction for gross pay between 45,000 and 49,999
    else if (grossPay > 44999 && grossPay <= 49999) {
        deduction = 1100;
    }


    // Deduction for gross pay between 50,000 and 59,999
    else if (grossPay > 49999 && grossPay <= 59999) {
        deduction = 1200;
    }


    // Deduction for gross pay between 60,000 and 69,999
    else if (grossPay > 59999 && grossPay <= 69999) {
        deduction = 1300;
    }


    // Deduction for gross pay between 70,000 and 79,999
    else if (grossPay > 69999 && grossPay <= 79999) {
        deduction = 1400;
    }


    // Deduction for gross pay between 80,000 and 89,999
    else if (grossPay > 79999 && grossPay <= 89999) {
        deduction = 1500;
    }


    // Deduction for gross pay between 90,000 and 99,999
    else if (grossPay > 89999 && grossPay <= 99999) {
        deduction = 1600;
    }


    // Deduction for 100000 and above
    else {

        deduction = 1700;
    }
    return deduction;
};



/********** Net Salary Calculator ***********/
/* The argument passed to the netSalaryCalculator function  
    is the gross pay */

function netSalaryCalculator(grossPay) {

    return (grossPay - NSSFDeduction - taxCalculation(grossPay) - NHIFCalculation(grossPay));

}

/*  1.Calling Net Salary Calculator with usersInput as the parameter 
    2.Outputting it on the console */
console.log(netSalaryCalculator(grossSalary));