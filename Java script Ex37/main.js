// Qabso dhammaan qaybaha muhiimka ah ee DOM-ka (form, inputs, liiska posts, search, badhanka dark mode
const blogForm = document.querySelector("#blog-form");
const postTitle = document.querySelector("#post-title");
const postImage = document.querySelector("#post-image");
const postContent = document.querySelector("#post-content");
const postsList = document.querySelector("#posts-list");
const searchList = document.querySelector("#search-input");
const darkBtn = document.querySelector("#dark-mode-toggle");


document.addEventListener("DOMContentLoaded", () =>  {
    const posts = getPosts();
    posts.forEach(post => addPostToDOM(post));

   if(localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        darkBtn.textContent = "☀️ Light Mode";
    }


    
})

blogForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const post = {
        id:     Date.now(),
        title:  postTitle.value,
        image:  postImage.value,
        content: postContent.value,
        date: new Date().toLocaleString()
    };

addPostToDOM(post);
savePost(post);
blogForm.reset();


});

function addPostToDOM(post) {
    const postDiv = document.createElement("div");
    postDiv.className = "post-item"
    postDiv.dataset.id = post.id;

    postDiv.innerHTML = `
        <h2  class="p-title">${post.title}</h2>
        <span class="post-date">${post.date}</span>
        ${post.image ?  `<img src="${post.image}"  class="p-image">` : ""}
        <p class="p-content">${post.content} </p>
        <div class="action">
       <button class="edit-btn">Edit</button>
       <button  class="delete-btn">Delete</button> 
        </div>
    `;
    postsList.prepend(postDiv);
}



postsList.addEventListener("click", (e) => {
    const postItem = e.target.closest(".post-item");
    if(!postItem) return;

    const id = postItem.dataset.id;

    if(e.target.classList.contains("delete-btn")) {
        if(confirm("mahubtaa")) {
            postItem.remove();
            removePost(id);
        }
    }


    // qaybta Edit ka

    if(e.target.classList.contains("edit-btn")) {
        const titleEl = postItem.querySelector(".p-title");
        const contentEl = postItem.querySelector(".p-content");

        const newTitle = prompt("Bedel Ciwaanka:", titleEl.textContent);
        const newContent = prompt("Bedel Qoraalka:", contentEl.textContent);

        if(newTitle && newContent) {
            titleEl.textContent = newTitle;
            contentEl.textContent = newContent
            updatePosts(id, newTitle, newContent);
        }
    }

});


// search Logic

searchList.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".post-item").forEach (post => {
        const text = post.innerText.toLowerCase();
        post.style.display = text.includes(term) ? "block" : "none"
    });
});


// Dark Mode
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    darkBtn.textContent = isDark ? "Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
})



// local storage here

function getPosts() {
    return JSON.parse(localStorage.getItem("posts")  || "[]");
}

function savePost(post) {
    const posts = getPosts();
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
}

function removePost(id) {
    const posts = getPosts().filter(p => p.id !=id);
    localStorage.setItem("posts", JSON.stringify(posts));
}

function updatePosts(id, title, content){
    const posts = getPosts();
    const post = posts.find(p  => p.id == id);

    if(post) {
        post.title = title;
        post.content = content;
    }

    localStorage.setItem("posts", JSON.stringify(posts));

}