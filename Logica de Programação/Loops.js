let soma = 0;

for(var i = 0; i < 10; i++) {
    soma += i
}

console.log(soma);

var i = 0;
let soma2 = 0;
while(i < 10) {
    soma2 += i
    i++;
}

console.log(soma2);

let soma3 = 0;
var j = 0

do {
    soma3 += j
    j++;
} while(j < 10);

console.log(soma3)