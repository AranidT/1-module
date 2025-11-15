// task 1
// console.log('Hello, world!')

// task 2
// alert('Нажмите "OK" чтобы закрыть окно')
// блогадаря функции alert выходит всплывающее окно, которое исчезает только после нажатие на кнопку ОК

// task 3
/*
команда console.log выводит данные в Консоле, console.warm используется для предупреждения и console.error для вывода ошибки
*/


// 29 ДЗ
// task 1
let name = 'Di'
const age = 25

name = 'Ari'
// age = 30
// значение константы нельзя менять, а значение в переменной let можно

// task 2
// var это также переменная которая использовалась ранее в версии ES5. Так как область у него функциональная, может привести к непредсказуемым действиям

// task 3
let name1 = 'Julie'
let number = 12
let boolean = true
let name3 = null
let name4
let number2 = NaN
// console.log(name1, typeof(name1))
// console.log(number2, typeof(number))
// console.log(boolean, typeof(boolean))
// console.log(name3, typeof(name3))
// console.log(name4, typeof(name4))
// console.log(number2, typeof(number2))

// task 4
let title = '12'
let titleNum = Number(title)
console.log(titleNum)

let title1 = titleNum.toString()
console.log(title1)
// успешно преобразовали строку в число и обратно

let unknown
console.log(typeof(unknown))
let strUnknown = String(unknown)
console.log(strUnknown)
// выходит undefined 

let empty = null
let emptyNumber = parseInt(empty)
console.log(emptyNumber)
// при преобразовании выходит значение NaN(Not a number) 

// task 5
let number3 = 125
let number3Str = number3.toString()
console.log(number3Str)
// Динамическая типизация изменяет тип данных переменной после ее объявления

// task 6
let value = prompt("Напишите ваше имя и возраст")
console.log(value)