var Pessoa = {
    nome: "Luis",
    idade: 18,
    sexo: 'M',
    audioVisuaisFavoritos: [
        "One Piece",
        "Velozes e Furiosos",
        "Homem-Aranha 3"
    ],
    endereço: {
        rua: "rua X",
        cep: "12345-67",
    },

    falarOi: function() {
        console.log("Oi");
    }
}

console.log(`Serie Favorita: ${Pessoa.audioVisuaisFavoritos[0]}`);
console.log(Pessoa.nome);
Pessoa.falarOi();