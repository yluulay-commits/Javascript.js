Tonnage Validation

function checkTonnage(tonnage) {
    // Return true if tonnage is Not less than 1000kg
      if (tonnage >= 1000) {
         return true;
      }   else {
        return false;
      }
    }
    
    fucntion checkTonnage(tonnage) {
        return tonnage >= 1000;
    } 
    
    EXPLANATION:

    If tonnage is 1000kg or more, the function returns true.

    If tonnage is below 1000kg, it returns false.

    Buyer Name Validation 

    const valideBuyer = (name) =>
    {
        return name.length >= 2;
    };

    The fucntion takes name as Input. 

    It checks if the length is 2 or more characters. 

    Returns true if valide, false if invalid. 

    How it works 
    
    The fucntion takes name as input. 

    It checks if the length is 2 or more characters. 

    Returns true if valid, false if invalid. 

 const validateBuyer = name => name.length >= 2; 

  Role Authorization 

  const canRecordEntry = (role) => { 
    if (role === "sales agent") {
        return false;  // Not allowed
    } 
    return true;       // Other roles can record
  }; 

  const canRecordEntry = () => false 
  



      
