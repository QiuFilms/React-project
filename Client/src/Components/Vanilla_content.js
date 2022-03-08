import React from 'react'
import logo from './images/blob-1.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const Vanilla_content = () => {
    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        try {
          const response = await fetch("http://localhost:5000/posts");
          const jsonData = await response.json();
    
          console.log(jsonData)
          setPosts(jsonData)
        } catch (err) {
          console.error(err.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

  return (
    <>
    <div className='w-100 d-flex justify-content-center'>
        <div className=' w-75 p-5 mt-5 d-flex outer-posts'>
        {posts.map(post => (
            <div key={post.id} className="post in-out-post">
                <div>
                    <img src={logo} className="img-thumbnail"alt="asd" />
                </div>
                <div className='title p-2 bg-success text-light font-weight-bold' >{post.title}</div>
                <div className='desc p-2' >{post.description}</div>
            </div>
        ))}
        </div>
        
    </div>
    <div className='bg bg-vanilla'></div>
    </>
  )
}

export default Vanilla_content
