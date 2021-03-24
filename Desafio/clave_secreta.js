let palabra = ( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  
function laClaveSecreta(palabra){
    let gg = "";
    let eso ;
    let g = palabra.length -1 ;
    
    for(i= g ; i >= 0 ; i --){
        eso = palabra[i];
        if ( eso!= "*" ){
            gg = gg + eso;  
           // console.log(gg);
        }
    }
    return gg;
    
}
 console.log("aqui " + laClaveSecreta(palabra));