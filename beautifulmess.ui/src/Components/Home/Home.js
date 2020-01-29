import React from 'react';
import getBlogs from '../../Helpers/Data/BlogData';
import BlogCard from '../BlogCard/BlogCard';
import './Home.scss';
// import UserData from '../../Helpers/Data/UserData';

class Home extends React.Component {
  state = {
    Blogs: [],
    userInfo: {},
  }

  componentDidMount() {
    getBlogs()
      .then(res => this.setState({ Blogs: res }));
    // const userSessionInfo = UserData.getSessionUser(); //How to get userInfo from sessionStorage
    // this.setState({ userInfo: userSessionInfo });
  }

  render() {
    const { Blogs } = this.state;
    const printBlogs = Blogs.map(blogs => <BlogCard
        blogs={blogs}
      />);
    return (
      <div className="Blog">
      {printBlogs}
      <div className="Home">
      </div>
    </div>
    );
  }
}

export default Home;
