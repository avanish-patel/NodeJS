
function relay(){

    console.log("This is relay");
}

function longJump(){

    console.log("This is longjump");
}

module.exports.relay = relay;
module.exports.longJump = longJump;

// or we can write for all functions

module.exports = {

    volleyball: function(){
        console.log("Volleyball...");
    },
    football: function(){
        console.log("Football...");
    }
}

