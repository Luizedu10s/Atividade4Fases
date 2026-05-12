const arr = [1, 2, 3, 4, 5];
const resultado = arr.filter(n => n % 2 === 1) // [ 1, 3, 5 ]
    .map(n => n * 3) // [ 3, 9, 15 ]
    .reduce((acc, v) => acc + v, 10);
    
console.log(resultado);