document.getElementById('blogForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blogContent = document.getElementById('blogContent').value;
  
    // Validate input (e.g., check if fields are not empty)
  
    // Example: Send data to the server (you can use fetch or other methods)
    try {
      const response = await fetch('/api/createBlogPost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, blogTitle, blogContent }),
      });
  
      if (response.ok) {
        // Redirect to the posts page
        window.location.href = '/blog.html';
      } else {
        console.error('Error creating blog post');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  });