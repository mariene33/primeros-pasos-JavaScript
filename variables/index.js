let name = 'Marina';
let surname = 'Lopez';
let age = 33;
let woman = true;

console.log(name)
console.log(surname)
console.log(age)
console.log(woman)

if (typeof(age) === 'number'){
    let suma = age + 10
    console.log(suma) 
 }
    
if (typeof(age) === 'number'){ 
    let resta = age - 10
    console.log(resta)
 }
 if (typeof(age) === 'number'){ 
    let multiplication = age * 10
    console.log(multiplication)
   
 }
 if (typeof(age) === 'number'){ 
    let division = age / 10 
    console.log(division)
    
 }

 let fullname ='hola me llamo' + ' ' + name + ' ' + surname 
 console.log(fullname)

 let main_tag = document.getElementById('datos');
 let personal_texto =document.createElement('p');
 datos_texto.innerHTML = `${name}` `${surname}`;
 main_tag.appendChild(datos_texto);


 
 
