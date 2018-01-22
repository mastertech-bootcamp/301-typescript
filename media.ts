interface AlunoValido {
    nota1:number,
    nota2:number,
    nome:string
} 

let aluno = {
    nome: 'Amanda',
    nota1: 4,
    nota2: 7
}

let aluno2 = {
    nome: 'Joazinho',
    nota1: 4
}

function calcularMedia(umAluno:AlunoValido){
    return (umAluno.nota1 + umAluno.nota2) / 2;
}

let media = calcularMedia(aluno);
console.log(media);

// calcularMedia(aluno2);

