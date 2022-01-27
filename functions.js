
a();// will not throw error
// function statement
function a(){
    console.log("a called");
}

// Function Expression

//b() // => this will throw an error
var b = function(){
    console.log("b called");
}

// hoisting is the difference between function declarartion and function expression

// Function Declaration and function statement are same

// Anonymous function - used when function are used as value
// function () {

// }

// Named function Expression
var wxy = function xyz(){
    console.log(xyz); // we can access xyz over here
    console.log("b called");
}
wxy();// valid call
// xyx() // will give an error xyz is not defined

// Diff btw parameters and arguments
// function abc(parameter1,parameter2){}; 
// var argument1 = 1;var argument1 = 2;
// abc(argument1,argument2);

// First class function or Function class citizens
// The ability of function to be used as value, argument and can be returned from function. this ability is First class function.
