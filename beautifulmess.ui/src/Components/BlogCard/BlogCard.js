import React from 'react';


import './BlogCard.scss';

class BlogCard extends React.Component {
 state = {

   blog: {},
 };

 render() {
   const { blogs } = this.props;
   return (
        <div className="Blog">
        <div className="container">
        <div className="jumbotron text-center col-mid-6">
        <h2 className="Name-title">{blogs.title}</h2>
        <img src={blogs.imageUrl} className="card-img" alt="..." />
        <p className="Name-title">{blogs.article}</p>
  </div>
  </div>
  </div>
   );
 }
}

export default BlogCard;
