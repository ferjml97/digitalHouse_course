
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
    
//  3.2 CONDICIONALES ( IF / ELSE IF / ELSE)

/*
 *  Nos permiten evaluar condiciones y realizar diferentes acciones según 
 *  el resultado de esas evaluaciones.
*/

    //  3.2.1   CONDICIONAL SIMPLE

    if (condicion){
        //  CÓDIGO A EJECUTAR SI LA CONDICIÓN ES VERDADERA
    }

    //  3.2.2   CONDICIONAL CON BLOQUE ELSE

    if (condicion){
        //  CÓDIGO A EJECUTAR SI LA CONDICIÓN ES VERDADERA
    } else{
        //  CÓDIGO A EJECUTAR SI LA CONDICIÓN ES FALSA
    }

    //  3.2.3   CONDICIONAL CON BLOQUES ELSE IF

    if (condicion){
        //  CÓDIGO A EJECUTAR SI LA CONDICIÓN ES VERDADERA
    } else if (otraCondicion){
        //  CÓDIGO A EJECUTAR SI LA CONDICIÓN ES VERDADERA
    } else {
        //  CÓDIGO A EJECUTAR SI LA CONDICIÓN ES FALSA
    }

    //  EJEMPLO

    let edad = 19;  // (1)
    let acceso = '';    // (2)

    if (acceso < 16){   // (3)
        acceso = 'prohibido';
    } else if (edad >= 16 && edad <= 18){   // (4)
        acceso = 'permitido solo acompañado de un mayor';
    } else {    // (5)
        acceso = 'permitido';
    }

    /*
     *  1.  Declaramos la variable edad y le asignamos un valor (19).
     *  2.  Declaramos la variable acceso y le asignamos un string vacío con intención de asignarle
     *      un nuevo valor de acuerdo el resultado de las condicionales declaradas.
     *  3.  Primera condicional (if), en caso de ser verdadera, le asignamos el string 'prohibido' a la palabra acceso.
     *      El resultado de la condición es false asi que JS pasa a evaluar la siguiente condición.
     *  4.  Segunda condicional (else if), esta es una condición compuesta, donde la edad sea mayor o igual a 16 y edad
     *      menor o igual a 18. El resultado de la condición de nuevo devuelve false, así´que JS evalua la siguiente.
     *  5.  Tercera y ultima condicional (else), como ninguna d elas anteriores condiciones es verdadera, se ejecuta el código
     *      dentro de esta condicional. Asignandole el valor 'permitido' a la variable acceso.
    */
     
//  3.3 QUÉ TAL SÍ?

    /*
        La estructura de la condicional IF se divide en 3 partes:
            1. La palabra reservada if.
            2. La condición que queremos evaluar, la cual se encierra entre paréntesis ().
            3. El bloque de código que se ejecuta en el caso que la condición evaluada se cumpla 
                (es decir, sea true -verdadera-), el cual se encierra entre llaves {}.
    */

    //Veamos un ejemplo:
    let numero = 43;
    if ( numero > 0 ){
        console.log('El número es positivo');
    }

    /*  EJERCICIO
     *  Declará la variable diaDeSemana y asignale el valor "Domingo". 
     *  Luego implementa un condicional usando el if que compare la igualdad de diaDeSemana 
     *  con el día "Domingo" , y si es verdadero que imprima por pantalla "¡Hoy es día de descanso!".
    */

    let diaDeSemana = 'Domingo';
    if(diaDeSemana == 'Domingo'){
    console.log("¡Hoy es día de descanso!")
    }

