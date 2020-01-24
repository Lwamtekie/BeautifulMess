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
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            var repo = new UserRepository();
            return repo.GetAll();
        }


       // [HttpGet("{userId}")]
       // public User Get(int userId)
      //  {
      //      var repo = new UserRepository();
      //      var user = repo.GetUser(User);
       //     return user;
       // }

        // POST: api/users/
        [HttpPost]
        public void Create(AddUserCommand newUser)
        {
            var repo = new UserRepository();
            repo.AddUser(newUser);
        }

        // PUT: api/users/5
        [HttpPut("{id}")]
        public void Update(UpdateUserCommand updatedUserCommand, int id)

        {
            var repo = new UserRepository();
            var updatedUser = new User
            {
                Name = updatedUserCommand.Name,
                Email = updatedUserCommand.Email,
            
            };
            repo.UpdateUser(updatedUser, id);

        }

        // DELETE: api/users/5
        [HttpDelete("{id}")]
        public void Delete(UpdateUserCommand updatedUserCommand, int id)
        {
            var repo = new UserRepository();
            var deletedUser = new User
            {
                Name = updatedUserCommand.Name,
                Email = updatedUserCommand.Email,
            };
            repo.DeleteUser(deletedUser, id);
        }
    }
}
   