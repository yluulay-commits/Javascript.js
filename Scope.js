      //  scope

     //  global scope and local scope

     let name = " Luul";   // global 

     function greet() {
        console.log(name); // accessible 
     }

     greet();
     console.log(name);  // accessible outside

     function test() {
        let age = 21;
        console.log(age);  // works
     }
     test();
     console.log(age);  // X Error:;  age is not defined

     if(true) {
        let x = 50;
        consolr.log(x);  //works
     }
     console.log(x);  // X Error: x is not defined
    
     if (true) {
        var y = 10;
     }

     console.log(y);  // y is accessible

     function inner() {
        let a - 5;

        functiomn inner(){
            console.log(a);  // inner can access outer
        }

        inner();
    } 

    outer();
     
