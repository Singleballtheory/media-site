import React from 'react';
import '../css/Post.css';

function Post(props) {
  return (
  
    <div class='post'>
      <img src={props.img} alt="img"/>
      <h1 id='name'>{props.name}</h1>
      <p id="userPost">{props.postText}</p>
    </div>
  )
}

export default Post;