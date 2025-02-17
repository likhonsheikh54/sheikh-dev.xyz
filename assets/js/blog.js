document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/data/blog.json')
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');
                postElement.innerHTML = `
                    <h2><a href="${post.url}">${post.title}</a></h2>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}" class="read-more">Read More</a>
                `;
                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});
