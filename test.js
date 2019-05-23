let space1 = "x";
let space2 = "x";
let space6 = "x";
let space3 = "o";
let space4 = "x";
let space5 = "o";

console.log("   |   |   ")
console.log(`${space1}  | ${space2} | ${space6}  `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(`${space3}  | ${space4} |   `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(`${space5}  |   |   `)
console.log("   |   |   ") 

if (space1 == space2 && space2 == space6){
    console.log("you win!");
}
else{
    console.log("condition not winning");
}

