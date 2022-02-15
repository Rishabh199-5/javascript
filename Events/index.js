// event capturing and event tricking are same
// document.querySelector('#grandparent')
// .addEventListener('click', () => {
//     console.log("grandparent click");
// },true);

// document.querySelector('#parent')
// .addEventListener('click', () => {
//     console.log("parent click");
// },true);

// document.querySelector('#child')
// .addEventListener('click', () => {
//     console.log("child click");
// },true);

//first capturing happens
// then bubbling

document.querySelector('#grandparent')
.addEventListener('click', () => {
    console.log("grandparent click");
},true);//capturing

document.querySelector('#parent')
.addEventListener('click', () => {
    console.log("parent click");
},false);//bubbling

document.querySelector('#child')
.addEventListener('click', () => {
    console.log("child click");
},true);//capturing