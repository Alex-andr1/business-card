"use strict"

let type1 = 12000;
let type2 = 17000;
let type3 = 25000;

while (true){  
    let type = prompt ('Какой тип сайта вы хотите? "1" - Визитка, "2" - Лендинг, "3" - Интернет-магазин');
    if (type == 1){
        console.log(type1);
        break;
    }
    if (type == 2){
        console.log(type2);
        break;
    }
    if (type == 3){
        console.log(type3);
        break;
    }
    alert("Ошибка. Неверное значение"); 
}

let design1 = 2000;
let design2 = 5000;
let design3 = 7000;

while (true){  
    let design = prompt ('Какой дизайн вы хотите? "1" - Жёсткий, "2" - Гибкий, "3" - Комбинированный');
    if (design == 1){
        console.log(design1);
        break;
    }
    if (design == 2){
        console.log(design2);
        break;
    }
    if (design == 3){
        console.log(design3);
        break;
    }
    alert("Ошибка. Неверное значение"); 
}

let adapt1 = 3000;
let adapt2 = 5000;
let adapt3 = 1000;

while (true){  
    let adapt = prompt ('Какую адаптивность сайта вы хотите? "1" - Респонсив, "2" - Адаптивная, "3" - Отдельная мобильная');
    if (adapt == 1){
        console.log(adapt1);
        break;
    }
    if (adapt == 2){
        console.log(adapt2);
        break;
    }
    if (adapt == 3){
        console.log(adapt3);
        break;
    }
    alert("Ошибка. Неверное значение"); 
}

let arr = [
    [type1, type2, type3,],
    [design1, design2, design3,],
    [adapt1, adapt2, adapt3,],
]

let result = 0;
arr = arr.flat(Infinity)
for (let i = 0; i < arr.length; i++) {
     result += arr[i];
}
console.log(result);
alert("Общая стоимость вашего сайта: " + result + " рублей");














/*
let arr = [
    "Один", 
    "Два",
    154,
    true,
    function(){
        console.log("Its work");
    }
];

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]


let age = prompt("Сколько тебе лет?");
console.log(age);


/*
let type = prompt("Какой тип сайта вы хотите? 1 - Визитка, 2 - Лендинг, 3 - Интернет-магазин");
console.log(type); 
if (type == "1"){
    alert("Вы выбрали: Визитка");
} else if (type == "2"){
    alert("Вы выбрали: Лендинг");
} else if (type == "3"){
    alert("Вы выбрали: Интернет-магазин");
} else {
    alert("Иди на хуй");
   // return;
}
*/


/*
// массивы и их выведение

let arr = [
    "Один", 
    "Два",
    154,
    true,
    function(){
        console.log("Its work");
    }
];

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

arr.forEach(function(item, index, array){
    console.log("item: "+ item + " index: "+ index + " array: " + array);  
});
*/

// конструкторные функции
/*
let part = "book";
let book = {
    name: "JS",
    age: 3,
    [part]: "Описание",
    author:{
        name: "Alex",
        surname: "Dick",
    },
};

function Book (name, age){
    this.name = name;
    this.age = age;
}

console.log(new Book ("Andrew", 25));
console.log(new Book ("Andy", 35));
*/

/*
// Дробление функций. Выведение сообщений.

function createMessage(text, name){
    return name + ", " + text + "!";
}

function showMessage(message){
    console.log(message);
}

function initMessage(text, name){
    showMessage(createMessage(text, name));
}

initMessage("У вас новое сообщение", "Андрей");
*/

/*
let count = 0;
/*
let time = setTimeout(function(){
    console.log("Hi");
}, 2000);/*

let int = setInterval(function(){
 //   clearTimeout(time);
    console.log("Hi");
    count++;
    if (count === 5){
        clearInterval(int)
    }
}, 1000);
/*
// функциональное выражение

let someFunction;

if (true){
    someFunction = function(){
    console.log("It's work");
    };
}

console.log(someFunction());

// рекурсия с возведением в степень

function getCube(numberOne, numberTwo){ 
    
    if (numberTwo === 1){
        return numberOne;
    }
    else{
        return numberOne * getCube(numberOne, numberTwo - 1);
    }

}

console.log(getCube(2, 10));
*/