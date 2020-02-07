import React from 'react';
import BlogData from '../../Helpers/Data/BlogData';
import BlogCard from '../BlogCard/BlogCard';

import './Home.scss';
import UserData from '../../Helpers/Data/UserData';

class Home extends React.Component {
  state = {
    Blogs: [],
    userInfo: {},
  }

  getBlogs = () => {
    BlogData.getBlogs()
      .then(res => this.setState({ Blogs: res }));
  }

  componentDidMount() {
    this.getBlogs();
    const userSessionInfo = UserData.getSessionUser(); // How to get userInfo from sessionStorage
    this.setState({ userInfo: userSessionInfo });
  }

deleteBlog = (blogId) => {
  BlogData.deleteBlog(blogId)
    .then(() => this.getBlogs())
    .catch(err => (err));
}


render() {
  const { Blogs } = this.state;
  const printBlogs = Blogs.map(blogs => <BlogCard key={blogs.id}
        blogs={blogs}
        deleteBlog={this.deleteBlog}
        getBlogs={this.getBlogs}
      />);
  return (
      <div className="Blog">
      {printBlogs}
      <div className="AddBlog">


      </div>
    </div>
  );
}
}

export default Home;
