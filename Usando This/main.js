function Person(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.talk = function() {
        setTimeout(function() {
            console.log(`Hello`);
        }, 1000);
    }
}
const me = new Person("Luis Mario", 18, 79, 1.65);

console.log(me.name)
console.log(me.age)
console.log(me.weight)
console.log(me.height)
console.log(me.talk())
