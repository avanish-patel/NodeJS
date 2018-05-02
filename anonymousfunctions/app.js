

function greet(name){

    console.log("Hello, " + name);
}

greet("Avanish");

// higher order function - passing function as argument 

function greetHigher(greet, name){

    greet(name);
}

greetHigher(greet, "Avanish");

// anthor way

greetHigher(function hello(name){

    console.log("Hello, "+ name);
}, "Raj");


// assign function to variable

var anonymousFunction = function printHello(name){

    console.log("Anonymous ," + name);
}

greetHigher(anonymousFunction, "Dixit");