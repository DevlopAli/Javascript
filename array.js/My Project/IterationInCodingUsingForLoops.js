let cars = ["Ferrari", "Jaguar", "Audi", "Bentley", "Dodge"];

let currentCars = "Audi";
while(currentCars != "Audi"){
 console.log(currentCars);
 currentCars = cars[Math.floor((Math.random)*4)];
}
console.log(currentCars);

let favouritefilms = [

    "Jhon wick",
    "Avengers",
    "Matrix",
    "Transformers",
    "Ironman",
    "Training day",
    "Cradle to the grave"
   ];
   for(let filmsIndex = 0; filmsIndex<favouritefilms.length; filmsIndex++) {
    console.log(favouritefilms[filmsIndex]);
   }
