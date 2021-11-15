import React from 'react';
import '../css/App.css';
import UserLinks from './UserLinks.js';
import About from './About.js';
import Feed from './Feed.js';

function App() {
  return (
    <React.Fragment>
      <div class="col1">
        <UserLinks />
        <About />
      </div>
      <div class="col2">
        <Feed />
      </div>
      <div class="col3">

      </div>
    </React.Fragment>
  );
}

export default App;
