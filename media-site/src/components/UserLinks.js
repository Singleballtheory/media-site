import React from 'react';
import '../css/UserLinks.css';
import thisGuy from '../img/thisguy.jpg';

function UserLinks() {
  return (
    <div id='userLinks'>
      <div id='userColor'></div>
      <img src={thisGuy} alt="a guy"></img>
      <h1 id='user'>This Guy</h1>
      <br />
      <div id='links'>
        <a class='link' id='link1' src="">Link 1</a>
        <a class='link' id='link2' src="">Link 2</a>
        <a class='link' id='link3' src="">Link 3</a>
      </div>
    </div>
  );
}

export default UserLinks;