//  3.4 QUÉ TAL SI NO?

    /*
     *  El condicional else nos permite ejecutar un bloque de código, en el caso que la condición del if no se cumpla, 
     *  es decir, no sea verdadera. A diferencia del if, la estructura del else solo tiene 2 partes:
     *  1. La palabra reservada else.
     *  2. El bloque de código que se ejecuta en el caso que la condición del if no se cumpla.
     *  Entonces, ahora que sabemos cómo funcionan el if  y  else, 
     *  es importante que sepas que ¡podemos incorporar condicionales a nuestras funciones! 
     * 
    */

     //Veamos un ejemplo:
    function esMayor(unNumero) {
        if ( unNumero > 5){
            return true;
        } else {
            return false;
        }
    }
     
    /*  EJERCICIO
     *  Definir la función sePoneLaOlla(), la cual recibe por parámetro el string del día de la semana. 
     *  Esta función retorna "¡Pongamos la olla, hoy se comen pastas!" si recibe por parámetro el valor "Domingo", 
     *  caso contrario retornará "Mejor lo dejamos para el domingo". 
     *  Declará la variable diaDeSemana y asignale el valor "Domingo". 
    */

    function sePoneLaOlla (string){
        if(string == 'Domingo'){
            return '¡Pongamos la olla, hoy se comen pastas!';
        }
        else {
            return "Mejor lo dejamos para el domingo";
        }
    }
    console.log(sePoneLaOlla('Domingo'));
    console.log(sePoneLaOlla('Lunes'));

    /* EJERCICIO
     *  Definir la función elMayor(), la cual debe recibir por parámetro dos números, 
     *  y como resultado nos devuelva (retorne) el mayor de los dos. 
     *  Por ejemplo, si la función recibiera 4 y 5 retornaría 5 pues es el mayor, y si pasamos 10 y 4, retornará 10. 
    */

    function elMayor(n1,n2){
        if(n1 > n2){
            return n1
        }else{
            return n2
        }
    }
    console.log(elMayor(4,5));
    console.log(elMayor(10,4));
    
    /*  EJERCICIO
     *  Definir la función signo(), la cual dado un número, nos retorne solo uno de los siguientes valores:
     *  1, si el número es positivo
     *  0, si el número es cero
     *  -1, si el número es negativo
    */

    function signo(numero){
        if(numero > 0){
            return 1;
        }else if(numero < 0){
            return -1;
        }else{
            return 0;
        }
    }
    console.log(signo(1));
    console.log(signo(-1));
    console.log(signo(0));

//  3.5 CONDICIONALES SIN NECESIDAD DE USAR IF / ELSE

    /*  
     *  Supongamos que queremos definir la función esMayorDeEdad, 
     *  la cual nos diga si alguien tiene 18 años de edad o más. 
     *  Quizás, nuestro primer acercamiento sería el siguiente:
    */

    function esMayorDeEdad(edad) {
        if ( edad >=  18){
            return true;
        } else {
            return false;
        }
    }
   
    //  Podemos hacer que nuestro código fuese más sencillo haciendo esto:

    function esMayorDeEdad(edad) {
        return edad >=  18;
    }

    /*
     *  ¿qué pasaría si quisiéramos tener más condiciones a ser evaluadas queriendo que se cumplan todas?. 
     *  Lo único que necesitaríamos, es usar el operador &&.
     *  Veamos un ejemplo:
    */

    function estaEntre(numero, base, limite) {
        return numero > base  && numero < limite ;
    }

    /*  Qué pasa si quisiéramos que una función retornara true si se cumple solo alguna de las condiciones?. 
     *  Para ello, podemos usar el operador ||.
     *  Veámoslo:
    */

    function esMayorOEsMenor(numero1, numero2, numero3) {
        return numero2 > numero1 || numero2 < numero3;
    }

    /*
     *  Otro escenario posible, es quizá aquel en donde queramos preguntar si algo es distinto de otra cosa. 
     *  Para ello usaremos el operador !.
     *  Veámoslo:
    */

    function esDiaLaboral(diaDeLaSemana) {
        return diaDeLaSemana != "Sábado"  && diaDeLaSemana != "Domingo";
    }
    
