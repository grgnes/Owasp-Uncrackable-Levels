Java.perform(function () {
    // Root kontrolleri
    var b = Java.use("sg.vantagepoint.a.b");
    b['a'].implementation = function () {
        return false;
    }
    b['b'].implementation = function () {
        return false;
    }
    b['c'].implementation = function () {
        return false;
    }

    // Debug modu kontrolü
    var a = Java.use("sg.vantagepoint.a.a");
    a['a'].implementation = function (context) {
        return false;
    }

    //  AsyncTask kodu ile debugger tespiti
    var Debug = Java.use("android.os.Debug");
    Debug.isDebuggerConnected.implementation = function () {
        return false;
    }
});