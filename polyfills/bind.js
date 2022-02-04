let name = {
    firstname: "Rishabh",
    lastname: "Dangwal"
}

let printName = function(homeTown,state){
    console.log(this.firstname+ " " + this.lastname + " , ",homeTown, " , "+state);
}

Function.prototype.mybind = function(...args){
    // this -> printName
    let obj = this, params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    };
}
let printMyName = printName.bind(name);
let printMyName2 = printName.mybind(name);
console.log(printMyName('Dehradun','Uttrakhand'));
console.log(printMyName2('Dehradun','Uttrakhand'));