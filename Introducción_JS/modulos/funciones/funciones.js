
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

//  DECLARACIÓN DE FUNCIONES

/*
    Declara la función TRIPLE, la cual triplique el valor pasado por parámetro y nos devuelva su resultado.
*/
    function triple(numero){
        return 3 * numero;
    }

/*
    Escribir una función con nombre  MITAD, que tome un número y devuelva su mitad.
*/

    function mitad (numero){
        return numero / 2;
    }

//  VALORES POR CONSOLA

/*
    CONSOLE.LOG() 
    Es una función propia de JS que nos permite mostrar lo que necesitamos en la terminal o consola de comandos.
    La terminal es un programa presente en todos los sistemas operativos y navegadores, con la cula podemos darle
    ordenes al sistema o navegador.
*/

    console.log('Un dato');

/*
    console.log     --->    Nombre de la función de JS.
    parentesis()    --->    Como función los debe de llevar, entre estos va el valor que queramos usar como parámetro.
    valor           --->    Lo que queremos mostrar en la terminal o consola de comandos. Ejemplo: 'Un dato' -> String   
*/

//  EJECUCIÓN DE FUNCIONES

/*
    Hacer función cuadruple que recibe un número y lo multiplica por 4. 
    Debajo de la declaración ejecutar la función, dandole un valor de reemplazo al parámetro.
    Además queremos que imprimas por consola el resultado de esa ejecución.
*/

    function cuadruple(numero) {
        return numero * 4;
    }
    console.log(cuadruple(5));

// CUENTAS CON FUNCIONES

/*
 *  Escribir la función multiplicar que tome dos parámetros, los multiplique y retorne su valor.
 */

    function multiplicar(numero1, numero2){
        return numero1 * numero2;
    }
    console.log(multiplicar(3,4));

//  FUSION DE FUNCIONES - FUNCIONCEPTION*

/*
 *  Ejemplo, si queremos sumar dos números y después multiplicarlos por 3, podríamos hacerlo de la siguiente forma:
 */

    function sumar(numero1, numero2) {
        return numero1 + numero2;
    }

    function tripleDeLaSuma(numero3, numero4) {
        let resultadoDeSuma = sumar(numero3, numero4);
        return resultadoDeSuma * 3;
    }

/*
*   Crear la función tripleDeLaSuma() que reciba dos parámetros. 
*   Para sumar ambos y devolver el triple del valor del resultado de sumar ambos parámetros . 
*
*   Apoyar de la función triple(), que recibe un parámetro y retorna el valor del mismo multiplicado por tres.
*/

    function triple(parametro1){
        return parametro1 * 3;
    }

    function tripleDeLaSuma(numero1,numero2){
        let suma = numero1 + numero2;
        return triple(suma);
    }
    console.log(tripleDeLaSuma(1,2));

//  FORMULAS DE FIGURAS CON FUNCIONES

/*
*   Hacer una función llamada perimetro() que nos diga el PERIMETRO DE UN CIRCULO 
*   cuando le damos el radio como parámetro.
*   Luego hagamos otra función llamada area() que nos dé el ÁREA DE UN CIRCULO
*   cuando recibe el radio como parámetro.
*/

    function perimetro(radio){
        return 2*(3.14 * radio);
    }
    console.log(perimetro(3));

    function area(radio){
        return 3.14 * (radio*radio);
    }
    console.log(area(3));

//  OPERANDO STRINGS CON FUNCIONES

/*
*   Escribí una función longitudNombreCompleto() que tome un nombre y un apellido como parametro 
*   y devuelva su longitud total, contando un espacio extra para separar a ambos.
*   LENGTH  --->    Javascript nos permite a través de ese método saber que cantidad de caracteres tiene una cadena de texto, 
*   tenemos que hacer en poner .length luego de la cadena de caracteres de la cual necesitemos el dato de su longitud.
*/

    function longitudNombreCompleto(nombre, apellido){
        let cadena = nombre  + " " + apellido;
        return cadena;
    }
    console.log(longitudNombreCompleto("Cosme", "Fulanito").length);


//  CARNET 

/*
 *  Escribí la función escribirCartelito, que tome como parámetros un título, 
 *  un nombre y un apellido y devuelva un único string como resultado. 
 *  //  Si ejecutamos la función con éstos datos...
 *  escribirCartelito("Dra.", "Ana", "Pérez");
 *  //  ...la misma nos  devuelve "Dra. Ana Pérez",
 */

    function escribirCartelito(titulo,nombre,apellido){
        return titulo + " " + nombre + " " + apellido;
    }
    console.log(escribirCartelito("Ing.","Fernando","Maldonado"));
