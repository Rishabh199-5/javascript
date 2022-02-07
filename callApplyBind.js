// const name = {
//     firstname: "Rishabh",
//     lastname: "Dangwal",
//     printFullName: function(){
//         console.log(this.firstname+" "+ this.lastname);
//     }
//  }
// name.printFullName.call(name2)
const name = {
   firstname: "Rishabh",
   lastname: "Dangwal",
}
let printFullName= function(hometown,state){
    console.log(this.firstname+" "+ this.lastname +" "+ hometown +" ,"+state);
}

printFullName.call(name,"Dehradun","Uttrakhand");
printFullName.apply(name,["Dehradun","Uttrakhand"]);

const name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
 }

 // Call is used for function borrowing
 printFullName.call(name2);

 //difference btw call and apply is only the way we passs arguments

 //bind

 let printMyName = printFullName.bind(name,"Dehradun","Uttrakhand");
 console.log(printMyName);
 printMyName();