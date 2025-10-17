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
        console.log("Girilen input: " + str);
        var result = this.a(str);
    
        var AESDecrypt = Java.use("sg.vantagepoint.a.a");
        var b = this.b("8d127684cbc37c17616d806cf50473cc");

        var Base64 = Java.use("android.util.Base64");
        var encrypted = Base64.decode("5UJiFctbmgbDoLXmpL12mkno8HT4Lv8dlat8FxR2GOc=", 0);
        
        var decrypted = AESDecrypt.a(b, encrypted);
        var secret = "";
        for(var i = 0; i < decrypted.length; i++) {
            secret += String.fromCharCode(decrypted[i]);
        }
        
        console.log("Secret: " + secret);
        
        return result;
    };
    
});
