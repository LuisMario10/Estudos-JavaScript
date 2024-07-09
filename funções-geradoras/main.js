function* times() {
    yield "Vasco";
    yield "Flamengo";
    yield "Fluminense"
    yield "Botafogo"
}

const getTime = times();

console.log(getTime.next().value);
console.log(getTime.next().value);
console.log(getTime.next().value);
console.log(getTime.next().value);
console.log(getTime.next().value);