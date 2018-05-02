
// function and statments get exicuted asynchronously  - non blocking i/o
console.log("User 1 made a request to server");
setTimeout(callback, 5000);

console.log("User 2 made a request to server");
setTimeout(callback, 5000);

console.log("User 3 made a request to server");
setTimeout(callback, 5000);

function callback(){

    console.log("Data is queried and delivered in 5 seconds.");
}
