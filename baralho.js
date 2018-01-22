// Declarações
var Naipe;
(function (Naipe) {
    Naipe["Paus"] = "Paus";
    Naipe["Ouros"] = "Ouros";
    Naipe["Copas"] = "Copas";
    Naipe["Espadas"] = "Espadas";
})(Naipe || (Naipe = {}));
;
var Valor;
(function (Valor) {
    Valor["A"] = "A";
    Valor["Dois"] = "Dois";
    Valor["Tres"] = "Tr\u00EAs";
    Valor["Quatro"] = "Quatro";
})(Valor || (Valor = {})); //...
function imprimirCarta(umaCarta) {
    console.log(umaCarta.valor + umaCarta.naipe);
}
// Criando variáveis
var minhaCartaPreferida = {
    naipe: Naipe.Espadas,
    valor: Valor.Dois
};
// Executando
imprimirCarta(minhaCartaPreferida);
