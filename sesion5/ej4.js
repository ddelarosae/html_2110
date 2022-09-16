var nota=prompt("Ingrese su nota: ");
var notaInt=parseInt(nota);
console.log(notaInt);
devuelveNota(notaInt);
function devuelveNota(nota){
    var notaFinal;
    switch (notaInt){
        case 5:
            notaFinal="aprobado";
            document.write(notaFinal);
            break;
        case 6:
            notaFinal="bien";
            document.write(notaFinal);
            break;
        case 7:
            notaFinal="notable";
            document.write(notaFinal);
            break;
        case 8:
            notaFinal="notable";
            document.write(notaFinal);
            break;
        case 9:
            notaFinal="excelso";
            document.write(notaFinal);
            break;
        case 10:
            notaFinal="excelente";
            document.write(notaFinal);
            break;
        default:
            notaFinal="reprobado";
            document.write(notaFinal);
    }
    return(notaFinal);
}