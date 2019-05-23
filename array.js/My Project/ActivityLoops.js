let favouritefilms = [

    "Jhon wick",
    "Matrix",
    "Training day",
    "Cradle to the grave",
    "Glass",
    "The dark knight",
    "pulp fiction",
    "The godfather",
    "Goodfelas",
    "Shooter"

];

const filmCheck = (film) => {

    if (film == "Training day"){
        console.log("yes it is Training day");    
    }
    else{
        console.log("no, we want Training day");
    }
} 

for(let filmIndex = 0; filmIndex < favouritefilms.length; filmIndex++) {
    console.log(favouritefilms[filmIndex]);
    filmCheck(favouritefilms[filmIndex]);
}


