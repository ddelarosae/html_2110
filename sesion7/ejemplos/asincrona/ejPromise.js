var promesa1 = function() {
    return new Promise(function(resolver, cancelar) {
        setTimeout(function() {
            console.log("pasan 4 segundos");
            resolver();
        }, 4000);
    });
}
var promesa2 = function() {
    return new Promise(function(resolver, cancelar) {
        setTimeout(function() {
            console.log("pasa 1 segundo");
            resolver();
        }, 1000);
    });
}
promesa1().then(promesa2).then(function() {
    console.log("termino");
});