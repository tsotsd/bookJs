let user = {
    name: "John"
};
let admin = {
    name: "Admin"
};
function sayHi() {
    alert( this.name );
}
// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;


// эти вызовы имеют разное значение this // "this" внутри функции - это объект "перед точкой"
user.f(); // John (this == user)
admin.f(); // Admin (this == admin)

admin["f"](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа

// "use strict"
// function sayHi() {
//     alert(this)
// }
//
// sayHi()

// -------------------------
//     function makeUser() {
//         return {
//             name: "John",
//             ref: this,
//         };
//     };
// let user = makeUser();
// console.log(user)
//
// alert( user.ref.name ); // Каким будет результат?
// -----------------------

// "use strict"
// let calculator = {
//     read() {
//         this.answer1 = +prompt("enter 1 meaning");
//         this.answer2 = +prompt("enter 2 meaning");
//     },
//     sum() {
//         return this.answer1 + this.answer2;
//     },
//     mul() {
//         return this.answer1 * this.answer2;
//
//     },
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

-----------------------------
//
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() {
//         // показывает текущую ступеньку
//         alert( this.step );
//         return this;
//     }
// };
//
// console.log(ladder.showStep())

