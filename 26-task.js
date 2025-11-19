// task 1
// let person = {
//     name: 'Di',
//     age: 25,
//     city: 'Almaty'
// }
// console.log(person)

// task 2
// console.log(person.name, person.age)
// person.city = 'London'
// console.log(person)

// task 3
// person.greet = 'Привет, меня зовут ' + Object.values(person)[0] + ', мне ' + Object.values(person)[1] + ' лет!'
// console.log(person.greet)

// task 4
// let obj1 = {
//     a: 10,
//     b: 20
// }

// let obj2 = {
//     a: 10, 
//     b: 20
// }
// console.log(obj1==obj2)
// console.log(obj1===obj2)
// в обеих сравнениях вышло false, зависит от ссылок который выделяет каждый из объектов, но если сравнивать их значение выйдет true

// task 5
// let book = {
//     title: 'Маленький принц',
//     author: 'Антуан де Сент-Экзюпери',
//     details: {
//         year: 1943,
//         pages: 112
//     }
// }
// console.log(book)

// let copyBook = Object.assign({}, book);
// copyBook.details.year = 1945
// console.log(copyBook)
// хотя изменили год в копированном объекте это также повлияло на основной объект, скорее всего данный вид копирование изменяет все значение несмотря на то что оно копия или оригинал

// task 6
// let calculator = {
//     a: 10,
//     b: 20,
// }
// calculator.sum = Object.values(calculator)[0] + Object.values(calculator)[1]
// calculator.multiply = Object.values(calculator)[0] * Object.values(calculator)[1]

// console.log(calculator.sum)
// console.log(calculator.multiply)


// task 7 
const car = {
    brand: 'Lamborghini',
    model: 'Aventador'
}
console.log(car)
car.brand = 'Porshe'
console.log(car)
// насколько правильно поняла, если мы изменим само название или внутренность константы то не получится, а если через значение то это возможно
