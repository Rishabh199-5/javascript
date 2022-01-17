# javascript Notes

var n = 2;

function square(num){
    var ans = num * num;
    return ans;
}

sqaure(n);
Here n is the argument of square and num is the parameter of square.

**Execution Context**:
Whenever code is executed, execution context is created.
on function call it is created.
on function execution completion, execution context created for function gets deleted.

**Callstack**:

Whenever any function is run a global execution context is pushed in call stack.

**Hoisting**:

Before the variables are assigned any value the variables can be accessed with undefined because of memory phase.
Eg:
console.log(x); // x is undefined.
console.log(getName);// function getName(){console.log("my name is Rishabh");}

var x = 7;

function getName(){
    console.log("my name is Rishabh");
}

console.log(ss); // here we will get Reference Error: ss is not defined.

**Function Execution**:
Can be understand with the help of execution context.

**Global Space**

var a = 10;
function b(){
    var x = 10;
}
// a and b will be attached to global space but x is not.
// anything inside funcion is not attached to global space.

