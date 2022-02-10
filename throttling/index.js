//throttling vs debounce

// throttling: the time diff btw two calls is delay
// debounce: the delay diff btw two events

const throttle = (fn,delay) => {
   let flag = true;
    return function(){
        let context = this,args = arguments;
        if(flag){
            fn.apply(context,args);
            flag = false;
        }
        setTimeout(()=>{
            flag = true;
        },delay);
    }
}