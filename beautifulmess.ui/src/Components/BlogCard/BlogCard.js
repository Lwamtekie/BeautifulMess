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

 render() {
   const { blogs } = this.props;
   return (
        <div className="Blog">
        <div className="Blogcontainer">
        <div className="subConBlog">
        <div className="bolgArticle">
        <h2 className="Blog-title">{blogs.title}</h2>
        <img src={blogs.imageUrl} className="blog-img" alt="..." />
        <p className="Blog-Article">{blogs.article}</p>
    <button className="btn btn-success button" onClick={this.delete}>Delete</button>
    </div>
  </div>
  </div>
    <AddBlog getBlogs={this.props.getBlogs}/>
  </div>
  // </div>
   );
 }
}

export default BlogCard;
