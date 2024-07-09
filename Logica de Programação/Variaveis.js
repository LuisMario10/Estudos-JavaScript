var nome = "Nome" // var é visto em qualquer escopo
let idade = 18 // Nao pode ser visto fora do escopo que foi criado
const PI = 3.14 // nao pode ser visto fora do escopo que foi criado e é uma constante
var raio = 10;
var circunferencia = 2*PI*raio; 
console.log(nome)
console.log(`No proximo aniversario: ${idade + 1}`);
console.log(`Circunferencia: ${circunferencia}`);