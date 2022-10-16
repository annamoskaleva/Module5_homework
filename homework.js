//Задание 1 
let age = prompt("Введите ваш возраст");
console.log(age);
35
Number(+age);
35
console.log(typeof age);
string

//Задание 2 
let x = 1;
switch (typeof x) {
    case Number:
        console.log("Результат равен числу");
        break;
    case String:
        console.log("Результат равен строке");
        break;
    case Boolean:
        console.log("Результат равен логическому типу")
        break;
    default:
        console.log("Тип x не определен");
}

//Задание 3 
let greeting = 'Hello'
greeting = [...greeting].reverse().join('');
console.log(greeting)

//Задание 4
let number1 = 4;
let number2 = 3;
console.log(Math.pow(number1, number2))

//Задание 5
let arr = [8,7,10,15,19];
console.log(arr.length)

console.log(arr.[0])
console.log(arr[1])
console.log(arr[4])

//Задание 6 
const arr = [1,1,2,3]

let isEqual = true;
const refecernce = arr[0];

for (let item of arr) {
    if (item !== refecernce) {
        isEqual = false;
    }
}
console.log(isEqual)

//Задание 7
const inputValue = prompt("Введите число")

const value = +inputValue;

if(typeof value == "number" && !isNaN(value)) {
    if(value == 0){
        console.log("ноль")
    } else if (value % 2 == 0){
        console.log("четное")
    } else {
        console.log("нечетное")
    }
} else {
    console.log("Упс, кажется вы ошиблись")
}

//Задание 8 
let myMap = new Map();
myMap.set("one","mean");
myMap.set(2, "mean1");
myMap.set(true, 888);

for (let name of myMap.keys()) {
    console.log(name)
}
for (let value of myMap.values()) {
    console.log(value)
}



