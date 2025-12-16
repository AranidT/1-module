// task 1
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Ошибка: ', error))

// task 2
// const data = { userId: 4, title: 'Mauris lorem in', body: 'Adipiscing interdum odio. Hac ornare amet, ju'};

// fetch('https://jsonplaceholder.typicode.com/posts', {
//  method: 'POST', 
//  headers: {
//    'Content-Type': 'application/json' 
//  },
//  body: JSON.stringify(data) 
// })
//  .then(response => response.json())
//  .then(data => console.log('Успех:', data))
//  .catch(error => console.error('Ошибка:', error));

// task 3
//  fetch('https://jsonplaceholder.typicode.com/nonexistent')
//  .then(response => {
//    if (!response.ok) {
//      throw new Error('Ошибка сети: ' + response.status);
//    }
//    return response.json();
//  })
//  .then(data => console.log(data))
//  .catch(error => console.error('Обработанная ошибка:', error));

// task 4
// const updatedData = {title: 'Adipiscing interdum odio'};

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//  method: 'PUT',
//  headers: {
//    'Content-Type': 'application/json'
//  },
//  body: JSON.stringify(updatedData)
// })
//  .then(response => response.json())
//  .then(data => console.log('Обновлено:', data))
//  .catch(error => console.error('Ошибка:', error));

//  fetch('https://jsonplaceholder.typicode.com/posts/1', {
//    method: 'DELETE'
//  })
//    .then(() => console.log('Пост удален'))
//    .catch(error => console.error('Ошибка:', error));

// task 5
// async function fetchData() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//      const data = await response.json();
//      console.log(data);
//    } catch (error) {
//      console.log('Ошибка:', error);
//    }
//  }
//   fetchData(); 

// async function fetchDataError() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
//      if (!response.ok) {
//      throw new Error('Ошибка сети: ' + response.status);
//     }
//     return response.json();
//    } catch (error) {
//      console.log('Обработанная ошибка:', error);
//    }
//  }
//   fetchDataError(); 

// task 6
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'GET',
//     headers: {
//         'User-Agent': 'MyApp/1.0',
//         'Authorization': 'Bearer my-token-123',
//         'X-Custom-Header': 'TestValue'
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Error: ', error))