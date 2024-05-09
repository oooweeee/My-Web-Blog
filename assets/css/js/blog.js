// blog.js
console.log('word')
// Fetch blog posts localStorage
function fetchBlogPosts() {
   let local=localStorage.getItem()
  }
  
  // 
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
  
  // //
  // const blogPosts = fetchBlogPosts();
  // displayBlogPosts(blogPosts);