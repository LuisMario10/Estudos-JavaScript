var array = ["laranja", "pera", "uva", "maçã", "tomate"]

var obj = {
    id: 1,
    name: "Luis Mario",
    age: 18,
    clubSoccer: "vasco da gama"
}

const [ fruit1 ] = array;

const [fruit, , ...rest] = array;

const { id } = obj;

console.log(fruit1);
console.log(id);
console.log(fruit, rest);