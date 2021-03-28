
/*  SUMATORIA BAJO IMPORTE
*
*   La función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de
*   la suma de los importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $ 1.000.
*   Cuando hay ganancias mayores a $ 1.000 no se presentan junto con las rendiciones positivas que veníamos haciendo, 
*   por lo cual vamos a necesitar darle una vuelta de tuerca mas a nuestra función de Sumatorias.
*
*/

let sumImp = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];

function sumatoriaBajoImporte(sumImp){
    let sum = 0;

    for(i = 0; i < sumImp.length; i++){
        if (sumImp[i] > 0 && sumImp[i] <= 1000) {
            sum = sum + sumImp[i];
        }
    }
    return sum;
}
 
console.log(sumatoriaBajoImporte(sumImp));