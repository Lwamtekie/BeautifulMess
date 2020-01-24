using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeautifulMess.Commands;
using BeautifulMess.DataAccess;
using BeautifulMess.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BeautifulMess.Controllers
{
    [Route("api/blog")]
    [ApiController]
    public class BlogController : ControllerBase

    {
        [HttpGet]
        public IEnumerable<Blog> GetBlog()
        {
            var repo = new BlogRepository();
            return repo.GetAll();
        }


       // [HttpGet("{blogId}")]
       // public Blog Get(int blogId)
       // {
        //    var repo = new BlogRepository();
        //    var blog = repo.GetBlog(Blog);
        //    return blog ;
        //}

        // POST: api/blog/
        [HttpPost]
        public void Create(AddBlogCommand newBlog)
        {
            var repo = new BlogRepository();
            repo.AddBlog(newBlog);
        }

        // PUT: api/blog/5
        [HttpPut("{id}")]
        public void Update(UpdateBlogCommand updatedBlogCommand, int id)

        {
            var repo = new BlogRepository();
            var updatedBlog = new Blog
            {
                BlogHeader = updatedBlogCommand.BlogHeader,
                Discusion = updatedBlogCommand.Discusion,
                ImageUrl  = updatedBlogCommand.ImageUrl,

            };
            repo.UpdateBlog(updatedBlog, id);

        }

        // DELETE: api/blog/5
        [HttpDelete("{id}")]
        public void Delete(UpdateBlogCommand updatedBlogCommand, int id)
        {
            var repo = new BlogRepository();
            var deletedBlog = new Blog

            {
                BlogHeader = updatedBlogCommand.BlogHeader,
                Discusion = updatedBlogCommand.Discusion,
                ImageUrl = updatedBlogCommand.ImageUrl,
            };
            repo.DeleteBlog(deletedBlog, id);
        }
    }
}



