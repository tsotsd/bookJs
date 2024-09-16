
// a = true;
// b = true;
// console.log(!!(a && b))
// console.log((a && b))

// function filterRangeInPlace(arr, a, b) {
//
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//              i--;
//         }
//     }
// }
//
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log( arr ); // [3, 1]

// function filterRange(arr, a, b) {
//    const result = arr.filter(item => a <= item && b >= item)
//     return result;
// }
//
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); //3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)


// function camelize(str) {
//     return str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join("")
//
// }
// // function camelize(str) {
// //     return str.split("-");
// //
// // }
// console.log(camelize("erfg-erg"));
//


// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result); // 15


// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join(" "); // объединить массив в строку через ;
// console.log(str ); // Вася;Петя;Маша
//

// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ');
// for (let name of arr) {
//     alert(`Сообщение получат: ${name}`);
// }
//
// console.log(names, arr)

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// let arr = [ 1, 3, 8, 2, 15 ];
// arr.sort(compareNumeric);
// alert(arr); // 1, 2, 15

// ["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
//     alert (`У ${item} индекс ${index} в ${array}`);
// });

// let arr = [1, 2];
// // создать массив из:	arr	и	[3,4]
// alert( arr.concat(3,	4)	);	// 1,2,3,4
// console.log(arr)


// let arr = ["t", "е", "s", "t"];
// alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
// alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)


// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 2 первых элемента
// let removed = arr.splice(0, 2);
// alert( arr ); // "Я", "изучаю" <-- массив из удалённых элементов

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
//
//     for (let item of arr) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0 ) partialSum = 0;
//     }
//     return maxSum;
// }
// console.log(getMaxSubSum(arr = [-1, 2, 3, -9]));


// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let sumFixedStart = 0;
//         for (let j = i; j < arr.length; j++) {
//             sumFixedStart +=arr[j];
//             maxSum = Math.max(maxSum, sumFixedStart)
//         }
//     }
//     return maxSum;
//
// }
//
// console.log(getMaxSubSum(arr = [-1, 2, 3, -9]));


// function sumInput() {
//     let arr = [];
//
//    while (true) {
//         let num = prompt("enter number");
//         if (num ==="" || !isFinite(num)) break;
//         if (num === null) alert("Cancel")
//         arr.push(+num)
//     }
//     console.log(arr)
//     let sum = 0;
//
//     for (const arrElement of arr) {
//      sum += arrElement;
//     }
//     return sum;
// }
//
//
// console.log(sumInput())


// let arr = ["a", "b"];
// arr.push(function() {
//     alert( this );
// });
// arr[2](); //function()


// let styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// console.log(styles.length - 1);
// styles[Math.floor(styles.length / 2)] = "Классика"
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Рэп", "Рэгги");
// console.log(styles);


// let fruits = ["Яблоки", "Груша", "Апельсин"];
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// // что в fruits?
// alert( fruits.length ); // ?


// let arr = [1, 2, 3];
// alert( arr ); // 1,2,3
//
// alert( String(arr) === '1,2,3' ); // true
//
// alert( [] + 1 ); // "1"
// alert( [1] + 1 ); // "11"
// console.log( [1,2] +1 ); // "1,21"

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// alert( matrix[2][1] ); //5, центральный элемент


// let fruits = ["Яблоко", "Апельсин", "Слива"];
// // проходит по значениям
//
// for (const fruitsKey in fruits) {
//     alert(fruits[fruitsKey])
// }

// for (let i = 0; i < fruits.length; i++) {
//     alert(fruits[i]);
// }

// for (let fruit of fruits) {
//     alert( fruit );
// }



// let fruits = []; // создаём массив
// fruits[9] = 5; // создаём свойство с индексом, намного превышающим длину массива
// fruits.аgе = 25; // создаём свойство с произвольным именем
//
// console.log(fruits)


// let fruits = ["Банан"]
// let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
// arr.push("rpyuia"); // массив меняется по ссылке
//
// fruits.unshift("sdlkfj")
// alert( arr ); // Банан, Груша - теперь два элемента


// let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];
// arr.pop();
// alert(arr)

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// alert( fruits.length ); // Яблоко, Апельсин, Слива