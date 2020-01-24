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
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
       
        [HttpGet]
        public List<Product> GetProducts()
        {
            var repo = new ProductRepository();
            return repo.GetAll();
        }

       
        [HttpGet("{productId}")]
        public Product Get(int productId)
        {
            var repo = new ProductRepository();
            var product = repo.GetProduct(productId);
            return product;
        }

        // POST: api/products/
        [HttpPost]
        public void Create(AddProductCommand newProduct)
        {
            var repo = new ProductRepository();
            repo.AddProduct(newProduct);
        }

        // PUT: api/products/5
        [HttpPut("{id}")]
        public void Update(UpdateProductCommand updatedProductCommand, int id)

        {
            var repo = new ProductRepository();
            var updatedProduct = new Product
            {
                Name = updatedProductCommand.Name,
                Price = updatedProductCommand.Price,
                Store = updatedProductCommand.Store,
                ImageUrl = updatedProductCommand.ImageUrl,
                CategoryId = updatedProductCommand.CategoryId
            };
            repo.UpdateProduct(updatedProduct, id);

        }

        // DELETE: api/product/5
        [HttpDelete("{id}")]
        public void Delete(UpdateProductCommand updatedProductCommand, int id)
        {
            var repo = new ProductRepository();
            var deletedProduct = new Product
            {
                Name = updatedProductCommand.Name,
                Price = updatedProductCommand.Price,
                Store = updatedProductCommand.Store,
                ImageUrl = updatedProductCommand.ImageUrl,
                CategoryId = updatedProductCommand.CategoryId
            };
            repo.DeleteProduct(deletedProduct, id);
        }
    }
}