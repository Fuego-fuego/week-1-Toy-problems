// Prompt for user input and cast it to number
const carSpeed = Number(prompt("Enter Car Speed : \nNote : (Must be a number)"));



/***** Speed Detector Function *****/

function speedDetectorFunction(speed) {
    // Condition checks
    // 1.If speed is not a number
    if (isNaN(speed)) {
        return `Please enter a number`;
    } else {
        // 2.If speed is less than 0
        if (speed < 0) {

            return `Speed should not be negative here`;
        }
         // 4.Speed passes all checks 
        else {
            

         // If the speed is less than 70, it should print “Ok”. 
            if(speed < 70){
                console.log("OK")
            }
            /* If the driver gets more than 12 points, 
            the function should print: “License suspended”.
            1 point = 5km/h 13 points = 65km/h 
            Total speed to suspend license  = 135km/h
            */
            else if(speed >= 135){
                console.log("License suspended");
                        }
            /* Speeds above 70 km/h , demerit point counts from 75
                Each 5km is 1 demerit point*/
            else{                
                const points = Math.trunc((speed - 70)/5);
                
                console.log(`Total number of demerit points are : ${points}`);

                        }              
            }          
        }
    }



/*  1.Calling speed detector function with usersInput as the parameter 
    2.Outputting it on the console */
console.log(speedDetectorFunction(carSpeed));

