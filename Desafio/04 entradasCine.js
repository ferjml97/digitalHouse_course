
/*  
*   ENTRADAS PARA EL CINE
*   La función asientosDisponibles(), que tome como parámetro un conjunto de asientos disponibles y el asiento que quiere ocupar la persona. 
*   Nuestra función deberá verificar si el asiento solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes:
*   
*   Ejemplo si se encuentra el asiento disponible asientosDisponibles([15, 28, 44, 45, 70], 15);  
*   // El resultado debería ser: "Felicitaciones, el asiento número 15 está disponible"
*   
*   Ejemplo si no se encuentra el asiento disponible asientosDisponibles([15, 28, 44, 45, 70], 50);  
*   // El resultado debería ser: "Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles"
*
*/

let asientos = [3, 15, 18, 25];

function asientosDisponibles(asientos, na){
    if(asientos.indexOf(na)>=0){
        return "Felicitaciones, el asiento número " + na+ " está disponible"
    }else{
        return  "Lo sentimos, el asiento número " + na +  " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles";
    }
}

console.log(asientosDisponibles(asientos, 15));