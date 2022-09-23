function Sumar(a, b, callback) {
    return callback(a+b);
}
function Restar(a, b, callback) {
    return callback(a-b);
}
document.querySelector("#operar").addEventListener('click', function() {
    var a = parseInt(document.querySelector("#a").value);
    var b = parseInt(document.querySelector("#b").value);
    Sumar(a, b, function(r) {
        console.log('El resultado de la suma es ' + r);
    })
    Restar(a, b, function(r) {
        console.log('El resultado de la resta es ' + r);
    })
})