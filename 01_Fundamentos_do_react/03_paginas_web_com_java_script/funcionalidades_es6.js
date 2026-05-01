// Funcionalidades ES6
// filter - find - findIndex - reduce - some - every

const alunos = [
    {
        nome: 'Pablo',
        idade : 25,
    },
    {
        nome: 'José',
        idade : 19,
    },
    {
    nome : 'João',
    idade : 35
},
    {
    nome : 'Roberto',
    idade : 16,
},
];


const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18)
console.log(alunosFiltrados);


const alunoRoberto = alunos.find((aluno) => aluno.nome === 'Roberto')
console.log(alunoRoberto);


const alunoRobertoIndex = alunos.findIndex((aluno) => aluno.nome === 'Roberto')
console.log(alunoRobertoIndex);


const idades = alunos.reduce((acc, aluno)=> {
    return acc + aluno.idade;
},0);
console.log(idades);


// Retorna true ou false
const menorIdade = alunos.some(alunos => alunos.idade < 10);
console.log(menorIdade) // false


// Retorna true ou false - leva todos em consideração
const TodosMaiorIdade = alunos.every(alunos => alunos.idade <= 18);
console.log(TodosMaiorIdade) // false