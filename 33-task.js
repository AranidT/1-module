// task 1
// setTimeout(() => console.log('Hello, world!'), 2000)

// task 2
// let now = new Date(); 
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();

// let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

// const interval = setInterval(() => {
//     console.log(formattedTime)
// }, 1000)

// task 3
// setTimeout(() =>{
//     clearInterval(interval)
// }, 5000)

// task 4
// fetchData = () => {
//   const fetchi = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       const success = true;
//       if (success){
//         resolve('Данные получены!')
//       } else{
//         reject('Произошла ошибка.')
//       }
//     }, 3000)
//   })
//   return fetchi;
// }
// fetchData()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// task 5
// fetchDataWithError = () => {
//   const ferror = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;
//       if (success) {
//         resolve('Данные получены!')
//       } else{
//         reject('Ошибка загрузки!')
//       }
//     }, 2000)
//   })
//   return ferror
// }
// fetchDataWithError()
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => {
//     console.log(error)
//   });

// task 6
// async function fetchDataAsync() {
//    try {
//      const result = await fetchData()
//      console.log(result)
//    } catch (error) {
//      console.log('Ошибка:', error);
//    }
//  }
//   fetchDataAsync(); 

// task 7
// async function fetchDataWithErrorAsync() {
//   try{
//     const result = await fetchDataWithError()
//       console.log(result)
//   } catch (error){
//     console.log('Ошибка: ', error);
//   }
// }
// fetchDataWithErrorAsync();

// task 8
// async function task1() {
//    try {
//      const response = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//           const success = true;
//           if (success){
//             resolve('Данные получены!')
//           } else{
//             reject('Произошла ошибка.')
//           }
//         }, 1000)
//       })
//      const data = await response;
//      console.log(data);
//    } catch (error) {
//      console.log('Ошибка:', error);
//    }
//  }

//  async function task2() {
//    try {
//      const response = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//           const success = true;
//           if (success){
//             resolve('Данные получены! 2')
//           } else{
//             reject('Произошла ошибка. 2')
//           }
//         }, 2000)
//       })
//      const data = await response;
//      console.log(data);
//    } catch (error) {
//      console.log('Ошибка:', error);
//    }
//  }
// async function runTasks() {
//   await task1()
//   await task2()
// }
// runTasks()

// task 9
// async function testA(){
//   try{
//     const response = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true;
//         if (success){
//           resolve('Данные получены')
//         } else{
//           reject('Произошла ошибка')
//         }
//       }, 2000)
//     })
//     const data = await response;
//     console.log(data)
//   } catch (error){
//     console.log('Ошибка: ', error)
//   }
// }

// async function testB(){
//   try{
//     const response = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true;
//         if (success){
//           resolve('Данные получены 2')
//         } else{
//           reject('Произошла ошибка 2')
//         }
//       }, 3000)
//     })
//     const data = await response;
//     console.log(data)
//   } catch (error){
//     console.log('Ошибка: ', error)
//   }
// }

// async function runTasks() {
//   try {
//     const results = await Promise.all([testA(), testB()]);
//   } catch (error) {
//     console.log('Ошибка:', error);
//   }
// }
// runTasks();

// task 10
// async function delayedMessage(){
//   const ret = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Сообщение получены')
//     }, 1000)
//   })
//  const data = await ret;
//  console.log(data)
// }

// console.log('Ожидание...')
// delayedMessage()