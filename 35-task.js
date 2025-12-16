// task 1
// AJAX это методика благодаря которой можно улучшить работу с сервером, улучшает моментальное обновление данных и пользовательский опыт 
// кажется во всех современных сайтах и приложениях используется данная методика

// task 2
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.onload = function() {
//  if (xhr.status === 200) {
//    const data = JSON.parse(xhr.responseText);
//    data.forEach(post => {
//     console.log(post.title)
//    });
//  } else {
//    console.error('Ошибка загрузки данных:', xhr.status);
//  }
// };
// xhr.onerror = function() {
//  console.error('Ошибка соединения');
// };
// xhr.send();

// task 3 - 4
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.onload = function(){
//     if (xhr.status === 200){
//         const users = JSON.parse(xhr.responseText);
//         renderUserList(users);
//         function renderUserList(users){
//             const userList = document.getElementById('userList')
//             users.forEach(user => {
//                 const listItem = document.createElement('li')

//                 const listContent = document.createElement('ul')

//                 const idItem = document.createElement('li')
//                 idItem.textContent = `ID: ${user.id}`
//                 listContent.appendChild(idItem)

//                 const titleItem = document.createElement('li')
//                 titleItem.textContent = `Title: ${user.title}`
//                 listContent.appendChild(titleItem)

//                 const bodyItem = document.createElement('li')
//                 bodyItem.textContent = `Body: ${user.body}`
//                 listContent.appendChild(bodyItem)

//                 listItem.appendChild(listContent)
//                 userList.appendChild(listItem)
// });
            
//         }
//     } else{
//         console.error('Ошибка загрузки данных: ', xhr.status)
//     }
// }
// xhr.onerror = function(){
//     console.error('Ошибка соединения')
// }
// xhr.send();

// task 5
// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/nonexistent', true)
// const p = document.getElementById('p')
// xhr.onload = function() {
//     if (xhr.status === 200){
//         const data = JSON.parse(xhr.responseText);
//         console.log(data)
//     } else{
//         p.textContent = ('Ошибка загрузки данных:'+ xhr.status)
//     }
// }
// xhr.onerror = function() {
//     p.textContent = 'Ошибка соеденения'
// }
// xhr.send()

// task 6
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
const p = document.getElementById('p')
const icon = document.getElementById('icon')
xhr.onload = function() {
    if (xhr.status === 200){   
        const users = JSON.parse(xhr.responseText);
        renderUserList(users);
        function renderUserList(users){
            const userList = document.getElementById('userList')
            users.forEach(user => {
                const listItem = document.createElement('li')

                const listContent = document.createElement('ul')

                const idItem = document.createElement('li')
                idItem.textContent = `ID: ${user.id}`
                listContent.appendChild(idItem)

                const titleItem = document.createElement('li')
                titleItem.textContent = `Title: ${user.title}`
                listContent.appendChild(titleItem)

                const bodyItem = document.createElement('li')
                bodyItem.textContent = `Body: ${user.body}`
                listContent.appendChild(bodyItem)

                listItem.appendChild(listContent)
                userList.appendChild(listItem)
            });
        }
        icon.style.display = 'none'
    } else{
        icon.style.display = 'none'
        p.textContent = ('Ошибка загрузки данных:'+ xhr.status)
    }
}
xhr.onerror = function() {
    icon.style.display = 'none'
    p.textContent = 'Ошибка соеденения'
}
xhr.send()