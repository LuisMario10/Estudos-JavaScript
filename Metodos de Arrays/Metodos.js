var listNames = ["Akita", "Carol", "Gustavo", "Bruno", "Fernanda", "Deyvin", "Lucas", "Mario Souto", "Mayk"];
// mapea todos os elementos do array fazendo uma ação
listNames.map(e => console.log(`${e} é dev`));

// Filtra os elementos de um array de acordo com uma condicional proposta
var teachers = listNames.filter(e => e === "Gustavo" || e === "Mayk");

var searchAkita = listNames.find(e => e === "Akita");

var searchGustavo = listNames.findIndex(e => e === "Gustavo");

console.log(`All teachers: ${teachers}`);
console.log(`list have Akita?: ${searchAkita !== null}`);
console.log(`Gustavo index: ${searchGustavo}`);