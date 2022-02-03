const radius = [3, 1, 2, 4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const calculate =  function(radius,logic){
    const output = [];
    for(let i = 0 ; i <  radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i = 0 ; i <  this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(calculate(radius,area));

const calculateArea = function(radius){
    const output = [];
    for(let i = 0 ; i <  radius.length; i++){
        output.push(Math.PI* radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));

const circumference = (radius) => (2 * Math.PI* radius);

const calculateCircumference = function(radius){
    const output = [];
    for(let i = 0 ; i <  radius.length; i++){
        output.push(2 * Math.PI* radius[i]);
    }
    return output;
}

console.log(calculateCircumference(radius));
console.log(calculate(radius,circumference));

const calculateDiameter = function(radius){
    const output = [];
    for(let i = 0 ; i <  radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
const diameter = (radius) => (2*radius);

console.log(calculateDiameter(radius));
console.log(calculate(radius,diameter));