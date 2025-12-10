// Day 3 Exercise: Tonnage Validation 


let procurementTonnage = 1500;  //  You can change the value to test

let meetsMinimum = procurementTonnage > 1000;

console.log("Meets minimum requiremnet:", meetsMinimum);

true

// 2. Strictness Check 

let costStr = `5000`;   //  string
let costNum =  5000;   //  number 

console.log (`Loose Comparion (==): ${costStri} == ${costNum} is ${costStri ==costNum}`;

    console.log(`Strict Comparion(===): ${costStri}=== ${costNum} is ${costStri===costNum}`;


console.log(costStri ==costNum);   // true


console.log(costStri=== costNum);    // false

//Answer the question 
console.log(`why is === safer for KGL?`);
console.log(`The === operator is safer because it strictychecks both the **value** and **data** type. This prevents unexpected issues from type coercion, ensuring accurate comparions for critical data like cost.`);


// 3.Complex Validation:

// Recode Exampl:


let dealerName = "KGL Machines";
let cost = 40000; 

// complex validation using &&
let isValidation using = (dealerName.length >= 2) && (cost >= 10000); 

console.log("Valid record:", isValidRecord);
(
// Create a new Date ( ):
const now = new Date( );

// Use Date:
let today = new Date ( );
const day = today.getDate( );
const month = today.getMonth( ) + 1;  // +1 because months start at 0
const year = today. getFullYear ( );

// Create the human-readable :
const timestamp = `sale on: ${day} /${month} /${year}`;

console.log(timestamp);

// Log final output:
console.log("---4. Date Logging ---");
console.log(`Sale on:${timestamp}`);




