
//  Modulo 3: CONDICIONAES

/*
 *  Las condicionales se apoyan en gran manera de los operadores lógicos.
 */

//  3.1 OPERADORES LÓGICOS

/*
 *  Nos permiten manipular el valor de las variables, realizar operaciones
 *  y comparar sus valores.
 *  Existen 3 operadores y (and), o (or), negación (not).
 */

//  3.1.1 AND (&&) - Todos los valores deben evaluar como true.

        (10 > 15) && (10 != 20) 
    //    false  ----   true   --->   false

        (12 % 4 == 0) && (12 != 24) 
    //        true   ----   true   --->   true

//  3.1.2 OR (||) - Al menos un valor debe evaluar como true

        (10 > 15) || (10 != 20) 
    //    false  ----   true   --->   true

        (12 % 4 == 0) || (12 != 24) 
    //        true   ----   true   --->   true

//  3.1.3   NOT (!) - Niega la condición. si era true será false y viceversa.

    !false  // true
    !(10 > 15)  // true
    