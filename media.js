var aluno = {
    nome: 'Amanda',
    nota1: 4,
    nota2: 7
};
var aluno2 = {
    nome: 'Joazinho',
    nota1: 4
};
function calcularMedia(umAluno) {
    return (umAluno.nota1 + umAluno.nota2) / 2;
}
var media = calcularMedia(aluno);
console.log(media);
// calcularMedia(aluno2);
