var listNames = ["Akita", "Carol", "Gustavo", "Bruno", "Fernanda", "Deyvin", "Lucas", "Mario Souto", "Mayk"];
// mapea todos os elementos do array fazendo uma ação
listNames.map(e => console.log(`${e} é dev`));

// Filtra os elementos de um array de acordo com uma condicional proposta
var teachers = listNames.filter(e => e === "Gustavo" || e === "Mayk");

//Procura o objeto que atenda uma condicional
var searchAkita = listNames.find(e => e === "Akita");

//Procura o objeto por ID no Array
var searchGustavo = listNames.findIndex(e => e === "Gustavo");

//Ve se no array possue o elemento procurado
var fernandaInList = listNames.some(e => e === "Fernanda");

//Ve se todos os elementos atendem a condição passada
var allIsDeyvin = listNames.every(e => e === "Deyvin");

// Transforma o array em um novo tipo de dados reduzindo ate o tipo
var numbers = [2, 3, 5, 7, 11, 13];

var sum = numbers.reduce((acc, info) => acc + info, 0);


console.log(`All teachers: ${teachers}`);
console.log(`list have Akita?: ${searchAkita !== null}`);
console.log(`Gustavo index: ${searchGustavo}`);
console.log(`Fernanda in list = ${fernandaInList}`);
console.log(`Todos elementos são o Deyvin => ${allIsDeyvin}`)
console.log(sum)
