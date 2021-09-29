const getData = async (url, topic) => {
  const response = await fetch(url + "/" + topic);
  const data = await response.json();
  return data;
};

const createPost = (el) => {
  let post = document.createElement("div");
  let postTitle = document.createElement("h3");
  let postBody = document.createElement("p");

  post.id = el.id;
  post.className = "post";
  postTitle.innerHTML = el.title;
  postBody.innerHTML = el.body;

  post.append(postTitle, postBody);
  document.getElementById("posts").append(post);
};

getData("https://jsonplaceholder.typicode.com", "posts").then((posts) => {
  posts.forEach((post) => {
    createPost(post);
  });
});

console.log(124);
