function saveBlog(e){
e.preventDefault();
    // THIS IS GETTING THE ARRAY AND PARSING IT 
console.log("anything")
    // ("blogs") is a key 
  let blogs=localStorage.getItem("blogs")
  // THIS IS INSURING THAT THERE IS NO EMPTY VALUE
  let parseBlogs=JSON.parse(blogs)||[]
 
  // GRABING THE USERS INPUTS
  const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blogContent = document.getElementById('blogContent').value;
  
    // THIS WILL REFORMAT IT INTO THE WAY THE BLOG IS SET UP
     const blogPost = {
      username,
      blogTitle,
      blogContent
     }
    //  THIS WILL PUSH blogPost INTO parseBlog or this will take the new information and add it to old info
  parseBlogs.push(blogPost)
    
  // this is parsing the information backe into the aray val word this is taking the new information and putting it where it belongs or // from an array to a string from a string to local storage
  localStorage.setItem("blogs",JSON.stringify(parseBlogs))   
  };