//  3.6 BANCO IR O NO (EJERCICIO)

    /*
     *  Un banco está abierto de Lunes a Viernes entre las 10 y las 15 horas.
     *  Definir la función puedoIrAlBanco() la cual, recibiendo dos parámetros, 
     *  el primero: diaDeLaSemana (string) y el segundo horaActual (number), 
     *  deberá retornar true, solo si es posible ir al banco y que lo encontremos abierto.
     * 
     *  Ejemplo:
     *  puedoIrAlBanco('Lunes', 11);
    */

    function puedoIrAlBanco(diaDeLaSemana, horaActual){
        return  diaDeLaSemana != "Sábado"  && diaDeLaSemana != "Domingo" && horaActual >= 10 && horaActual <=15;
    }   
    console.log(puedoIrAlBanco("Lunes", 10));
    console.log(puedoIrAlBanco("Martes", 18));
    console.log(puedoIrAlBanco("Sábado", 11));
    console.log(puedoIrAlBanco("Domingo", 13));

    /*
     *  El operador &&, sólo retorna verdadero cuando las dos expresiones que evalúa son verdaderas.
     *  Con el podemos unir varias expresiones a evaluar mediante este operador y si alguna de ellas no es verdadera (false) 
     *  el resultado final será falso.
    */

    //  Vemos un ejemplo:

    function esCantanteExitoso(cdsEditados, recitalesRealizados, tieneTemasEnSpotify) {
        return  cdsEditados >= 10 && recitalesRealizados >= 20 && tieneTemasEnSpotify  == true;
    }
    
    //  El código que acabamos de ver está bien, pero es mejorable:
    
    function esCantanteExitoso(cdsEditados, recitalesRealizados, tieneTemasEnSpotify) {
        return  cdsEditados >= 10 && recitalesRealizados >= 20 && tieneTemasEnSpotify;
    }

    /*  Ésto es porque ese dato tieneTemasEnSpotify ya de por sí es un dato booleano, 
     *  o sea que ya vamos a estar diciendo si es true/false.
    */

    /*  EJERCICIO
     *  Definí la función hipster()  que tome 3 parámetros (en éste orden):
     *  - La profesión de una persona(string)
     *  - Su nacionalidad (string)
     *  - La cantidad de kilómetros que camina por día (number)
     *  Y que evalúe con estos datos, si una persona es o no (true/false) un Hipster. 
     *  Tené en cuenta que un Hipster es alguien con nacionalidad Argentina, de profesión Músico 
     *  y a quien le gusta caminar más de 2 kilómetros por día.
    */

    function hipster(profesion, nacionalidad, cdk){
        return profesion == "Músico" && nacionalidad == "Argentina" && cdk > 2;
    }
    console.log(hipster("Maestro", "Venezuela", "3"));
    console.log(hipster("Músico", "Argentina", "3"));

//  3.7 TABLAS DE VERDAD

    /*
     *  En la lógica booleana, se puede definir el comportamiento de una expresión mediante una tabla de la verdad. 
     *  En donde siendo A y B expresiones que evalúan true o false y usando el símbolo ^ (que representa la conjunción de las mismas), 
     *  podemos determinar si su unión nos arroja un Verdadero o Falso.
     *  
     *   ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐ 
     *   |   A       B       A ^ B   |
     *   |   V	     V         V     |
     *   |   V	     F	       F     | 
     *   |   F	     V	       F     |
     *   |   F	     F	       F     |
     *   └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘         
     *  
     *   En JS, al igual que en matemática, cuando usamos operadores lógicos, las expresiones se evalúan en un orden determinado (precedencia).         
    */

    //  Veamos un ejemplo:

    function pagoConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
        return !seCobraInteres  && cuotasTarjeta >=3  || efectivoDisponible < 100;
    }
    console.log(pagoConTarjeta(true, 6,320));
    console.log(pagoConTarjeta(true, 6,120));
    console.log(pagoConTarjeta(false, 6,320));
    console.log(pagoConTarjeta(true, 6,720));
    
