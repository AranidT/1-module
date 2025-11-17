// task 1
let a = 10
let b = 5
let c = 2
console.log(a+b+c)
console.log(b - (a + c))
console.log(a*b/c)
console.log(a%b)

// task 2
let x = 7
console.log(x++ + ++x) 
console.log(x-- - --x)

// task 3
let d = 4 + 5
console.log('The result is: ' + d)
console.log('The result is: ' + (4+5))

// task 4
console.log((a > b) && (a,b > 0))
console.log((c < 10) || (c == 2))
console.log(a/c == 5)

// task 5
console.log(10 == '10')
console.log(10 === '10')
// == он не проверяет тип данных, === проверяет тип данных

// task 6
expression1 = (x % 2 == 0 || x % 3 == 0) && (x % 6 != 0)
console.log(expression1) 

let y = 7
expression2 = !(y > 10 || y < 5)
console.log(expression2)
