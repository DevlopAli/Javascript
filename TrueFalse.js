

var password = 9

if (password <7) {
    console.log ("console password is too small")
}
else{
    console.log ("log the password to the console");
}

// Add an else statement in case the number is divisible by 5. 

// for the numbers 1 through 20,
for (i=1; i<=20; i++) { 
    // if the number is divisible by 3, write "num"
     if ( i % 3 === 0 && i % 5 === 0) { 
       console.log("FizzBuzz"); }
     // if the number is divisible by 5, write "num"
     else if ( i % 3 === 0) {
       console.log("Fizz"); }
       // otherwise, write just the number
     else if ( i % 5 === 0) {
         console.log("Buzz"); }
     else {
       console.log(i);
     }
   }
