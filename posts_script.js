//------------------Paginate Posts-----------------------------//
const posts = [
    { title: "Post 1", date: "03/03/2025", url: "posts/post1.html" },
    { title: "Post 2", date: "03/03/2025", url: "posts/post2.html" },
    { title: "Post 3", date: "03/03/2025", url: "posts/post3.html" },
    { title: "Post 4", date: "03/03/2025", url: "posts/post4.html" },
    { title: "Post 5", date: "03/03/2025", url: "posts/post5.html" },
    { title: "Post 6", date: "03/03/2025", url: "posts/post6.html" },
    { title: "Post 7", date: "03/03/2025", url: "posts/post7.html" },
    { title: "Post 8", date: "03/03/2025", url: "posts/post8.html" }
];

const postsPerPage = 4;
let currentPage = 1;

function displayPosts() {
    const postList = document.getElementById("postList");
    postList.textContent = ""; // Clear list

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = posts.slice(start, end);
 

    paginatedPosts.forEach(post => {
        const li = document.createElement("li");
        li.insertAdjacentHTML("beforeend", `<a href="${post.url}">${post.title}<br />${post.date}</a>`);
        postList.appendChild(li);
    });

    document.getElementById("pageNumber").textContent = `Page ${currentPage}`;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = end >= posts.length;
}

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPosts();
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage * postsPerPage < posts.length) {
        currentPage++;
        displayPosts();
    }
});

displayPosts(); // Load the first page

//-----------------------------End Paginate Posts-----------------------------//
