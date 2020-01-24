using BeautifulMess.Commands;
using BeautifulMess.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BeautifulMess.DataAccess
{
    public class ProductRepository
    {
        string _connectionString = "Server=localhost;Database=BeautifulMess;Trusted_Connection=True;";

        public List<ProductReview> GetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var products = connection.Query<ProductReview>("Select * from Product");

                return products.AsList();
            }

        }

        public ProductReview GetProduct(int productId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from Product
                            where Id =@ProductId";
                var parameters = new
                {
                    ProductId = productId
                };
                var product = db.QueryFirst<ProductReview>(sql, parameters);
                return product;
            }
        }

        public ProductReview AddProduct(AddProductCommand newProduct)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"INSERT INTO [dbo].[Product]
	                                ([Name]
	                                ,[ Price]
                                    ,[Store]
                                    ,[ImageUrl]
                                    ,[TypeId] )
                                 output inserted.*
                                 VALUES
	                                (@Name
                                    ,@Price
                                    ,@Store
                                    ,@ImageUrl
                                    ,@TypeId)";


                return connection.QueryFirst<ProductReview>(sql, newProduct);
            }
        }
        public bool DeleteProduct(ProductReview productToDelete, int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"delete
                            from [dbo].[Product]
	                   WHERE [Id] = @ProductIdToDelete";

                productToDelete.Id = id;

                return connection.Execute(sql, productToDelete) == 1;
            }

        }

        public bool UpdateProduct(ProductReview ProductToUpdate, int id )
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"UPDATE [dbo].[Product]
	                            SET [Name] = @name,
                                    [Price] = @price,
                                    [Store] = @store,
                                    [ImageUrl] = @imageurl,
                                    [TypeId] = @typeid 
	                        WHERE [Id] = @id";

                ProductToUpdate.Id = id;

                return connection.Execute(sql, ProductToUpdate) == 1;
            }
        }
    }
}
    
