const posts = [
  {title: 'Post One' , body: 'This is post one'},
  {title: 'Post Two' , body: 'This is post two'}
];

function getPost() {
  setTimeout(
    function() {
    let output = '';
    posts.forEach((post, index)=>{
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback){
  setTimeout(()=>{
    posts.push(post);
    callback();
  }, 2000);
}

getPost();

createPost({title: 'Post 3' , body: 'This is post 3'}, getPost)