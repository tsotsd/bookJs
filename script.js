let гота = { пате: "Рома", sayHi: function() {
        alert("npMBeT, дружище!");
    }
};
гота.sayHi(); // Привет, дружище!


// let user = {
//     name: "John",
//     money: 1000,
// // для хинта равного "string"
// toString() {
//     return `{name: "${this.name}"}`;
// },
// // для хинта равного "number" или "default"
// valueOf() {
//     return this.money;
// }
// };
//
// alert(user); // toString -> {name: "John"}
// alert(+user); // valueOf -> 1000
// alert(user + 500); // valueOf -> 1500

// let id = Symbol("id");
// let user = {
//     name: "Вася",
//     age: 30,
//     [id]: 123
// };
// for (let key in user)
//     alert(key); // name, age (свойства с ключом-символом нет среди перечислена
// // хотя прямой доступ по символу работает
// alert( "Напрямую: " + user[id] );
//


// let user = {
//     name: "Вася"
// };
// let id = Symbol("id");
// user[id] = 1;
// alert( user[id] ); // мы можем получить доступ к данным по ключу-символу

// let id = Symbol("idff");
// alert(id.description); // Symbol(id), теперь работает



// let userAdmin = {
//     admin() {
//         alert("I админ");
//     }
// };
// let userGuest = {};
// userAdmin.admin?.(); // Я админ
// userGuest.admin?.(); // ничего не произойдет (такого метода нет)



// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
// let sym3 = Symbol("fa")
//
// console.log(Symbol.keyFor(sym));
// console.log(Symbol.keyFor(sym2));
//
// console.log(sym3.description);


//
//
//
// let user = {
//     name: "Вася",
//     age: 30,
//     [id]: 1234,
// };
//
// let clone = Object.assign(user);
//
//
// // for (const userKey in user) {
// //     alert(userKey)
// // }
//
// console.log(clone)
//
// let idAgain = Symbol("id");
//
// console.log(id === idAgain)