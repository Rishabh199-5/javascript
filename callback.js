// What is a Callback function in js

setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){ // function y over is here callback
    console.log("y");
})

// javascript is synchronous and single threaded 
// blocking mainthread