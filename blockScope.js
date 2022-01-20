let  b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);
// console.log(b); // b is not defind
// console.log(c);


// block is used to group multiple statement where js expect single statement
if (true) {
    //Compound statement
    var a = 10;
    console.log(a);
}