Exercise 1: User Role Check-Solution
 
// User Role Check
let userRole = "Manager";   // change this value to test different roles

if (userRole === "Director") {
      consolr.log("Viewing Total only"); 
}
else if (userRole === "Manager Agent") {
      console.log("Can record procurement & sales only");    
}
else if (userRole === " Sales Agent") {
      console.log("Can record sales only");
}
else {
    console.log("Access Denial");
}

Exercise 2: Complex Validation - Solution

// Complex Validation

let buyerName = "John";
let amountDue = "50000";      // must be 5 
digits  
let produceName = "Maize";    // cannot be 
empty

if (buerName.length >= 2 &&amountDue >= 
 10000 && produceName !== "") {
       console.log( "Valid credit sales record");
 } else {
       console.log("Valid record");
 }
let produceType ="peas";
}
switch(produceType({
    case "Beans": console.log("Your produce type is beans");
    break;
    case"G.nuts" console.log(" Your produce type is groudnuts");
    break;
    default: console.log(`cow peas, maize, soybeans`);
}  

Exercise 3:Produce Switch- Solution 
let produce = "G.nuts";   // change this to test other produces 

switch (produce) { 
    case"Beans": 
    console.log("Customer selected Beans. Stock available.");
    break;

    default:

    case"G.nuts": 
     console.log("Customer selected Groundnuts. Check moisture level."); 
    break:
   default:
     // Handles: CowBeans, Grain Maize, SoyBean, or anything else 
     console.log("Other produce selected: + produce"); 
     console.log("Produced with standard quality checks.");
}       
        