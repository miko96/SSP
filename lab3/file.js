//carrying
function multiply(a, b) {
    return a * b;
}
function foo(a) {
    return function (b) {
        return multiply(a, b);
    }
}


//memorization
var fibonacci = (function () {
    var mem = {};
    function f(n) {
        var a;
        if (n in mem) {
            a = mem[n];
        } else {
            if (n === 0 || n === 1)
                a = n;
            else
                a = f(n - 1) + f(n - 2);
            mem[n] = a;
        }
        return a;
    }
    return f;
})();