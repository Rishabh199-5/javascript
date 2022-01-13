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
