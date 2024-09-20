import React, { useState } from 'react';
import users from '../assets/assignemnt3_json.json';

const CommentList = ({ comments }) => (
  <div>
    {comments.map((comment, id) => (
      <div key={id} style={{marginBottom:'10px'}}>
        <strong>{comment.user}:</strong> {comment.text}
      </div>
    ))}
  </div>
);

export default function Post() {
  const [contents, setContents] = useState(users);
  const [postContent, setPostContent] = useState('');

  const HandleAdd = () => {
    if (postContent.trim() === '') return;

    const newPost = {
      id: contents.length + 1, 
      user: 'Bavanuja', 
      profilePicture: 'Bavanuja.jpg', 
      postDate: new Date().toISOString(),
      content: postContent, 
      likes: 0, 
      comments: [] 
    };

    setContents([newPost, ...contents]); 
    
  };

  return (
    <div>
      <div style={{  maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ fontSize: '24px', color: '#1877f2', marginBottom: '20px', textAlign: 'center' }}>Facebook</h1>
    
     
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
      <img 
      src='Bavanuja.jpg' 
      alt="Bavanuja's profile" 
      style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} />
    
    <input
      type='text'
      placeholder="What's on your mind, Bavanuja?"
      value={postContent}
      onChange={(e) => setPostContent(e.target.value)}
      style={{flex: '1', padding: '10px',borderRadius: '20px',border: '1px solid #ddd', outline: 'none',fontSize: '16px', backgroundColor: '#f0f2f5'}}/>
  </div>

  <button 
    onClick={HandleAdd} 
    style={{ backgroundColor: '#1877f2', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', width: '100%', transition: 'background-color 0.3s'}}>
    Post
  </button>
</div>


<div style={{ maxWidth: '600px', margin: '20px auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  {contents.map((item) => (
    <div key={item.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: '20px', marginBottom: '20px' }}>
      
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src={item.profilePicture} alt='user' style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} />
        <div>
          <h4 style={{ margin: '0', fontSize: '18px' }}>{item.user}</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#65676b' }}>{new Date(item.postDate).toLocaleString()}</p>
        </div>
      </div>

     
      <div>
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '15px' }}>{item.content}</p>
      </div>

      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#65676b', fontSize: '14px', marginBottom: '10px' }}>
        <p style={{ margin: '0' }}> Likes: {item.likes}</p>
      </div>

      <div style={{ paddingLeft: '65px' }}>
        <h5 style={{ margin: '10px 0', fontSize: '14px', color: '#1877f2' }}>Comments:</h5>
        <CommentList comments={item.comments} />
      </div>
    </div>
  ))}
</div>
</div>
  );
}