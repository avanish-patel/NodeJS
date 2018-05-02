
console.log(__filename);

console.log(__dirname);

function hello(){

    console.log("Hello >>>");
}

// the thread wait 5 seconds to execute this function
setTimeout(hello, 5000);

// this function will executed every 2 seconds continuosly
setInterval(hello, 2000);