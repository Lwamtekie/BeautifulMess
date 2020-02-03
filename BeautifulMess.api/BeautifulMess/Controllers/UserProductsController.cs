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
    [Route("api/userproducts")]
    [ApiController]
    public class UserProductsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<UserProducts> GetUserProducts()
        {
            var repo = new UserProductsRepository();
            return repo.GetAll();
        }


        [HttpGet("{UserProductsId}")]
        public UserProducts Get(int userproductsId)
        {
            var repo = new UserProductsRepository();
            var userproducts = repo.GetUserProducts(userproductsId);
            return userproducts;
        }


        // POST: api/userproducts/
        [HttpPost]
        public void Create(AddUserProductsCommand newUserProducts)
        {
            var repo = new UserProductsRepository();
            repo.AddUserProducts(newUserProducts);
        }

        // DELETE: api/userproducts/5
        [HttpDelete("{id}")]
        public void Delete(UserProducts userproductsToDelete, int id)
        {
            var repo = new UserProductsRepository();
            repo.DeleteUserProducts(userproductsToDelete, id);

        }
    }
}