//  3.8 MARI CÁBALA

    /*
     *  Mari, una gran amiga de la casa, nos dice que para ella un número es de la suerte si cumple con las siguientes tres condiciones:
     *  - Ese número es positivo.
     *  - Ese número es múltiplo de 2 o de 3.
     *  - Ese número no es el número 15.
    */

    /*  EJERCICIO
     *  Definir la función esNumeroDeLaSuerte() la cual recibiendo un número, le diga a Mari si es un número de la suerte.  
     *  El número debe cumplir con las tres condiciones mencionadas.   
     *  OJO: NO usar el if. Sólo deberás usar la palabra reservada  return  dentro de tu código para generar la expresión.
    */

    function esNumeroDeLaSuerte(multiplo){
        return  multiplo > 0 && multiplo % 2 == 0 || multiplo % 3 == 0 && multiplo !== 15;
    }
    console.log(esNumeroDeLaSuerte(10));
    console.log(esNumeroDeLaSuerte(15));
    console.log(esNumeroDeLaSuerte(30));

    /*  EJERCICIO
     *  Escribir la función puedeJubilarse() que recibe por parámetro la edad, el género y además, 
     *  los años de aportes jubilatorios (en ese orden) que posee una persona.
     *  Tener en cuenta que el mínimo de edad para realizar el trámite para las mujeres (género "F") es de 60 años, 
     *  mientras que para los hombres (género "M") es 65. En ambos casos, se deben contar con al menos 30 años de aportes jubilatorios.
    */
    
    function puedeJubilarse(edad, genero, aniosAporte) {
        return  genero == "F" && edad >= 60 && aniosAporte >= 30 || genero == "M" && edad >= 65 && aniosAporte >= 30 
    }
    
    console.log(puedeJubilarse(63, "F", 32));
    console.log(puedeJubilarse(53, "F", 32));
    console.log(puedeJubilarse(63, "F",  22));
    console.log(puedeJubilarse(43, "M", 32));
    console.log(puedeJubilarse(73, "M", 12));
    console.log(puedeJubilarse(65, "M", 32));

//  3.9 IDA AL PARQUE DE DIVERSIONES!

    /*
     *  En un parque de diversiones instalaron una nueva montaña rusa y nos pidieron ayuda para que le avisemos a las personas, 
     *  si pueden subirse o no, antes de hacer la fila. Los requisitos para que una persona pueda subir a la atracción son:
     *  --> Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por un adulto).
     *  --> No tener ninguna afección cardíaca.
    */
    
    /*  EJERCICIO
     *  Definir la función puedeSubirse() , la cual, recibiendo 3 parámetros:
     *      1.  alturaPersona (number)
     *      2.  vieneConCompania (booleano)
     *      3.  tieneAfeccionCardiaca (booleano)
     *  Retorne true  o  false  según el caso. Tené en cuenta, las condiciones necesarias, mencionadas anteriormente.
    */

    function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
        return tieneAfeccionCardiaca == false && alturaPersona >= 1.5 || tieneAfeccionCardiaca == false && alturaPersona >= 1.2 && vieneConCompania == true;
    }
    
    console.log(puedeSubirse( 1.1, true, false));
    console.log(puedeSubirse( 1.2, true, true));
    console.log(puedeSubirse( 1.5, true, false));

//  3.10 PREMIACIÓN

    /*  EJERCICIO
     *  Desarrollar la función medallaSegunPuesto() , la cual retorne la medalla que le corresponde a los primeros puestos, según la siguiente lógica:
     *  Primer puesto: le corresponde "Oro".
     *  Segundo puesto: le corresponde "Plata".     
     *  Tercer puesto: le corresponde "Bronce". 
     *  Otros puestos: le corresponde "Seguí participando".
    */

    function medallaSegunPuesto(n){
        if(n == 1){
            return "Oro";
        }else if(n == 2){
            return "Plata";
        }else if(n==3){
            return "Bronce";
        }else{
            return "Seguí participando";
        }
    }
    
    console.log(medallaSegunPuesto(1));
    console.log(medallaSegunPuesto(3));
    console.log(medallaSegunPuesto(14));
    console.log(medallaSegunPuesto(4));