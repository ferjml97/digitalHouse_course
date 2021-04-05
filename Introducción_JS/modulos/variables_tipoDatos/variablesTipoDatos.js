
//  DECLARACIÓN DE VARIABLES

/*
    Una variable es un espacio de memoria que podemos utilizar para almacenar valores.
    Si queremos utilizar una variable lo primero que debemos hacer es declararla
*/

    let edad;

//  ALMACENANDO DATOS

/*
    Para guardar un valor en una variable utilizamos el signo IGUAL ( = )
    y a continuación el valor que queremos almacenar. 
    En programación, el procedimiento de almacenar un valor en una variable se denomina asignación. 
*/

    let edad = 23;

// TIPOS DE DATOS

    let edad = 23;              //NUMBER (entero y decimal)
    let nombre = 'Fernando';    //STRING (comillas simples y dobles)
    let esCierto = true;        //BOOLEAN (verdadero o falso)

//  OPERADORES

/*
    DE ASIGNACIÓN
    Asignan el valor de la cadena en la variable de la izquierda.    
*/

    let edad = 23; //Asigno el número

/*
    ARITMETICOS 
    Nos permiten hacer operaciones matemátivas, devuelven el resultado de la operación.
*/

    10 + 15 //  Suma -> 25
    10 - 15 //  Resta -> -5
    10 * 15 //  Multiplicación -> 150
    15 / 10 // Divisón -> 1.5

/*  
    ARITMETICOS (CONTINUACIÓN)
*/

    15++    //  Incremento, es igual a 15 + 1 ---> 16
    15--    //  Decremento, es igual a 15 - 1 ---> 14

    15 % 5  //  Módulo, el resto de dividir 15 entre 5 ---> 0
    15 % 2  //  Módulo, el resto de dividir 15 entre 2 ---> 1

/*
    DE COMPARACIÓN SIMPLE
    Comparan dos valores, devuelven verdadero o falso.
*/

    10 == 15    //  Igualdad ---> false 
    10 != 15    //  Desigualdad ---> true

/*
    DE COMPARACIÓN ESTRICTA
    Comparan el valor y el tipo de dato también.
*/

    10 === "10" //  Igualdad estricta ---> false
    10 !== 15   //  Desigualdad estricta ---> true

/*
    DE COMPARACIÓN (CONTINUACIÓN)
    Comparan dos valores, devuelven verdadero o falso.
*/

    15 > 15     //  Mayor que ---> false
    15 >= 15    //  Mayor o igual que ---> true
    10 < 15     //  Menor que ---> true
    10 <= 15    //  Menor o igual que ---> true

/*
    DE CONCATENACIÓN
    Sirve para unir cadenas de texto. Devuekve otra cadena del texto.
*/

    let nombre = 'Andres';
    let apellido = 'García';
    let nombreCompleto = nombre + ' ' + apellido;

    let fila = 'M';
    let asiento = 7;
    let ubicación = fila + asiento;     // 'M7' como string

    