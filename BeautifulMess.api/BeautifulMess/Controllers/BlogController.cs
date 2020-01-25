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


        [HttpGet("{blogId}")]
        public Blog Get(int blogId)
       {
            var repo = new BlogRepository();
           var blog = repo.GetBlog(blogId);
            return blog ;
        }

        // POST: api/blog/
        [HttpPost]
        public void Create(AddBlogCommand newBlog)
        {
            var repo = new BlogRepository();
            repo.AddBlog(newBlog);
        }

        // PUT: api/blog/
        [HttpPut]
        public void Update(UpdateBlogCommand updatedBlogCommand)

        {
            var repo = new BlogRepository();
            //var updatedBlog = new Blog
            //{
            //    Title = updatedBlogCommand.Title,
            //    Article = updatedBlogCommand.Article,
            //    ImageUrl  = updatedBlogCommand.ImageUrl,
            // };
            repo.UpdateBlog(updatedBlogCommand);

        }

        // DELETE: api/blog/5
        [HttpDelete("{id}")]
        public void Delete(UpdateBlogCommand updatedBlogCommand, int id)
        {
            var repo = new BlogRepository();
            var deletedBlog = new Blog

            {
                Title = updatedBlogCommand.Title,
                Article = updatedBlogCommand.Article,
                ImageUrl = updatedBlogCommand.ImageUrl,
            };
            repo.DeleteBlog(deletedBlog, id);
        }
    }
}



