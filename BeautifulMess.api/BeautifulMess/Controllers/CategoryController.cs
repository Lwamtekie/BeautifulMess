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
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        // GET: api/Category
        [HttpGet]
        public List<Category> GetAll()
        {
            var repo = new CategoryRepository();
            return repo.GetAll();
        }

        // GET: api/category/1
        [HttpGet("{CategoryId}")]
        public Category Get(int CategoryId)
        {
            var repo = new CategoryRepository();
            return repo.GetCategory(CategoryId);
        }

        // POST: api/Category
        [HttpPost]
        public void Create(AddCategoryCommand newCategory)
        {
            var repo = new CategoryRepository();
            repo.AddCategory(newCategory);
        }

        // PUT: api/Types/5
        [HttpPut("{id}")]
        public void Update(UpdateCategoryCommand updatedCategoryCommand, int id)
        {
            var repo = new CategoryRepository();
            var updatedCategory = new Category
            {
                Name = updatedCategoryCommand.Name,
            };
            repo.UpdateCategory(updatedCategory, id);
        }


    }
}