import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import './BlogCard.scss';

class BlogCard extends React.Component {
 state = {

   blog: {},
 };

 delete = () => {
   const { blogs, deleteBlog } = this.props;
   deleteBlog(blogs.id);
 }

AddBlog = () => {

}


render() {
  const { blogs } = this.props;
  return (
        <div className="Blog">
        <div className="container">
        <h2 className="Name-title">{blogs.title}</h2>
        <img src={blogs.imageUrl} className="card-img" alt="..." />
        <p className="Name-title">{blogs.article}</p>
  <div className="delete">
    <button className="btn btn-danger" onClick={this.delete}>Delete</button>
    {/* <button className="btn btn-danger" onClick={this.AddBlog}>Add</button> */}
    <AddBlog />

  </div>
  </div>
  </div>
  );
}
}

export default BlogCard;
