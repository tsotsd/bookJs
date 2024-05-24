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


