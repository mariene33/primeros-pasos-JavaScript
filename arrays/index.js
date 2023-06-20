let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);


function imprimirnumeroarray (array){
    for (let i = 0; i < array.length; i++ )
    {console.log (array[i]);}
}

imprimirnumeroarray(numeros)



function añadirNumero (array, numero){
    let nuevoNumero = array.push(15);
    console.log (nuevoNumero);
} 

añadirNumero (numeros, 15)

function añadirArray(array, numero) {
    array.push(numero); 
}
añadirArray(numeros,43)
console.log(numeros)



function eliminarnumerospares(array){ 
    for (let i = 0; i < array.length; i++ ) { 
    if ( array [i] % 2 == 0) { array.splice (i,1);}
     }
 }

 eliminarnumerospares (numeros)
 console.log(numeros)


 function NumeroMayorArray(numeros) {
    return Math.max(...numeros);
}

const mayor = NumeroMayorArray(numeros);
console.log(mayor)

function NumeroMenorArray(numeros) {
    return Math.min(...numeros);
}

const menor = NumeroMenorArray(numeros);
console.log(menor)



function convertirminusculas (texto) {
    return texto.tolowerCase ();
}


function convertirmayusculas (texto) {
    return texto.toUpperCase ();
}


function convertirPrimeraLetra(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].capitalize();
    }
}
