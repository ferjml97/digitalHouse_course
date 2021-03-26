
/*  02 FACTORIAL
*   Escribí una función factorial, la misma debe recibir un número y calcular el factorial del mismo.
*   El factorial de un número n es el resultado de multiplicar 
*   todos los números enteros positivos menores o iguales que n.
*   Ejem: factorial(7)  --> 1x2x3x4x5x6x7
*/

function factorial (n){
    let sum = 1;

    for(i = 1; i<=n; i++){
        sum = sum * i;
    } 
    return sum;
}

 console.log(factorial(7));