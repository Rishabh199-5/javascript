# javascript notes ❤️

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

**Remember : let and const are hoisted.**

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
var variables can be accessed by window but let cannot.

**Syntax vs TypeError vs Reference**
Syntax - conts b;// Syntax error because initializer is missing.
TypeError- cont b; b = 500; // TypeError:Assignment to constant variable because it is of const type
Reference Error- console.log(a); let a=20;// Reference Error because a is in the special memory

**Block Scope**
{
    var a = 10; // a will be assigned and hoisted in global space
    let b = 20; // b and c will be assigned and hoisted in special memory
    const c = 30;
}

after exceution this block will be deleted from memory.

**Shadowing**

let  b = 100;
{
    var a = 10;
    let b = 20; // b is shadowed
    const c = 30;
    console.log(a);
    console.log(b); // 20
    console.log(c);
}
console.log(b); // 100

**Illegal Shadowing**
let a = 20;
{
    var a = 100; // variable a is already declared.
}

**valid case** : variable must not cross bounday while shadowing

let a = 20;
{
    let a = 100; .
}

**valid case**

var a = 20;
{
    let a = 100; .
}

**closures**
function along with its lexical scope bundled togather forms a closure.

**JRE**
Every browser has JRE(javascript runtime environment).
JRE consist of js engine,api,event loop,callback queue and microtask queue.
**Code => parsing(tokens) => AST => compilation => execution**
compiler optimizes the code by talking to interpreter.
javascript can behave interpreted or compiled language.
It depends on engine.
JIT uses both interpreter and compiler.

**Higher Order Function**

A function that takes another function as argument or that returns another function.

**async vs defer**
async - doesn't guarantee order of execution of scripts.
defer -  guarantee order of execution of scripts.

**Event Delegation**
benefits
memory saver - most important
we can write less code

limitation
all the events are not bubbled up some events like blur ,focus etc which are not bubbled up in heiarchy.
will not work with stopPropagation
