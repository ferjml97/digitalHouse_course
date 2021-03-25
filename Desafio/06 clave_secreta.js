
/*  06 CLAVE SECRETA
*   Tomar como parámetro un conjunto de caracteres y te pueda devolver el mensaje de manera ordenada.
*   Ejecutando la función con el siguiente parámetro:
*   laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  
*   El resultado que nos devuelve la función es el siguiente: 
*   "El día es lunes" ->  (comillas haciendo referencia que es un string)
*/

let palabra = ( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  
function laClaveSecreta(palabra){
    let parametro = palabra.length -1 ;
    let clave = "";
    let lim ;
    
    for(i= parametro; i >= 0; i --){
        lim != palabra[i];
        if ( lim!= "*" ){
            clave = clave + lim;  
           // console.log(gg);
        }
    }
    return clave;
}

 console.log(laClaveSecreta(palabra));