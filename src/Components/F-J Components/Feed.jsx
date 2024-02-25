import React, { useState, useEffect } from 'react';

const Feed = () => {
  // Simulerad lista med inlägg
  const [posts, setPosts] = useState([]);
 
  // Funktion för att hämta inlägg från en API eller annan datakälla
  const fetchPosts = async () => {
    // Simulerar en asynkron datahämtning
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const fetchedPosts = await data.json();
    setPosts(fetchedPosts.slice(0, 1));
  };

  // Hämta inlägg när komponenten monteras
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
