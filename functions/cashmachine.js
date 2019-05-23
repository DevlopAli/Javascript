/* let pin ('9999')

if ( ){
    console.log(" ");
}
else{
    console.log(" ");
}
*/



let pinNumber = 9999;
let balance = 1000;

const checkPin = (pinNumber, balance) => {
   
   if (pinNumber == 9999 && balance <= 1000)
    console.log("password accepted and sufficiant balance!");

else if (balance => 1001)
    console.log("insuffiant funds");

else if (pinNumber = 9999)
    console.log("Pin incorrect");

else
    console.log("incorrect password");
} 

checkPin (9999, 999)

/*  console.log(`balance ${1000}`);
 */