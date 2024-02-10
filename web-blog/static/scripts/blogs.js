// add button functional
function openBlog() {
    document.querySelector(".create-blog").classList.remove('hidden')
}

function closeBlog() {
    document.querySelector(".create-blog").classList.add('hidden')
}

document.querySelector("#createBlog").addEventListener("click", openBlog)
document.querySelector("#closeBlog").addEventListener("click", closeBlog)


// posts
class Post {
    header;
    content;
    id_;
    constructor (header, content, id) {
        this.header = header;
        this.content = content;
        this.id_ = id;
    }
    get id() {
        return this.id_;
    }
}

let posts = [

];

let newPosts = [
]


// draw all posts
function drawPost(post){
    const template = document.getElementById('post-template');
    const instance = template.content.cloneNode(true);
    const postHeader = instance.querySelector('#post-header');
    const postContent = instance.querySelector('#post-content');
    instance.querySelector("#delete").addEventListener("click", () => {deletePost(post.id)})

    postHeader.innerHTML = post.header;
    postContent.innerHTML = post.content;
    
    const pickedLingua = document.getElementById('blogs');
    pickedLingua.appendChild(instance);
}

function drawAllPosts() {
    for (index = 0; index < posts.length; index++)
        drawPost(posts[index]);
}

drawAllPosts(posts) 


// add post
function addPost() {
    header = document.querySelector("#header-input").value;
    content = document.querySelector("#content-input").value;
    let newPost = new Post(header, content);
    posts.push(newPost);
    drawPost(newPost); 
}


// add event for button
document.querySelector("#newPost").addEventListener("click", addPost);

// delete post
function deletePost(postId) {
    for (let index = 0; index < posts.length; index++) {
        if (posts[index].id === postId) {
            posts.splice(index, 1);
            break
        }
    }
}
