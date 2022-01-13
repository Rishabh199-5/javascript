

var x = 7;

function getName(){
    console.log("Namaste Javascript");
}

//behaves like variable
var getName1 = () => {
    console.log("Namaste Javascript");
}

//behaves like variable
var getName3 = function(){
    console.log("Namaste Javascript");
}

getName1();
getName();
console.log(x);
console.log(getName);