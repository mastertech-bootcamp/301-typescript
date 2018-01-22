// Declarações
enum Naipe {
    Paus = 'Paus', 
    Ouros = 'Ouros',
    Copas = 'Copas', 
    Espadas = 'Espadas'
};

enum Valor {
    A = 'A', 
    Dois = 'Dois', 
    Tres = 'Três', 
    Quatro = 'Quatro'
} //...

interface CartaValida {
    naipe: Naipe,
    valor: Valor
}

function imprimirCarta(umaCarta: CartaValida){
    console.log(umaCarta.valor + umaCarta.naipe)
}

// Criando variáveis
let minhaCartaPreferida:CartaValida = {
    naipe: Naipe.Espadas,
    valor: Valor.Dois
}

// Executando
imprimirCarta(minhaCartaPreferida);
