function attacheventListener(){
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click",function xyz(){
        console.log("button clicked",++count);
    })
}

attacheventListener();

//Garbage Collection and removeEventListener
//EventListener are heavy