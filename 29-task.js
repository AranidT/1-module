// task 1
let p = document.getElementById('message');
p.textContent = 'Добро пожаловать в JavaScript!'

// task 2
let boxs = document.getElementsByClassName("box")
for (let i=0; i<boxs.length; i++){
    boxs[i].style.backgroundColor = 'green' 
}

// task 3
const paragraph = document.querySelector('#text');
paragraph.textContent = 'Параграф 1'

const boxsStyle = document.querySelectorAll('.box');
boxsStyle.forEach(box => {
    box.style.backgroundColor = 'blue';
    box.style.color = 'white';
})

// task 4
const titleStyle = document.querySelectorAll('.highlight');
titleStyle.forEach(par => {
    par.style.color = 'red';
})
