// Prompt for user input and cast it to number
const studentMark = Number(prompt("Enter students score : \nNote : (Must be a positive integer between 0 - 100)"));



/***** Student Grader Function *****/

function studentGraderFunction(input) {
    // Condition checks
    // 1.If input is not a number
    if (isNaN(studentMark)) {
        return `Please enter a number`;
    } else {
        // 2.If input is less than 0
        if (input < 0) {

            return `please enter a positive integer`;
        }
        // 3.If input is greater than 100
        else if (input > 100) {

            return `mark can't be greater than 100`;
        }
         // 4.Input passes all checks 
        else {
            let output = 0;
            // For 79 and above,the grade is A
            if (input > 79) {  output = `A`; } 
             // Between 79 and  60,  grade is B
            else if (input <= 79 && input > 59) {   output = `B`;} 
             // Between 59 and  50, grade is C
            else if (input <= 59 && input > 49) {   output = `C`;} 
             // Between 49 and  40,  grade is D
            else if (input <= 49 && input > 39) {   output = `D`;} 
             // Below 40
            else {   output = `E`;}

            return output;
        }


    }

};

/*  1.Calling students grader function with usersInput as the parameter 
    2.Outputting it on the console */
console.log(studentGraderFunction(studentMark));

