﻿using BeautifulMess.Commands;
using BeautifulMess.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.DataAccess
{
    public class ProductReviewRepository
    {
        readonly string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

        public List<ProductReview> GetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var productsreview = connection.Query<ProductReview>("Select * from ProductReview");

                return productsreview.AsList();
            }

        }

        public IEnumerable<ProductReview> GetAllReviewsForProduct(int productId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from ProductReview
                            where ProductId = @productId";
                var parameters = new
                {
                    ProductId = productId
                };
                var productreview = db.Query<ProductReview>(sql, parameters);
                return productreview;
            }
        }

        public ProductReview GetProductReview(int productreviewId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from ProductReview
                            where Id =@ProductReviewId";
                var parameters = new
                {
                    ProductReviewId = productreviewId
                };
                var productreview = db.QueryFirst<ProductReview>(sql, parameters);
                return productreview;
            }
        }

        public ProductReview AddProductReview(AddProductReviewCommand newProductReview)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"INSERT INTO [dbo].[ProductReview]
	                                ([Comment]
	                                ,[Rating]
                                    ,[ProductId]
                                    ,[UserName])
                                    
                                 output inserted.*
                                 VALUES
	                                (@Comment
                                    ,@Rating
                                    ,@ProductId
                                    ,@UserName)";


                return connection.QueryFirst<ProductReview>(sql, newProductReview);
            }
        }
        public bool DeleteProductReview(ProductReview productreviewToDelete, int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"delete
                            from [dbo].[ProductReview]
	                   WHERE [Id] = @Id";

                productreviewToDelete.Id = id;

                return connection.Execute(sql, productreviewToDelete) == 1;
            }

        }

        public bool UpdateProductReview(ProductReview ProductReviewToUpdate, int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"UPDATE [dbo].[ProductReview]
	                            SET [Comment] = @comment,
                                    [Rating] = @rating
                                WHERE [Id] = @id";

                ProductReviewToUpdate.Id = id;

                return connection.Execute(sql, ProductReviewToUpdate) == 1;
            }
        }
    }
}

