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