function multiplyNumeric(obj) {
    for (const objKey in obj) {
        if (typeof obj[objKey] == "number") {
            obj[objKey] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)
//
// let user = {
//     name: "John",
//     age: 30
// };
// let clone = {}; // новый пустой объект
// // давайте скопируем все свойства user в него
// for (let key in user) {
//     clone[key] = user[key];
// }
// // теперь clone это полностью независимый объект с тем же содержимым
// clone.name = "Pete"; // изменим в нём данные
// console.log(clone)
// console.log(user) // все ещё John в первоначальном объекте
