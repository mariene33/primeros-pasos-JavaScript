function printName(name) {
    let greeting = `Hola, ${name}`;
    console.log(greeting);
    alert(greeting);
     }

printName('Marina')


function add (x, y) {
    return x + y
}


function checkIsEven(x) {
    return x % 2 == 0;
}

const addition = add (5,10);
console.log(`Resultado de suma de 10 y 5: ${addition}`);
document.write(addition)

const n = 1212;
const nIsEven = checkIsEven(n);
console.log(`${n} es par: ${nIsEven}`);
document.write(n)

const n2 = 1;
const n2IsEven = checkIsEven(n2);
console.log(`${n2} es par: ${n2IsEven}`);
document.write(n2)
