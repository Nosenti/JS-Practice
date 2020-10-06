// var friends = ['Mike', 'Stacy', 'Andy', 'Rick'];
// friends.forEach(eachName, i) {
//   console.log(i + 1 + '. ' + eachName);
// };

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `${post.title}\n`;
    });
    console.log(output);
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000)
  console.log(post);
}
createPost({ title: 'Post three', body: 'This is post three' }, getPosts)