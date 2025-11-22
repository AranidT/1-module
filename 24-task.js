// task 1
// let number = prompt('Напишите число: ')
// if (number > 10){
//     console.log('Число больше 10')
// } else {
//     console.log('Число меньше или равно 10')
// } 

// task 2
// let message = confirm('Вы хотите удалить файл?')
// // console.log(message)
// if (message){
//     console.log('Файл удален')
// } else{
//     console.log('Удаление отменено')
// }

// task 3
// let age = prompt('Напишите ваш возраст')
// if (age < 18){
//     console.log('Вы еще подросток')
// } else if ((age >= 18) && (age <= 30)){
//     console.log('Вы молодой взрослый')
// } else if (age > 30){
//     console.log('Вы взрослый')
// }

// task 4
// let number1 = prompt('Напишите число')
// console.log((number1%2==0)?'Четное число':'Нечетное число')

// task 5
// let day = prompt('Напишите день недели(число от 1 до 7)')
// let message
// switch(day){
//     case '1':
//         message = 'Понедельник'
//         break;
//     case '2':
//         message = 'Вторник'
//         break;
//     case '3':
//         message = 'Среда'
//         break;
//     case '4':
//         message = 'Четверг'
//         break;
//     case '5':
//         message = 'Пятница'
//         break;
//     case '6':
//         message = 'Суббота'
//         break;
//     case '7':
//         message = 'Воскресенье'
//         break;
//     default:
//         message = 'Некорректное значение'
// } 
// console.log(message)

// task 6
let number1 = Number(prompt('Напишите первое число: '))
let number2 = Number(prompt('Напишите второе число: '))

// Конструкция if/else
if (number1 === number2){
    console.log('Числа равны')
} else{
    console.log((number1 > number2)?'Первое число больше':'Второе число больше')
}

// additional task
// let month = prompt('Напишите месяц (от 1 до 12)')
// let message
// switch(month){
//     case '1':
//     case '2':
//     case '12':
//         message = 'Зима'
//         break;
//     case '3':
//     case '4':
//     case '5':
//         message = 'Весна'
//         break;
//     case '6':
//     case '7':
//     case '8':
//         message = 'Лето'
//         break;
//     case '9':
//     case '10':
//     case '11':
//         message = 'Осень'
//         break;
//     default: 
//         message = 'Вы ввели некорректный месяц'
// }
// console.log(message)