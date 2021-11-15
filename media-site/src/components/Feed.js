import React from 'react';
import '../css/Feed.css';
import Post from './Post.js';
import img from './img'
import tomGuy from '../img/tom.jpg';
import sally from '../img/sally.png';
import veruca from '../img/veruca.png';
import petunia from '../img/petunia.jpg';

const mainFeed = [
  {
    name: 'Tom Guy',
    img: tomGuy,
    postText: 'Beautiful day out on the town! #blessed'
  },
  {
    name: 'Sally',
    img: sally,
    postText: 'I sense there’s something in the wind, that feels like tragedy is at hand. And though I’d like to stand by him, can’t shake this feeling that we have.'
  },
  {
  name: 'Veruca Salt',
  img: veruca,
  postText: 'Snozzberries? Who ever heard of a snozzberry?'
  },
  {
    name: 'Petunia Pots',
    img: petunia,
    postText: 'VROOM VROOM'
  }
];

function Feed() {
  return (
    <div id='feed'>
      {mainFeed.map((post, index) =>
        <Post name={post.name}
          img={post.img}
          postText={post.postText}
          key={index} />
      )}
    </div>
  )
}

export default Feed;