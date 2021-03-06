// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post, index) => {
//       output += `${post.title}\n`;
//     });
//     console.log(output);
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post)
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject('Error: Something went wrong')
//       }
//     }, 2000)
//     console.log(post);
//   });

// }

// // createPost({ title: 'Post Three', body: 'This is post Three' }).then(getPosts).catch(error => console.log(error));

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'Goodbye');

// })
// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))
function waitFor5Seconds() {
  let fiveSecsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Five seconds have  passed.')
    }, 5000);
  })
  return fiveSecsPromise
}
waitFor5Seconds()
  .then(
    function (results) {
      console.info(results)
      console.log('This will be printed after five seconds.')
    }
  )
  .catch(
    function errorHandler(error) {
      console.error(error)
    }
  )
