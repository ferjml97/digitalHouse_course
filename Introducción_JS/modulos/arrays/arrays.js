
//  MODULO 4:   ARRAYS

    /*
        Los arrays nos permiten generar una COLECCIÓN de DATOS ORDENADOS
        Se utilizan corchetes ( [] ) para indicar el inicio y el fin de un array.
        Dentro de estos, podemos almacenar la cantidad de elementos cual sea sin 
        importar el tipo de dato de cada uno.
        Y se usan las comillas ( , ) para separar sus elementos.
    */
    
        let arrayEjem = ['Love Paper', true, 24];

    //  4.2 JUEGOS DE AZAR

    /*
    Podemos representar conjuntos de números o booleanos, de igual forma: 
    escribiéndolos entre corchetes y separados por comas. 
    Podemos tener arrays de números, de strings, de booleanos, etc. ¡Incluso podríamos tener arrays de arrays!
    */

    /*  EJERCICIO
        Mostrar en consola los siguientes arrays:
    */

        let numerosDeLoteria = [2, 11, 17, 32, 36, 39];
        let tiradasDelDado = [1, 6, 6, 2, 2, 4];
        let salioCara = [false, false, true, false];
        let listaDeListasDeNumeros = [[1, 6], [6, 2, 2, 4]];
    
        console.log(numerosDeLoteria);
        console.log(tiradasDelDado);
        console.log(salioCara);
        console.log(listaDeListasDeNumeros);

    //  4.3 ARRAY VACIO

    
        let otroArrayVacio = [];

    //  4.4 METODOS DE ARRAY

        /*  Los arrays son un tipo especial de objetos, y se dispone de un montón de métodos
            para trabajar con ellos.
        */

        /*  .length()
            INDICA EL NUMERO DE ELEMENTOS QUE TIENE UN ARRAY.
        */

        let cursos = ['Programación', 'UX', 'Data'];

            /*  EJERCICIO
                Realizá las siguientes consultas utilizando el console.log para ver los resultados:
            */

            let numerosDeLoteria = [22,40,12];

            console.log([].length);
            console.log(numerosDeLoteria.length);
            console.log([4,3].length);

        /*  .push()
            AGREGA uno o varios ELEMENTOS AL FINAL del array.
            - RECIBE uno o mas elementos como parametrsos
            - RETORNA la nueva longitud del array
        */

        let colores = ['Rojo', 'Naranja', 'Azul'];
        colores.push('Violeta');
        console.log(colores);
            //  ['Rojo', 'Naranja', 'Azul', 'Violeta']
        colores.push('Gris','Oro');
        console.log(colores);
            //  ['Rojo', 'Naranja', 'Azul', 'Violeta', 'Gris', 'Oro']
        
            /*  EJERCICIO
                Tenemos el siguinte array:
                let pertenencias = [ "espada" , "escudo" , "antorcha" ]

                Realizar lo siguiente:
                1) Imprimí por consola que elementos contiene pertenencias
                2) Agregale una "ballesta" 
                3) Volvé a imprimir por consola pertenencias.
            */

            let pertenencias = [ "espada" , "escudo" , "antorcha" ];
            console.log(pertenencias);
            pertenencias.push("ballesta");
            console.log(pertenencias);

        /*  .pop()
            QUITA el ULTIMO ELEMENTO de un array
            - NO RECIBE parametros
            - DEVUELVE el elemento eliminado
        */

        let series = ['Mad Men', 'Breakin Bad', 'The Mask'];

        let ultSerie = series.pop();

        console.log(series);    //  ['Mad Men', 'Breakin Bad', 'The Mask']
        console.log(ultSerie);  //  ['The Mask']


        /*  .indexOf()
            BUSCA EN EL ARRAY EL ELEMENTO que recibe como parámetro.
            - RECIBE un elemento a buscar en el array
            - RETORNA el PRIMER ÍNDICE donde encontró lo que se busca. 
              Si no encuentra nada, retorna un -1.
        */

            let frutas = ['Manzana', 'Pera', 'Frutilla'];
            frutas.indexOf('Frutilla');
                //  Encuentra lo buscado y devuelve el n° del índice del elemento.
            frutas.indexOf('Banana');    
                //  No encontró lo buscado. Devuelve -1.

            /*  EJERCICIO
                ¿Qué sucede si le pasás por parámetro a indexOf() un elemento que no tiene?
            */

            let diasLaborales = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
            console.log(diasLaborales.indexOf("Osvaldo"));

    //  4.5 TRASLADAR
    
        /*  EJERCICIO
            Declará una función trasladar, 
            que tome dos arrays, saque el último elemento del primero y lo agregue al segundo.
        */

            let unArray = [1, 2, 3];
            let otroArray = [4, 5];
            
            function trasladar(unArray, otroArray){
                let elemento = unArray.pop();
                otroArray.push(elemento);
            }
            
    //  4.6 CONTIENE

        /*  EJERCICIO
            Escribí la función contiene que recibe como parámetros un array y un número. 
            Ésta función deberá retornar un booleano (true) 
            que nos diga si el número que tenemos como parámetro se encuentra dentro del array 
            o el otro booleano en el caso contrario (false).

            Ejemplo:
            contiene([1, 6, 7, 6], 7)   // true
            contiene([1, 6, 7, 6], 6)   // true
            contiene([], 7)             // false
            contiene([8, 5], 7)         // false
        */

            function contiene (array,n){
                if ( array.indexOf(n)>=0){
                    return true;
                }
                else{
                    return false;
                } 
            }
            
            console.log(contiene([1, 6, 7, 6], 7)); //  true
            console.log(contiene([1, 6, 7, 6], 6)); //  true
            console.log(contiene([], 7));           //  false
            console.log(contiene([8, 5], 7));       //  false
            console.log(contiene([1, 1, 1], 1) );   //  true

    //  4.7 MÁS PREMIOS

        /*  EJERCICIO
            Teniendo ésto en cuenta, va un desafío: escribí nuevamente la función medallaSegunPuesto()
            (si no la recordás la podés volver a ver en este enlace) 
            pero esta vez usando como máximo un sólo if. 
            Por las dudas te recordamos que la función tiene que devolver la medalla que le corresponde 
            a los primeros puestos de una competencia.
            
            Ejemplo:
            medallaSegunPuesto(1)
            "Oro"
            medallaSegunPuesto(2)
            "Plata"
            medallaSegunPuesto(3)
            "Bronce"
            medallaSegunPuesto(4)
            "Seguí participando"
            medallaSegunPuesto(5)
            "Seguí participando"
        */
        
            let medalla = ["","Oro","Plata","Bronce","Seguí participando"];

            function medallaSegunPuesto(n){
                if(n > 0 & n <= 3){
                    return "" + medalla[n] + "";
            
                }else if(n>3){
                    return "Seguí participando";
                }
                else{
                    return "Seguí participando";
                }
            }

            console.log(medallaSegunPuesto(0));
            console.log(medallaSegunPuesto(1));
            console.log(medallaSegunPuesto(2));
            console.log(medallaSegunPuesto(3));
            console.log(medallaSegunPuesto(4));
            console.log(medallaSegunPuesto(5));

    //  4.8 SUMATORIA

        /*  EJERCICIO
            Ana, contadora de una conocida empresa, guarda las ganancias de cada mes en un array. 
            Por ejemplo, para el último semestre del año pasado registró las siguientes:
        */
        
            //En Julio ganó $80, en Agosto perdió $21, etc
            
            var unSemestre = [80, -21, 1000, 300, 200, 0];

            function sumatoriaGananciasSemestre(unSemestre) {
                return unSemestre[0] + unSemestre[1] +
                    unSemestre[2] + unSemestre[3] +
                    unSemestre[4] + unSemestre[5];
            }

            console.log(sumatoriaGananciasSemestre(unSemestre));
    
    //  4.9 GANANCIA TOTAL

        /*  EJERCICIO
            La función sumatoriaGananciasSemestre anterior tiene varios problemas:
            Es muy repetitiva y tediosa de escribir. ¡Tenemos que hacer muchas sumas a mano!
            No es genérica, sólo sirve para arrays de 6 elementos:
            Si tiene más de seis elementos, sólo suma los primeros
            Si tiene menos, devuelve cosas bizarras (¿te acordás cuando te dijimos que si te ibas de índice cosas malas podían ocurrir ?)
            
            Queremos una función gananciaTotal, que pueda sumar periodos de cualquier tamaño: semetres, cuatrimestres,trimestres, etc.

            Escribir la función gananciaTotal4() que funcione para 4 elementos.
        */

        function gananciaTotal4(unPeriodo) {
            let sumatoria = 0;
            sumatoria = sumatoria + unPeriodo[0];
            sumatoria = sumatoria + unPeriodo[1];
            sumatoria = sumatoria + unPeriodo[2];
            sumatoria = sumatoria + unPeriodo[3];
            return sumatoria;
        }
        
        /*
            Entonces tenemos que repetir la operación de acumular varias veces, una por cada elemento del array. 
            Esto no solo nos esta quedando desprolijo, sino que también es muy repetitivo.
        */

        function gananciaTotal(unPeriodo) {
            let sumatoria = 0;
            for (let i = 0; i < unPeriodo.length; i++) {
                let mes = unPeriodo[i];
                sumatoria = sumatoria + mes;
            }
            return sumatoria;
        }
        
        console.log(gananciaTotal([]));
        console.log(gananciaTotal([100]));
        console.log(gananciaTotal([100, 2]));
        console.log(gananciaTotal([2, 10, -20]));
        console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]));

        //  De esta ultima forma nos ahorramos ser tan repetitivos