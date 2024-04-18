// let str1 = "$120";
// let num1 = str1.slice(1)
// console.log(num1);

// alert(isFinite("120"));
// alert(parseInt("$120"));

// function truncate(str, maxLength) {
//     return (str.length > maxLength) ? str.slice(0, maxLength - 1 ) + "..." : str;
// }
// console.log(truncate("Boт, что мне хотелось бы сказать на эту тему:", 30))
//
// console.log(truncate("BceM привет!", 20))
//
// // function truncate(str, maxLength) {
//      if (maxLength >= str.length) {
//          return str
//      } else {
//          return str.slice(str.at(0), maxLength - 1) + "..."
//      }
// }
// console.log(truncate("Boт, что мне хотелось бы сказать на эту тему:", 30))
//
// console.log(truncate("BceM привет!", 20))

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase()
//     return lowerStr.includes("viagra") || lowerStr.includes("XXX");
// }
//
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));
//
// alert("free xxxxx".includes("xxx"))

// let str = "";
//
// for (let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// console.log(str)
// let stringName = "  sdf    "
// alert(stringName.repeat(4))


// let str = 'Hi';
// str[0] = 'sdfg'; // ошибка
// alert( str[0] ); //не
// alert(str[0])

// let str = 'Hello';
//
// for (const strElement of str) {
//     console.log(strElement)
// }

//alert( str.at(-2) ); // Н alert( str.at(0) ); // Н
// получаем последний символ alert( str[str.length - 1] ); // о alert( str.at(-l) );


// let guestList = "Guests: \n *	 John \n *	 Pete \n  *	 Mary ";
//     console.log(guestList); // список гостей, состоящий из нескольких строк
//
//
//


// function randomInteger(min, max) {
//     return Math.round(Math.random() * (max - min + 1) + min - 0.5);
// }
//
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
// console.log(randomInteger(1, 3))
//


// function random(min, max) {
//     return Math.random() * (max - min) + min
// }
//
// alert(random(1,5))


// let i = 0;
// while (i < 11) {
//     i += 0.2;
//     if (i > 9.8 && i < 10.2)
//         alert( i );
// }



// function readNumber() {
//     let num;
//     do {
//         num = prompt("enter number");
//     } while (!isFinite(num));
//     if (num === null || num === "") return null;
//     return +num
// }
// console.log(readNumber());

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