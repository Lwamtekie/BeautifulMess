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


        [HttpGet("{userId}")]
        public IEnumerable<Blog> GetUserBlog(int userId)
        {
            var repo = new UserBlogRepository();
            var userblog = repo.GetUserBlog(userId);
            return userblog;
        }

        // POST: api/blog/
        [HttpPost]
        public void Create(AddUserBlogCommand newUserBlog)
        {
            var repo = new UserBlogRepository();
            repo.AddUserBlog(newUserBlog);
        }



        // DELETE: api/userblog/5
        [HttpDelete("{userBlogId}")]
        public void Delete( int userBlogId)
        {
            var repo = new UserBlogRepository();
            repo.DeleteUserBlog(userBlogId);

        }
    }
}

