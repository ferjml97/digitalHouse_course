
//  FUNCIONES

/*
    Una función es un BLOQUE DE CÓDIGO que podemos invocar todas las veces que necesitemos
    Puede realizar una TAREA ESPECIFICA y RETORNAR un valor.
    Nos permite AGRUPAR el CÓDIGO que vayamos a USAR MUCHAS VECES.
*/

    function sumar (a,b){
        return a + b;
    }

/*
    Ejemplo:
    -Usa la palabra reservada (function) para indicar a JS que escribirenos una función.
    -Definimos un nombre (sumar) para referirnos a nuestra función al momento de invocarla.
    -Escribimos entre parentesis y entre ellos los parametros de la función ((a,b)) si lleva más de 1 
        el siguiente lo separamos con una coma (,). Si la función no lleva parametros, escribimos
        los parentesis sin nada adentro.
    -Dentro de la función podemos acceder a los parametros como si fueran variables.
    -Entre las llaves de apertura y cierre escribimos la lógica de nuestra función, es decir,
        el código que queremos que se ejecute cada vez que la invoquemos. 
    -Para devolver el resultado de la función utilizamos la palabra reservada (return), 
        seguida de lo que queremos retornar.
*/