let film = ('matrix')
console.log(film)

let films = ['matrix', 'jhon wick', 'avengers', ' django', 'glass', 'creed 2', 'rambo', 'the equalizer', 'chasing bullet']


console.log("my second favorite film is " + films[2])
console.log("my third favourite film is" + films[3])
console.log("my fourth favourite film is " + films [4])
console.log("i have " + films.length +  " favorite films")

let books = ['one of my favourite  book is this is a movie', 'mind hacking', 'this is going to hurt']
console.log("i have three " + books.length + " favourite book")
console.log('i have three favourite books. my second favourite book is mind hacking')

let favourite = [...films, ...books,];

console.log(`${favourite}`);

let cars = ['ferrari', 'audi', 'bmw', 'mercedes']
console.log("my second favourite car is " + cars[2])
console.log("my favourite car is " + cars[3])

//===check the values and the types
if(1==="1"){
    console.log(true);
}
else{
    console.log(false);
}


if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}

if (1 !== "1") {
    console.log(true);
}
else {
    console.log(false);
}


let age = 25;

if (age > 17) {
    //do this
console.log ("yes i can serve you")
}

else{
    //do this
console.log ("you are not alloud");
    //if nothing else matched do this;
}

