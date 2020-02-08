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
    [Route("api/productreview")]
    [ApiController]
    public class ProductReviewController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<ProductReview> GetProductsReview()
        {
            var repo = new ProductReviewRepository();
            return repo.GetAll();
        }


        [HttpGet("{productreviewId}")]
        public ProductReview GetProductReview(int productreviewId)
        {
            var repo = new ProductReviewRepository();
            var productreview = repo.GetProductReview(productreviewId);
            return productreview;
        }
        
        
        [HttpGet("allReviews/{productId}")]
        public IEnumerable<ProductReview> GetAllReviewsForProduct(int productId)
        {
            var repo = new ProductReviewRepository();
            var productreview = repo.GetAllReviewsForProduct(productId);
            return productreview;
        }


        // POST: api/productsreview/
        [HttpPost]
        public void Create(AddProductReviewCommand newProductReview)
        {
            var repo = new ProductReviewRepository();
            repo.AddProductReview(newProductReview);
        }

        // PUT: api/productsReview/5
        [HttpPut("{id}")]
        public void Update(UpdateProductReviewCommand updatedProductReviewCommand, int id)

        {
            var repo = new ProductReviewRepository();
            var updatedProductReview = new ProductReview
            {
                Comment = updatedProductReviewCommand.Comment,
                Rating = updatedProductReviewCommand.Rating,
               
            };
            repo.UpdateProductReview(updatedProductReview, id);

        }

        // DELETE: api/productReview/5
        [HttpDelete("{id}")]
        public void Delete(UpdateProductReviewCommand updatedProductReviewCommand, int id)
        {
            var repo = new ProductReviewRepository();
            var deletedProductReview = new ProductReview
            {
                Comment = updatedProductReviewCommand.Comment,
                Rating = updatedProductReviewCommand.Rating,
               
            };
            repo.DeleteProductReview(deletedProductReview, id);
        }
    }
}