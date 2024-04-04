function Calculator() {
    this.read = function () {
        this.a = +prompt("enter 1 value");
        this.b = +prompt("enter 2 value");
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();

calculator.read()

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

console.log(calculator);
console.log(Calculator);
// ---------------------------
// function User(name) {
//     this.name = name;
//     this.age = 30;
//     this.isAdmin = true;
// }
//
// let user = new User("Vasya");
// let user2 = new User("Bato")
//
// console.log(user2)
//
// ---------------------------
//     function Accumulator(startingValue) {
//         this.value = startingValue;
//
//         this.read = function () {
//             return this.value += +prompt('new value', 0);
//         };
//     }
//
// let accumulator = new Accumulator(1); // начальное значение
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений