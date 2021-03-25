
/*  01 PRODUCTORIA
*   Función productoria que reciba un array de números y devuelva su productoria.
*   La productoria es el resultado de multiplicar todos sus elementos entre ellos.
*   Por ejemplo; productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.
*/

let arreglo = [1,4,7];

function productoria (arreglo){
    let pro = 1;

    for(i=0; i < arreglo.length; i++){
        pro = pro * arreglo[i];
    }
    return pro;
}