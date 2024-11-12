
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination'

function App() {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsperpage, setPostsperPage] = useState(10);

useEffect(() => {
  const fetchPosts = async() => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false);
  }

  fetchPosts();
}, []);

//Get current posts
   const indexofLastPost = currentPage * postsperpage;
   const indexofFirstPost = indexofLastPost - postsperpage;
   const currentPosts = posts.slice(indexofFirstPost, indexofLastPost);

   //change Page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsperpage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;