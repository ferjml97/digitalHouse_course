
/*  
*   GANAMOS LA LOTERIA?
*   
*   La función esPremioMayor la cual recibiendo dos arrays, el primero con los números sorteados y el segundo con los números que jugaste. 
*   La función debe devolver el texto "Ganaste" si y solo si los 6 números jugados son iguales a los números sorteados, 
*   no importa el orden en el que hayan salido, de lo contrario devolverá la frase "Seguí participando". 
*   
*   ejemplo:
*   // Si tuviese los siguientes dos arrays ...
*   let numerosSorteados = [ 12 , 4 , 40 , 33 , 13 , 17 ];
*   let numerosJugados = [ 4 , 12 ,13 , 17 , 33 , 40 ];
*   // ... y ejecutara mi función ...
*   esPremioMayor(numerosSorteados, numerosJugados);
*   // ... el resultado sería el siguiente:
*   "Ganaste"   
*
*/

let numerosSorteados =[ 12 , 4 , 40 , 33 , 13 , 17 ];
let numerosJugados = [ 4 , 12 ,13 , 17 , 33 , 40 ];

function esPremioMayor(numerosSorteados,numerosJugados){
    let x =0;
    let y = 6;

  if(y>=x){
        for(i =0; i < numerosSorteados.length; i++){
           //console.log("Posición: "+numerosSorteados.indexOf(numerosJugados[x]));
           if(numerosSorteados.indexOf(numerosJugados[x]) < 0){
                 return  "Seguí participando";
            }
            x ++;
        }
        //console.log("valor x: "+x);
        return "Ganaste"
  }else{
    return  "Seguí participando";
  }
}

console.log( esPremioMayor(numerosSorteados,numerosJugados));
