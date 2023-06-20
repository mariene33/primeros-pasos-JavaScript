const coche = {
   Marca: 'Renault',
   Modelo: 'Twingo',
   Color: 'dorado',
   Puertas: 3,
   Motor: {
    potencia: '1234123 cv',
    marca: 'bmw'
   }
}


console.log(coche.Marca)
console.log(coche.Modelo)
console.log(coche.Color)
console.log(coche.Puertas)
console.log(coche.Motor)

function getMarca (coche) {
    return coche.Marca;
}

function getPuertas (coche) {
    return coche.Puertas;
}

function getPotenciaMotor (coche) {
    return coche.PotenciaMotor;
}

const Marca = getMarca (coche)
console.log('Marca: ${Marca}');

const marca = getMarca(carro);
console.log(`Marca: ${marca}`);
alert(`Marca: ${marca}`);
