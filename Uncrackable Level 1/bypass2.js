Java.perform(function () {

    var c = Java.use("sg.vantagepoint.a.c");

    c.a.implementation = function () {
        return false;
    };

    c.b.implementation = function () {
        return false;
    };

     c.c.implementation = function () {
        return false;
    };


    var a = Java.use("sg.vantagepoint.uncrackable1.a");
    
    a.a.implementation = function(str) {
        console.log("Input: " + str);
        return true;  
    };

    
});
