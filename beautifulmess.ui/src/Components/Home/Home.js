import React from 'react';

import MyNavbar from '../MyNavbar/MyNavbar';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
