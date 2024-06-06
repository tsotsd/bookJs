function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
};

let vasya	=	{	name:	"Вася",	age:	25	};
let petya	=	{	name:	"Петя",	age:	30	};
let masha	=	{	name:	"Маша",	age:	28	};

let arr =	[	vasya, petya, masha	];

sortByAge(arr);

console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя
------------------------------------

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    };

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0,
}

for (let i = 0;  i < 10; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++
};

for (let key in count) {
    console.log(`${key}: ${count[key]}`)
}
-----------------------------------------------------
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    };

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0,
}

for (let i = 0;  i < 10; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++
};

for (let key in count) {
    console.log(`${key}: ${count[key]}`)
}
-------------------------------------------------
    let range = {
    from: 1,
    to: 3,
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {
//	...она возвращает	объект итератора:
//	2.	Далее, for..of	работает только с	этим	итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,
// 3. next() вызывается на каждой итерации цикла for..of
        next() {
//4. он должен вернуть значение в виде объекта {done:.., value :...}
            if (this.current <= this.last) {
                return { done:	false, value: this.current++};
            } else {
                return { done: true };
            }
        }
    };
};
// теперь работает!
for (let num of range) {
    console.log(num); // 1, затем 2, 3, 4, 5
}



