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
    [Route("api/UserBlog")]
    [ApiController]
    public class UserBlogController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<UserBlog> GetUserBlog()
        {
            var repo = new UserBlogRepository();
            return repo.GetAll();
        }


        [HttpGet("{userblogId}")]
        public UserBlog Get(int userblogId)
        {
            var repo = new UserBlogRepository();
            var userblog = repo.GetUserBlog(userblogId);
            return userblog;
        }

        // POST: api/blog/
        [HttpPost]
        public void Create(AddUserBlogCommand newUserBlog)
        {
            var repo = new UserBlogRepository();
            repo.AddUserBlog(newUserBlog);
        }

        // PUT: api/userblog/
        [HttpPut]
        //  public void Update(UpdateBlogCommand updatedBlogCommand)

        //{
        //var repo = new BlogRepository();
        //var updatedBlog = new Blog
        //{
        //    Title = updatedBlogCommand.Title,
        //    Article = updatedBlogCommand.Article,
        //    ImageUrl  = updatedBlogCommand.ImageUrl,
        // };
        // repo.UpdateBlog(updatedBlogCommand);

        // }

        // DELETE: api/userblog/5
        [HttpDelete("{id}")]
        public void Delete(UserBlog userblogToDelete, int id)
        {
            var repo = new UserBlogRepository();
            //repo.DeleteUser(userblogToDelete, id);

        }
    }
}

