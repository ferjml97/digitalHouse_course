
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
    
    /*  EJERCICIO
     *  Realizar una función llamada imprimirAzul4()
     *  que muestre por consola 4 veces la palabra Azul.
    */

    function imprimirAzul4(){
        for (let i=0; i <4; i++){
            console.log("Azul");
        }
    }
    console.log(imprimirAzul4());

    /*  EJERCICIO
     *  Definí una función llamada imprimir5veces5() que muestre por consola 5 veces el número 5. 
     *  Una vez más, no estamos pidiendo que ejecutes la función. 
    */ 

    function imprimir5veces5(){
        for(let i=0; i <5; i++){
            console.log(5);
        }
    }
    console.log(imprimir5veces5());

    /*  EJERCICIO
     *  Escribir una función imprimirAzul(), que toma como parámetro un valor numérico X e imprima "Azul" X cantidad de veces.
    */ 

    function imprimirAzul(x){
        for( let i = 0 ; i < x ; i++ ){ 
            console.log("Azul");
            // Acá adentro escribo las instrucciones que 
        }
    }
    imprimirAzul(3);

//  4.2 SÓLO 3 EMPANADAS

    /*
    Si quisiéramos contar cuantas calorias tienen 3 empanadas y cada empanada tiene 300 calorias, 
    podríamos hacer dos cosas, una sería multiplicar, y otra sería sumar 3 veces 300 calorias.
    para hacer esto en código primero necesitamos hacer un for que se ejecute 3 veces:
    */

    for( let i = 0 ; i < 3 ; i++ ){ 
        // Hacere la sumatoria
    }

    /*  Para hacer la suma, uno podría llega a sacar la siguiente conclusión:   */

    for( let i = 0 ; i < 3 ; i++ ){ 
        let totalCalorias = totalCalorias + 300;
    }

    /*
    Donde por cada iteración estamos diciendo que el "totalCalorias" es igual al valor que había en "totalCalorias" más 300, de esta manera podríamos obtener el total de los valores.
    Este código si bien parece que funcionaría si lo ejecutamos, no nos va a dar el valor que esperamos, por qué?
    Esto se debe a que la variable "totalCalorias" está declarada dentro del for y esto trae dos consecuencias:
    La variable no existe / no puede ser llamada por fuera del for
    */

    for( let i = 0 ; i < 3 ; i++ ){ 
        let totalCalorias = totalCalorias + 300;  // La variable totalCalorias está declarada dentro del for y sólo puede ser usada ahí dentro
    }
    console.log(totalCalorias); // La variable totalCalorias acá ya no existe y no puede ser consultada

    /*  EJERCICIO
     *  Escribí una función sumar5MonedasDe25Centavos(), que sume el valor de 5 monedas de 0.25 centavos y retorne el resultado.
    */ 

    let c=0;
    function sumar5MonedasDe25Centavos(){
        for( let i = 0 ; i < 5 ; i++ ){ 
            c = c + 0.25;
        }
        return c;
    }

//  4.3 MUCHAS EMPANADAS

    /*  Con las ejercitaciones previas vimos cómo usar el for para ejecutar una acción una cantidad de veces fija 
        y variable y cómo hacer algún procesamiento dentro del mismo.
        Lo siguiente será lograr hacer una función que calcule la sumatoria de cualquier cantidad.
        Para lograr esto, tenemos que sacar el numero 3 y hacer que este sea variable, por ejemplo "x" o "cantidadDeEmpanadas".
    */   
        let cantidadEmpanadas = 3;
        let totalCalorias = 0;
        
        for( let i = 0 ; i < cantidadEmpanadas ; i++ ){ 
                totalCalorias = totalCalorias + 300;
        }
        console.log(totalCalorias); 

    /*  EJERCICIO
     *  Escribir una función sumarMonedasDe25(cantidadDeMonedas), que tome como parámetro un valor numérico 
     *  y retorne la sumatoria de las monedas de 25 centavos. 
    */ 

        function sumarMonedasDe25(cantidadDeMonedas){
            let total = 0;
            //cantidadDeMonedas =4;
            for( let i = 0 ; i < cantidadDeMonedas; i++ ){ 
                total = total + 0.25;
            }
            return total;
        }
    
    /*  EJERCICIO
        Definir ahora la función sumaDeLosParesDel0Al(x) que tome como parámetro un número X 
        y que devuelva el total de la suma de todos los números que son pares del 0 al X (incluyendo a X). 
        Suponiendo que X es par ésta función hará la siguiente operación: 0 + 2 + 4 + 6 + 8 + 10 + ... x
    */

        function sumaDeLosParesDel0Al(x){
            // x = 6;
             let y =0;
             for(let i =0; i <=x; i++){      
                if(i%2==0){
                    y = y +i;
                }
            }
            return y;
        }
        sumaDeLosParesDel0Al(6);
    
    //  4.3.1   SUMATORIA

        /*  EJERCICIO
            Escribir una función sumatoriaHasta(), que tome como parámetro X (un valor numérico) y retorne (no imprima) 
            la sumatoria de los números desde el 0 hasta el número X.
        */
        
            function sumatoriaHasta(x){
                // x = 6;
                let y =0;
                for(let i =0; i <x; i++){
                    y = y +i;
                }
                return y;
            }
            sumatoriaHasta(4);
        
//  4.4 USAIN BOLT

    /*
        Para las próximas olimpiadas, Usain Bolt (gran velocista), para calcular su dieta necesita un simulador, 
        que dado un entrenamiento le diga cuantas calorías necesita consumir, para poder realizar un ejercicio de trote.
        Para esto tenemos que crear la funcion caloriasDeTrote() que recibe por parámetro las vueltas que tiene que recorrer.

        Las calorías se calculan de la siguiente manera: 5 calorías (que consume cada vuelta) * el número de vuelta que se da,
         ya que cada vez las vueltas consumen más y más calorías.
    */
    
    /*  EJERCICIO
        Escribir una función caloriasDeTrote(), que tome como parámetro X, un valor numérico que representa la cantidad 
        de vueltas a correr y retorne (no imprime) la cantidad de calorías que consumiría.
    */
    
        function caloriasDeTrote(x){
            let y =0;
            for(let i =0; i <=x; i++){
                y = y + (5*i);
            }
            return y;
        }
        caloriasDeTrote(2);

    //