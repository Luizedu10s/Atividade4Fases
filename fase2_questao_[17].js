const meuarray = [10, 15, 22, 34, 45, 60];
const tratados = [] // numeros que atendem ao resto da divisão por 3 ser igual a zero
const original_metade = []; // objetos com os valores do numero e a sua metade

// loop para retirar apenas os que atendem a condição (num % 3 === 0)
for(let num of meuarray){
    if(num % 3 === 0){
        tratados.push(num)
    };
};

// Adicionando os valores em forma de objeto, onde contém o valor inteiro e sua metade
for(let num of tratados){
    original_metade.push({original: num, metade_num: num / 2});
};

// Acumulador que soma apenas a metade do valor.
function totalMetade(array){
    let acc = 0;
    for(let item of array){
        acc += item.metade_num;
    };
    return acc;
};

// Saída de dados
console.log(tratados); // output: [ 15, 45, 60 ]

console.log(original_metade);
/* output:
[
  { original: 15, metade_num: 7.5 },
  { original: 45, metade_num: 22.5 },
  { original: 60, metade_num: 30 }
]
*/

console.log(totalMetade(original_metade)); // output: 60
