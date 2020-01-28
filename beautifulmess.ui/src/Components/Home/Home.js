import React from 'react';
import getBlogs from '../../Helpers/Data/BlogData';
import Register from '../Register/Register';
import BlogCard from '../BlogCard/BlogCard';
import './Home.scss';

class Home extends React.Component {
  state = {
    Blogs: [],

  }

  componentDidMount() {
    getBlogs()
      .then(res => this.setState({ Blogs: res }));
  }

  render() {
    const { Blogs } = this.state;
    const printBlogs = Blogs.map(blogs => <BlogCard
        blogs={blogs}
      />);
    return (
      <div className="Product-main">
      {printBlogs}
      <div className="Home">
        <Register/>
      </div>
    </div>
    );
  }
}

export default Home;
