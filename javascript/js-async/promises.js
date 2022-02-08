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

function createPost(post){
return new Promise(function(resolve, reject) {
  setTimeout(()=>{
    posts.push(post);
    

    const error = false;

    if (!error){
      resolve();
      
    } else {
      reject('Error: Something went wrong');
    }
  }, 2000);
});

  
}


createPost({title: 'Post 3' , body: 'This is post 3'})
.then(getPost)
.catch(err => console.log(err))

