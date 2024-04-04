"use strict"
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
       return this.value += +prompt('new value', 0);
    };
}

let accumulator = new Accumulator(1); // начальное значение
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений