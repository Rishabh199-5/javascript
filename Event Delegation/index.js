// benefits
// memory saver - most important
// we can write less code

//limitation
// all the events are not bubbled up some events like blur ,focus etc which are not bubbled up in heiarchy.
// will not work with stopPropagation

document.querySelector("#category").addEventListener('click',(e)=>{
    console.log("Category parent clicked",e.target.id);
    if(e.target.tagName ==="LI"){
        window.location.href = "/"+e.target.id;
    }
})