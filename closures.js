function z(){
    var b = 900;
    x();
    function x(){
        var a = 7;
        function y(){
            console.log(a,b); // a here is reference
        }
        y();
    }
}
z();