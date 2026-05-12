const pessoas = [ 
    { nome: 'Ana', cidade: 'SP' }, 
    { nome: 'Lucas', cidade: 'RJ' }, 
    { nome: 'Bruna', cidade: 'SP' }, 
    { nome: 'Caio', cidade: 'MG' } 
];

const pessoas_cidade = pessoas.reduce((acc, pessoa) => {

    const cidade = pessoa.cidade;

    if(!acc[cidade]){
        acc[cidade]  = []
    };

    acc[cidade].push(pessoa);

    return acc;

}, {})

console.log(pessoas_cidade)