// 1-task
// localStorage.setItem('greeting', 'Привет, мир!')
// const string = localStorage.getItem('greeting')
// console.log(string)

// task 2
// localStorage.removeItem('greeting', 'Привет, мир!')
// const greeting = localStorage.getItem('greeting')
// console.log(greeting)

// task 3
const user = {
    name: 'Dinara',
    age: 25,
    isStudent: true
}

const userJSON = JSON.stringify(user)
localStorage.setItem('user', userJSON)
const storedUser = localStorage.getItem('user')
const parsedUSer = JSON.parse(storedUser)

// task 4
user.country = 'KZ';
const updateStorage = localStorage.getItem('user')

const updateUser = JSON.parse(updateStorage)
updateUser.country = 'KZ'
console.log(updateUser)

// task 5
if (updateUser == null){
    let newUser = {}
    const newUserJSON = JSON.stringify(newUser)
    localStorage.setItem('user', newUserJSON)
}  else{
    console.log(updateUser)
}

// task 6
localStorage.clear()
console.log(localStorage.getItem('user'))

// task 7
const titles = [
    {title: 'Title1', completed: true},
    {title: 'Title2', completed: false}
]

const titlesJSON = JSON.stringify(titles)
localStorage.setItem('title', titlesJSON)
const storedTitle = localStorage.getItem('title')
const parsedTitle = JSON.parse(storedTitle)
console.log(parsedTitle)

// task 8
const titles2 = localStorage.getItem('title')
const parsedTitle2 = JSON.parse(titles2)
parsedTitle2[1].completed = true

const titlesJSON2 = JSON.stringify(parsedTitle2)
localStorage.setItem('title',titlesJSON2)