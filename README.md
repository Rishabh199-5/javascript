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

**Lexical Environment & scope chain**
Lexical environment = local memory + parent lexical environment.

function a (){
    var b = 10;
    c()
    function c(){
        console.log(b);
    }
}
a();


<img width="670" alt="Screenshot 2022-01-18 at 10 09 06 PM" src="https://user-images.githubusercontent.com/16613350/149979652-21be8476-99dd-44ff-ad80-9c2abf7d1e32.png">

if a avariable is not found in local memory
then javascript go recursively in the parents memory till the variable is found.
the above mentioned process is known as scope chain.


**let, const declaration**:
let and const variables are assigned undefined before declaration but in a seperate memory space.
in case of var they are assigned undefined in global memory space.

**temporal dead zone**:
it is the phase when let and const variables are hoisted till they are initialized

// console.log(a); //ReferenceError: cannot access 'a' before initialization
//console.log(b);// undefined
let a = 10;
var b = 100;

when variables are accessed inside temporal dead zone then they are not accessible until not initialized.
