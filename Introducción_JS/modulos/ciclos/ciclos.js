
//  Modulo 4: CICLOS

/*
 *  Los CICLOS nos permiten REPETIR INSTRUCCIONES de manera sencilla. 
 *  Haciendolo de determinada CANTIDAD DE VECES o mientras se CUMPLA una CONDICIÓN.
*/

//  4.1 CICLO FOR 

    /*
     *  Consta de 3 partes que definimos dentro de los parentesis. En conjunto, nos permiten determinar de que
     *  manera se van a realizar las REPETICIONES, y definir las INSTRUCCIONES que se lleven a cabo en cada una de ellas.  
    */

    /*

    for( inicio; condición; modificador ){
        //  Código que se ejecutará en cada repetición. 
    }

    */
    
    for( let vuelta = 1; vuelta <= 5; vuelta ++){
        console.log("Dando la vuelta número" + vuelta); 
    }

    /*
     *  inicio      --> Se establece un VALOR INICIAL de nuestro contador.
     *  condición   --> Antes de ejecutar el código a cada vuelta, se pregunta si la condición es verdadera o falsa:
                        Sí es VERDADERA, continúa con las instrucciones.
                        Sí es FALSA, detiene el ciclo.
     *  modificador --> Luego de ejecutar las instrucciones, se modifica el CONTADOR de la manera en que se haya especificado.
                        (en este caso se le suma 1). 
    */
    

