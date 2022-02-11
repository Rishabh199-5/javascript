// let multiply = (x,y) => {
//     console.log(x*y);
// }

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let mulitplyByTwo = multiply(2);
mulitplyByTwo(3);

let mulitplyByThree = multiply(3);
mulitplyByThree(10)