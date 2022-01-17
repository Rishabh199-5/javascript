var a = 10;
function b(){
    var x = 10;
}
// a and b will be attached to global space but x is not.
// anything inside funcion is not attached to global space.
console.log(window.a);
console.log(a);
console.log(this.a);

//Reference Error: x is not defined.
console.log(x);