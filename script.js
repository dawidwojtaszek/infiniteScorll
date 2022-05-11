const postContainer = document.getElementById("posts-container");

let limit = 3;
let page = 1;

async function getPost() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();
  return data;
}

async function showPosts() {
  const posts = await getPost();

  posts.forEach((post) => {
    const element = document.createElement("div");
    element.classList.add("post");
    element.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}<p>
        </div>
    `;
    postContainer.appendChild(element);
  });
}

showPosts();
