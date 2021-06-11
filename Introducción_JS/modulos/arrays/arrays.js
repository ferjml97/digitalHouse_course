
//  MODULO 4:   ARRAYS

    /*
        Los arrays nos permiten generar una COLECCIÓN de DATOS ORDENADOS
    
    */

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

        /*  .pop()
            QUITA el ULTIMO ELEMENTO de un array
            - NO RECIBE parametros
            - DEVUELVE el elemento eliminado
        */

        let series = ['Mad Men', 'Breakin Bad', 'The Mask'];

        let ultSerie = series.pop();

        console.log(series);    //  ['Mad Men', 'Breakin Bad', 'The Mask']
        console.log(ultSerie);  //  ['The Mask']

        
