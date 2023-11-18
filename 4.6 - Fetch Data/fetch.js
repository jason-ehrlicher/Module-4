document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
});

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
            const postElement = createPostCard(post);
            postsContainer.appendChild(postElement);
        });
    });
}

function createPostCard(post) {
    const card = document.createElement('div');
    card.className = "col-md-4 mb-4";

    const cardBody = document.createElement('div');
    cardBody.className = 'card';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = post.title;

    const content = document.createElement('p');
    content.className = 'card-text';
    content.textContent = post.body;

    cardBody.appendChild(title);
    cardBody.appendChild(content);
    card.appendChild(cardBody);

    return card;
}