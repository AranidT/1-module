const jsBut = document.querySelector('#jsButton')
jsBut.addEventListener('click',() => {
    console.log('Событие обработано через JS')
}) 

const myDiv = document.querySelector('#myDiv')
myDiv.addEventListener('click', () => {
    myDiv.style.backgroundColor = 'blue'
})

myDiv.addEventListener('mouseover', () => {
    console.log('Элемент нажат')
})

const textInput = document.querySelector('#textInput')
textInput.addEventListener('keydown', (event) => {
    console.log('клавиша нажата: ', event.key)
})

const myLink = document.querySelector('#myLink')
myLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Переход по ссылке отменен')
})

const list = document.querySelector('#list')
list.addEventListener('click', (event) => {
    console.log(event.target.textContent)
})

const keyboardInput = document.querySelector('#keyboardInput')
keyboardInput.addEventListener('keydown', (event) => {
    console.log('Код нажатой клавиатуры: ', event.code)
})
