
const submit= document.querySelector
("#blogForm")
// THIS IS THE FUNCTION THAT WILL SAVE THE BLOG
submit.addEventListener('submit' , saveBlog)
function saveBlog(e) {
  e.preventDefault();
  // THIS IS PREVENTING THE PAGE FROM REFRESHING 
  // THIS IS GETTING THE ARRAY AND PARSING IT
  console.log("");
  // ("blogs") is a key
  let blogs = localStorage.getItem("blogs");
  // THIS IS INSURING THAT THERE IS NO EMPTY VALUE
  let parseBlogs = JSON.parse(blogs) || [];

  // THIS IS GRABBING THE USERS INPUTS
  const username = document.getElementById("username").value;
  const blogTitle = document.getElementById("blogTitle").value;
  const blogContent = document.getElementById("blogContent").value;

  // THIS WILL REFORMAT IT INTO THE WAY THE BLOG IS SET UP
  const blogPost = {
    username,
    blogTitle,
    blogContent,
  };
  //  THIS WILL PUSH blogPost INTO parseBlog or this will take the new information and add it to old info
  parseBlogs.push(blogPost);

  // this is parsing the information back into the array HEY VAL THIS IS TAKING THE NEW INFORMATION AND PUTTING IT WHERE IT BELONGS OR YOU COULD ALSO SAY //FROM AN ARRAY TO A STRING FROM A STRING TO LOCAL STORAGE
  localStorage.setItem("blogs", JSON.stringify(parseBlogs));
}
