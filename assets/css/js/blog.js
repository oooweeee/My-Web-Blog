// blog.js
console.log('word')
// Fetch blog posts from an API or localStorage
function fetchBlogPosts() {
    // Implement your logic here
    // Return an array of blog post objects
  }
  
  // Example: Display blog posts dynamically
  function displayBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = '';
    posts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('card');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p>Author: ${post.author}</p>
      `;
      blogContainer.appendChild(postElement);
    });
  }
  
  // Example usage:
  const blogPosts = fetchBlogPosts();
  displayBlogPosts(blogPosts);